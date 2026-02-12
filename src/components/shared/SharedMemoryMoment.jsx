import { useState, useEffect } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal.js'

export default function SharedMemoryMoment({ memory, index }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.3 })
  const [showExcerpt, setShowExcerpt] = useState(false)
  const [showMeta, setShowMeta] = useState(false)

  useEffect(() => {
    if (isVisible) {
      const excerptTimer = setTimeout(() => setShowExcerpt(true), 300)
      const metaTimer = setTimeout(() => setShowMeta(true), 800)
      return () => {
        clearTimeout(excerptTimer)
        clearTimeout(metaTimer)
      }
    }
  }, [isVisible])

  const emotionColors = {
    joy: 'rgba(212, 165, 116, 0.06)',
    nostalgia: 'rgba(180, 160, 200, 0.05)',
    gratitude: 'rgba(160, 200, 170, 0.05)',
    love: 'rgba(200, 150, 150, 0.05)',
    humor: 'rgba(212, 190, 116, 0.05)',
    bittersweet: 'rgba(170, 160, 190, 0.05)',
    adventure: 'rgba(116, 180, 212, 0.05)',
    comfort: 'rgba(212, 185, 140, 0.06)',
  }

  const bgTint = emotionColors[memory.emotion] || 'transparent'

  return (
    <section
      ref={ref}
      className="min-h-[80vh] flex items-center justify-center px-6 py-20 relative"
      style={{ backgroundColor: bgTint }}
    >
      <div className="max-w-[600px] text-center">
        {/* Title */}
        <h2
          className={`font-display text-4xl font-medium text-text-primary transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          {memory.title}
        </h2>

        {/* Excerpt with typewriter feel */}
        <p
          className={`font-accent text-xl text-text-secondary leading-relaxed mt-8 transition-all duration-700 ease-out ${
            showExcerpt ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          {memory.excerpt}
        </p>

        {/* Date and location */}
        <div
          className={`mt-6 space-y-1 transition-all duration-500 ease-out ${
            showMeta ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {memory.date_hint && (
            <p className="font-body text-[13px] text-text-tertiary">
              {memory.date_hint}
            </p>
          )}
          {memory.location?.place_name && (
            <p className="font-body text-[13px] text-text-tertiary flex items-center justify-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {memory.location.place_name}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
