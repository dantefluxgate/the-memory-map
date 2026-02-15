import { useState, useRef, useEffect } from 'react'
import { deriveLoveLanguage } from '../../utils/loveLanguage.js'

const emotionColors = {
  joy:         { accent: '#E0B080', glow: 'rgba(224, 176, 128, 0.16)' },
  nostalgia:   { accent: '#C4B0D8', glow: 'rgba(196, 176, 216, 0.14)' },
  gratitude:   { accent: '#B0D8BA', glow: 'rgba(176, 216, 186, 0.14)' },
  love:        { accent: '#D89C9C', glow: 'rgba(216, 156, 156, 0.16)' },
  humor:       { accent: '#E0CC80', glow: 'rgba(224, 204, 128, 0.14)' },
  bittersweet: { accent: '#BBABCE', glow: 'rgba(187, 171, 206, 0.14)' },
  adventure:   { accent: '#84BFE4', glow: 'rgba(132, 191, 228, 0.14)' },
  comfort:     { accent: '#E0C89C', glow: 'rgba(224, 200, 156, 0.14)' },
}

export default function ExpandableMemoryCard({ memory, index, recipientName, loveLanguage: loveLanguageProp }) {
  const [expanded, setExpanded] = useState(false)
  const expandRef = useRef(null)
  const [measuredHeight, setMeasuredHeight] = useState(0)

  const colors = emotionColors[memory.emotion] || emotionColors.joy
  // Use pre-derived love language from parent (deduped) or fall back to individual derivation
  const loveLanguage = loveLanguageProp || deriveLoveLanguage(memory.emotion, memory.theme_tags, recipientName)

  // Measure the expanded content height
  useEffect(() => {
    if (expandRef.current) {
      setMeasuredHeight(expandRef.current.scrollHeight)
    }
  }, [expanded, memory])

  return (
    <div
      className={`memory-card-cinematic p-8 text-center cursor-pointer transition-all duration-500 ${
        expanded ? 'ring-1 ring-accent-primary/15' : ''
      }`}
      onClick={() => setExpanded(!expanded)}
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
      onKeyDown={(e) => e.key === 'Enter' && setExpanded(!expanded)}
      style={{
        padding: '32px',
        textAlign: 'center',
        boxShadow: expanded
          ? `0 20px 80px rgba(0,0,0,0.5), 0 0 60px ${colors.glow}`
          : undefined,
      }}
    >
      {/* ═══ COLLAPSED CONTENT (always visible) ═══ */}

      {/* Emotion + date row */}
      <div className="flex items-center justify-center gap-4 mb-5">
        {memory.emotion && (
          <span
            className="font-body text-[9px] uppercase tracking-[0.12em] rounded-full px-3 py-1 border"
            style={{ color: `${colors.accent}cc`, borderColor: `${colors.accent}30` }}
          >
            {memory.emotion}
          </span>
        )}
        {memory.date_hint && (
          <span className="font-body text-[10px] uppercase tracking-[0.08em] text-text-tertiary/50">
            {memory.date_hint}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="font-display text-[clamp(22px,3.5vw,28px)] font-medium text-text-primary mb-4 leading-[1.2]">
        {memory.title}
      </h3>

      {/* Heart decorative line */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="w-6 h-px bg-gradient-to-r from-transparent to-accent-primary/30" />
        <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor" className="text-accent-primary/45 heart-glow">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
        <div className="w-6 h-px bg-gradient-to-l from-transparent to-accent-primary/30" />
      </div>

      {/* Excerpt */}
      <p className="font-accent text-[clamp(15px,2.2vw,19px)] text-text-secondary leading-[1.8] mb-5 max-w-[480px] mx-auto">
        &ldquo;{memory.excerpt}&rdquo;
      </p>

      {/* Location + tags */}
      <div className="flex items-center justify-center gap-3 flex-wrap">
        {memory.location?.place_name && (
          <span className="font-body text-[10px] text-text-tertiary/60 flex items-center gap-1.5">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0 text-accent-primary/50">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {memory.location.place_name}
          </span>
        )}
        {memory.theme_tags?.map((tag) => (
          <span
            key={tag}
            className="font-body text-[9px] text-text-tertiary/50 bg-bg-elevated/30 rounded-full px-2.5 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Tap hint */}
      <div
        className={`mt-5 transition-all duration-400 ${
          expanded ? 'opacity-0 h-0 mt-0' : 'opacity-40'
        }`}
      >
        <span className="font-body text-[9px] uppercase tracking-[0.15em] text-text-tertiary/50 flex items-center justify-center gap-1.5">
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-primary/30">
            <path d="M6 9l6 6 6-6" />
          </svg>
          Tap to reveal more
        </span>
      </div>

      {/* ═══ EXPANDED CONTENT (revealed on click) ═══ */}
      <div
        className="overflow-hidden"
        style={{
          maxHeight: expanded ? `${measuredHeight + 20}px` : '0px',
          opacity: expanded ? 1 : 0,
          transition: 'max-height 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease-out',
        }}
      >
        <div ref={expandRef}>
          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent mt-6 mb-8" />

          {/* Emotion glow orb */}
          <div className="flex justify-center mb-6">
            <div
              className="w-24 h-24 rounded-full animate-breathe"
              style={{
                background: `radial-gradient(circle, ${colors.glow}, transparent 70%)`,
              }}
            />
          </div>

          {/* Love language label */}
          <p className="font-body text-[9px] uppercase tracking-[0.2em] text-text-tertiary/50 mb-2">
            Your Love Language
          </p>
          <h4
            className="font-display text-[clamp(20px,3vw,26px)] font-medium mb-2 leading-[1.2]"
            style={{ color: colors.accent }}
          >
            {loveLanguage.language}
          </h4>
          <p className="font-body text-[10px] uppercase tracking-[0.12em] mb-5" style={{ color: `${colors.accent}80` }}>
            {loveLanguage.description}
          </p>

          {/* Poetic insight */}
          <p className="font-accent text-base text-text-secondary/70 leading-relaxed max-w-[420px] mx-auto mb-6 italic">
            {loveLanguage.insight}
          </p>

          {/* Raw text panel */}
          {memory.rawText && memory.rawText !== memory.excerpt && (
            <div className="mt-2 p-5 rounded-xl bg-bg-elevated/20 border border-border-subtle/50 text-left">
              <p className="font-body text-[9px] uppercase tracking-[0.15em] text-text-tertiary/40 mb-3">
                What you said
              </p>
              <p className="font-accent text-sm text-text-secondary/50 leading-relaxed italic">
                {memory.rawText}
              </p>
            </div>
          )}

          {/* Collapse hint */}
          <div className="mt-6">
            <span className="font-body text-[9px] uppercase tracking-[0.15em] text-text-tertiary/30 flex items-center justify-center gap-1.5">
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-primary/30 rotate-180">
                <path d="M6 9l6 6 6-6" />
              </svg>
              Tap to collapse
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
