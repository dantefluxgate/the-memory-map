import { useNavigate } from 'react-router-dom'
import useScrollReveal from '../../hooks/useScrollReveal.js'

export default function SharedClosing({ summary }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.3 })
  const navigate = useNavigate()

  return (
    <section
      ref={ref}
      className="min-h-[70vh] flex items-center justify-center px-6 py-24 relative overflow-hidden"
    >
      {/* Final warm glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212,165,116,0.05) 0%, transparent 70%)',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 2s ease-out',
        }}
      />

      <div className="text-center max-w-[500px] relative z-10">
        {summary?.relationship_essence && (
          <p
            className={`font-accent italic text-[clamp(20px,3vw,26px)] text-text-secondary leading-[1.6] transition-all duration-1200 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            &ldquo;{summary.relationship_essence}&rdquo;
          </p>
        )}

        {/* Theme tags */}
        {summary?.dominant_themes && (
          <div
            className={`flex items-center justify-center gap-3 mt-8 flex-wrap transition-all duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            {summary.dominant_themes.map((theme) => (
              <span
                key={theme}
                className="font-body text-[10px] uppercase tracking-[0.08em] text-accent-primary/50 border border-accent-primary/15 rounded-full px-4 py-1"
              >
                {theme}
              </span>
            ))}
          </div>
        )}

        {/* Decorative line */}
        <div
          className={`w-12 h-px bg-accent-primary/20 mx-auto my-10 transition-all duration-800 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '0.6s' }}
        />

        <div
          className={`space-y-5 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '0.8s' }}
        >
          <p className="font-body text-[11px] uppercase tracking-[0.15em] text-text-tertiary/40">
            Made with The Memory Map
          </p>
          <button
            onClick={() => navigate('/')}
            className="font-body text-sm text-accent-primary/80 hover:text-accent-secondary transition-all duration-300 cursor-pointer border border-accent-primary/20 rounded-full px-6 py-2 hover:border-accent-primary/40 hover:shadow-[0_0_16px_rgba(212,165,116,0.1)]"
          >
            Create Your Own Memory Map
          </button>
        </div>
      </div>
    </section>
  )
}
