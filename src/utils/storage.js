const STORAGE_KEY = 'memory-map-data'

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
