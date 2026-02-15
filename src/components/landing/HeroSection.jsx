import { useNavigate } from 'react-router-dom'
import Button from '../common/Button.jsx'
import ParticleField from '../common/ParticleField.jsx'

export default function HeroSection() {
  const navigate = useNavigate()

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
        {/* Eyebrow */}
        <p
          className="font-body text-[11px] uppercase tracking-[0.2em] text-accent-primary/70 mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
        >
          The Memory Map
        </p>

        <h1
          className="font-display text-[clamp(36px,6vw,60px)] leading-[1.08] font-medium tracking-[-0.02em] text-text-primary opacity-0 animate-fade-up animate-text-glow"
          style={{ animationFillMode: 'forwards', animationDelay: '0.2s', textAlign: 'center', width: '100%' }}
        >
          Your love story, mapped in memories.
        </h1>

        <p
          className="font-body font-normal text-[clamp(16px,2.5vw,20px)] text-text-secondary mt-6 leading-relaxed opacity-0 animate-fade-up"
          style={{ animationDelay: '0.5s', animationFillMode: 'forwards', maxWidth: '480px', textAlign: 'center' }}
        >
          Share the moments that matter most. We'll map them into a Valentine's gift worth keeping.
        </p>

        <div
          className="mt-12 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
        >
          <Button onClick={() => navigate('/create')} className="glow-button">
            Start Your Memory Map
          </Button>
        </div>

        {/* Subtle supporting line */}
        <p
          className="font-body text-[11px] text-text-tertiary/50 mt-4 opacity-0 animate-fade-in"
          style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
        >
          Free. No account needed. Ready in minutes.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
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
