import { useRef, useEffect, useState } from 'react'

export default function ParticleConstellation() {
  const canvasRef = useRef(null)
  const sceneRef = useRef(null)
  const [supported, setSupported] = useState(true)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // WebGL detection
    const gl =
      canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (!gl) {
      setSupported(false)
      return
    }

    // StrictMode-safe destroyed flag
    let destroyed = false

    // Dynamic import for code-splitting — Three.js loads async
    import('../../lib/constellationScene.js').then(
      ({ createConstellationScene }) => {
        if (destroyed) return

        const isMobile = window.innerWidth < 768
        sceneRef.current = createConstellationScene(canvas, {
          particleCount: isMobile ? 45 : 90,
          connectionDistance: isMobile ? 90 : 120,
        })
      }
    )

    // ── Resize (debounced) ─────────────────────────────────
    let resizeTimer = null
    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        sceneRef.current?.resize(window.innerWidth, window.innerHeight)
      }, 200)
    }
    window.addEventListener('resize', onResize)

    // ── Mouse ──────────────────────────────────────────────
    const onMouseMove = (e) => {
      sceneRef.current?.setMouse(e.clientX, e.clientY, true)
    }
    const onMouseLeave = () => {
      sceneRef.current?.setMouse(0, 0, false)
    }

    // ── Touch ──────────────────────────────────────────────
    const onTouchMove = (e) => {
      const t = e.touches[0]
      if (t) sceneRef.current?.setMouse(t.clientX, t.clientY, true)
    }
    const onTouchEnd = () => {
      sceneRef.current?.setMouse(0, 0, false)
    }

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
  }, [])

  if (!supported) return null

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  )
}
