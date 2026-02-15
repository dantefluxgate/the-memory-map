import { useState, useEffect, useRef, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import RelationshipMap from '../create/RelationshipMap.jsx'
import ShareControls from './ShareControls.jsx'
import ScrollReveal from '../common/ScrollReveal.jsx'
import ParticleField from '../common/ParticleField.jsx'
import FloatingHearts from '../common/FloatingHearts.jsx'
import HeartDivider from '../common/HeartDivider.jsx'
import ExpandableMemoryCard from './ExpandableMemoryCard.jsx'
import Button from '../common/Button.jsx'
import { deriveLoveLanguagesForAll } from '../../utils/loveLanguage.js'

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
            No memories yet. Start by sharing your story.
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

  // Batch-derive love languages so each card gets a unique one
  const loveLanguageMap = useMemo(
    () => deriveLoveLanguagesForAll(memories, name),
    [memories, name]
  )

  // Gather unique emotions and locations for stats
  const emotions = [...new Set(memories.map(m => m.emotion).filter(Boolean))]
  const places = [...new Set(memories.map(m => m.location?.place_name).filter(Boolean))]

  return (
    <main className="min-h-screen bg-bg-primary relative overflow-hidden">
      {/* Heart constellation — building anticipation */}
      <ParticleField ref={particleRef} mode="heart" intensity={0.85} fixed />

      {/* Floating hearts — Valentine's Day atmosphere */}
      <FloatingHearts count={16} opacity={0.10} />

      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-6">
        {/* Sparkle twinkles */}
        <div className="sparkle-field absolute inset-0 pointer-events-none" />

        {/* Ambient warmth glow — brighter */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none animate-glow-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(224,176,128,0.14) 0%, rgba(224,176,128,0.04) 40%, transparent 65%)',
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
          {/* Valentine's heart above title */}
          <div
            className={`mb-6 transition-all duration-1000 ${
              heroVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mx-auto text-accent-primary/70 heart-glow animate-heart-beat"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>

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
              Scroll to explore
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
      <section className="relative z-10 pb-12" style={{ width: '100%' }}>
        {/* Section header with heart */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <HeartDivider size={12} />
            <p className="font-body text-[10px] uppercase tracking-[0.25em] text-text-tertiary/60 mt-2">
              Your moments together
            </p>
          </div>
        </ScrollReveal>

        {/* Centered card stack — interactive expandable cards */}
        <div style={{ maxWidth: '560px', width: '100%', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '24px', paddingRight: '24px' }}>
          {memories.map((memory, index) => (
            <ScrollReveal key={memory.id} delay={index * 0.08}>
              <div className="mb-10 relative">
                {/* Connecting line between cards */}
                {index < memories.length - 1 && (
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full w-px h-10 bg-gradient-to-b from-accent-primary/15 to-transparent" />
                )}

                <ExpandableMemoryCard
                  memory={memory}
                  index={index}
                  recipientName={name}
                  loveLanguage={loveLanguageMap[memory.id]}
                />
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
              <HeartDivider size={12} />
              <p className="font-body text-xs uppercase tracking-[0.2em] text-text-tertiary/60 mt-2">
                Where your love has been
              </p>
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
                className="font-body text-[10px] uppercase tracking-[0.08em] text-accent-primary/80 border border-accent-primary/25 rounded-full px-5 py-1.5 animate-stagger-up"
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
            Write a note for {name}
          </label>
          <textarea
            value={personalNote}
            onChange={(e) => setPersonalNote(e.target.value)}
            placeholder={`What would you say to ${name} right now?`}
            rows={3}
            className="w-full bg-transparent text-center font-accent text-lg text-text-primary
              placeholder:text-text-tertiary/30 placeholder:italic
              resize-none pb-4 transition-colors duration-500"
            style={{
              border: 'none',
              borderBottom: '1px solid rgba(224, 176, 128, 0.18)',
              outline: 'none',
              boxShadow: 'none',
            }}
            onFocus={(e) => { e.target.style.borderBottomColor = 'rgba(224, 176, 128, 0.45)'; e.target.style.outline = 'none' }}
            onBlur={(e) => { e.target.style.borderBottomColor = 'rgba(224, 176, 128, 0.18)' }}
          />
        </div>
      </ScrollReveal>

      {/* ═══════════════ SHARE ═══════════════ */}
      <section className="relative z-10 pb-24">
        {/* Heart divider before share */}
        <HeartDivider size={16} className="mb-8" />

        <ScrollReveal>
          <div className="text-center mb-6">
            <p className="font-accent text-[clamp(20px,3vw,28px)] text-text-secondary mb-2 animate-text-glow">
              Send this to {name}
            </p>
            <p className="font-body text-xs text-text-tertiary/60 flex items-center justify-center gap-2">
              A Valentine made from real moments
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-accent-primary/50 heart-glow">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
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
