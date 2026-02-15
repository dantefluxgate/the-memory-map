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
      const timer = setTimeout(() => textareaRef.current?.focus(), 500)
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
    if (e.key === 'Enter' && !e.shiftKey) {
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
          placeholder="Tell your story here..."
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

        {/* Heart indicator — subtle breathing heart */}
        <div className="flex justify-center mt-4">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-accent-primary/50 animate-breathe">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
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
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="opacity-70">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </div>

        {/* Keyboard hint */}
        <p
          className={`mt-4 text-center font-body text-[11px] text-text-tertiary/30
            transition-all duration-500
            ${isVisible ? 'opacity-100 delay-700' : 'opacity-0'}`}
        >
          Press Enter to save
        </p>
      </div>

      {/* Memory counter hearts — subtle bottom indicator */}
      {memoryIndex > 0 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-2">
            {Array.from({ length: memoryIndex }).map((_, i) => (
              <svg key={i} width="8" height="8" viewBox="0 0 24 24" fill="currentColor" className="text-accent-primary/40">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            ))}
            <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor" className="text-accent-primary animate-breathe">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}
