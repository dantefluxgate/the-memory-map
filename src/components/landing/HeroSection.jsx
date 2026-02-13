import { useNavigate } from 'react-router-dom'
import Button from '../common/Button.jsx'
import ParticleConstellation from './ParticleConstellation.jsx'

export default function HeroSection() {
  const navigate = useNavigate()

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Three.js constellation — ambient particle field */}
      <ParticleConstellation />

      {/* Multi-layer ambient glow — cinematic depth */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none animate-glow-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(212,165,116,0.07) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute top-[40%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212,165,116,0.04) 0%, transparent 70%)',
          animationDelay: '2s',
        }}
      />

      {/* Subtle top vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(212,165,116,0.03) 0%, transparent 50%)',
        }}
      />

      <div className="max-w-[680px] text-center relative z-10">
        {/* Eyebrow */}
        <p
          className="font-body text-[11px] uppercase tracking-[0.2em] text-accent-primary/50 mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
        >
          A valentine's day experience
        </p>

        <h1
          className="font-display text-[clamp(36px,6vw,60px)] leading-[1.08] font-medium tracking-[-0.02em] text-text-primary opacity-0 animate-fade-up"
          style={{ animationFillMode: 'forwards', animationDelay: '0.2s' }}
        >
          Turn your memories into something they can see.
        </h1>

        <p
          className="font-body font-normal text-[clamp(16px,2.5vw,20px)] text-text-secondary mt-6 max-w-[480px] mx-auto leading-relaxed opacity-0 animate-fade-up"
          style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
        >
          Talk about the person you love. We'll turn it into a visual story you can share.
        </p>

        <div
          className="mt-12 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
        >
          <Button onClick={() => navigate('/create')}>
            Start Your Memory Map
          </Button>
        </div>

        {/* Subtle supporting line */}
        <p
          className="font-body text-[11px] text-text-tertiary/40 mt-4 opacity-0 animate-fade-in"
          style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
        >
          No account needed. Free to create.
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
            className="text-text-tertiary/40"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </section>
  )
}
