import { useState } from 'react'
import { generateShareUrl } from '../../utils/shareLink.js'

export default function ShareControls({ memories, summary, personalNote, relationshipContext }) {
  const [shareUrl, setShareUrl] = useState('')
  const [copied, setCopied] = useState(false)
  const [generating, setGenerating] = useState(false)

  const handleGenerate = () => {
    setGenerating(true)
    setTimeout(() => {
      const url = generateShareUrl(memories, summary, personalNote, relationshipContext)
      setShareUrl(url)
      setGenerating(false)
    }, 600)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const input = document.createElement('input')
      input.value = shareUrl
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const shareToX = () => {
    const text = encodeURIComponent(
      `I made a Valentine's Memory Map for someone I love.`
    )
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(shareUrl)}`,
      '_blank'
    )
  }

  const shareToLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      '_blank'
    )
  }

  return (
    <div className="text-center py-8 max-w-[480px] px-6" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
      {!shareUrl ? (
        <button
          onClick={handleGenerate}
          disabled={generating}
          className="group relative font-body text-sm text-accent-primary hover:text-accent-secondary transition-all duration-500 cursor-pointer border border-accent-primary/25 rounded-full px-10 py-3 hover:border-accent-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {/* Hover glow */}
          <span
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ boxShadow: '0 0 30px rgba(212,165,116,0.12), inset 0 0 20px rgba(212,165,116,0.05)' }}
          />
          <span className="relative z-10 flex items-center justify-center gap-2">
            {generating ? (
              <>
                <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v4m0 12v4m-7.07-3.93l2.83-2.83m8.49-8.49l2.83-2.83M2 12h4m12 0h4M4.93 4.93l2.83 2.83m8.49 8.49l2.83 2.83" />
                </svg>
                Creating your link...
              </>
            ) : (
              <>
                Create Share Link
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="opacity-60">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </>
            )}
          </span>
        </button>
      ) : (
        <div className="space-y-5 animate-fade-up" style={{ animationFillMode: 'forwards' }}>
          {/* URL display */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={shareUrl}
              className="flex-1 bg-transparent border-b border-border-subtle px-2 py-2.5 font-body text-xs text-text-secondary/70 truncate text-center"
              style={{ outline: 'none' }}
            />
            <button
              onClick={handleCopy}
              className="font-body text-xs text-accent-primary/80 hover:text-accent-secondary border border-accent-primary/20 rounded-full px-4 py-2 hover:border-accent-primary/40 transition-all duration-300 cursor-pointer shrink-0"
            >
              {copied ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              ) : (
                'Copy'
              )}
            </button>
          </div>

          {/* Social share */}
          <div className="flex items-center justify-center gap-5 pt-1">
            <button
              onClick={shareToX}
              className="text-text-tertiary/40 hover:text-accent-primary transition-colors duration-300 cursor-pointer"
              aria-label="Share on X"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </button>
            <button
              onClick={shareToLinkedIn}
              className="text-text-tertiary/40 hover:text-accent-primary transition-colors duration-300 cursor-pointer"
              aria-label="Share on LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
