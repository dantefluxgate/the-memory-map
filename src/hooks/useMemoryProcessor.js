import { useCallback } from 'react'
import { processMemory, generateRelationshipSummary } from '../utils/api.js'

export default function useMemoryProcessor({ addMemory, updateMemory, memories, setRelationshipSummary, relationshipContext }) {
  const submitMemory = useCallback((text) => {
    const tempId = Date.now().toString()
    const placeholderMemory = {
      id: tempId,
      rawText: text,
      loading: true,
      title: null,
      date_hint: null,
      location: null,
      emotion: null,
      excerpt: null,
      theme_tags: [],
    }

    addMemory(placeholderMemory)

    // Fire-and-forget: API call runs async, updates memory when done
    processMemory(text, relationshipContext)
      .then((processed) => {
        updateMemory(tempId, {
          ...processed,
          loading: false,
          rawText: text,
        })

        const updatedCount = memories.length + 1
        if (updatedCount >= 3) {
          const allMemories = [...memories.map(m => m.rawText || m.excerpt), text]
          generateRelationshipSummary(allMemories, relationshipContext)
            .then((summary) => setRelationshipSummary(summary))
            .catch((e) => console.error('Summary generation failed:', e))
        }
      })
      .catch((error) => {
        console.error('Memory processing failed:', error)
        // Smart fallback: extract a title from the user's own words
        const words = text.trim().split(/\s+/)
        const titleWords = words.slice(0, Math.min(6, words.length))
        let fallbackTitle = titleWords.join(' ')
        if (words.length > 6) fallbackTitle += '...'
        fallbackTitle = fallbackTitle.charAt(0).toUpperCase() + fallbackTitle.slice(1)

        updateMemory(tempId, {
          loading: false,
          title: fallbackTitle || 'A moment remembered',
          excerpt: text,
          emotion: 'nostalgia',
          theme_tags: ['personal'],
        })
      })

    // Return tempId synchronously so caller can track this memory
    return tempId
  }, [addMemory, updateMemory, memories, setRelationshipSummary, relationshipContext])

  return { submitMemory }
}
