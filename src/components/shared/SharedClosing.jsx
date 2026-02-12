import { useNavigate } from 'react-router-dom'
import useScrollReveal from '../../hooks/useScrollReveal.js'

export default function SharedClosing({ summary }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.3 })
  const navigate = useNavigate()

  return (
    <section
      ref={ref}
      className="min-h-[60vh] flex items-center justify-center px-6 py-20"
    >
      <div className="text-center max-w-[500px]">
        {summary?.relationship_essence && (
          <p
            className={`font-accent italic text-2xl text-text-secondary leading-relaxed transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            {summary.relationship_essence}
          </p>
        )}

        <div
          className={`mt-16 space-y-4 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '0.5s' }}
        >
          <p className="font-body text-xs text-text-tertiary">
            Made with The Memory Map
          </p>
          <button
            onClick={() => navigate('/')}
            className="font-body text-sm text-accent-primary hover:text-accent-secondary transition-colors cursor-pointer"
          >
            Create Your Own
          </button>
        </div>
      </div>
    </section>
  )
}
