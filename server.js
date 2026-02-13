import dotenv from 'dotenv'
dotenv.config({ override: true })
import express from 'express'
import Anthropic from '@anthropic-ai/sdk'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
app.use(express.json())

// In production, serve the Vite build output
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, 'dist')))
}

const anthropic = new Anthropic()

// Serve Mapbox token at runtime (avoids baking secrets into the build)
app.get('/api/config', (req, res) => {
  res.json({ mapboxToken: process.env.MAPBOX_TOKEN || '' })
})

function buildMemoryPrompt(context) {
  const contextLine = context
    ? `\nContext: This memory is about someone named "${context.name}" who is the creator's ${context.typeLabel || 'loved one'}.\n`
    : ''

  return `You are analyzing a personal memory shared about a relationship.${contextLine}
Extract the following as JSON:

{
  "title": "A short, evocative title for this memory (max 6 words)",
  "date_hint": "Any date, year, season, or time reference mentioned (null if none)",
  "location": {
    "place_name": "Location mentioned (null if none)",
    "coordinates": [lat, lng] or null
  },
  "emotion": "primary emotion (joy, nostalgia, gratitude, love, humor, bittersweet, adventure, comfort)",
  "excerpt": "The most vivid 1-2 sentences from the original text, lightly cleaned up",
  "theme_tags": ["array of 1-3 thematic tags like 'first times', 'travel', 'everyday moments', 'milestones'"]
}

Keep the person's voice. Don't rewrite their words. Just extract and organize. Return ONLY valid JSON, no markdown fences.`
}

function buildSummaryPrompt(context) {
  const contextLine = context
    ? `\nContext: These memories are about someone named "${context.name}" who is the creator's ${context.typeLabel || 'loved one'}.\n`
    : ''

  return `Based on these memories about a relationship, generate:${contextLine}

{
  "relationship_essence": "One sentence capturing what makes this relationship with ${context?.name || 'this person'} special",
  "dominant_themes": ["top 3 themes across all memories"],
  "timeline_title": "A poetic but not cheesy title for this collection (max 8 words)",
  "color_mood": "warm_amber | deep_rose | golden_hour | midnight_blue"
}

Be specific to THESE memories. No generic love quotes. Return ONLY valid JSON, no markdown fences.`
}

app.post('/api/process-memory', async (req, res) => {
  try {
    const { text, context } = req.body
    if (!text) return res.status(400).json({ error: 'Text is required' })

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: buildMemoryPrompt(context),
      messages: [{ role: 'user', content: text }],
    })

    const content = message.content[0].text
    const parsed = JSON.parse(content)
    res.json(parsed)
  } catch (error) {
    console.error('Memory processing error:', error?.message || error)
    res.status(500).json({ error: 'Failed to process memory', detail: error?.message })
  }
})

app.post('/api/relationship-summary', async (req, res) => {
  try {
    const { memories, context } = req.body
    if (!memories?.length) return res.status(400).json({ error: 'Memories are required' })

    const memoriesText = memories
      .map((m, i) => `Memory ${i + 1}: ${m}`)
      .join('\n\n')

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 512,
      system: buildSummaryPrompt(context),
      messages: [{ role: 'user', content: memoriesText }],
    })

    const content = message.content[0].text
    const parsed = JSON.parse(content)
    res.json(parsed)
  } catch (error) {
    console.error('Summary generation error:', error)
    res.status(500).json({ error: 'Failed to generate summary' })
  }
})

// In production, serve index.html for all non-API routes (SPA fallback)
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'))
  })
}

const PORT = process.env.PORT || 3001
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`)
})
