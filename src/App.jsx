import { Routes, Route } from 'react-router-dom'
import { useState, useCallback, useEffect } from 'react'
import { saveMemories, loadMemories } from './utils/storage.js'
import LandingView from './components/landing/LandingView.jsx'
import CreateView from './components/create/CreateView.jsx'
import PreviewView from './components/preview/PreviewView.jsx'
import SharedView from './components/shared/SharedView.jsx'

function App() {
  const [memories, setMemories] = useState(() => loadMemories())
  const [relationshipSummary, setRelationshipSummary] = useState(null)
  const [personalNote, setPersonalNote] = useState('')

  // Persist memories to localStorage whenever they change
  useEffect(() => {
    // Only save non-loading memories (skip placeholder cards mid-processing)
    const ready = memories.filter((m) => !m.loading)
    if (ready.length > 0) {
      saveMemories(ready)
    }
  }, [memories])

  const addMemory = useCallback((memory) => {
    setMemories((prev) => [...prev, { ...memory, id: memory.id || Date.now().toString() }])
  }, [])

  const updateMemory = useCallback((id, data) => {
    setMemories((prev) =>
      prev.map((m) => (m.id === id ? { ...m, ...data } : m))
    )
  }, [])

  const deleteMemory = useCallback((id) => {
    setMemories((prev) => prev.filter((m) => m.id !== id))
  }, [])

  return (
    <div className="min-h-screen bg-bg-primary">
      <Routes>
        <Route path="/" element={<LandingView />} />
        <Route
          path="/create"
          element={
            <CreateView
              memories={memories}
              addMemory={addMemory}
              updateMemory={updateMemory}
              deleteMemory={deleteMemory}
              relationshipSummary={relationshipSummary}
              setRelationshipSummary={setRelationshipSummary}
            />
          }
        />
        <Route
          path="/preview"
          element={
            <PreviewView
              memories={memories}
              relationshipSummary={relationshipSummary}
              personalNote={personalNote}
              setPersonalNote={setPersonalNote}
            />
          }
        />
        <Route path="/shared/:data" element={<SharedView />} />
      </Routes>
    </div>
  )
}

export default App
