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
  const x = 16 * Math.pow(Math.sin(t), 3)
  const y = 13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t)
  return { x: x * scale, y: y * scale }
}

function generateHeartTargets(count, scale) {
  const targets = []
  for (let i = 0; i < count; i++) {
    const t = (i / count) * Math.PI * 2
    const jx = (Math.random() - 0.5) * scale * 0.6
    const jy = (Math.random() - 0.5) * scale * 0.6
    const pt = heartPoint(t, scale)
    targets.push({ x: pt.x + jx, y: pt.y + jy })
  }
  return targets
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3) / 2
}

// ─── Spatial Grid ────────────────────────────────────────────

function buildGrid(particles, cellSize, halfW) {
  const cells = new Map()
  for (let i = 0; i < particles.length; i++) {
    const p = particles[i]
    const key = Math.floor((p.x + halfW) / cellSize) * 10000 + Math.floor((p.y + halfW) / cellSize)
    if (!cells.has(key)) cells.set(key, [])
    cells.get(key).push(i)
  }
  return cells
}

function getNeighbors(cells, col, row) {
  const out = []
  for (let dc = -1; dc <= 1; dc++)
    for (let dr = -1; dr <= 1; dr++) {
      const c = cells.get((col+dc)*10000 + (row+dr))
      if (c) for (let i = 0; i < c.length; i++) out.push(c[i])
    }
  return out
}

// ─── Scene Factory ───────────────────────────────────────────

export function createConstellationScene(canvas, options = {}) {
  const {
    particleCount = 90,
    connectionDistance = 120,
    color = 0xd4a574,
    heartMode = 'heart',
    alphaMultiplier = 1.0,
    connectionAlphaMultiplier = 1.0,
  } = options

  let width = window.innerWidth
  let height = window.innerHeight
  let halfW = width / 2
  let halfH = height / 2
  let rafId = null

  const MR = 130, MR_SQ = MR * MR
  const MAX_CONN = 250
  const BASE_CONN_ALPHA = 0.20

  const D_DUR = 10, G_DUR = 3, H_DUR = 4, S_DUR = 2.5
  const CYCLE = D_DUR + G_DUR + H_DUR + S_DUR

  let doHeart = heartMode === 'heart'
  const mouse = { x: 0, y: 0, active: false }
  const burstState = { active: false, startTime: 0, duration: 1.5 }
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: 'low-power' })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(width, height)

  const camera = new THREE.OrthographicCamera(-halfW, halfW, halfH, -halfH, 0.1, 100)
  camera.position.z = 10
  const scene = new THREE.Scene()
  const col3 = new THREE.Color(color)

  const hScale = Math.min(width, height) * 0.028
  let hTargets = doHeart ? generateHeartTargets(particleCount, hScale) : null

  const particles = []
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: (Math.random()-0.5)*width, y: (Math.random()-0.5)*height,
      homeX: (Math.random()-0.5)*width, homeY: (Math.random()-0.5)*height,
      heartX: hTargets ? hTargets[i].x : 0, heartY: hTargets ? hTargets[i].y : 0,
      snapX: 0, snapY: 0,
      vx: (Math.random()-0.5)*0.3, vy: (Math.random()-0.5)*0.3,
      baseAlpha: (0.20 + Math.random()*0.40) * alphaMultiplier,
      size: (2.0 + Math.random()*2.5) * Math.min(window.devicePixelRatio, 2),
      phase: Math.random() * Math.PI * 2,
    })
  }

  const pos = new Float32Array(particleCount * 3)
  const alp = new Float32Array(particleCount)
  const siz = new Float32Array(particleCount)
  for (let i = 0; i < particleCount; i++) {
    pos[i*3] = particles[i].x; pos[i*3+1] = particles[i].y; pos[i*3+2] = 0
    alp[i] = particles[i].baseAlpha; siz[i] = particles[i].size
  }

  const pGeo = new THREE.BufferGeometry()
  pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
  pGeo.setAttribute('alpha', new THREE.BufferAttribute(alp, 1))
  pGeo.setAttribute('aSize', new THREE.BufferAttribute(siz, 1))
  const pMat = new THREE.ShaderMaterial({ uniforms: { uColor: { value: col3 } }, vertexShader: POINT_VERTEX, fragmentShader: POINT_FRAGMENT, transparent: true, depthWrite: false })
  scene.add(new THREE.Points(pGeo, pMat))

  const lPos = new Float32Array(MAX_CONN * 6)
  const lAlp = new Float32Array(MAX_CONN * 2)
  const lGeo = new THREE.BufferGeometry()
  lGeo.setAttribute('position', new THREE.BufferAttribute(lPos, 3))
  lGeo.setAttribute('alpha', new THREE.BufferAttribute(lAlp, 1))
  lGeo.setDrawRange(0, 0)
  const lMat = new THREE.ShaderMaterial({ uniforms: { uColor: { value: col3 } }, vertexShader: LINE_VERTEX, fragmentShader: LINE_FRAGMENT, transparent: true, depthWrite: false })
  scene.add(new THREE.LineSegments(lGeo, lMat))

  const cdSq = connectionDistance * connectionDistance
  let prevPhase = 'drift'

  function animate(time) {
    rafId = requestAnimationFrame(animate)
    const el = time * 0.001
    let phase = 'drift', pp = 0

    if (doHeart) {
      const ct = el % CYCLE
      if (ct < D_DUR) { phase = 'drift'; pp = ct / D_DUR }
      else if (ct < D_DUR+G_DUR) { phase = 'gather'; pp = (ct-D_DUR)/G_DUR }
      else if (ct < D_DUR+G_DUR+H_DUR) { phase = 'hold'; pp = (ct-D_DUR-G_DUR)/H_DUR }
      else { phase = 'scatter'; pp = (ct-D_DUR-G_DUR-H_DUR)/S_DUR }
    }

    if (phase !== prevPhase) {
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i]
        p.snapX = p.x; p.snapY = p.y
        if (phase === 'scatter') { p.homeX = (Math.random()-0.5)*width; p.homeY = (Math.random()-0.5)*height }
      }
      prevPhase = phase
    }

    const eased = easeInOutCubic(Math.min(pp, 1))

    for (let i = 0; i < particleCount; i++) {
      const p = particles[i]
      if (phase === 'drift') {
        p.x += p.vx; p.y += p.vy
        if (p.x > halfW+30) p.x = -halfW-30; if (p.x < -halfW-30) p.x = halfW+30
        if (p.y > halfH+30) p.y = -halfH-30; if (p.y < -halfH-30) p.y = halfH+30
      } else if (phase === 'gather') {
        p.x = p.snapX + (p.heartX-p.snapX)*eased; p.y = p.snapY + (p.heartY-p.snapY)*eased
      } else if (phase === 'hold') {
        const bs = 1 + Math.sin(el*2)*0.03
        p.x = p.heartX*bs; p.y = p.heartY*bs
      } else if (phase === 'scatter') {
        p.x = p.snapX + (p.homeX-p.snapX)*eased; p.y = p.snapY + (p.homeY-p.snapY)*eased
      }

      if (mouse.active) {
        const dx = p.x-mouse.x, dy = p.y-mouse.y, dSq = dx*dx+dy*dy
        if (dSq < MR_SQ && dSq > 1) { const d = Math.sqrt(dSq), f = (1-d/MR)*0.9; p.x += dx/d*f; p.y += dy/d*f }
      }

      const breathe = Math.sin(el*0.5 + p.phase) * 0.12
      let boost = 0
      if (phase === 'gather') boost = eased * 0.15
      if (phase === 'hold') boost = 0.15
      if (phase === 'scatter') boost = (1-eased) * 0.15

      // Burst boost: sharp rise, slow fall over 1.5s
      let burstBoost = 0
      if (burstState.active) {
        const burstElapsed = el - burstState.startTime
        if (burstElapsed > burstState.duration) {
          burstState.active = false
        } else {
          const bp = burstElapsed / burstState.duration
          burstBoost = (1 - bp) * 0.5 * Math.sin(bp * Math.PI)
        }
      }

      pos[i*3] = p.x; pos[i*3+1] = p.y
      alp[i] = Math.max(0.05, p.baseAlpha + breathe + boost + burstBoost)
    }

    let acd = connectionDistance, acdSq = cdSq
    let acap = BASE_CONN_ALPHA * connectionAlphaMultiplier
    if (phase === 'gather') { acd += eased*60; acdSq = acd*acd; acap += eased*0.10 }
    else if (phase === 'hold') { acd += 60; acdSq = acd*acd; acap += 0.10 }
    else if (phase === 'scatter') { acd += (1-eased)*60; acdSq = acd*acd; acap += (1-eased)*0.10 }
    // Burst widens connections temporarily
    if (burstState.active) {
      const bp = (el - burstState.startTime) / burstState.duration
      const burstMult = (1 - bp) * Math.sin(bp * Math.PI)
      acd += burstMult * 80; acdSq = acd * acd; acap += burstMult * 0.20
    }

    const cells = buildGrid(particles, acd, halfW)
    let ci = 0
    const chk = new Set()
    for (let i = 0; i < particleCount && ci < MAX_CONN; i++) {
      const p = particles[i]
      const col = Math.floor((p.x+halfW)/acd), row = Math.floor((p.y+halfW)/acd)
      const nb = getNeighbors(cells, col, row)
      for (let n = 0; n < nb.length && ci < MAX_CONN; n++) {
        const j = nb[n]; if (j <= i) continue
        const pk = i*particleCount+j; if (chk.has(pk)) continue; chk.add(pk)
        const q = particles[j], dx = p.x-q.x, dy = p.y-q.y, dSq = dx*dx+dy*dy
        if (dSq < acdSq) {
          const d = Math.sqrt(dSq), a = (1-d/acd)*acap, b = ci*6
          lPos[b]=p.x; lPos[b+1]=p.y; lPos[b+2]=0; lPos[b+3]=q.x; lPos[b+4]=q.y; lPos[b+5]=0
          lAlp[ci*2]=a; lAlp[ci*2+1]=a; ci++
        }
      }
    }

    lGeo.setDrawRange(0, ci*2)
    pGeo.attributes.position.needsUpdate = true; pGeo.attributes.alpha.needsUpdate = true
    lGeo.attributes.position.needsUpdate = true; lGeo.attributes.alpha.needsUpdate = true
    renderer.render(scene, camera)
  }

  if (reducedMotion) {
    if (hTargets) for (let i = 0; i < particleCount; i++) { pos[i*3]=hTargets[i].x; pos[i*3+1]=hTargets[i].y; alp[i]=particles[i].baseAlpha+0.15 }
    pGeo.attributes.position.needsUpdate = true; pGeo.attributes.alpha.needsUpdate = true
    renderer.render(scene, camera)
  } else {
    rafId = requestAnimationFrame(animate)
  }

  return {
    destroy() { if (rafId!==null) cancelAnimationFrame(rafId); pGeo.dispose(); pMat.dispose(); lGeo.dispose(); lMat.dispose(); renderer.dispose() },
    resize(w,h) { width=w; height=h; halfW=w/2; halfH=h/2; renderer.setSize(w,h); camera.left=-halfW; camera.right=halfW; camera.top=halfH; camera.bottom=-halfH; camera.updateProjectionMatrix() },
    setMouse(cx,cy,a) { mouse.x=cx-halfW; mouse.y=-(cy-halfH); mouse.active=a },
    burst() {
      burstState.active = true
      burstState.startTime = performance.now() * 0.001
      // Outward velocity push from center
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i]
        const dx = p.x, dy = p.y
        const dist = Math.sqrt(dx*dx + dy*dy) || 1
        p.vx += (dx / dist) * 1.2
        p.vy += (dy / dist) * 1.2
      }
    },
    setHeartMode(newMode) {
      doHeart = newMode === 'heart'
      if (doHeart && !hTargets) {
        // Generate heart targets on first switch to heart mode
        hTargets = generateHeartTargets(particleCount, hScale)
        for (let i = 0; i < particleCount; i++) {
          particles[i].heartX = hTargets[i].x
          particles[i].heartY = hTargets[i].y
        }
      }
    },
  }
}
