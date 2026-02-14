import { useParams } from 'react-router-dom'
import { useMemo, useState, useEffect } from 'react'
import { decodeShareData } from '../../utils/shareLink.js'
import SharedMemoryMoment from './SharedMemoryMoment.jsx'
import SharedMapReveal from './SharedMapReveal.jsx'
import SharedClosing from './SharedClosing.jsx'
import ParticleField from '../common/ParticleField.jsx'

export default function SharedView() {
  const { data } = useParams()
  const [phase, setPhase] = useState(0) // 0=blank, 1=intro, 2=note, 3=scroll

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

  if (!shareData) {
    return (
      <main className="min-h-screen bg-bg-primary flex items-center justify-center">
        <p className="font-accent text-xl text-text-secondary">
          This memory map couldn't be found.
        </p>
      </main>
    )
  }

  const { memories, summary, personalNote, relationshipContext } = shareData
  const recipientName = relationshipContext?.name

  return (
    <main className="min-h-screen bg-bg-primary relative">
      {/* Global particle field — heart constellation for the gift experience */}
      <ParticleField mode="heart" intensity={0.8} fixed />

      {/* Opening screen — full cinematic */}
      <section className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden">
        {/* Animated ambient warmth */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none animate-glow-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(212,165,116,0.06) 0%, transparent 60%)',
          }}
        />

        {/* Decorative line above text */}
        <div
          className={`absolute top-[30%] left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-accent-primary/30 to-transparent transition-all duration-1500 ease-out ${
            phase >= 1 ? 'h-16 opacity-100' : 'h-0 opacity-0'
          }`}
        />

        <div className="text-center max-w-[500px] relative z-10">
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
            className={`font-accent text-base text-text-tertiary/60 mt-4 transition-all duration-1000 ease-out ${
              phase >= 1 ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '0.8s' }}
          >
            These are their memories of the two of you, in their own words.
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
              className={`font-display text-lg text-accent-primary/60 mt-8 tracking-wide transition-all duration-700 ${
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
            <span className="font-body text-[10px] uppercase tracking-[0.15em] text-text-tertiary/40">
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

      {/* Divider before memories */}
      <div className="flex items-center justify-center py-8">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-accent-primary/20 to-transparent" />
      </div>

      {/* Memory moments */}
      {memories.map((memory, index) => (
        <SharedMemoryMoment
          key={memory.id}
          memory={memory}
          index={index}
          total={memories.length}
        />
      ))}

      {/* Map reveal */}
      <SharedMapReveal memories={memories} />

      {/* Closing */}
      <SharedClosing summary={summary} />
    </main>
  )
}
