/**
 * Love Language derivation — maps emotion + theme tags to one of
 * five love languages for the expanded card reveal.
 * Pure frontend logic, no API calls needed.
 */

const LOVE_LANGUAGES = {
  'Words of Affirmation': {
    emotions: ['gratitude', 'love', 'joy'],
    tags: ['communication', 'support', 'encouragement', 'letters', 'compliments', 'words', 'talking', 'said', 'told', 'message', 'text'],
    description: 'Language is your bridge to intimacy',
    insights: [
      (name) => `The words between you and ${name || 'them'} carry a weight that silence never could. This memory proves it.`,
      (name) => `What was said here matters more than where or when — because ${name ? name + "'s" : 'their'} heart hears through words.`,
      (name) => `In this moment, love was spoken aloud. That's everything.`,
    ],
  },
  'Quality Time': {
    emotions: ['joy', 'comfort', 'nostalgia', 'adventure'],
    tags: ['travel', 'together', 'evening', 'weekend', 'dinner', 'walk', 'adventure', 'explore', 'date', 'night', 'morning', 'trip', 'visit', 'spent', 'everyday moments', 'routine'],
    description: 'Presence is the greatest gift',
    insights: [
      (name) => `Being together — truly present — is where your story lives. This moment is proof.`,
      (name) => `Time shared with ${name || 'someone you love'} isn't just hours passing. It's love accumulating.`,
      (name) => `The best memories aren't planned. They're the quiet minutes that become everything.`,
    ],
  },
  'Acts of Service': {
    emotions: ['gratitude', 'comfort', 'love'],
    tags: ['help', 'care', 'cooking', 'support', 'surprise', 'effort', 'sacrifice', 'drove', 'made', 'built', 'fixed', 'cleaned', 'prepared'],
    description: 'Actions speak your love language',
    insights: [
      (name) => `Love isn't always said — sometimes it's done. This memory captures that perfectly.`,
      (name) => `The quiet effort behind this moment? That's love in its purest form.`,
      (name) => `Showing up through actions defines your bond with ${name || 'them'}. This is the proof.`,
    ],
  },
  'Physical Touch': {
    emotions: ['love', 'comfort', 'bittersweet'],
    tags: ['embrace', 'dance', 'touch', 'hold', 'close', 'warmth', 'cuddle', 'hug', 'kiss', 'hand', 'shoulder', 'lean'],
    description: 'Connection through closeness',
    insights: [
      (name) => `Some things can only be felt, not spoken. This memory holds that warmth.`,
      (name) => `The closeness in this moment — that's a language all its own.`,
      (name) => `Presence, warmth, and touch. The simplest gestures carry the deepest meaning.`,
    ],
  },
  'Receiving Gifts': {
    emotions: ['joy', 'gratitude', 'love'],
    tags: ['gift', 'surprise', 'present', 'birthday', 'celebration', 'anniversary', 'ring', 'bought', 'gave', 'special', 'milestones', 'first times'],
    description: 'Thoughtful gestures speak volumes',
    insights: [
      (name) => `A thoughtful gesture became a lasting symbol. This is how your love story grows.`,
      (name) => `It was never about the thing itself — it was about what it meant between you and ${name || 'them'}.`,
      (name) => `Milestones and meaningful gifts — they're the bookmarks of your story together.`,
    ],
  },
}

/**
 * Derive the best-matching love language from a memory's emotion and tags.
 * @param {string} emotion - Primary emotion (joy, love, nostalgia, etc.)
 * @param {string[]} themeTags - Array of theme tags
 * @param {string} [recipientName] - Optional name for personalized insight
 * @returns {{ language: string, description: string, insight: string }}
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

  // Fallback to Quality Time
  if (!bestMatch || bestScore < 2) {
    bestMatch = {
      language: 'Quality Time',
      config: LOVE_LANGUAGES['Quality Time'],
      score: 0,
    }
  }

  // Pick a pseudo-random insight based on the emotion string length
  const insightIndex = (emotion || '').length % bestMatch.config.insights.length
  const insight = bestMatch.config.insights[insightIndex](recipientName)

  return {
    language: bestMatch.language,
    description: bestMatch.config.description,
    insight,
  }
}
