const API_BASE = '/api'

export async function processMemory(text, relationshipContext) {
  const response = await fetch(`${API_BASE}/process-memory`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, context: relationshipContext || null }),
  })

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`)
  }

  return response.json()
}

export async function generateRelationshipSummary(memories, relationshipContext) {
  const response = await fetch(`${API_BASE}/relationship-summary`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ memories, context: relationshipContext || null }),
  })

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`)
  }

  return response.json()
}
