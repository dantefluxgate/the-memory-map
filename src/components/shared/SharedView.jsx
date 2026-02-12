import { useParams } from 'react-router-dom'
import { useMemo, useState, useEffect } from 'react'
import { decodeShareData } from '../../utils/shareLink.js'
import SharedMemoryMoment from './SharedMemoryMoment.jsx'
import SharedMapReveal from './SharedMapReveal.jsx'
import SharedClosing from './SharedClosing.jsx'

export default function SharedView() {
  const { data } = useParams()
  const [showIntro, setShowIntro] = useState(true)
  const [showNote, setShowNote] = useState(false)
  const [showScroll, setShowScroll] = useState(false)

  const shareData = useMemo(() => {
    if (!data) return null
    return decodeShareData(data)
  }, [data])

  useEffect(() => {
    const noteTimer = setTimeout(() => setShowNote(true), 1800)
    const scrollTimer = setTimeout(() => setShowScroll(true), 2800)
    return () => {
      clearTimeout(noteTimer)
      clearTimeout(scrollTimer)
    }
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

  const { memories, summary, personalNote } = shareData

  return (
    <main className="min-h-screen bg-bg-primary">
      {/* Opening screen */}
      <section className="min-h-screen flex items-center justify-center relative px-6">
        <div className="text-center max-w-[500px]">
          <p
            className={`font-accent text-[32px] font-light text-text-primary leading-relaxed transition-all duration-1000 ${
              showIntro ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Someone made this for you.
          </p>

          {personalNote && (
            <p
              className={`font-accent italic text-lg text-text-secondary mt-8 leading-relaxed transition-all duration-700 ${
                showNote ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              {personalNote}
            </p>
          )}

          {summary?.timeline_title && (
            <p
              className={`font-display text-xl text-accent-primary/70 mt-6 transition-all duration-700 ${
                showNote ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              {summary.timeline_title}
            </p>
          )}
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${
            showScroll ? 'opacity-100' : 'opacity-0'
          }`}
        >
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

      {/* Memory moments */}
      {memories.map((memory, index) => (
        <SharedMemoryMoment key={memory.id} memory={memory} index={index} />
      ))}

      {/* Map reveal */}
      <SharedMapReveal memories={memories} />

      {/* Closing */}
      <SharedClosing summary={summary} />
    </main>
  )
}
