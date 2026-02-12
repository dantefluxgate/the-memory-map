import useScrollReveal from '../../hooks/useScrollReveal.js'

export default function ScrollReveal({ children, className = '', delay = 0, direction = 'up' }) {
  const [ref, isVisible] = useScrollReveal()

  const directionStyles = {
    up: 'translate-y-5',
    left: '-translate-x-[30px]',
    right: 'translate-x-[30px]',
    none: '',
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 translate-x-0'
          : `opacity-0 ${directionStyles[direction]}`
      } ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}
