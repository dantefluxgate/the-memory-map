import { useState, useEffect } from 'react'

export default function MemoryReveal({ memory, onContinue }) {
  const [phase, setPhase] = useState(0) // 0=entering, 1=visible, 2=exiting

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 100)
    return () => clearTimeout(t1)
  }, [])

  const handleContinue = () => {
    setPhase(2)
    setTimeout(() => onContinue(), 600)
  }

  if (memory.loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10">
        <div className="text-center">
          <div className="w-2 h-2 rounded-full bg-accent-primary animate-breathe mx-auto mb-4" />
          <p className="font-accent text-lg text-text-tertiary italic animate-fade-in">
            Understanding your memory...
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10">
      <div
        className={`max-w-[480px] w-full glass-card rounded-xl p-8 transition-all duration-700 ease-out
          ${phase === 0 ? 'opacity-0 translate-y-6 scale-95' : ''}
          ${phase === 1 ? 'opacity-100 translate-y-0 scale-100' : ''}
          ${phase === 2 ? 'opacity-0 -translate-y-6 scale-95' : ''}`}
      >
        <h3 className="font-display text-2xl font-medium text-text-primary mb-2">
          {memory.title}
        </h3>

        {memory.date_hint && (
          <p className="font-body text-[11px] uppercase tracking-[0.1em] text-text-tertiary mb-4">
            {memory.date_hint}
          </p>
        )}

        <p className="font-accent text-lg text-text-secondary leading-relaxed mb-5">
          &ldquo;{memory.excerpt}&rdquo;
        </p>

        <div className="flex items-center gap-2 flex-wrap mb-6">
          {memory.emotion && (
            <span className="font-body text-[10px] uppercase tracking-[0.08em] text-accent-primary/80
              border border-accent-primary/20 rounded-full px-3 py-1">
              {memory.emotion}
            </span>
          )}
          {memory.location?.place_name && (
            <span className="font-body text-[11px] text-text-tertiary flex items-center gap-1">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {memory.location.place_name}
            </span>
          )}
          {memory.theme_tags?.map((tag) => (
            <span
              key={tag}
              className="font-body text-[10px] text-text-tertiary/60 border border-border-subtle rounded-full px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          onClick={handleContinue}
          className="font-body text-sm text-accent-primary hover:text-accent-secondary
            transition-colors cursor-pointer flex items-center gap-2 mx-auto"
        >
          Continue
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
