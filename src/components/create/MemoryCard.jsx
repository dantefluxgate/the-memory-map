import { useState } from 'react'
import LoadingSkeleton from '../common/LoadingSkeleton.jsx'

export default function MemoryCard({ memory, index, onDelete }) {
  const [isHovered, setIsHovered] = useState(false)
  const isLeft = index % 2 === 0

  if (memory.loading) {
    return (
      <div
        className={`w-full md:w-[calc(50%-40px)] bg-bg-secondary border border-border-subtle rounded-lg p-6 ${
          isLeft ? 'md:mr-auto' : 'md:ml-auto'
        }`}
      >
        <LoadingSkeleton lines={4} />
      </div>
    )
  }

  return (
    <div
      className={`w-full md:w-[calc(50%-40px)] bg-bg-secondary/80 backdrop-blur-[10px] border border-border-subtle rounded-lg p-6 transition-all duration-200 hover:border-accent-primary/40 hover:scale-[1.01] ${
        isLeft ? 'md:mr-auto animate-slide-left' : 'md:ml-auto animate-slide-right'
      }`}
      style={{ animationFillMode: 'forwards' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Delete button */}
      {onDelete && (
        <button
          onClick={() => onDelete(memory.id)}
          className={`absolute top-3 right-3 text-text-tertiary hover:text-text-primary transition-opacity duration-200 cursor-pointer ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          aria-label="Delete memory"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      )}

      {/* Title */}
      <h3 className="font-display text-xl font-medium text-text-primary mb-1">
        {memory.title}
      </h3>

      {/* Date hint */}
      {memory.date_hint && (
        <p className="font-body text-xs uppercase tracking-[0.08em] text-text-tertiary mb-3">
          {memory.date_hint}
        </p>
      )}

      {/* Excerpt */}
      <p className="font-accent text-base text-text-secondary leading-relaxed mb-4">
        {memory.excerpt}
      </p>

      {/* Bottom row: emotion + location */}
      <div className="flex items-center gap-3 flex-wrap">
        {memory.emotion && (
          <span className="font-body text-[11px] uppercase tracking-[0.06em] text-accent-primary border border-accent-primary/30 rounded-full px-3 py-1">
            {memory.emotion}
          </span>
        )}

        {memory.location?.place_name && (
          <span className="font-body text-xs text-text-tertiary flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {memory.location.place_name}
          </span>
        )}
      </div>
    </div>
  )
}
