import { useNavigate } from 'react-router-dom'
import Button from '../common/Button.jsx'

export default function HeroSection() {
  const navigate = useNavigate()

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Ambient glow behind headline */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212,165,116,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[680px] text-center relative z-10">
        <h1
          className="font-display text-[56px] leading-[1.1] font-medium tracking-[-0.02em] text-text-primary opacity-0 animate-fade-up"
          style={{ animationFillMode: 'forwards' }}
        >
          Turn your memories into something they can see.
        </h1>

        <p
          className="font-body text-xl text-text-secondary mt-6 max-w-[480px] mx-auto opacity-0 animate-fade-up"
          style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
        >
          Talk about the person you love. We'll turn it into a visual story you can share.
        </p>

        <div
          className="mt-10 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
        >
          <Button onClick={() => navigate('/create')}>
            Start Your Memory Map
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
        <div className="animate-gentle-bounce">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-text-tertiary"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </section>
  )
}
