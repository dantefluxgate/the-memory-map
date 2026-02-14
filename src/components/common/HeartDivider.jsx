/**
 * A decorative heart divider for between sections.
 * Valentine's Day visual punctuation.
 */
export default function HeartDivider({ size = 14, className = '' }) {
  return (
    <div className={`heart-divider py-6 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-accent-primary/30 heart-glow animate-heart-beat"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </div>
  )
}
