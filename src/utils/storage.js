const STORAGE_KEY = 'memory-map-data'
const CONTEXT_KEY = 'memory-map-context'

export function saveMemories(memories) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memories))
  } catch (e) {
    console.error('Failed to save memories:', e)
  }
}

export function loadMemories() {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch (e) {
    console.error('Failed to load memories:', e)
    return []
  }
}

export function clearMemories() {
  localStorage.removeItem(STORAGE_KEY)
}

export function saveRelationshipContext(context) {
  try {
    localStorage.setItem(CONTEXT_KEY, JSON.stringify(context))
  } catch (e) {
    console.error('Failed to save context:', e)
  }
}

export function loadRelationshipContext() {
  try {
    const data = localStorage.getItem(CONTEXT_KEY)
    return data ? JSON.parse(data) : null
  } catch (e) {
    console.error('Failed to load context:', e)
    return null
  }
}
