import { useNavigate } from 'react-router-dom'
import Button from '../common/Button.jsx'

export default function ActionBar({ memoryCount, onScrollToInput }) {
  const navigate = useNavigate()

  return (
    <>
      {/* Desktop: inline */}
      <div className="hidden md:flex items-center justify-between py-4 mt-4">
        <span className="font-body text-xs text-text-tertiary">
          {memoryCount} {memoryCount === 1 ? 'memory' : 'memories'}
        </span>

        <div className="flex items-center gap-4">
          {memoryCount > 0 && (
            <button
              onClick={onScrollToInput}
              className="font-body text-sm text-accent-primary hover:text-accent-secondary transition-colors cursor-pointer"
            >
              Add Another Memory
            </button>
          )}

          {memoryCount >= 3 && (
            <Button onClick={() => navigate('/preview')}>
              Preview Your Map
            </Button>
          )}
        </div>
      </div>

      {/* Mobile: fixed bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-bg-primary/90 backdrop-blur-md border-t border-border-subtle px-6 py-3 flex items-center justify-between">
        <span className="font-body text-xs text-text-tertiary">
          {memoryCount} {memoryCount === 1 ? 'memory' : 'memories'}
        </span>

        <div className="flex items-center gap-3">
          {memoryCount > 0 && (
            <button
              onClick={onScrollToInput}
              className="font-body text-sm text-accent-primary cursor-pointer"
            >
              + Add
            </button>
          )}

          {memoryCount >= 3 && (
            <Button onClick={() => navigate('/preview')}>
              Preview
            </Button>
          )}
        </div>
      </div>

      {/* Spacer for fixed bottom bar on mobile */}
      <div className="md:hidden h-16" />
    </>
  )
}
