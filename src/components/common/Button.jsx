export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'font-body font-semibold text-base tracking-wide transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-accent-primary focus-visible:outline-offset-2'

  const variants = {
    primary:
      'bg-accent-primary text-bg-primary px-10 py-4 rounded-[4px] hover:bg-accent-secondary hover:shadow-[0_0_24px_rgba(212,165,116,0.25)] active:scale-[0.98]',
    secondary:
      'bg-transparent text-accent-primary border border-accent-primary/30 px-8 py-3 rounded-[4px] hover:border-accent-primary/60 hover:bg-accent-primary/5 active:scale-[0.98]',
    ghost:
      'bg-transparent text-accent-primary px-4 py-2 hover:text-accent-secondary',
    icon:
      'bg-accent-primary text-bg-primary w-10 h-10 rounded-full flex items-center justify-center hover:bg-accent-secondary hover:shadow-[0_0_20px_rgba(212,165,116,0.25)] active:scale-95',
  }

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
