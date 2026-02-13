import { useState } from 'react'
import ParticleField from '../common/ParticleField.jsx'

const relationshipTypes = [
  { id: 'partner', label: 'My Partner', sub: 'romantic love' },
  { id: 'friend', label: 'My Best Friend', sub: 'the one who gets it' },
  { id: 'parent', label: 'My Parent', sub: 'who shaped me' },
  { id: 'sibling', label: 'My Sibling', sub: 'built-in best friend' },
  { id: 'grandparent', label: 'My Grandparent', sub: 'living history' },
  { id: 'other', label: 'Someone Special', sub: 'in my own words' },
]

export default function RelationshipIntro({ onComplete }) {
  const [name, setName] = useState('')
  const [selectedType, setSelectedType] = useState(null)
  const [phase, setPhase] = useState(0) // 0=name, 1=type, 2=transitioning

  const handleNameSubmit = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    setPhase(1)
  }

  const handleTypeSelect = (type) => {
    setSelectedType(type)
    setPhase(2)
    // Brief pause for the transition animation
    setTimeout(() => {
      onComplete({ name: name.trim(), type: type.id, typeLabel: type.label })
    }, 600)
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Gentle ambient particle drift behind intro */}
      <ParticleField mode="ambient" intensity={0.4} />

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none animate-glow-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(212,165,116,0.06) 0%, transparent 60%)',
        }}
      />

      <div
        className={`text-center max-w-[560px] relative z-10 transition-all duration-700 ease-out ${
          phase === 2 ? 'opacity-0 translate-y-[-20px]' : 'opacity-100'
        }`}
      >
        {/* Phase 0: Ask for name */}
        {phase === 0 && (
          <form onSubmit={handleNameSubmit} className="animate-fade-up" style={{ animationFillMode: 'forwards' }}>
            <p className="font-accent text-[clamp(24px,4vw,32px)] font-light text-text-primary leading-[1.3] mb-10">
              Who is this Memory Map for?
            </p>

            <div className="relative max-w-[400px] mx-auto">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Their first name"
                autoFocus
                className="w-full bg-transparent border-0 border-b-2 border-accent-primary/20 focus:border-accent-primary/60 text-center font-display text-[clamp(28px,5vw,40px)] font-medium text-text-primary placeholder:text-text-tertiary/30 focus:outline-none pb-3 transition-all duration-300"
              />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent-primary transition-all duration-500" style={{ width: name ? '100%' : '0%' }} />
            </div>

            <button
              type="submit"
              disabled={!name.trim()}
              className={`mt-10 font-body text-sm tracking-wide transition-all duration-500 cursor-pointer ${
                name.trim()
                  ? 'text-accent-primary opacity-100 translate-y-0'
                  : 'text-text-tertiary/30 opacity-0 translate-y-2 pointer-events-none'
              }`}
            >
              Continue
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block ml-2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        )}

        {/* Phase 1: Ask for relationship type */}
        {phase >= 1 && phase < 2 && (
          <div className="animate-fade-up" style={{ animationFillMode: 'forwards' }}>
            <p className="font-accent text-[clamp(20px,3.5vw,28px)] font-light text-text-primary leading-[1.3] mb-3">
              <span className="text-accent-primary">{name.trim()}</span> is...
            </p>
            <p className="font-body text-sm text-text-tertiary/60 mb-10">
              This helps us understand the tone of your memories
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-[480px] mx-auto">
              {relationshipTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => handleTypeSelect(type)}
                  className="group glass-card rounded-lg px-4 py-5 text-center cursor-pointer transition-all duration-300 hover:border-accent-primary/30 hover:bg-bg-elevated/60 active:scale-[0.97]"
                >
                  <span className="font-body text-sm font-medium text-text-primary block">
                    {type.label}
                  </span>
                  <span className="font-body text-[10px] text-text-tertiary/50 mt-1 block">
                    {type.sub}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Phase 2: Selected confirmation (brief flash) */}
        {phase === 2 && selectedType && (
          <div className="animate-fade-in">
            <p className="font-accent text-[clamp(22px,4vw,30px)] font-light text-text-primary">
              A Memory Map for <span className="text-accent-primary">{name.trim()}</span>
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
