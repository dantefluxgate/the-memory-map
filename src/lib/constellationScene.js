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

// ─── Spatial Grid ────────────────────────────────────────────

function buildGrid(particles, cellSize, width, height) {
  const halfW = width / 2
  const halfH = height / 2
  const cols = Math.ceil(width / cellSize) + 1
  const rows = Math.ceil(height / cellSize) + 1
  const cells = new Map()

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i]
    const col = Math.floor((p.x + halfW) / cellSize)
    const row = Math.floor((p.y + halfH) / cellSize)
    const key = col * 10000 + row
    if (!cells.has(key)) cells.set(key, [])
    cells.get(key).push(i)
  }

  return { cells, cols, rows }
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
  const CONNECTION_ALPHA_CAP = 0.12

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

  const particles = []
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: (Math.random() - 0.5) * width,
      y: (Math.random() - 0.5) * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      baseAlpha: 0.15 + Math.random() * 0.35,
      size: (1.5 + Math.random() * 2.0) * Math.min(window.devicePixelRatio, 2),
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

  function animate(time) {
    rafId = requestAnimationFrame(animate)

    const elapsed = time * 0.001

    // Update particle positions
    for (let i = 0; i < particleCount; i++) {
      const p = particles[i]

      p.x += p.vx
      p.y += p.vy

      // Edge wrap with padding
      if (p.x > halfW + 30) p.x = -halfW - 30
      if (p.x < -halfW - 30) p.x = halfW + 30
      if (p.y > halfH + 30) p.y = -halfH - 30
      if (p.y < -halfH - 30) p.y = halfH + 30

      // Mouse repulsion
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
      const breathe = Math.sin(elapsed * 0.5 + p.phase) * 0.08

      // Write buffers
      positions[i * 3] = p.x
      positions[i * 3 + 1] = p.y
      alphas[i] = Math.max(0.05, p.baseAlpha + breathe)
    }

    // Build spatial grid and compute connections
    const grid = buildGrid(particles, connectionDistance, width, height)
    let connIdx = 0
    const checked = new Set()

    for (let i = 0; i < particleCount && connIdx < MAX_CONNECTIONS; i++) {
      const p = particles[i]
      const col = Math.floor((p.x + halfW) / connectionDistance)
      const row = Math.floor((p.y + halfH) / connectionDistance)
      const neighbors = getNeighborIndices(grid, col, row)

      for (let n = 0; n < neighbors.length && connIdx < MAX_CONNECTIONS; n++) {
        const j = neighbors[n]
        if (j <= i) continue

        // Deduplicate
        const pairKey = i * particleCount + j
        if (checked.has(pairKey)) continue
        checked.add(pairKey)

        const q = particles[j]
        const dx = p.x - q.x
        const dy = p.y - q.y
        const distSq = dx * dx + dy * dy

        if (distSq < connDistSq) {
          const dist = Math.sqrt(distSq)
          const alpha = (1 - dist / connectionDistance) * CONNECTION_ALPHA_CAP

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
    // Render a single static frame
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = particles[i].x
      positions[i * 3 + 1] = particles[i].y
      positions[i * 3 + 2] = 0
      alphas[i] = particles[i].baseAlpha
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
      // Convert viewport coords to scene coords (ortho camera centered at origin)
      mouse.x = clientX - halfW
      mouse.y = -(clientY - halfH)
      mouse.active = active
    },
  }
}
