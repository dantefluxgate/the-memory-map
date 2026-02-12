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

  return (
    <main className="min-h-screen bg-bg-primary">
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-2xl font-medium text-text-primary">
            Your Memory Map
          </h1>
          {relationshipSummary?.timeline_title && (
            <p className="font-accent italic text-lg text-text-secondary mt-1">
              {relationshipSummary.timeline_title}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.7fr] gap-8">
          {/* Left column: input + timeline */}
          <div>
            <div className="sticky top-8 z-20 bg-bg-primary pb-4">
              <MemoryInput onSubmit={handleSubmit} isProcessing={isProcessing} />
            </div>
            <MemoryTimeline memories={memories} onDelete={deleteMemory} />
            <ActionBar memoryCount={memories.length} />
          </div>

          {/* Right column: map */}
          <div className="hidden lg:block">
            <div className="sticky top-8 h-[calc(100vh-64px)]">
              <RelationshipMap memories={memories} />
            </div>
          </div>
        </div>

        {/* Mobile map (collapsible) */}
        <div className="lg:hidden mt-8">
          <details className="group">
            <summary className="font-body text-sm text-accent-primary cursor-pointer list-none flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-open:rotate-90">
                <path d="M9 18l6-6-6-6" />
              </svg>
              View Map
            </summary>
            <div className="mt-4 h-[300px]">
              <RelationshipMap memories={memories} />
            </div>
          </details>
        </div>
      </div>
    </main>
  )
}
