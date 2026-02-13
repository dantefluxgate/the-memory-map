import { useNavigate } from 'react-router-dom'
import MemoryTimeline from '../create/MemoryTimeline.jsx'
import RelationshipMap from '../create/RelationshipMap.jsx'
import ShareControls from './ShareControls.jsx'
import ScrollReveal from '../common/ScrollReveal.jsx'
import Button from '../common/Button.jsx'
import ParticleField from '../common/ParticleField.jsx'

export default function PreviewView({ memories, relationshipContext, relationshipSummary, personalNote, setPersonalNote }) {
  const navigate = useNavigate()

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

  return (
    <main className="min-h-screen bg-bg-primary relative overflow-hidden">
      {/* Heart constellation behind preview — building anticipation */}
      <ParticleField mode="heart" intensity={0.5} fixed />

      <div className="max-w-[900px] mx-auto px-6 py-[80px] relative z-10">
        {/* Back button */}
        <button
          onClick={() => navigate('/create')}
          className="font-body text-sm text-text-tertiary hover:text-accent-primary transition-colors mb-12 flex items-center gap-2 cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to editing
        </button>

        {/* Title section */}
        <ScrollReveal>
          <div className="text-center mb-16">
            {relationshipSummary?.timeline_title ? (
              <h1 className="font-display text-[40px] font-medium text-text-primary mb-4">
                {relationshipSummary.timeline_title}
              </h1>
            ) : (
              <h1 className="font-display text-[40px] font-medium text-text-primary mb-4">
                Your Memory Map
              </h1>
            )}

            {relationshipSummary?.relationship_essence && (
              <p className="font-accent italic text-xl text-text-secondary max-w-[600px] mx-auto">
                {relationshipSummary.relationship_essence}
              </p>
            )}
          </div>
        </ScrollReveal>

        {/* Post-generation message */}
        <ScrollReveal delay={0.2}>
          <p className="text-center font-body text-sm text-text-tertiary mb-12">
            This is your Memory Map. Every point is a real moment, in your own words. Send it to the person who was there.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <ScrollReveal delay={0.3}>
          <MemoryTimeline memories={memories} />
        </ScrollReveal>

        {/* Map */}
        {locationsExist && (
          <ScrollReveal delay={0.2}>
            <div className="mt-16 h-[400px] w-[80%] mx-auto">
              <RelationshipMap memories={memories} />
            </div>
          </ScrollReveal>
        )}

        {/* Theme tags */}
        {relationshipSummary?.dominant_themes && (
          <ScrollReveal delay={0.2}>
            <div className="flex items-center justify-center gap-3 mt-8 flex-wrap">
              {relationshipSummary.dominant_themes.map((theme) => (
                <span
                  key={theme}
                  className="font-body text-xs uppercase tracking-[0.06em] text-accent-primary/70 border border-accent-primary/20 rounded-full px-4 py-1.5"
                >
                  {theme}
                </span>
              ))}
            </div>
          </ScrollReveal>
        )}

        {/* Personal note */}
        <ScrollReveal delay={0.1}>
          <div className="mt-16 max-w-[500px] mx-auto">
            <label className="font-body text-sm text-text-tertiary block mb-2">
              Add a personal note (optional)
            </label>
            <textarea
              value={personalNote}
              onChange={(e) => setPersonalNote(e.target.value)}
              placeholder="A message that appears when they open your Memory Map..."
              rows={3}
              className="w-full bg-bg-secondary border border-border-subtle rounded-lg p-4 font-body text-sm text-text-primary placeholder:text-text-tertiary/50 focus:outline-none focus:border-accent-primary/50 transition-colors resize-none"
            />
          </div>
        </ScrollReveal>

        {/* Share controls */}
        <ShareControls
          memories={memories}
          summary={relationshipSummary}
          personalNote={personalNote}
          relationshipContext={relationshipContext}
        />
      </div>
    </main>
  )
}
