import { useNavigate } from 'react-router-dom'
import Button from '../common/Button.jsx'

export default function ActionBar({ memoryCount }) {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-between py-4 mt-4">
      <span className="font-body text-xs text-text-tertiary">
        {memoryCount} {memoryCount === 1 ? 'memory' : 'memories'}
      </span>

      {memoryCount >= 3 && (
        <Button onClick={() => navigate('/preview')}>
          Preview Your Map
        </Button>
      )}
    </div>
  )
}
