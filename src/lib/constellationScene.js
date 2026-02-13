import * as THREE from 'three'

// ─── Shaders ─────────────────────────────────────────────────

const POINT_VERTEX = `
  attribute float alpha;
  attribute float aSize;
  varying float vAlpha;

  void main() {
    vAlpha = alpha;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aSize;
    gl_Position = projectionMatrix * mvPosition;
  }
`

const POINT_FRAGMENT = `
  varying float vAlpha;
  uniform vec3 uColor;

  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;
    float softEdge = 1.0 - smoothstep(0.25, 0.5, dist);
    gl_FragColor = vec4(uColor, vAlpha * softEdge);
  }
`

const LINE_VERTEX = `
  attribute float alpha;
  varying float vAlpha;

  void main() {
    vAlpha = alpha;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const LINE_FRAGMENT = `
  varying float vAlpha;
  uniform vec3 uColor;

  void main() {
    gl_FragColor = vec4(uColor, vAlpha);
  }
`

// ─── Heart Curve ─────────────────────────────────────────────

function heartPoint(t, scale) {
  // Parametric heart curve (t from 0 to 2π)
  const x = 16 * Math.pow(Math.sin(t), 3)
  const y =
    13 * Math.cos(t) -
    5 * Math.cos(2 * t) -
    2 * Math.cos(3 * t) -
    Math.cos(4 * t)
  return { x: x * scale, y: y * scale }
}

function generateHeartTargets(count, scale) {
  const targets = []
  for (let i = 0; i < count; i++) {
    const t = (i / count) * Math.PI * 2
    // Add slight jitter so it doesn't look perfectly mechanical
    const jitter = (Math.random() - 0.5) * scale * 0.6
    const jitterY = (Math.random() - 0.5) * scale * 0.6
    const pt = heartPoint(t, scale)
    targets.push({ x: pt.x + jitter, y: pt.y + jitterY })
  }
  return targets
}

// ─── Smooth easing ───────────────────────────────────────────

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

// ─── Spatial Grid ────────────────────────────────────────────

function buildGrid(particles, cellSize, width, height) {
  const halfW = width / 2
  const cells = new Map()

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i]
    const col = Math.floor((p.x + halfW) / cellSize)
    const row = Math.floor((p.y + halfW) / cellSize)
    const key = col * 10000 + row
    if (!cells.has(key)) cells.set(key, [])
    cells.get(key).push(i)
  }

  return { cells }
}

function getNeighborIndices(grid, col, row) {
  const indices = []
  for (let dc = -1; dc <= 1; dc++) {
    for (let dr = -1; dr <= 1; dr++) {
      const key = (col + dc) * 10000 + (row + dr)
      const cell = grid.cells.get(key)
      if (cell) {
        for (let i = 0; i < cell.length; i++) {
          indices.push(cell[i])
        }
      }
    }
  }
  return indices
}

// ─── Scene Factory ───────────────────────────────────────────

export function createConstellationScene(canvas, options = {}) {
  const {
    particleCount = 90,
    connectionDistance = 120,
    color = 0xd4a574,
  } = options

  let width = window.innerWidth
  let height = window.innerHeight
  let halfW = width / 2
  let halfH = height / 2
  let rafId = null

  const MOUSE_RADIUS = 130
  const MOUSE_RADIUS_SQ = MOUSE_RADIUS * MOUSE_RADIUS
  const MAX_CONNECTIONS = 250
  const CONNECTION_ALPHA_CAP = 0.20

  // ── Heart formation cycle timing (seconds) ─────────────────
  // drift → gather → hold → scatter → drift ...
  const DRIFT_DURATION = 10     // seconds drifting freely
  const GATHER_DURATION = 3     // seconds to form heart
  const HOLD_DURATION = 4       // seconds holding heart shape
  const SCATTER_DURATION = 2.5  // seconds dissolving back
  const CYCLE_TOTAL = DRIFT_DURATION + GATHER_DURATION + HOLD_DURATION + SCATTER_DURATION

  const mouse = { x: 0, y: 0, active: false }

  // ── Reduced motion check ───────────────────────────────────
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches

  // ── Renderer ───────────────────────────────────────────────
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: false,
    powerPreference: 'low-power',
  })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(width, height)

  // ── Camera (orthographic — flat ambient field) ─────────────
  const camera = new THREE.OrthographicCamera(
    -halfW, halfW, halfH, -halfH, 0.1, 100
  )
  camera.position.z = 10

  const scene = new THREE.Scene()

  // ── Particles ──────────────────────────────────────────────
  const threeColor = new THREE.Color(color)

  // Heart scale relative to viewport (smaller dimension)
  // The parametric heart spans roughly -16..+16 in x and -17..+13 in y
  // So scale * 16 ≈ half-width of heart. We want heart ~40% of viewport width.
  const heartScale = Math.min(width, height) * 0.028

  // Generate heart target positions for each particle
  const heartTargets = generateHeartTargets(particleCount, heartScale)

  const particles = []
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: (Math.random() - 0.5) * width,
      y: (Math.random() - 0.5) * height,
      // Store the random "home" position for scattering back to
      homeX: (Math.random() - 0.5) * width,
      homeY: (Math.random() - 0.5) * height,
      // Heart target
      heartX: heartTargets[i].x,
      heartY: heartTargets[i].y,
      // Snapshot positions for lerping
      snapX: 0,
      snapY: 0,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      baseAlpha: 0.25 + Math.random() * 0.45,
      size: (2.0 + Math.random() * 2.5) * Math.min(window.devicePixelRatio, 2),
      phase: Math.random() * Math.PI * 2,
    })
  }

  const positions = new Float32Array(particleCount * 3)
  const alphas = new Float32Array(particleCount)
  const sizes = new Float32Array(particleCount)

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = particles[i].x
    positions[i * 3 + 1] = particles[i].y
    positions[i * 3 + 2] = 0
    alphas[i] = particles[i].baseAlpha
    sizes[i] = particles[i].size
  }

  const pointGeo = new THREE.BufferGeometry()
  pointGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  pointGeo.setAttribute('alpha', new THREE.BufferAttribute(alphas, 1))
  pointGeo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1))

  const pointMat = new THREE.ShaderMaterial({
    uniforms: { uColor: { value: threeColor } },
    vertexShader: POINT_VERTEX,
    fragmentShader: POINT_FRAGMENT,
    transparent: true,
    depthWrite: false,
  })

  const points = new THREE.Points(pointGeo, pointMat)
  scene.add(points)

  // ── Connection Lines ───────────────────────────────────────
  const linePositions = new Float32Array(MAX_CONNECTIONS * 6)
  const lineAlphas = new Float32Array(MAX_CONNECTIONS * 2)

  const lineGeo = new THREE.BufferGeometry()
  lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
  lineGeo.setAttribute('alpha', new THREE.BufferAttribute(lineAlphas, 1))
  lineGeo.setDrawRange(0, 0)

  const lineMat = new THREE.ShaderMaterial({
    uniforms: { uColor: { value: threeColor } },
    vertexShader: LINE_VERTEX,
    fragmentShader: LINE_FRAGMENT,
    transparent: true,
    depthWrite: false,
  })

  const lines = new THREE.LineSegments(lineGeo, lineMat)
  scene.add(lines)

  // ── Animation ──────────────────────────────────────────────
  const connDistSq = connectionDistance * connectionDistance
  let prevPhase = 'drift'

  function animate(time) {
    rafId = requestAnimationFrame(animate)

    const elapsed = time * 0.001

    // ── Determine cycle phase ────────────────────────────────
    const cycleTime = elapsed % CYCLE_TOTAL
    let phase, phaseProgress

    if (cycleTime < DRIFT_DURATION) {
      phase = 'drift'
      phaseProgress = cycleTime / DRIFT_DURATION
    } else if (cycleTime < DRIFT_DURATION + GATHER_DURATION) {
      phase = 'gather'
      phaseProgress = (cycleTime - DRIFT_DURATION) / GATHER_DURATION
    } else if (cycleTime < DRIFT_DURATION + GATHER_DURATION + HOLD_DURATION) {
      phase = 'hold'
      phaseProgress = (cycleTime - DRIFT_DURATION - GATHER_DURATION) / HOLD_DURATION
    } else {
      phase = 'scatter'
      phaseProgress = (cycleTime - DRIFT_DURATION - GATHER_DURATION - HOLD_DURATION) / SCATTER_DURATION
    }

    // On phase transition, snapshot current positions for smooth lerp
    if (phase !== prevPhase) {
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i]
        p.snapX = p.x
        p.snapY = p.y
        // When scattering, pick a new random home to drift toward
        if (phase === 'scatter') {
          p.homeX = (Math.random() - 0.5) * width
          p.homeY = (Math.random() - 0.5) * height
        }
      }
      prevPhase = phase
    }

    // ── Update particle positions per phase ──────────────────
    const eased = easeInOutCubic(Math.min(phaseProgress, 1))

    for (let i = 0; i < particleCount; i++) {
      const p = particles[i]

      if (phase === 'drift') {
        // Free drift
        p.x += p.vx
        p.y += p.vy

        // Edge wrap
        if (p.x > halfW + 30) p.x = -halfW - 30
        if (p.x < -halfW - 30) p.x = halfW + 30
        if (p.y > halfH + 30) p.y = -halfH - 30
        if (p.y < -halfH - 30) p.y = halfH + 30

      } else if (phase === 'gather') {
        // Lerp from snapshot to heart position
        p.x = p.snapX + (p.heartX - p.snapX) * eased
        p.y = p.snapY + (p.heartY - p.snapY) * eased

      } else if (phase === 'hold') {
        // Gentle breathing pulse on the heart shape
        const breatheScale = 1 + Math.sin(elapsed * 2) * 0.03
        p.x = p.heartX * breatheScale
        p.y = p.heartY * breatheScale

      } else if (phase === 'scatter') {
        // Lerp from snapshot (heart position) to new random home
        p.x = p.snapX + (p.homeX - p.snapX) * eased
        p.y = p.snapY + (p.homeY - p.snapY) * eased
      }

      // Mouse repulsion (active in all phases)
      if (mouse.active) {
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const distSq = dx * dx + dy * dy

        if (distSq < MOUSE_RADIUS_SQ && distSq > 1) {
          const dist = Math.sqrt(distSq)
          const force = (1 - dist / MOUSE_RADIUS) * 0.9
          p.x += (dx / dist) * force
          p.y += (dy / dist) * force
        }
      }

      // Breathing alpha oscillation
      const breathe = Math.sin(elapsed * 0.5 + p.phase) * 0.12

      // Boost alpha during heart formation for extra glow
      let alphaBoost = 0
      if (phase === 'gather') alphaBoost = eased * 0.15
      if (phase === 'hold') alphaBoost = 0.15
      if (phase === 'scatter') alphaBoost = (1 - eased) * 0.15

      // Write buffers
      positions[i * 3] = p.x
      positions[i * 3 + 1] = p.y
      alphas[i] = Math.max(0.05, p.baseAlpha + breathe + alphaBoost)
    }

    // ── Connection lines ─────────────────────────────────────
    // Boost connection distance during heart phase for denser mesh
    let activeConnDist = connectionDistance
    let activeConnDistSq = connDistSq
    let activeAlphaCap = CONNECTION_ALPHA_CAP

    if (phase === 'gather') {
      activeConnDist = connectionDistance + eased * 60
      activeConnDistSq = activeConnDist * activeConnDist
      activeAlphaCap = CONNECTION_ALPHA_CAP + eased * 0.10
    } else if (phase === 'hold') {
      activeConnDist = connectionDistance + 60
      activeConnDistSq = activeConnDist * activeConnDist
      activeAlphaCap = CONNECTION_ALPHA_CAP + 0.10
    } else if (phase === 'scatter') {
      activeConnDist = connectionDistance + (1 - eased) * 60
      activeConnDistSq = activeConnDist * activeConnDist
      activeAlphaCap = CONNECTION_ALPHA_CAP + (1 - eased) * 0.10
    }

    const grid = buildGrid(particles, activeConnDist, width, height)
    let connIdx = 0
    const checked = new Set()

    for (let i = 0; i < particleCount && connIdx < MAX_CONNECTIONS; i++) {
      const p = particles[i]
      const col = Math.floor((p.x + halfW) / activeConnDist)
      const row = Math.floor((p.y + halfW) / activeConnDist)
      const neighbors = getNeighborIndices(grid, col, row)

      for (let n = 0; n < neighbors.length && connIdx < MAX_CONNECTIONS; n++) {
        const j = neighbors[n]
        if (j <= i) continue

        const pairKey = i * particleCount + j
        if (checked.has(pairKey)) continue
        checked.add(pairKey)

        const q = particles[j]
        const dx = p.x - q.x
        const dy = p.y - q.y
        const distSq = dx * dx + dy * dy

        if (distSq < activeConnDistSq) {
          const dist = Math.sqrt(distSq)
          const alpha = (1 - dist / activeConnDist) * activeAlphaCap

          const base = connIdx * 6
          linePositions[base] = p.x
          linePositions[base + 1] = p.y
          linePositions[base + 2] = 0
          linePositions[base + 3] = q.x
          linePositions[base + 4] = q.y
          linePositions[base + 5] = 0

          const alphaBase = connIdx * 2
          lineAlphas[alphaBase] = alpha
          lineAlphas[alphaBase + 1] = alpha

          connIdx++
        }
      }
    }

    lineGeo.setDrawRange(0, connIdx * 2)

    // Flag buffers for GPU upload
    pointGeo.attributes.position.needsUpdate = true
    pointGeo.attributes.alpha.needsUpdate = true
    lineGeo.attributes.position.needsUpdate = true
    lineGeo.attributes.alpha.needsUpdate = true

    renderer.render(scene, camera)
  }

  // ── Start ──────────────────────────────────────────────────
  if (prefersReducedMotion) {
    // Render single static frame in heart formation
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = heartTargets[i].x
      positions[i * 3 + 1] = heartTargets[i].y
      positions[i * 3 + 2] = 0
      alphas[i] = particles[i].baseAlpha + 0.15
    }
    pointGeo.attributes.position.needsUpdate = true
    pointGeo.attributes.alpha.needsUpdate = true
    renderer.render(scene, camera)
  } else {
    rafId = requestAnimationFrame(animate)
  }

  // ── Controller ─────────────────────────────────────────────
  return {
    destroy() {
      if (rafId !== null) cancelAnimationFrame(rafId)
      pointGeo.dispose()
      pointMat.dispose()
      lineGeo.dispose()
      lineMat.dispose()
      renderer.dispose()
    },

    resize(newWidth, newHeight) {
      width = newWidth
      height = newHeight
      halfW = width / 2
      halfH = height / 2

      renderer.setSize(width, height)
      camera.left = -halfW
      camera.right = halfW
      camera.top = halfH
      camera.bottom = -halfH
      camera.updateProjectionMatrix()
    },

    setMouse(clientX, clientY, active) {
      mouse.x = clientX - halfW
      mouse.y = -(clientY - halfH)
      mouse.active = active
    },
  }
}
