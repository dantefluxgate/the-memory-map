import { useState } from 'react'
import Button from '../common/Button.jsx'
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
      `I made a Memory Map for someone I care about. Check it out:`
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
    <div className="text-center py-12">
      <h3 className="font-body text-base uppercase tracking-[0.1em] text-text-secondary mb-8">
        Share This Memory Map
      </h3>

      {!shareUrl ? (
        <Button onClick={handleGenerate} disabled={generating}>
          {generating ? (
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v4m0 12v4m-7.07-3.93l2.83-2.83m8.49-8.49l2.83-2.83M2 12h4m12 0h4M4.93 4.93l2.83 2.83m8.49 8.49l2.83 2.83" />
              </svg>
              Creating your link...
            </span>
          ) : (
            'Generate Share Link'
          )}
        </Button>
      ) : (
        <div className="space-y-4 animate-fade-up" style={{ animationFillMode: 'forwards' }}>
          <div className="flex items-center gap-2 max-w-[500px] mx-auto">
            <input
              type="text"
              readOnly
              value={shareUrl}
              className="flex-1 bg-bg-secondary border border-border-subtle rounded px-4 py-3 font-body text-sm text-text-secondary truncate"
            />
            <Button variant="secondary" onClick={handleCopy}>
              {copied ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              ) : (
                'Copy'
              )}
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-2">
            <button
              onClick={shareToX}
              className="text-text-tertiary hover:text-accent-primary transition-colors cursor-pointer"
              aria-label="Share on X"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </button>
            <button
              onClick={shareToLinkedIn}
              className="text-text-tertiary hover:text-accent-primary transition-colors cursor-pointer"
              aria-label="Share on LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
