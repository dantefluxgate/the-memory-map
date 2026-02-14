import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../common/Button.jsx'

export default function CompletionMoment({ memoryCount, recipientName, onAddMore }) {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10">
      <div
        className={`text-center max-w-[500px] transition-all duration-1000 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <p className="font-accent text-[clamp(22px,4vw,30px)] font-light text-text-primary leading-[1.4] mb-3">
          Your map of <span className="text-accent-primary">{recipientName}</span> is taking shape.
        </p>
        <p className="font-body text-sm text-text-tertiary mb-10">
          {memoryCount} {memoryCount === 1 ? 'memory' : 'memories'} captured
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={() => navigate('/preview')}>
            See Your Memory Map
          </Button>
          <button
            onClick={onAddMore}
            className="font-body text-sm text-accent-primary hover:text-accent-secondary
              transition-colors cursor-pointer"
          >
            Add another memory
          </button>
        </div>
      </div>
    </div>
  )
}
