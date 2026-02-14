import { useState, useEffect } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal.js'

// Richer emotion gradients for cinematic visual impact
const emotionVisuals = {
  joy: {
    bg: 'rgba(212, 165, 116, 0.03)',
    glow: 'radial-gradient(circle at 50% 40%, rgba(212, 165, 116, 0.08) 0%, transparent 60%)',
    accent: '#D4A574',
  },
  nostalgia: {
    bg: 'rgba(180, 160, 200, 0.03)',
    glow: 'radial-gradient(circle at 50% 40%, rgba(180, 160, 200, 0.06) 0%, transparent 60%)',
    accent: '#B4A0C8',
  },
  gratitude: {
    bg: 'rgba(160, 200, 170, 0.03)',
    glow: 'radial-gradient(circle at 50% 40%, rgba(160, 200, 170, 0.06) 0%, transparent 60%)',
    accent: '#A0C8AA',
  },
  love: {
    bg: 'rgba(200, 140, 140, 0.03)',
    glow: 'radial-gradient(circle at 50% 40%, rgba(200, 140, 140, 0.08) 0%, transparent 60%)',
    accent: '#C88C8C',
  },
  humor: {
    bg: 'rgba(212, 190, 116, 0.03)',
    glow: 'radial-gradient(circle at 50% 40%, rgba(212, 190, 116, 0.06) 0%, transparent 60%)',
    accent: '#D4BE74',
  },
  bittersweet: {
    bg: 'rgba(170, 155, 190, 0.03)',
    glow: 'radial-gradient(circle at 50% 40%, rgba(170, 155, 190, 0.06) 0%, transparent 60%)',
    accent: '#AA9BBE',
  },
  adventure: {
    bg: 'rgba(116, 175, 212, 0.03)',
    glow: 'radial-gradient(circle at 50% 40%, rgba(116, 175, 212, 0.06) 0%, transparent 60%)',
    accent: '#74AFD4',
  },
  comfort: {
    bg: 'rgba(212, 185, 140, 0.03)',
    glow: 'radial-gradient(circle at 50% 40%, rgba(212, 185, 140, 0.06) 0%, transparent 60%)',
    accent: '#D4B98C',
  },
}

export default function SharedMemoryMoment({ memory, index, total }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 })
  const [phase, setPhase] = useState(0) // 0=hidden, 1=title, 2=excerpt, 3=meta

  useEffect(() => {
    if (isVisible) {
      const t1 = setTimeout(() => setPhase(1), 200)
      const t2 = setTimeout(() => setPhase(2), 700)
      const t3 = setTimeout(() => setPhase(3), 1300)
      return () => {
        clearTimeout(t1)
        clearTimeout(t2)
        clearTimeout(t3)
      }
    }
  }, [isVisible])

  const vis = emotionVisuals[memory.emotion] || emotionVisuals.joy
  const isEven = index % 2 === 0

  return (
    <section
      ref={ref}
      className="min-h-[90vh] flex items-center justify-center px-6 py-24 relative overflow-hidden"
      style={{ backgroundColor: vis.bg }}
    >
      {/* Large ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: vis.glow,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 2s ease-out',
        }}
      />

      {/* Subtle decorative number */}
      <div
        className={`absolute top-[15%] ${isEven ? 'right-[8%]' : 'left-[8%]'} pointer-events-none hidden md:block transition-all duration-[2s] ${
          phase >= 1 ? 'opacity-[0.03]' : 'opacity-0'
        }`}
      >
        <span className="font-display text-[200px] font-bold text-text-primary leading-none select-none">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="max-w-[620px] text-center relative z-10">
        {/* Memory number indicator */}
        <div
          className={`flex items-center justify-center gap-3 mb-10 transition-all duration-600 ${
            phase >= 1 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-accent-primary/20" />
          <span className="font-body text-[10px] uppercase tracking-[0.25em] text-text-tertiary/40">
            Memory {index + 1} of {total}
          </span>
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-accent-primary/20" />
        </div>

        {/* Title — big, cinematic */}
        <h2
          className={`font-display text-[clamp(30px,6vw,48px)] font-medium text-text-primary leading-[1.1] transition-all duration-[1200ms] ease-out ${
            phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ filter: phase >= 1 ? 'blur(0)' : 'blur(6px)' }}
        >
          {memory.title}
        </h2>

        {/* Decorative line */}
        <div
          className={`mx-auto mt-7 mb-8 h-px bg-gradient-to-r from-transparent via-accent-primary/25 to-transparent transition-all duration-800 ${
            phase >= 2 ? 'w-16 opacity-100' : 'w-0 opacity-0'
          }`}
          style={{ transformOrigin: 'center' }}
        />

        {/* Excerpt — the emotional core */}
        <p
          className={`font-accent text-[clamp(18px,3vw,24px)] text-text-secondary leading-[1.8] transition-all duration-[1000ms] ease-out ${
            phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          &ldquo;{memory.excerpt}&rdquo;
        </p>

        {/* Metadata row — date, location, emotion */}
        <div
          className={`mt-12 transition-all duration-700 ease-out ${
            phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          {/* Date and location in a clean layout */}
          <div className="flex items-center justify-center gap-6 mb-5 flex-wrap">
            {memory.date_hint && (
              <span className="font-body text-[11px] uppercase tracking-[0.1em] text-text-tertiary/60 flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent-primary/40">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                {memory.date_hint}
              </span>
            )}
            {memory.location?.place_name && (
              <span className="font-body text-[11px] text-text-tertiary/60 flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent-primary/40">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {memory.location.place_name}
              </span>
            )}
          </div>

          {/* Emotion + theme tags */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {memory.emotion && (
              <span
                className="font-body text-[9px] uppercase tracking-[0.12em] rounded-full px-4 py-1 border"
                style={{
                  color: `${vis.accent}99`,
                  borderColor: `${vis.accent}25`,
                }}
              >
                {memory.emotion}
              </span>
            )}
            {memory.theme_tags?.map((tag) => (
              <span
                key={tag}
                className="font-body text-[9px] text-text-tertiary/35 bg-bg-elevated/20 rounded-full px-3 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom divider line */}
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-accent-primary/12 to-transparent transition-all duration-1000 ${
          phase >= 3 ? 'h-16 opacity-100' : 'h-0 opacity-0'
        }`}
      />
    </section>
  )
}
