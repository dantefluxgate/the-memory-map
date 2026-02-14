import { useMemo } from 'react'

/**
 * Ambient floating hearts that drift upward — Valentine's Day atmosphere.
 * Pure CSS animation, no JS runtime cost.
 */
export default function FloatingHearts({ count = 12, opacity = 0.08 }) {
  const hearts = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${5 + (i * 89) % 90}%`, // Pseudo-random spread across viewport
      size: 10 + (i * 7) % 16,        // 10-25px
      delay: `${(i * 2.3) % 8}s`,
      duration: `${12 + (i * 3.7) % 10}s`,
      opacity: opacity * (0.5 + ((i * 13) % 10) / 10), // Vary opacity
    }))
  }, [count, opacity])

  return (
    <div className="floating-hearts">
      {hearts.map((h) => (
        <svg
          key={h.id}
          className="heart"
          width={h.size}
          height={h.size}
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{
            left: h.left,
            animationDuration: h.duration,
            animationDelay: h.delay,
            color: `rgba(200, 140, 140, ${h.opacity})`,
          }}
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ))}
    </div>
  )
}
