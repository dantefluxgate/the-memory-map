import { useState, useRef, useCallback, useEffect } from 'react'
import ParticleField from '../common/ParticleField.jsx'
import FloatingHearts from '../common/FloatingHearts.jsx'
import RelationshipIntro from './RelationshipIntro.jsx'
import ConversationalPrompt from './ConversationalPrompt.jsx'
import MemoryReveal from './MemoryReveal.jsx'
import CompletionMoment from './CompletionMoment.jsx'
import useMemoryProcessor from '../../hooks/useMemoryProcessor.js'
import { getPrompt } from './promptSequence.js'

/**
 * Cinematic memory creation flow.
 *
 * State machine:
 *   prompting  → user submits text  → processing (particle burst fires)
 *   processing → API returns        → revealing (glass card appears)
 *   revealing  → user clicks Continue → prompting (next prompt) OR complete (≥3 memories)
 *   complete   → user clicks "Add more" → prompting
 */
export default function CreateView({
  memories,
  addMemory,
  updateMemory,
  deleteMemory,
  relationshipContext,
  setRelationshipContext,
  relationshipSummary,
  setRelationshipSummary,
}) {
  const [phase, setPhase] = useState('prompting')
  const [currentPrompt, setCurrentPrompt] = useState('')
  const [revealingMemoryId, setRevealingMemoryId] = useState(null)
  const [transitionKey, setTransitionKey] = useState(0)
  const particleRef = useRef(null)

  const { submitMemory } = useMemoryProcessor({
    addMemory,
    updateMemory,
    memories,
    setRelationshipSummary,
    relationshipContext,
  })

  // Set initial prompt when relationship context arrives
  useEffect(() => {
    if (relationshipContext && !currentPrompt) {
      setCurrentPrompt(getPrompt(memories.length, relationshipContext.name))
    }
  }, [relationshipContext])

  // Watch for revealing memory to finish loading → transition to reveal
  const revealingMemory = memories.find((m) => m.id === revealingMemoryId)

  useEffect(() => {
    if (phase === 'processing' && revealingMemory && !revealingMemory.loading) {
      setPhase('revealing')
    }
  }, [phase, revealingMemory?.loading])

  const handleSubmit = useCallback(
    (text) => {
      // Fire particle burst
      particleRef.current?.burst()

      // Submit memory (synchronous: returns tempId, API runs async)
      const tempId = submitMemory(text)
      setRevealingMemoryId(tempId)
      setPhase('processing')
    },
    [submitMemory]
  )

  const handleRevealContinue = useCallback(() => {
    if (memories.length >= 3) {
      // Trigger heart formation for the completion moment
      particleRef.current?.setHeartMode('heart')
      setPhase('complete')
    } else {
      setCurrentPrompt(getPrompt(memories.length, relationshipContext.name))
      setTransitionKey((k) => k + 1)
      setPhase('prompting')
    }
  }, [memories.length, relationshipContext])

  const handleAddMore = useCallback(() => {
    particleRef.current?.setHeartMode('none')
    setCurrentPrompt(getPrompt(memories.length, relationshipContext.name))
    setTransitionKey((k) => k + 1)
    setPhase('prompting')
  }, [memories.length, relationshipContext])

  // Show intro step if no relationship context set yet
  if (!relationshipContext) {
    return (
      <main className="min-h-screen bg-bg-primary">
        <RelationshipIntro onComplete={setRelationshipContext} />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-bg-primary relative overflow-hidden">
      {/* Full-screen particle backdrop */}
      <ParticleField
        ref={particleRef}
        mode={phase === 'complete' ? 'heart' : 'drift'}
        intensity={phase === 'processing' ? 0.8 : phase === 'complete' ? 0.7 : 0.5}
        fixed
      />

      {/* Floating hearts — Valentine's Day atmosphere */}
      <FloatingHearts count={10} opacity={0.05} />

      {/* Ambient center glow */}
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]
          rounded-full pointer-events-none animate-glow-pulse"
        style={{
          background:
            'radial-gradient(circle, rgba(212,165,116,0.05) 0%, transparent 60%)',
        }}
      />

      {/* Phase: Conversational Prompt */}
      {phase === 'prompting' && (
        <ConversationalPrompt
          key={transitionKey}
          prompt={currentPrompt}
          onSubmit={handleSubmit}
          isProcessing={false}
          memoryIndex={memories.length}
        />
      )}

      {/* Phase: Processing (particle burst active, waiting for API) */}
      {phase === 'processing' && revealingMemory?.loading && (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10">
          <div className="text-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mx-auto mb-4 text-accent-primary animate-heart-beat heart-glow">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <p className="font-accent text-lg text-text-tertiary italic animate-fade-in">
              Understanding your memory...
            </p>
          </div>
        </div>
      )}

      {/* Phase: Memory Reveal */}
      {(phase === 'revealing' || (phase === 'processing' && revealingMemory && !revealingMemory.loading)) &&
        revealingMemory && (
          <MemoryReveal
            memory={revealingMemory}
            onContinue={handleRevealContinue}
          />
        )}

      {/* Phase: Completion — heart constellation active */}
      {phase === 'complete' && (
        <CompletionMoment
          memoryCount={memories.length}
          recipientName={relationshipContext.name}
          onAddMore={handleAddMore}
        />
      )}
    </main>
  )
}
