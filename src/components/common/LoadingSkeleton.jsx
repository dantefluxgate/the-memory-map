export default function LoadingSkeleton({ lines = 3 }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 rounded animate-shimmer"
          style={{ width: i === lines - 1 ? '60%' : i === 0 ? '80%' : '100%' }}
        />
      ))}
    </div>
  )
}
