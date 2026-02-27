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

// Serve the Vite build output (always, for Replit compatibility)
app.use(express.static(join(__dirname, 'dist')))

const anthropic = new Anthropic()

// Serve Mapbox token at runtime (avoids baking secrets into the build)
app.get('/api/config', (req, res) => {
  res.json({ mapboxToken: process.env.MAPBOX_TOKEN || '' })
})

function buildMemoryPrompt(context) {
  const name = context?.name || 'this person'
  const relationship = context?.typeLabel || 'loved one'

  return `You are a gifted emotional storyteller helping someone preserve their most meaningful memories about ${name}, their ${relationship}.

Someone is sharing a raw, unfiltered memory. Your job is to honor their words while finding the deeper emotional truth in what they shared. Think of yourself as a poet who listens. You don't rewrite their story, you illuminate it.

Return a JSON object with these fields:

{
  "title": "A poetic, evocative title (2-5 words) that captures the ESSENCE of this moment. Not a summary, but a feeling. Think book chapter titles, not headlines. Examples: 'The Way She Lingers', 'Kitchen Light at Midnight', 'What the Rain Knew'",
  "date_hint": "Any time reference mentioned: a season, year, 'early on', 'last summer', etc. (null if none)",
  "location": {
    "place_name": "Where this happened, if mentioned (null if none)",
    "coordinates": [lat, lng] best guess coordinates if a real place is named, otherwise null
  },
  "emotion": "The primary emotion (choose ONE): joy, nostalgia, gratitude, love, humor, bittersweet, adventure, comfort. Pick the one that lives UNDERNEATH the words, not just on the surface.",
  "excerpt": "The emotional core of their memory in 1-3 sentences. Keep their voice and phrasing. Clean up only for clarity, never for style. If their words are raw and imperfect, that's the beauty. Preserve it.",
  "theme_tags": ["1-3 thematic threads, choose from: 'first times', 'unspoken understanding', 'everyday sacred', 'vulnerability', 'growing together', 'chosen family', 'comfort in chaos', 'silent knowing', 'playful intimacy', 'the small things', 'milestones', 'finding home', 'letting go', 'trust', 'laughter as medicine'"]
}

IMPORTANT:
- The title should be EVOCATIVE, not descriptive. "The Bathroom" is bad. "Where We Were Honest" is good. "Her Laugh" is bad. "The Sound That Resets Me" is good.
- If someone shares something brief or seemingly simple, look DEEPER. "The bathroom" might really be about vulnerability and safe spaces. "When she laughs" might be about how someone's joy sustains you.
- The excerpt should make someone who reads it FEEL something, even without context.
- NEVER use em dashes in any output. Use periods, commas, or ellipses instead. The tone should feel natural and human, not like AI-generated prose.
- Return ONLY valid JSON, no markdown fences or extra text.`
}

function buildSummaryPrompt(context) {
  const name = context?.name || 'this person'
  const relationship = context?.typeLabel || 'loved one'

  return `You are reading someone's collected memories about ${name}, their ${relationship}. These are real moments from a real relationship, not fiction.

Your job: find the thread that connects these memories. What is the SPECIFIC emotional truth of THIS relationship? Not love in general, but what love looks like between these two people.

Return a JSON object:

{
  "relationship_essence": "One powerful sentence that captures what makes this specific bond unlike any other. Be precise. Reference the actual patterns you see in their memories. Not 'they love each other deeply' but something like 'A partnership where her joy sustains him and intimacy lives in the unguarded moments'. Make it feel like a line from a novel about THEIR story.",
  "dominant_themes": ["Exactly 3 thematic threads that run through these memories. Use evocative language, not clinical labels. Not 'communication' but 'the conversations that happen without words'. Not 'quality time' but 'finding the extraordinary in the ordinary'."],
  "timeline_title": "A 2-4 word title for this collection that sounds like a film title or book chapter. Evocative, specific to their story. Not generic romance. Something that could ONLY describe this couple. Examples: 'Sacred Ordinary', 'The Long Exhale', 'Built on Laughter'",
  "color_mood": "warm_amber | deep_rose | golden_hour | midnight_blue, choose based on the overall emotional temperature"
}

IMPORTANT: Be specific to THESE memories. Every word should feel earned by what they actually shared. No Hallmark sentiments. NEVER use em dashes in any output. Use periods, commas, or ellipses instead. The tone should feel natural and human, not like AI-generated prose. Return ONLY valid JSON, no markdown fences.`
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

// SPA fallback: serve index.html for all non-API routes
// Express v5 requires /{*path} syntax for catch-all routes
app.get('/{*path}', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'))
})

const PORT = process.env.PORT || 5000
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`)
})
