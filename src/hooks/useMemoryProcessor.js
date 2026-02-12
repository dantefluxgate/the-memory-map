import { useCallback } from 'react'
import { processMemory, generateRelationshipSummary } from '../utils/api.js'

export default function useMemoryProcessor({ addMemory, updateMemory, memories, setRelationshipSummary }) {
  const submitMemory = useCallback(async (text) => {
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

    try {
      const processed = await processMemory(text)
      updateMemory(tempId, {
        ...processed,
        loading: false,
        rawText: text,
      })

      const updatedCount = memories.length + 1
      if (updatedCount >= 3) {
        const allMemories = [...memories.map(m => m.rawText || m.excerpt), text]
        try {
          const summary = await generateRelationshipSummary(allMemories)
          setRelationshipSummary(summary)
        } catch (e) {
          console.error('Summary generation failed:', e)
        }
      }
    } catch (error) {
      console.error('Memory processing failed:', error)
      updateMemory(tempId, {
        loading: false,
        title: 'A moment remembered',
        excerpt: text,
        emotion: 'nostalgia',
        theme_tags: ['personal'],
      })
    }
  }, [addMemory, updateMemory, memories, setRelationshipSummary])

  return { submitMemory }
}
