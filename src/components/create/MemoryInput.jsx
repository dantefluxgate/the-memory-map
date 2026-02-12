import { useState, useRef, useEffect } from 'react'

export default function MemoryInput({ onSubmit, isProcessing }) {
  const [text, setText] = useState('')
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
      <div className="relative group">
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Tell me about a moment you shared..."
          rows={3}
          className="w-full min-h-[120px] max-h-[240px] resize-none bg-bg-secondary border border-border-subtle rounded-lg p-6 pr-14 font-body text-base text-text-primary placeholder:font-accent placeholder:italic placeholder:text-lg placeholder:text-text-tertiary focus:outline-none focus:border-accent-primary focus:shadow-[0_0_20px_rgba(212,165,116,0.15)] transition-all duration-300"
        />

        {/* Voice indicator dot */}
        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-accent-primary/60 animate-breathe" />

        {/* Submit button */}
        <button
          onClick={handleSubmit}
          disabled={!text.trim() || isProcessing}
          className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-accent-primary text-bg-primary flex items-center justify-center transition-all duration-200 hover:bg-accent-secondary hover:shadow-[0_0_20px_rgba(212,165,116,0.25)] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:shadow-none cursor-pointer active:scale-95"
          aria-label="Submit memory"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {isProcessing && (
        <p className="mt-2 font-body text-sm italic text-text-tertiary animate-fade-in">
          Understanding your memory...
        </p>
      )}

      <p className="mt-2 font-body text-xs text-text-tertiary/50">
        Press Ctrl+Enter to submit
      </p>
    </div>
  )
}
