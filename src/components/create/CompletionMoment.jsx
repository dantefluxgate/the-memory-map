import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CompletionMoment({ memoryCount, recipientName, onAddMore }) {
  const navigate = useNavigate()
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 200)
    const t2 = setTimeout(() => setPhase(2), 800)
    const t3 = setTimeout(() => setPhase(3), 1400)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212,165,116,0.06) 0%, transparent 60%)',
          opacity: phase >= 1 ? 1 : 0,
          transition: 'opacity 2s ease-out',
        }}
      />

      <div className="text-center max-w-[500px] relative z-10">
        {/* Heart above count */}
        <div
          className={`mb-4 transition-all duration-700 ${
            phase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mx-auto text-accent-primary/50 heart-glow animate-heart-beat"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </div>

        {/* Memory count */}
        <div
          className={`mb-6 transition-all duration-700 ${
            phase >= 1 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="font-display text-5xl text-accent-primary">{memoryCount}</span>
          <p className="font-body text-[10px] uppercase tracking-[0.2em] text-text-tertiary/50 mt-2">
            {memoryCount === 1 ? 'Memory' : 'Memories'} captured
          </p>
        </div>

        {/* Heart divider line */}
        <div
          className={`flex items-center justify-center gap-3 mb-8 transition-all duration-800 ${
            phase >= 1 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-accent-primary/25" />
          <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor" className="text-accent-primary/30">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-accent-primary/25" />
        </div>

        {/* Message */}
        <p
          className={`font-accent text-[clamp(22px,4vw,30px)] font-light text-text-primary leading-[1.4] mb-10 transition-all duration-[1200ms] ease-out ${
            phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ filter: phase >= 2 ? 'blur(0)' : 'blur(4px)' }}
        >
          Your map of <span className="text-accent-primary">{recipientName}</span> is ready.
        </p>

        {/* Actions */}
        <div
          className={`flex flex-col items-center gap-5 transition-all duration-700 ${
            phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <button
            onClick={() => navigate('/preview')}
            className="group relative font-body text-sm text-accent-primary hover:text-accent-secondary transition-all duration-500 cursor-pointer border border-accent-primary/25 rounded-full px-10 py-3 hover:border-accent-primary/50"
          >
            <span
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ boxShadow: '0 0 30px rgba(212,165,116,0.12), inset 0 0 20px rgba(212,165,116,0.05)' }}
            />
            <span className="relative z-10 flex items-center gap-2">
              See Your Memory Map
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="opacity-60">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </span>
          </button>

          <button
            onClick={onAddMore}
            className="font-body text-xs text-text-tertiary/50 hover:text-accent-primary/70 transition-colors cursor-pointer"
          >
            + Add another memory
          </button>
        </div>
      </div>
    </div>
  )
}
