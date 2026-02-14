import { useState, useRef, useEffect } from 'react'

export default function ConversationalPrompt({
  prompt,
  onSubmit,
  isProcessing,
  memoryIndex,
}) {
  const [text, setText] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const textareaRef = useRef(null)

  // Fade in on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Auto-focus textarea after prompt animation
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => textareaRef.current?.focus(), 900)
      return () => clearTimeout(timer)
    }
  }, [isVisible])

  // Auto-grow textarea
  useEffect(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = Math.min(el.scrollHeight, 200) + 'px'
  }, [text])

  const handleSubmit = () => {
    const trimmed = text.trim()
    if (!trimmed || isProcessing) return
    onSubmit(trimmed)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10">
      {/* The conversational prompt */}
      <p
        className={`font-accent text-[clamp(22px,4vw,32px)] font-light text-text-primary text-center
          max-w-[600px] leading-[1.4] transition-all duration-1000 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        {prompt}
      </p>

      {/* Borderless textarea — feels like writing on air */}
      <div
        className={`mt-10 w-full max-w-[560px] transition-all duration-1000 ease-out
          ${isVisible ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-4'}`}
      >
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isProcessing}
          placeholder="Speak or type your memory..."
          rows={2}
          className="w-full bg-transparent text-center font-body text-lg text-text-primary
            placeholder:font-accent placeholder:italic placeholder:text-text-tertiary/40
            resize-none pb-4 transition-colors duration-500"
          style={{
            border: 'none',
            borderBottom: '1px solid rgba(212, 165, 116, 0.15)',
            outline: 'none',
            boxShadow: 'none',
          }}
          onFocus={(e) => { e.target.style.borderBottomColor = 'rgba(212, 165, 116, 0.4)'; e.target.style.outline = 'none' }}
          onBlur={(e) => { e.target.style.borderBottomColor = 'rgba(212, 165, 116, 0.15)' }}
        />

        {/* Voice indicator — subtle breathing dot */}
        <div className="flex justify-center mt-4">
          <div className="w-1.5 h-1.5 rounded-full bg-accent-primary/60 animate-breathe" />
        </div>

        {/* Submit — appears when there's text */}
        <div
          className={`mt-6 flex justify-center transition-all duration-500
            ${text.trim() ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
        >
          <button
            onClick={handleSubmit}
            disabled={!text.trim() || isProcessing}
            className="font-body text-sm text-accent-primary hover:text-accent-secondary
              transition-colors cursor-pointer flex items-center gap-2"
          >
            Save this memory
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Wispr Flow hint */}
        <p
          className={`mt-4 text-center font-body text-[11px] text-text-tertiary/30
            transition-all duration-500
            ${isVisible ? 'opacity-100 delay-700' : 'opacity-0'}`}
        >
          Speak naturally with Wispr Flow, or type
        </p>
      </div>

      {/* Memory counter dots — subtle bottom indicator */}
      {memoryIndex > 0 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-2">
            {Array.from({ length: memoryIndex }).map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-accent-primary/40"
              />
            ))}
            <div className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-breathe" />
          </div>
        </div>
      )}
    </div>
  )
}
