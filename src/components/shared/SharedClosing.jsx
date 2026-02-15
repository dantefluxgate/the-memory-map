import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useScrollReveal from '../../hooks/useScrollReveal.js'

export default function SharedClosing({ summary, particleRef }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.25 })
  const [phase, setPhase] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    if (isVisible) {
      // Fire particle burst for the finale + shift to warm gold
      particleRef?.current?.burst()
      particleRef?.current?.setColor(0xd4a574)
      const t1 = setTimeout(() => setPhase(1), 300)
      const t2 = setTimeout(() => setPhase(2), 1200)
      const t3 = setTimeout(() => setPhase(3), 2000)
      return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
    }
  }, [isVisible])

  return (
    <section
      ref={ref}
      className="min-h-[80vh] flex items-center justify-center px-6 py-24 relative overflow-hidden"
    >
      {/* Warm glow — larger and more atmospheric */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212,165,116,0.08) 0%, transparent 65%)',
          opacity: phase >= 1 ? 1 : 0,
          transition: 'opacity 2.5s ease-out',
        }}
      />

      <div className="text-center max-w-[550px] relative z-10">
        {/* Valentine's heart top element */}
        <div
          className={`mx-auto mb-10 transition-all duration-1000 ${
            phase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mx-auto text-accent-primary/40 heart-glow animate-heart-beat"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </div>

        {/* Relationship essence — the emotional climax */}
        {summary?.relationship_essence && (
          <p
            className={`font-accent italic text-[clamp(22px,4vw,30px)] text-text-secondary leading-[1.6] transition-all duration-[1500ms] ease-out ${
              phase >= 1 ? 'opacity-100 translate-y-0 animate-text-glow' : 'opacity-0 translate-y-8'
            }`}
            style={{ filter: phase >= 1 ? 'blur(0)' : 'blur(4px)' }}
          >
            &ldquo;{summary.relationship_essence}&rdquo;
          </p>
        )}

        {/* Theme tags */}
        {summary?.dominant_themes && (
          <div
            className={`flex items-center justify-center gap-3 mt-10 flex-wrap transition-all duration-800 ${
              phase >= 2 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {summary.dominant_themes.map((theme, i) => (
              <span
                key={theme}
                className="font-body text-[9px] uppercase tracking-[0.1em] text-accent-primary/45 border border-accent-primary/12 rounded-full px-4 py-1 animate-stagger-up"
                style={{ animationDelay: `${i * 0.15}s`, opacity: 0, animationFillMode: 'forwards' }}
              >
                {theme}
              </span>
            ))}
          </div>
        )}

        {/* Decorative line */}
        <div
          className={`w-20 h-px bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent mx-auto my-12 transition-all duration-1000 ${
            phase >= 2 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transformOrigin: 'center', transform: phase >= 2 ? 'scaleX(1)' : 'scaleX(0)' }}
        />

        {/* CTA section */}
        <div
          className={`space-y-6 transition-all duration-800 ease-out ${
            phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="font-body text-[10px] uppercase tracking-[0.2em] text-text-tertiary/30 flex items-center justify-center gap-2">
            Made with love on
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-accent-primary/40">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            The Memory Map
          </p>
          <button
            onClick={() => navigate('/')}
            className="group font-body text-sm text-accent-primary/80 hover:text-accent-secondary transition-all duration-500 cursor-pointer border border-accent-primary/20 rounded-full px-8 py-2.5 hover:border-accent-primary/40 relative overflow-hidden"
          >
            {/* Hover glow effect */}
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ boxShadow: '0 0 24px rgba(212,165,116,0.12), inset 0 0 24px rgba(212,165,116,0.06)' }}
            />
            <span className="relative z-10">Make One for Your Valentine</span>
          </button>
        </div>
      </div>
    </section>
  )
}
