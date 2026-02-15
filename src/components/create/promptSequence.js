/**
 * Conversational prompt pools for the cinematic memory creation flow.
 *
 * Design philosophy:
 * - First prompt: warm, easy, invites a specific visual memory
 * - Second prompt: goes deeper — sensory details, emotional turning points
 * - Third prompt: the vulnerable one — what they'd never say out loud
 * - Continuing: gentle, open, no pressure
 *
 * These questions are designed to pull out STORIES, not one-word answers.
 * Each one asks for a specific moment, not a general feeling.
 */

const PROMPTS = {
  first: [
    (name) => `Close your eyes for a second. What's the first moment with ${name} that comes to mind?`,
    (name) => `What's a moment with ${name} you'd relive if you could — not to change it, just to feel it again?`,
    (name) => `Think about ${name}. What memory makes you smile before you even finish the thought?`,
  ],
  second: [
    (name) => `What's something ${name} does — maybe without even realizing — that completely disarms you?`,
    (name) => `Is there a place that holds a piece of your story with ${name}? What happened there?`,
    (name) => `When did ${name} surprise you — not with a gift, but by being exactly who they are?`,
  ],
  third: [
    (name) => `What would you tell ${name} if you knew they'd really hear it — not just listen, but feel it?`,
    (name) => `What's a small, ordinary moment with ${name} that turned out to be one of the most important ones?`,
    (name) => `When did you first realize ${name} wasn't just someone in your life — but someone your life was built around?`,
  ],
  continuing: [
    (name) => `There's always one more. What else surfaces when you sit with ${name} in your mind?`,
    (name) => `Is there a moment with ${name} you've never told anyone about? You don't have to share all of it — just enough.`,
    (name) => `What's something about your time with ${name} that still catches you off guard?`,
  ],
}

export function getPrompt(memoryIndex, name) {
  const pool =
    memoryIndex === 0
      ? PROMPTS.first
      : memoryIndex === 1
        ? PROMPTS.second
        : memoryIndex === 2
          ? PROMPTS.third
          : PROMPTS.continuing
  const idx = Math.floor(Math.random() * pool.length)
  return pool[idx](name)
}
