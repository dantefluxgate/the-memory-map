import ScrollReveal from '../common/ScrollReveal.jsx'

const steps = [
  {
    number: '1',
    label: 'Remember',
    description: 'Talk or type about the moments you never want to forget',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent-primary/50">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    number: '2',
    label: 'Watch it come alive',
    description: 'Each memory becomes part of your love map',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-accent-primary/50">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    number: '3',
    label: 'Send it with love',
    description: "A Valentine's gift made entirely from your time together",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent-primary/50">
        <path d="M22 2L11 13" /><path d="M22 2L15 22l-4-9-9-4 20-7z" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section className="py-[120px] px-6 relative overflow-hidden">
      {/* Ambient glow behind section */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212,165,116,0.05) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-[900px] relative z-10" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        {/* Section heading */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-body text-[10px] uppercase tracking-[0.2em] text-accent-primary/50 mb-3">
              How it works
            </p>
            <h2 className="font-display text-[clamp(24px,4vw,36px)] font-medium text-text-primary">
              Three steps to something beautiful
            </h2>
            <div
              className="mt-4"
              style={{
                width: '40px',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(224,176,128,0.30), transparent)',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
          {/* Connecting line (desktop only) */}
          <div
            className="hidden md:block absolute top-[60px] left-[20%] right-[20%] h-px pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(224,176,128,0.15), rgba(224,176,128,0.15), transparent)',
            }}
          />

          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.15}>
              <div className="step-card-glass text-center">
                {/* Glowing number */}
                <div className="step-number-glow inline-block mb-4">
                  <span className="font-accent italic text-[48px] text-accent-primary/70 leading-none">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-3">
                  {step.icon}
                </div>

                <h3 className="font-body text-sm uppercase tracking-[0.1em] text-text-primary mb-2">
                  {step.label}
                </h3>
                <p className="font-body text-base text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
