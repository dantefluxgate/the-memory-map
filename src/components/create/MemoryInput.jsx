import { useState, useRef, useEffect } from 'react'

export default function MemoryInput({ onSubmit, isProcessing, recipientName }) {
  const [text, setText] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const textareaRef = useRef(null)

  useEffect(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = Math.min(el.scrollHeight, 240) + 'px'
  }, [text])

  const handleSubmit = () => {
    const trimmed = text.trim()
    if (!trimmed || isProcessing) return
    onSubmit(trimmed)
    setText('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div className="relative">
      <div className={`relative group rounded-xl transition-all duration-500 ${isFocused ? 'shadow-[0_0_40px_rgba(212,165,116,0.08)]' : ''}`}>
        {/* Glow border effect on focus */}
        <div className={`absolute -inset-px rounded-xl bg-gradient-to-b from-accent-primary/20 to-transparent transition-opacity duration-500 ${isFocused ? 'opacity-100' : 'opacity-0'}`} />

        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={recipientName ? `Tell me about a moment with ${recipientName}...` : 'Tell me about a moment you shared...'}
          rows={3}
          className="relative w-full min-h-[130px] max-h-[240px] resize-none bg-bg-secondary/90 backdrop-blur-sm border border-border-subtle rounded-xl p-6 pr-14 font-body text-base text-text-primary placeholder:font-accent placeholder:italic placeholder:text-lg placeholder:text-text-tertiary/60 focus:outline-none focus:border-accent-primary/30 transition-all duration-300"
        />

        {/* Voice indicator dot */}
        <div className="absolute top-5 right-5 w-2 h-2 rounded-full bg-accent-primary animate-breathe" />

        {/* Submit button */}
        <button
          onClick={handleSubmit}
          disabled={!text.trim() || isProcessing}
          className={`absolute bottom-5 right-5 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-90 ${
            text.trim() && !isProcessing
              ? 'bg-accent-primary text-bg-primary shadow-[0_0_16px_rgba(212,165,116,0.3)] hover:bg-accent-secondary hover:shadow-[0_0_24px_rgba(212,165,116,0.4)]'
              : 'bg-bg-elevated text-text-tertiary/30 cursor-not-allowed'
          }`}
          aria-label="Submit memory"
        >
          {isProcessing ? (
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v4m0 12v4m-7.07-3.93l2.83-2.83m8.49-8.49l2.83-2.83M2 12h4m12 0h4M4.93 4.93l2.83 2.83m8.49 8.49l2.83 2.83" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          )}
        </button>
      </div>

      {isProcessing && (
        <div className="mt-3 flex items-center gap-2 animate-fade-in">
          <div className="w-1 h-1 rounded-full bg-accent-primary animate-breathe" />
          <p className="font-body text-[12px] text-text-tertiary">
            Understanding your memory...
          </p>
        </div>
      )}

      {!isProcessing && (
        <p className="mt-3 font-body text-[11px] text-text-tertiary/30">
          Press Ctrl+Enter to submit &middot; Speak naturally, we'll organize it
        </p>
      )}
    </div>
  )
}
