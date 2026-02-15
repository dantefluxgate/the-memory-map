import { useRef, useEffect, useState, forwardRef, useImperativeHandle } from 'react'
import { createConstellationScene } from '../../lib/constellationScene.js'

// Check WebGL support without tainting the render canvas
function detectWebGL() {
  try {
    const c = document.createElement('canvas')
    return !!(c.getContext('webgl') || c.getContext('experimental-webgl'))
  } catch { return false }
}

/**
 * Reusable particle field component used across all views.
 *
 * Props:
 *   mode        — 'heart' | 'drift' | 'ambient'
 *                  heart: full heart formation cycle (landing page)
 *                  drift: free-floating particles, no heart (create view)
 *                  ambient: minimal sparse particles (background texture)
 *   intensity   — 0.0 to 1.0, controls particle count, alpha, connection density
 *   color       — hex number, e.g. 0xD4A574
 *   className   — additional classes on the wrapper
 *   fixed       — if true, uses fixed positioning (for page-level backgrounds)
 *
 * Ref methods (via forwardRef):
 *   burst()          — trigger a one-shot particle brightness/velocity flare
 *   setHeartMode(m)  — switch between 'heart' / 'drift' / 'none' at runtime
 */
const ParticleField = forwardRef(function ParticleField({
  mode = 'heart',
  intensity = 0.6,
  color = 0xd4a574,
  className = '',
  fixed = false,
}, ref) {
  const canvasRef = useRef(null)
  const sceneRef = useRef(null)
  const [supported] = useState(() => detectWebGL())

  // Expose imperative methods to parent via ref
  useImperativeHandle(ref, () => ({
    burst: () => sceneRef.current?.burst(),
    setHeartMode: (m) => sceneRef.current?.setHeartMode(m),
    setColor: (hex) => sceneRef.current?.setColor(hex),
  }))

  useEffect(() => {
    if (!supported) return
    const canvas = canvasRef.current
    if (!canvas) return

    let destroyed = false

    // Determine particle count based on intensity and viewport
    const isMobile = window.innerWidth < 768
    const baseCount = isMobile ? 35 : 70
    const particleCount = Math.round(baseCount * (0.4 + intensity * 0.8))
    const baseConnDist = isMobile ? 80 : 110
    const connectionDistance = Math.round(baseConnDist * (0.7 + intensity * 0.5))

    // Map mode to heart cycle config
    let heartMode = 'heart'
    if (mode === 'drift' || mode === 'ambient') heartMode = 'none'

    try {
      sceneRef.current = createConstellationScene(canvas, {
        particleCount,
        connectionDistance,
        color,
        heartMode,
        alphaMultiplier: mode === 'ambient' ? 0.4 : 0.6 + intensity * 0.4,
        connectionAlphaMultiplier: mode === 'ambient' ? 0.3 : 0.5 + intensity * 0.5,
      })
    } catch (err) {
      console.warn('ParticleField: scene creation failed', err)
    }

    // Resize handler (debounced)
    let resizeTimer = null
    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        sceneRef.current?.resize(window.innerWidth, window.innerHeight)
      }, 200)
    }
    window.addEventListener('resize', onResize)

    // Mouse / touch
    const onMouseMove = (e) => sceneRef.current?.setMouse(e.clientX, e.clientY, true)
    const onMouseLeave = () => sceneRef.current?.setMouse(0, 0, false)
    const onTouchMove = (e) => {
      const t = e.touches[0]
      if (t) sceneRef.current?.setMouse(t.clientX, t.clientY, true)
    }
    const onTouchEnd = () => sceneRef.current?.setMouse(0, 0, false)

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('touchend', onTouchEnd)

    return () => {
      destroyed = true
      clearTimeout(resizeTimer)
      sceneRef.current?.destroy()
      sceneRef.current = null
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [supported, mode, intensity, color])

  if (!supported) return null

  const posClass = fixed ? 'fixed' : 'absolute'

  return (
    <canvas
      ref={canvasRef}
      className={`${posClass} inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  )
})

export default ParticleField
