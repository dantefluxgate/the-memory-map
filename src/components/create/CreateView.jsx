import { useState } from 'react'
import MemoryInput from './MemoryInput.jsx'
import MemoryTimeline from './MemoryTimeline.jsx'
import RelationshipMap from './RelationshipMap.jsx'
import ActionBar from './ActionBar.jsx'
import useMemoryProcessor from '../../hooks/useMemoryProcessor.js'

export default function CreateView({
  memories,
  addMemory,
  updateMemory,
  deleteMemory,
  relationshipSummary,
  setRelationshipSummary,
}) {
  const [isProcessing, setIsProcessing] = useState(false)
  const { submitMemory } = useMemoryProcessor({
    addMemory,
    updateMemory,
    memories,
    setRelationshipSummary,
  })

  const handleSubmit = async (text) => {
    setIsProcessing(true)
    await submitMemory(text)
    setIsProcessing(false)
  }

  const progress = Math.min(memories.length / 5, 1) * 100

  return (
    <main className="min-h-screen bg-bg-primary relative">
      {/* Ambient background glow */}
      <div
        className="fixed top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 80% 20%, rgba(212,165,116,0.03) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-2">
          <h1 className="font-display text-3xl font-medium text-text-primary">
            Your Memory Map
          </h1>
          {relationshipSummary?.timeline_title && (
            <p className="font-accent italic text-lg text-text-secondary mt-1">
              {relationshipSummary.timeline_title}
            </p>
          )}
        </div>

        {/* Progress bar */}
        <div className="mb-10">
          <div className="memory-progress">
            <div
              className="memory-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-2">
            <span className="font-body text-[11px] text-text-tertiary/50">
              {memories.length} {memories.length === 1 ? 'memory' : 'memories'}
            </span>
            {memories.length < 3 && (
              <span className="font-body text-[11px] text-text-tertiary/50">
                {3 - memories.length} more to unlock preview
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.65fr] gap-10">
          {/* Left column: input + timeline */}
          <div>
            <div className="sticky top-6 z-20 bg-bg-primary/80 backdrop-blur-md pb-6">
              <MemoryInput onSubmit={handleSubmit} isProcessing={isProcessing} />
            </div>
            <MemoryTimeline memories={memories} onDelete={deleteMemory} />
            <ActionBar memoryCount={memories.length} />
          </div>

          {/* Right column: map */}
          <div className="hidden lg:block">
            <div className="sticky top-6 h-[calc(100vh-96px)] rounded-lg overflow-hidden">
              <RelationshipMap memories={memories} />
            </div>
          </div>
        </div>

        {/* Mobile map (collapsible) */}
        <div className="lg:hidden mt-8">
          <details className="group">
            <summary className="font-body text-sm text-accent-primary cursor-pointer list-none flex items-center gap-2 py-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-open:rotate-90">
                <path d="M9 18l6-6-6-6" />
              </svg>
              View Map
            </summary>
            <div className="mt-2 h-[350px] rounded-lg overflow-hidden">
              <RelationshipMap memories={memories} />
            </div>
          </details>
        </div>
      </div>
    </main>
  )
}
