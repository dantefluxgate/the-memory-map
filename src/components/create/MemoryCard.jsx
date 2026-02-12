import { useState } from 'react'
import LoadingSkeleton from '../common/LoadingSkeleton.jsx'

export default function MemoryCard({ memory, index, onDelete }) {
  const [isHovered, setIsHovered] = useState(false)
  const isLeft = index % 2 === 0

  if (memory.loading) {
    return (
      <div
        className={`w-full md:w-[calc(50%-40px)] glass-card rounded-lg p-6 animate-card-enter ${
          isLeft ? 'md:mr-auto' : 'md:ml-auto'
        }`}
        style={{ animationFillMode: 'forwards', opacity: 0 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-breathe" />
          <span className="font-body text-[11px] text-text-tertiary italic">Understanding your memory...</span>
        </div>
        <LoadingSkeleton lines={4} />
      </div>
    )
  }

  return (
    <div
      className={`relative w-full md:w-[calc(50%-40px)] glass-card rounded-lg p-6 animate-card-enter ${
        isLeft ? 'md:mr-auto' : 'md:ml-auto'
      }`}
      style={{ animationFillMode: 'forwards', opacity: 0, animationDelay: '0.1s' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Delete button */}
      {onDelete && (
        <button
          onClick={() => onDelete(memory.id)}
          className={`absolute top-4 right-4 text-text-tertiary hover:text-text-primary transition-all duration-200 cursor-pointer ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
          aria-label="Delete memory"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      )}

      {/* Title */}
      <h3 className="font-display text-xl font-medium text-text-primary mb-1 pr-6">
        {memory.title}
      </h3>

      {/* Date hint */}
      {memory.date_hint && (
        <p className="font-body text-[11px] uppercase tracking-[0.1em] text-text-tertiary mb-3">
          {memory.date_hint}
        </p>
      )}

      {/* Excerpt */}
      <p className="font-accent text-[17px] text-text-secondary leading-relaxed mb-4">
        &ldquo;{memory.excerpt}&rdquo;
      </p>

      {/* Bottom row: emotion + location + tags */}
      <div className="flex items-center gap-2 flex-wrap">
        {memory.emotion && (
          <span className="font-body text-[10px] uppercase tracking-[0.08em] text-accent-primary/80 border border-accent-primary/20 rounded-full px-3 py-1">
            {memory.emotion}
          </span>
        )}

        {memory.location?.place_name && (
          <span className="font-body text-[11px] text-text-tertiary flex items-center gap-1">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {memory.location.place_name}
          </span>
        )}

        {memory.theme_tags?.map((tag) => (
          <span
            key={tag}
            className="font-body text-[10px] text-text-tertiary/60 bg-bg-elevated/50 rounded-full px-2.5 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
