# The Memory Map — Pickup Notes
## Last updated: Session ending Feb 13, 2026

---

## CURRENT STATUS: ~85% Complete

The app is fully functional end-to-end. A user can enter memories, Claude processes them, they appear on a timeline + map, and can be shared via URL. The Three.js heart constellation is working locally. The main gaps are polish, a few missing spec details, and getting the deployment reliably working.

---

## CRITICAL: REPLIT DEPLOYMENT

The published app was NOT showing the Three.js visual because the `[deployment] run` command was missing the build step. This was **fixed** in the last commit (`8f7bcf4`).

**To verify it works:**
1. In the Replit shell, run: `git pull origin master`
2. Republish the app
3. The deployment command now runs `npm install && npm run build` before starting the server

If Replit's AI agent has been modifying files (it changed the headline text to something different), you may need to do a hard reset: `git fetch origin && git reset --hard origin/master` in the Replit shell to get back to our codebase.

---

## WHAT'S DONE

### Core Flow ✅
- [x] Landing page with hero, CTA, how-it-works
- [x] Three.js particle constellation with **heart formation cycle** (drift → gather → hold → scatter)
- [x] Relationship intro step (name + relationship type)
- [x] Memory input (text, auto-grow, focus glow, submit)
- [x] Claude AI memory processing (title, emotion, location, excerpt, tags)
- [x] Memory timeline (vertical spine, alternating cards, delete, animations)
- [x] Mapbox map with amber markers and glow
- [x] Preview view with summary, share controls
- [x] Share link generation (base64 encoded, no database)
- [x] Shared/recipient view (cinematic scroll, opening, per-memory moments, map reveal, closing)
- [x] localStorage persistence (memories + relationship context survive refresh)
- [x] Relationship context threaded through entire pipeline (input → API → share link → recipient view)

### Design System ✅
- [x] Warm Noir color palette implemented
- [x] Typography: Playfair Display, Satoshi, Cormorant Garamond
- [x] All animation keyframes (fade-up, node-pulse, breathe, marker-drop, etc.)
- [x] Glassmorphism utilities
- [x] Film grain overlay
- [x] Reduced motion support
- [x] Focus states for accessibility

---

## WHAT'S REMAINING

### Priority 1 — Polish for Competition (Do These Tomorrow)

1. **Test full flow end-to-end on deployed Replit**
   - Verify Three.js heart constellation shows on published URL
   - Test: landing → intro → add 3 memories → preview → share → open shared link
   - Test on mobile viewport (375px)

2. **Shared view polish per spec**
   - Spec says: "If memory has a location, the background subtly shifts to show the map zoomed to that pin" — NOT implemented yet. Currently each memory moment is just text.
   - Spec says: "Between memories: generous empty space (80vh minimum)" — verify spacing
   - Route line between map markers: "subtle animated line traces between them" — NOT implemented

3. **Map route lines between markers**
   - Spec: "Lines between markers: subtle dashed line, 1px, accent-primary at 20% opacity"
   - Currently only markers exist, no connecting lines
   - Applies to both CreateView's RelationshipMap and SharedMapReveal

4. **Preview view: relationship summary display**
   - Should show: generated timeline title (Playfair 40px), relationship essence (Cormorant italic 20px)
   - Verify theme tags are displayed as pills below the map
   - Personal note textarea should be present

5. **Error states / edge cases**
   - What happens if Claude API fails? (there's a fallback but test it)
   - What happens with 0 memories on preview? (should be blocked)
   - What happens on shared view with corrupted URL data?

### Priority 2 — Nice to Have

6. **Placeholder text per spec**
   - Memory input placeholder: spec says Cormorant Garamond italic 18px, "Tell me about a moment you shared..."
   - Currently uses Satoshi with personalized "Tell me about a moment with [name]..."
   - Could make it Cormorant italic per spec while keeping personalization

7. **Dashed timeline line in empty state**
   - Spec: "Faint dotted vertical line where timeline will grow"
   - Currently shows text only

8. **Loading state text**
   - Spec: "Understanding your memory..." below input during processing
   - Currently shows skeleton but may not have the text

9. **Share link generation UX**
   - Spec: "Button shows loading spinner (amber), text changes to 'Creating your link...'"
   - Verify this interaction

### Priority 3 — Competition Extras

10. **Voice input visual indicator**
    - Spec: "Voice indicator: small pulsing amber dot top-right of textarea when Wispr Flow would be active"
    - This is visual only (Wispr handles actual voice) — could add a decorative pulse dot

11. **Demo video / submission**
    - Competition requires a demo video
    - Show the full flow with voice input via Wispr Flow
    - Post to social media (X/LinkedIn — share controls already have these)

---

## KEY FILES TO KNOW

| File | Purpose |
|------|---------|
| `server.js` | Express + Claude API endpoints |
| `src/App.jsx` | Router, state management, localStorage |
| `src/lib/constellationScene.js` | Three.js heart constellation |
| `src/components/landing/HeroSection.jsx` | Landing hero + particle canvas |
| `src/components/create/RelationshipIntro.jsx` | "Who is this for?" step |
| `src/components/create/CreateView.jsx` | Main create view (input + timeline + map) |
| `src/components/create/MemoryInput.jsx` | Memory text input |
| `src/components/shared/SharedView.jsx` | Recipient experience |
| `src/hooks/useMemoryProcessor.js` | Claude API integration hook |
| `src/utils/shareLink.js` | Share URL encode/decode |
| `src/utils/storage.js` | localStorage helpers |
| `src/styles/globals.css` | Full design system |
| `.replit` | Replit run + deployment config |
| `.claude/DESIGN-SPEC.md` | Visual spec (reference) |
| `.claude/MEMORY-MAP-CLAUDE.md` | Project spec (reference) |

## GIT INFO
- **Repo:** https://github.com/dantefluxgate/the-memory-map.git
- **Branch:** master
- **Latest commit:** `8f7bcf4` — Fix deployment: add build step to Replit deployment command
