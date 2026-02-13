import MemoryCard from './MemoryCard.jsx'

export default function MemoryTimeline({ memories, onDelete }) {
  if (memories.length === 0) {
    return (
      <div className="py-16 text-center">
        <div className="w-px h-24 bg-accent-primary/10 mx-auto mb-6" style={{ borderLeft: '1px dashed rgba(212,165,116,0.2)' }} />
        <p className="font-body text-sm text-text-tertiary max-w-[360px] mx-auto leading-relaxed">
          Start with any memory. The first time you met. Last Tuesday. The thing they always say. There's no wrong place to begin.
        </p>
      </div>
    )
  }

  return (
    <div className="relative py-8" role="region" aria-label="Memory timeline">
      {/* Timeline spine */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-timeline-line -translate-x-1/2" />

      <ol className="space-y-8 md:space-y-12 list-none p-0 m-0">
        {memories.map((memory, index) => (
          <li key={memory.id} className="relative">
            {/* Timeline node */}
            <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 z-10 w-2 h-2 rounded-full bg-accent-primary animate-node-pulse" />

            <MemoryCard
              memory={memory}
              index={index}
              onDelete={onDelete}
            />
          </li>
        ))}
      </ol>
    </div>
  )
}
