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

        {/* Decorative line */}
        <div
          className={`w-12 h-px bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent mx-auto mb-8 transition-all duration-800 ${
            phase >= 1 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transformOrigin: 'center', transform: phase >= 1 ? 'scaleX(1)' : 'scaleX(0)' }}
        />

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
            <span className="relative z-10">See Your Memory Map</span>
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
