export function encodeShareData(memories, summary, personalNote, relationshipContext) {
  const payload = {
    m: memories.map((mem) => ({
      t: mem.title,
      e: mem.excerpt,
      d: mem.date_hint,
      em: mem.emotion,
      l: mem.location,
      tags: mem.theme_tags,
    })),
    s: summary
      ? {
          e: summary.relationship_essence,
          t: summary.timeline_title,
          th: summary.dominant_themes,
          c: summary.color_mood,
        }
      : null,
    n: personalNote || null,
    r: relationshipContext
      ? { name: relationshipContext.name, type: relationshipContext.type }
      : null,
  }

  const json = JSON.stringify(payload)
  const encoded = btoa(unescape(encodeURIComponent(json)))
  return encoded
}

export function decodeShareData(encoded) {
  try {
    const json = decodeURIComponent(escape(atob(encoded)))
    const payload = JSON.parse(json)

    const memories = payload.m.map((mem, i) => ({
      id: `shared-${i}`,
      title: mem.t,
      excerpt: mem.e,
      date_hint: mem.d,
      emotion: mem.em,
      location: mem.l,
      theme_tags: mem.tags || [],
    }))

    const summary = payload.s
      ? {
          relationship_essence: payload.s.e,
          timeline_title: payload.s.t,
          dominant_themes: payload.s.th,
          color_mood: payload.s.c,
        }
      : null

    const relationshipContext = payload.r || null

    return { memories, summary, personalNote: payload.n, relationshipContext }
  } catch (e) {
    console.error('Failed to decode share data:', e)
    return null
  }
}

export function generateShareUrl(memories, summary, personalNote, relationshipContext) {
  const encoded = encodeShareData(memories, summary, personalNote, relationshipContext)
  return `${window.location.origin}/shared/${encoded}`
}
