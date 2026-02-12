import ScrollReveal from '../common/ScrollReveal.jsx'

const steps = [
  {
    number: '1',
    label: 'Share your memories',
    description: 'Talk or type about moments that matter',
  },
  {
    number: '2',
    label: 'Watch it take shape',
    description: 'Each memory becomes a point on your timeline',
  },
  {
    number: '3',
    label: 'Send it as a gift',
    description: "Share a link they'll actually want to keep",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-[120px] px-6">
      <div className="max-w-[900px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-[32px] left-[16.6%] right-[16.6%] h-px bg-accent-primary/20" />

          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.15}>
              <div className="text-center">
                <span className="font-accent italic text-[48px] text-accent-primary/60 leading-none">
                  {step.number}
                </span>
                <h3 className="font-body text-sm uppercase tracking-[0.1em] text-text-primary mt-4 mb-2">
                  {step.label}
                </h3>
                <p className="font-body text-base text-text-secondary">
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
