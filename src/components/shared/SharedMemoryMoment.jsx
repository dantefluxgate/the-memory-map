import { useState, useEffect } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal.js'

export default function SharedMemoryMoment({ memory, index, total }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.25 })
  const [showExcerpt, setShowExcerpt] = useState(false)
  const [showMeta, setShowMeta] = useState(false)

  useEffect(() => {
    if (isVisible) {
      const excerptTimer = setTimeout(() => setShowExcerpt(true), 400)
      const metaTimer = setTimeout(() => setShowMeta(true), 1000)
      return () => {
        clearTimeout(excerptTimer)
        clearTimeout(metaTimer)
      }
    }
  }, [isVisible])

  const emotionGlows = {
    joy: { color: 'rgba(212, 165, 116, 0.05)', glow: 'rgba(212, 165, 116, 0.03)' },
    nostalgia: { color: 'rgba(180, 160, 200, 0.04)', glow: 'rgba(180, 160, 200, 0.02)' },
    gratitude: { color: 'rgba(160, 200, 170, 0.04)', glow: 'rgba(160, 200, 170, 0.02)' },
    love: { color: 'rgba(200, 140, 140, 0.04)', glow: 'rgba(200, 140, 140, 0.02)' },
    humor: { color: 'rgba(212, 190, 116, 0.04)', glow: 'rgba(212, 190, 116, 0.02)' },
    bittersweet: { color: 'rgba(170, 155, 190, 0.04)', glow: 'rgba(170, 155, 190, 0.02)' },
    adventure: { color: 'rgba(116, 175, 212, 0.04)', glow: 'rgba(116, 175, 212, 0.02)' },
    comfort: { color: 'rgba(212, 185, 140, 0.04)', glow: 'rgba(212, 185, 140, 0.02)' },
  }

  const emotion = emotionGlows[memory.emotion] || emotionGlows.joy

  return (
    <section
      ref={ref}
      className="min-h-[85vh] flex items-center justify-center px-6 py-24 relative overflow-hidden"
      style={{ backgroundColor: emotion.color }}
    >
      {/* Ambient emotion glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${emotion.glow} 0%, transparent 70%)`,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1.5s ease-out',
        }}
      />

      <div className="max-w-[580px] text-center relative z-10">
        {/* Memory number indicator */}
        <span
          className={`font-body text-[10px] uppercase tracking-[0.2em] text-text-tertiary/30 block mb-8 transition-all duration-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {index + 1} / {total}
        </span>

        {/* Title */}
        <h2
          className={`font-display text-[clamp(28px,5vw,42px)] font-medium text-text-primary leading-[1.15] transition-all duration-800 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {memory.title}
        </h2>

        {/* Decorative line */}
        <div
          className={`w-8 h-px bg-accent-primary/30 mx-auto mt-6 mb-8 transition-all duration-600 ${
            showExcerpt ? 'opacity-100 w-8' : 'opacity-0 w-0'
          }`}
        />

        {/* Excerpt */}
        <p
          className={`font-accent text-[clamp(18px,2.5vw,22px)] text-text-secondary leading-[1.7] transition-all duration-800 ease-out ${
            showExcerpt ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          &ldquo;{memory.excerpt}&rdquo;
        </p>

        {/* Date and location */}
        <div
          className={`mt-10 space-y-2 transition-all duration-600 ease-out ${
            showMeta ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {memory.date_hint && (
            <p className="font-body text-[12px] uppercase tracking-[0.1em] text-text-tertiary/60">
              {memory.date_hint}
            </p>
          )}
          {memory.location?.place_name && (
            <p className="font-body text-[12px] text-text-tertiary/50 flex items-center justify-center gap-1.5">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {memory.location.place_name}
            </p>
          )}

          {/* Emotion + theme tags */}
          <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
            {memory.emotion && (
              <span className="font-body text-[9px] uppercase tracking-[0.1em] text-accent-primary/50 border border-accent-primary/15 rounded-full px-3 py-0.5">
                {memory.emotion}
              </span>
            )}
            {memory.theme_tags?.map((tag) => (
              <span
                key={tag}
                className="font-body text-[9px] text-text-tertiary/30 bg-bg-elevated/30 rounded-full px-2.5 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Section divider at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-accent-primary/15 to-transparent" />
    </section>
  )
}
