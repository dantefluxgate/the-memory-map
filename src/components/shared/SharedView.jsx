import { useParams } from 'react-router-dom'
import { useMemo, useState, useEffect, useRef, useCallback } from 'react'
import { decodeShareData } from '../../utils/shareLink.js'
import SharedMemoryMoment from './SharedMemoryMoment.jsx'
import SharedMapReveal from './SharedMapReveal.jsx'
import SharedClosing from './SharedClosing.jsx'
import ParticleField from '../common/ParticleField.jsx'
import FloatingHearts from '../common/FloatingHearts.jsx'
import HeartDivider from '../common/HeartDivider.jsx'

// Emotion → particle hex color for dynamic color shifts (vivid)
const EMOTION_COLORS = {
  joy:         0xe8c090,
  nostalgia:   0xc4b0d8,
  gratitude:   0xb0d8ba,
  love:        0xd89c9c,
  humor:       0xe0cc80,
  bittersweet: 0xbbabce,
  adventure:   0x84bfe4,
  comfort:     0xe0c89c,
}
const DEFAULT_COLOR = 0xe0b080

export default function SharedView() {
  const { data } = useParams()
  const [phase, setPhase] = useState(0) // 0=blank, 1=intro, 2=note, 3=scroll
  const particleRef = useRef(null)

  const shareData = useMemo(() => {
    if (!data) return null
    return decodeShareData(data)
  }, [data])

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 300)
    const t2 = setTimeout(() => setPhase(2), 1600)
    const t3 = setTimeout(() => setPhase(3), 2600)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  // Track which memory section is in view → shift particle color
  const handleMemoryVisible = useCallback((emotion) => {
    const hex = EMOTION_COLORS[emotion] || DEFAULT_COLOR
    particleRef.current?.setColor(hex)
  }, [])

  if (!shareData) {
    return (
      <main className="min-h-screen bg-bg-primary flex items-center justify-center">
        <p className="font-accent text-xl text-text-secondary">
          This Memory Map couldn't be found.
        </p>
      </main>
    )
  }

  const { memories, summary, personalNote, relationshipContext } = shareData
  const recipientName = relationshipContext?.name

  return (
    <main className="min-h-screen bg-bg-primary relative">
      {/* Global particle field — heart constellation, color shifts per emotion */}
      <ParticleField ref={particleRef} mode="heart" intensity={0.95} fixed />

      {/* Floating hearts — Valentine's Day atmosphere */}
      <FloatingHearts count={18} opacity={0.12} />

      {/* Opening screen — full cinematic */}
      <section className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden">
        {/* Sparkle twinkles */}
        <div className="sparkle-field absolute inset-0 pointer-events-none" />

        {/* Animated ambient warmth — bigger and brighter */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none animate-glow-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(224,176,128,0.14) 0%, rgba(224,176,128,0.04) 40%, transparent 65%)',
          }}
        />

        {/* Decorative line above text */}
        <div
          className={`absolute top-[30%] left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-accent-primary/30 to-transparent transition-all duration-1500 ease-out ${
            phase >= 1 ? 'h-16 opacity-100' : 'h-0 opacity-0'
          }`}
        />

        <div className="text-center max-w-[500px] relative z-10">
          {/* Valentine's heart intro */}
          <div
            className={`mb-6 transition-all duration-1000 ${
              phase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mx-auto text-accent-primary/70 heart-glow animate-heart-beat"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>

          <p
            className={`font-accent text-[clamp(26px,5vw,32px)] font-light text-text-primary leading-[1.3] transition-all duration-[1500ms] ease-out ${
              phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {recipientName
              ? <>Someone made this for you, <span className="text-accent-primary">{recipientName}</span>.</>
              : 'Someone made this for you.'
            }
          </p>

          <p
            className={`font-accent text-base text-text-secondary/70 mt-4 transition-all duration-1000 ease-out ${
              phase >= 1 ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '0.8s' }}
          >
            Every moment here is real — remembered, written, and given with love.
          </p>

          {personalNote && (
            <p
              className={`font-accent italic text-lg text-text-secondary mt-10 leading-relaxed transition-all duration-800 ease-out ${
                phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              &ldquo;{personalNote}&rdquo;
            </p>
          )}

          {summary?.timeline_title && (
            <p
              className={`font-display text-lg text-accent-primary/80 mt-8 tracking-wide animate-text-glow transition-all duration-700 ${
                phase >= 2 ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              {summary.timeline_title}
            </p>
          )}
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 ${
            phase >= 3 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-body text-[10px] uppercase tracking-[0.15em] text-text-tertiary/60">
              Scroll to begin
            </span>
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
        </div>
      </section>

      {/* Heart divider before memories */}
      <HeartDivider size={14} className="mb-4" />

      {/* Memory moments */}
      {memories.map((memory, index) => (
        <SharedMemoryMoment
          key={memory.id}
          memory={memory}
          index={index}
          total={memories.length}
          onVisible={handleMemoryVisible}
        />
      ))}

      {/* Map reveal */}
      <SharedMapReveal memories={memories} />

      {/* Closing */}
      <SharedClosing summary={summary} particleRef={particleRef} />
    </main>
  )
}
