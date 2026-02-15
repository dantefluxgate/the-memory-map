/**
 * Love Language derivation — maps emotion + theme tags to one of
 * five love languages for the expanded card reveal.
 *
 * Design: These insights should feel like a therapist who actually
 * listened to your story, not a personality quiz result.
 * Each one should make someone pause and think "...yeah, that's exactly it."
 */

const LOVE_LANGUAGES = {
  'Words of Affirmation': {
    emotions: ['gratitude', 'love', 'joy'],
    tags: ['communication', 'support', 'encouragement', 'letters', 'compliments', 'words', 'talking', 'said', 'told', 'message', 'text', 'unspoken understanding', 'vulnerability'],
    description: 'What\'s said between you becomes sacred',
    insights: [
      (name) => `This memory lives in language. The words between you and ${name || 'them'} aren't small talk — they're the architecture of your intimacy. What gets said out loud between you two has a weight that most people never experience.`,
      (name) => `Notice what's happening here: a moment that could have passed in silence instead became something spoken. That's not an accident. ${name ? name + ' needs' : 'They need'} to hear it, and you need to say it. That's the engine of your connection.`,
      (name) => `There's a reason this memory stayed with you. It's because something was named — a feeling, a truth, a gratitude. In your relationship, the unspoken eventually demands to be spoken. And when it is, it changes everything.`,
    ],
  },
  'Quality Time': {
    emotions: ['joy', 'comfort', 'nostalgia', 'adventure'],
    tags: ['travel', 'together', 'evening', 'weekend', 'dinner', 'walk', 'adventure', 'explore', 'date', 'night', 'morning', 'trip', 'visit', 'spent', 'everyday moments', 'routine', 'everyday sacred', 'the small things', 'finding home'],
    description: 'Your presence is the gift they never have to unwrap',
    insights: [
      (name) => `This memory isn't about what happened — it's about who you were with when it did. The activity is almost irrelevant. What matters is that you and ${name || 'them'} were in the same room, breathing the same air, existing in the same moment. That's the whole thing.`,
      (name) => `You could have been anywhere, doing anything. But this specific moment, with ${name || 'this person'}, in this specific place — that's what stayed. Not because it was extraordinary, but because being together made the ordinary feel like enough.`,
      (name) => `Here's what this memory reveals: your love doesn't need an event. It needs presence. The moments that matter most between you aren't the ones you planned — they're the ones where you simply chose to stay in the room.`,
    ],
  },
  'Acts of Service': {
    emotions: ['gratitude', 'comfort', 'love'],
    tags: ['help', 'care', 'cooking', 'support', 'surprise', 'effort', 'sacrifice', 'drove', 'made', 'built', 'fixed', 'cleaned', 'prepared', 'comfort in chaos', 'trust'],
    description: 'Love is a verb in your vocabulary',
    insights: [
      (name) => `What you remember here isn't a grand gesture — it's someone showing up. ${name || 'They'} didn't say "I love you" in this moment. ${name || 'They'} proved it. And the fact that you noticed? That's how you know it's your language too.`,
      (name) => `In this memory, love looks like effort. Not the showy kind — the quiet, unglamorous kind that most people overlook. But you didn't overlook it. You filed it away as evidence of something profound. That says everything about what you value.`,
      (name) => `The psychology here is simple but powerful: when someone does something for you that they didn't have to, it rewires how safe you feel with them. This memory is a record of that safety being built, one action at a time.`,
    ],
  },
  'Physical Touch': {
    emotions: ['love', 'comfort', 'bittersweet'],
    tags: ['embrace', 'dance', 'touch', 'hold', 'close', 'warmth', 'cuddle', 'hug', 'kiss', 'hand', 'shoulder', 'lean', 'playful intimacy', 'letting go'],
    description: 'What words can\'t carry, your closeness does',
    insights: [
      (name) => `This memory is stored in your body, not just your mind. The warmth, the proximity, the physical reality of ${name || 'them'} being close — your nervous system registered that as home. That's not metaphor. That's neuroscience. And it's beautiful.`,
      (name) => `Notice that in this memory, the most important thing isn't what was said. It's how close you were when nothing needed to be said. For you and ${name || 'them'}, presence is physical. Safety is felt before it's understood.`,
      (name) => `There's a reason this moment stayed: it's when the distance between you and ${name || 'them'} collapsed to zero. Not emotionally — literally. And in that closeness, something wordless was communicated that neither of you could have said out loud.`,
    ],
  },
  'Receiving Gifts': {
    emotions: ['joy', 'gratitude', 'love'],
    tags: ['gift', 'surprise', 'present', 'birthday', 'celebration', 'anniversary', 'ring', 'bought', 'gave', 'special', 'milestones', 'first times'],
    description: 'The symbols of your love become its landmarks',
    insights: [
      (name) => `What you're really remembering here isn't an object — it's proof that someone was thinking about you when you weren't in the room. ${name || 'They'} saw something, thought of you, and acted on it. That chain of attention is the real gift.`,
      (name) => `This memory marks a moment when something invisible — a feeling, a milestone, a promise — was made tangible. For you and ${name || 'them'}, the physical token isn't the point. It's the evidence that this matters enough to commemorate.`,
      (name) => `In the psychology of relationships, meaningful gifts function like bookmarks — they mark the page where your story changed. This memory is one of those pages. Not because of what was given, but because of what it represented between you.`,
    ],
  },
}

/**
 * Derive the best-matching love language from a memory's emotion and tags.
 * Uses a weighted scoring system: emotion match = 2pts, tag match = 3pts.
 * Also considers the raw text of the excerpt for deeper matching.
 */
export function deriveLoveLanguage(emotion, themeTags = [], recipientName = '') {
  let bestMatch = null
  let bestScore = 0
  const tagsLower = themeTags.map((t) => t.toLowerCase())

  for (const [language, config] of Object.entries(LOVE_LANGUAGES)) {
    let score = 0

    // Emotion match is worth 2 points
    if (config.emotions.includes(emotion)) score += 2

    // Tag matches worth 3 points each
    for (const tag of tagsLower) {
      if (config.tags.some((t) => tag.includes(t) || t.includes(tag))) score += 3
    }

    if (score > bestScore) {
      bestScore = score
      bestMatch = { language, config, score }
    }
  }

  // Fallback to Quality Time (most universal)
  if (!bestMatch || bestScore < 2) {
    bestMatch = {
      language: 'Quality Time',
      config: LOVE_LANGUAGES['Quality Time'],
      score: 0,
    }
  }

  // Pick insight based on emotion string length for pseudo-randomness
  const insightIndex = (emotion || '').length % bestMatch.config.insights.length
  const insight = bestMatch.config.insights[insightIndex](recipientName)

  return {
    language: bestMatch.language,
    description: bestMatch.config.description,
    insight,
  }
}
