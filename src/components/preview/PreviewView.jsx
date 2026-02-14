import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import RelationshipMap from '../create/RelationshipMap.jsx'
import ShareControls from './ShareControls.jsx'
import ScrollReveal from '../common/ScrollReveal.jsx'
import ParticleField from '../common/ParticleField.jsx'
import Button from '../common/Button.jsx'

export default function PreviewView({ memories, relationshipContext, relationshipSummary, personalNote, setPersonalNote }) {
  const navigate = useNavigate()
  const [heroVisible, setHeroVisible] = useState(false)
  const [statsVisible, setStatsVisible] = useState(false)
  const particleRef = useRef(null)

  useEffect(() => {
    const t1 = setTimeout(() => setHeroVisible(true), 150)
    const t2 = setTimeout(() => setStatsVisible(true), 900)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (memories.length === 0) {
    return (
      <main className="min-h-screen bg-bg-primary flex items-center justify-center px-6">
        <div className="text-center">
          <p className="font-accent text-xl text-text-secondary mb-6">
            No memories yet. Start by sharing some moments.
          </p>
          <Button onClick={() => navigate('/create')}>
            Create Memories
          </Button>
        </div>
      </main>
    )
  }

  const locationsExist = memories.some((m) => m.location?.coordinates)
  const name = relationshipContext?.name || 'them'

  // Gather unique emotions and locations for stats
  const emotions = [...new Set(memories.map(m => m.emotion).filter(Boolean))]
  const places = [...new Set(memories.map(m => m.location?.place_name).filter(Boolean))]

  return (
    <main className="min-h-screen bg-bg-primary relative overflow-hidden">
      {/* Heart constellation — building anticipation */}
      <ParticleField ref={particleRef} mode="heart" intensity={0.6} fixed />

      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-6">
        {/* Ambient warmth glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none animate-glow-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(212,165,116,0.06) 0%, transparent 60%)',
          }}
        />

        {/* Back to editing — top-left */}
        <button
          onClick={() => navigate('/create')}
          className="absolute top-8 left-8 font-body text-xs text-text-tertiary/50 hover:text-accent-primary transition-colors flex items-center gap-2 cursor-pointer z-20"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Edit memories
        </button>

        <div className="text-center max-w-[600px] relative z-10">
          {/* Decorative line above */}
          <div
            className={`w-px h-12 bg-gradient-to-b from-transparent via-accent-primary/30 to-transparent mx-auto mb-8 transition-all duration-1000 ${
              heroVisible ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Title */}
          <h1
            className={`font-display text-[clamp(36px,6vw,56px)] font-medium text-text-primary leading-[1.1] mb-4 transition-all duration-[1200ms] ease-out ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ filter: heroVisible ? 'blur(0)' : 'blur(8px)' }}
          >
            {relationshipSummary?.timeline_title || `Your Memory Map`}
          </h1>

          {/* Essence */}
          {relationshipSummary?.relationship_essence && (
            <p
              className={`font-accent italic text-[clamp(16px,2.5vw,22px)] text-text-secondary/80 leading-[1.6] max-w-[500px] mx-auto transition-all duration-1000 ease-out ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              {relationshipSummary.relationship_essence}
            </p>
          )}

          {/* Decorative divider */}
          <div
            className={`w-16 h-px bg-gradient-to-r from-transparent via-accent-primary/40 to-transparent mx-auto mt-8 mb-6 transition-all duration-800 ${
              heroVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '0.7s', transformOrigin: 'center', transform: heroVisible ? 'scaleX(1)' : 'scaleX(0)' }}
          />

          {/* Stats row — visual impact */}
          <div
            className={`flex items-center justify-center gap-10 mt-4 transition-all duration-700 ${
              statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="text-center">
              <span className="font-display text-3xl text-accent-primary block">{memories.length}</span>
              <span className="font-body text-[10px] uppercase tracking-[0.15em] text-text-tertiary/50 mt-1 block">
                {memories.length === 1 ? 'Memory' : 'Memories'}
              </span>
            </div>
            {places.length > 0 && (
              <div className="text-center">
                <span className="font-display text-3xl text-accent-primary block">{places.length}</span>
                <span className="font-body text-[10px] uppercase tracking-[0.15em] text-text-tertiary/50 mt-1 block">
                  {places.length === 1 ? 'Place' : 'Places'}
                </span>
              </div>
            )}
            {emotions.length > 0 && (
              <div className="text-center">
                <span className="font-display text-3xl text-accent-primary block">{emotions.length}</span>
                <span className="font-body text-[10px] uppercase tracking-[0.15em] text-text-tertiary/50 mt-1 block">
                  {emotions.length === 1 ? 'Emotion' : 'Emotions'}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 ${
            statsVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '0.5s' }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-body text-[10px] uppercase tracking-[0.15em] text-text-tertiary/40">
              Preview your memories
            </span>
            <div className="animate-gentle-bounce">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-text-tertiary/40">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ MEMORY CARDS ═══════════════ */}
      <section className="relative z-10 pb-12">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-body text-[10px] uppercase tracking-[0.25em] text-text-tertiary/40 mb-3">
              Each memory, in your words
            </p>
            <div className="w-10 h-px bg-gradient-to-r from-transparent via-accent-primary/25 to-transparent mx-auto" />
          </div>
        </ScrollReveal>

        {/* Centered card stack — clean, focused layout */}
        <div className="max-w-[560px] mx-auto px-6">
          {memories.map((memory, index) => (
            <ScrollReveal key={memory.id} delay={index * 0.08}>
              <div className="mb-10 relative">
                {/* Connecting line between cards */}
                {index < memories.length - 1 && (
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full w-px h-10 bg-gradient-to-b from-accent-primary/15 to-transparent" />
                )}

                {/* Memory card — centered, clean */}
                <div className="memory-card-cinematic p-8 text-center">
                  {/* Emotion + date row */}
                  <div className="flex items-center justify-center gap-4 mb-5">
                    {memory.emotion && (
                      <span className="font-body text-[9px] uppercase tracking-[0.12em] text-accent-primary/70 border border-accent-primary/15 rounded-full px-3 py-1">
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

                  {/* Decorative line */}
                  <div className="w-8 h-px bg-accent-primary/20 mx-auto mb-4" />

                  {/* Excerpt */}
                  <p className="font-accent text-[clamp(15px,2.2vw,19px)] text-text-secondary/85 leading-[1.8] mb-5 max-w-[480px] mx-auto">
                    &ldquo;{memory.excerpt}&rdquo;
                  </p>

                  {/* Location + tags — centered */}
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
                        className="font-body text-[9px] text-text-tertiary/30 bg-bg-elevated/30 rounded-full px-2.5 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══════════════ MAP ═══════════════ */}
      {locationsExist && (
        <section className="relative z-10 py-20">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="font-body text-xs uppercase tracking-[0.2em] text-text-tertiary/40 mb-3">
                Your Journey Together
              </p>
              <div className="w-8 h-px bg-accent-primary/20 mx-auto" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="max-w-[900px] mx-auto px-6">
              <div className="map-cinematic h-[450px] border border-border-subtle">
                <RelationshipMap memories={memories} />
              </div>
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* ═══════════════ THEME TAGS ═══════════════ */}
      {relationshipSummary?.dominant_themes && (
        <ScrollReveal delay={0.1}>
          <div className="flex items-center justify-center gap-3 py-8 flex-wrap px-6 relative z-10">
            {relationshipSummary.dominant_themes.map((theme, i) => (
              <span
                key={theme}
                className="font-body text-[10px] uppercase tracking-[0.08em] text-accent-primary/60 border border-accent-primary/15 rounded-full px-5 py-1.5 animate-stagger-up"
                style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
              >
                {theme}
              </span>
            ))}
          </div>
        </ScrollReveal>
      )}

      {/* ═══════════════ PERSONAL NOTE ═══════════════ */}
      <ScrollReveal delay={0.1}>
        <div className="max-w-[520px] mx-auto px-6 py-16 relative z-10">
          <label className="font-accent text-base text-text-secondary/60 block mb-4 text-center">
            Add a personal note for {name}
          </label>
          <textarea
            value={personalNote}
            onChange={(e) => setPersonalNote(e.target.value)}
            placeholder={`A message that appears when ${name} opens your Memory Map...`}
            rows={3}
            className="w-full bg-transparent text-center font-accent text-lg text-text-primary
              placeholder:text-text-tertiary/30 placeholder:italic
              resize-none pb-4 transition-colors duration-500"
            style={{
              border: 'none',
              borderBottom: '1px solid rgba(212, 165, 116, 0.12)',
              outline: 'none',
              boxShadow: 'none',
            }}
            onFocus={(e) => { e.target.style.borderBottomColor = 'rgba(212, 165, 116, 0.35)'; e.target.style.outline = 'none' }}
            onBlur={(e) => { e.target.style.borderBottomColor = 'rgba(212, 165, 116, 0.12)' }}
          />
        </div>
      </ScrollReveal>

      {/* ═══════════════ SHARE ═══════════════ */}
      <section className="relative z-10 pb-24">
        {/* Decorative line */}
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-accent-primary/20 to-transparent mx-auto mb-12" />

        <ScrollReveal>
          <div className="text-center mb-6">
            <p className="font-accent text-[clamp(20px,3vw,28px)] text-text-secondary/70 mb-2">
              Ready to send this to {name}?
            </p>
            <p className="font-body text-xs text-text-tertiary/40">
              Every point is a real moment, in your own words.
            </p>
          </div>
        </ScrollReveal>

        <ShareControls
          memories={memories}
          summary={relationshipSummary}
          personalNote={personalNote}
          relationshipContext={relationshipContext}
        />
      </section>
    </main>
  )
}
