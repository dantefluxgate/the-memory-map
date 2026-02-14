/**
 * Conversational prompt pools for the cinematic memory creation flow.
 * Prompts deepen progressively: open/easy → intimate → gentle optional.
 * Each prompt is a function taking `name` → returns personalized question.
 */

const PROMPTS = {
  first: [
    (name) => `What's a moment with ${name} that still makes you smile?`,
    (name) => `Tell me about the first time you met ${name}.`,
    (name) => `What's a memory with ${name} you never want to forget?`,
  ],
  second: [
    (name) => `What's something ${name} does that you absolutely love?`,
    (name) => `Tell me about a time ${name} completely surprised you.`,
    (name) => `Is there a place that always reminds you of ${name}?`,
  ],
  third: [
    (name) => `What would you want ${name} to know they mean to you?`,
    (name) => `What's the funniest thing that's happened between you and ${name}?`,
    (name) => `Tell me about a quiet moment with ${name} that meant everything.`,
  ],
  continuing: [
    (name) => `Is there another moment with ${name} on your mind?`,
    (name) => `What else comes to heart when you think of ${name}?`,
    (name) => `Take your time... any other memory you'd like to capture?`,
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
