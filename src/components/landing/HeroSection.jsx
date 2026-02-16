import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../common/Button.jsx'
import ParticleField from '../common/ParticleField.jsx'

/**
 * Cinematic hero with word-by-word stagger reveal,
 * warm light sweep shimmer, and layered atmospheric glows.
 */
export default function HeroSection() {
  const navigate = useNavigate()
  const [phase, setPhase] = useState(0)

  // Cinematic entrance sequence
  useEffect(() => {
    const t0 = setTimeout(() => setPhase(1), 200)   // eyebrow fades in
    const t1 = setTimeout(() => setPhase(2), 600)   // headline words stagger
    const t2 = setTimeout(() => setPhase(3), 1800)  // subtitle appears
    const t3 = setTimeout(() => setPhase(4), 2400)  // CTA appears
    const t4 = setTimeout(() => setPhase(5), 3000)  // scroll hint
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4) }
  }, [])

  // Split headline into words for stagger animation
  const headlineWords = 'Your love story, mapped in memories.'.split(' ')

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Three.js constellation — heart formation cycle */}
      <ParticleField mode="heart" intensity={0.9} />

      {/* Multi-layer ambient glow — cinematic depth */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none animate-glow-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(212,165,116,0.14) 0%, rgba(212,165,116,0.04) 40%, transparent 65%)',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none animate-glow-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(232,201,160,0.10) 0%, transparent 70%)',
          animationDelay: '2s',
        }}
      />
      {/* Third glow layer — warm rose tint for depth */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(200,150,150,0.04) 0%, transparent 50%)',
          opacity: phase >= 2 ? 1 : 0,
          transition: 'opacity 3s ease-out',
        }}
      />

      {/* Warm top vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(212,165,116,0.06) 0%, transparent 50%)',
        }}
      />

      {/* Sparkle overlay */}
      <div className="sparkle-field absolute inset-0 pointer-events-none" />

      <div
        className="relative z-10"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          width: '100%',
          maxWidth: '680px',
        }}
      >
        {/* Decorative heart above eyebrow */}
        <div
          style={{
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? 'scale(1)' : 'scale(0.5)',
            transition: 'all 1s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-accent-primary/40 heart-glow animate-heart-beat"
            style={{ marginBottom: '16px' }}
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </div>

        {/* Eyebrow */}
        <p
          className="font-body text-[11px] uppercase tracking-[0.2em] text-accent-primary/70 mb-6"
          style={{
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? 'translateY(0)' : 'translateY(12px)',
            filter: phase >= 1 ? 'blur(0)' : 'blur(4px)',
            transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          The Memory Map
        </p>

        {/* Headline — word-by-word stagger reveal with blur-unblur */}
        <h1
          className="font-display text-[clamp(36px,6vw,60px)] leading-[1.08] font-medium tracking-[-0.02em] text-text-primary hero-headline-shimmer"
          style={{ textAlign: 'center', width: '100%' }}
        >
          {headlineWords.map((word, i) => (
            <span
              key={i}
              className="inline-block"
              style={{
                opacity: phase >= 2 ? 1 : 0,
                transform: phase >= 2 ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                filter: phase >= 2 ? 'blur(0)' : 'blur(8px)',
                transition: `all 0.9s cubic-bezier(0.22, 1, 0.36, 1)`,
                transitionDelay: `${i * 0.08}s`,
                marginRight: '0.25em',
              }}
            >
              {word}
            </span>
          ))}
        </h1>

        {/* Decorative line under headline */}
        <div
          className="mt-5 mb-1"
          style={{
            width: '60px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(224,176,128,0.35), transparent)',
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? 'scaleX(1)' : 'scaleX(0)',
            transition: 'all 1s cubic-bezier(0.22, 1, 0.36, 1)',
            transformOrigin: 'center',
          }}
        />

        {/* Subtitle */}
        <p
          className="font-body font-normal text-[clamp(16px,2.5vw,20px)] text-text-secondary mt-5 leading-relaxed"
          style={{
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? 'translateY(0)' : 'translateY(16px)',
            filter: phase >= 3 ? 'blur(0)' : 'blur(4px)',
            transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
            maxWidth: '480px',
            textAlign: 'center',
          }}
        >
          Share the moments that matter most. We'll map them into a Valentine's gift worth keeping.
        </p>

        {/* CTA Button */}
        <div
          className="mt-12"
          style={{
            opacity: phase >= 4 ? 1 : 0,
            transform: phase >= 4 ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.95)',
            transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          <Button onClick={() => navigate('/create')} className="glow-button">
            Start Your Memory Map
          </Button>
        </div>

        {/* Subtle supporting line */}
        <p
          className="font-body text-[11px] text-text-tertiary/50 mt-4"
          style={{
            opacity: phase >= 4 ? 1 : 0,
            transition: 'opacity 1s ease-out',
            transitionDelay: '0.3s',
          }}
        >
          Free. No account needed. Ready in minutes.
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{
          opacity: phase >= 5 ? 1 : 0,
          transition: 'opacity 1s ease-out',
        }}
      >
        <div className="animate-gentle-bounce">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-accent-primary/40"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </section>
  )
}
