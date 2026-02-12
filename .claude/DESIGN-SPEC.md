# DESIGN-SPEC.md - The Memory Map
## Complete Visual and Interaction Specification

---

## REFERENCE MOOD

Think: the opening credits of a prestige film. Dark, warm, intimate. Typography that breathes. Content that reveals itself slowly, like someone sharing something personal.

If Huemor.rocks had a baby with a Criterion Collection film menu, raised in a jazz bar with warm lighting.

---

## PAGE-BY-PAGE SPECIFICATIONS

### 1. LANDING VIEW

**Layout:**
- Full viewport hero, content vertically centered
- Max-width 680px for text block (tight, focused)
- 120px padding top/bottom

**Hero Section:**
- Headline: Playfair Display, 56px desktop / 36px mobile, weight 500, letter-spacing -0.02em
- Subhead: Satoshi, 20px desktop / 16px mobile, weight 400, color: var(--text-secondary), max-width 480px
- CTA button: Satoshi 16px weight 600, padding 16px 40px, background var(--accent-primary), color var(--bg-primary), border-radius 4px (sharp, not rounded pills)
- CTA hover: background var(--accent-secondary), subtle box-shadow with accent-glow
- Entrance: headline fades up first (0.6s), subhead follows (0.3s delay), CTA follows (0.5s delay)

**How It Works (below fold):**
- 3 columns on desktop, stacked on mobile
- Each step: number in Cormorant Garamond italic 48px (color accent-primary, opacity 0.6), label in Satoshi 14px uppercase tracking 0.1em, description in Satoshi 16px
- Subtle horizontal line connecting the three steps (1px, accent-primary at 20% opacity)
- Scroll-triggered fade-up, staggered 0.15s per step

**Background:**
- Solid var(--bg-primary)
- Optional: very subtle noise texture overlay at 3-5% opacity (CSS noise or tiny repeating PNG)
- Ambient glow: radial gradient of accent-glow centered behind headline, 400px radius, very subtle

---

### 2. CREATE VIEW

**Layout:**
- Two-column on desktop (60/40 split): left = input + timeline, right = map
- Single column on mobile: input top, timeline middle, map collapsed/expandable
- Sticky input area at top of left column

**Memory Input:**
- Textarea: full width, min-height 120px, max-height 240px (auto-grow)
- Background: var(--bg-secondary)
- Border: 1px solid var(--border-subtle), transitions to 1px solid var(--accent-primary) on focus
- Box-shadow on focus: 0 0 20px var(--accent-glow)
- Placeholder text: Cormorant Garamond italic, 18px, color var(--text-tertiary)
- Placeholder text content: "Tell me about a moment you shared..."
- Typing text: Satoshi 16px, color var(--text-primary)
- Submit button: icon only (arrow-right), 40px circle, positioned bottom-right of textarea
- Voice indicator: small pulsing amber dot top-right of textarea when Wispr Flow would be active (visual only, Wispr handles actual voice input)

**Memory Timeline:**
- Vertical line: 2px wide, color var(--timeline-line), centered in left column
- Memory cards alternate left and right of the timeline spine
- Connection: small circle (8px) on the timeline line at each memory's position, filled var(--accent-primary)
- Circle pulse: subtle glow animation on creation (scales from 0 to 1, glow expands then settles)

**Memory Card:**
- Width: calc(50% - 40px) on desktop, 100% on mobile
- Background: var(--bg-secondary) with backdrop-filter: blur(10px) and a slight warm tint
- Border: 1px solid var(--border-subtle)
- Border-radius: 8px
- Padding: 24px
- Contents:
  - Title: Playfair Display, 20px, weight 500, color var(--text-primary)
  - Date hint (if present): Satoshi 12px, uppercase, tracking 0.08em, color var(--text-tertiary)
  - Excerpt: Cormorant Garamond, 16px, weight 400, color var(--text-secondary), line-height 1.6
  - Emotion tag: tiny pill, Satoshi 11px, uppercase, tracking 0.06em, border 1px solid var(--accent-primary) at 30% opacity, color var(--accent-primary)
  - Location (if present): Satoshi 12px, color var(--text-tertiary), with subtle map-pin icon (inline SVG, not emoji)
- Entrance animation: fade-up + slight slide from the side it's on (left cards slide from left, right from right), 0.5s ease-out
- Hover: border-color transitions to var(--accent-primary) at 40% opacity, slight scale(1.01)
- Delete: small X icon, top-right, only visible on hover, color var(--text-tertiary)

**Relationship Map (Right Panel):**
- Mapbox GL JS, dark style (mapbox://styles/mapbox/dark-v11)
- Custom markers: amber circles with glow, 12px diameter
- Marker labels: Satoshi 11px, color var(--accent-secondary)
- Map chrome: hidden (no zoom controls, no attribution visible, no navigation)
- Interaction: scroll zoom enabled, drag pan enabled
- Empty state: muted map centered on a default location with text overlay "Memories with places will appear here" in Satoshi 14px, var(--text-tertiary)
- Markers animate in with a drop + settle effect
- Lines between markers: subtle dashed line, 1px, var(--accent-primary) at 20% opacity

**Action Bar:**
- Fixed bottom on mobile, inline below input on desktop
- "Add Another Memory" text button, Satoshi 14px, color var(--accent-primary)
- "Preview Your Map" button (appears after 3+ memories): solid accent button matching CTA style
- Memory counter: "3 memories" in Satoshi 12px, var(--text-tertiary)

---

### 3. PREVIEW VIEW

**Layout:**
- Full-width, single column, generous breathing room
- This is the "proof" screen before sharing

**Contents:**
- Generated timeline title: Playfair Display, 40px, weight 500, centered
- Relationship essence: Cormorant Garamond italic, 20px, color var(--text-secondary), centered, max-width 600px
- Full timeline (read-only, polished version of create view timeline)
- Full map (if locations exist), wider than create view (80% width)
- Theme tags displayed as subtle pills below the map

**Share Section:**
- "Share This Memory Map" heading: Satoshi 16px, uppercase, tracking 0.1em
- Generate link button: primary accent CTA
- Copy link: secondary button with copy-to-clipboard feedback
- Social share: X and LinkedIn icons only (the competition requires social posting)
- Optional: "Add a personal note" textarea for a message that appears at the top of the shared view

---

### 4. SHARED VIEW (The Gift / Recipient Experience)

This is the MOST IMPORTANT screen. This is what makes someone feel something.

**Layout:**
- Full viewport sections, scroll-driven narrative
- Each memory gets its own "moment" that fills the screen as you scroll
- Feels like scrollytelling / a cinematic experience

**Opening:**
- Full viewport, centered text
- "Someone made this for you." in Cormorant Garamond, 32px, weight 300, fade in over 1.5s
- Brief pause, then the personal note (if added) fades in below
- Scroll indicator: subtle animated chevron, bouncing gently

**Timeline Experience:**
- As recipient scrolls, each memory reveals one at a time
- Memory title: Playfair Display, 36px, fades and slides up
- Memory excerpt: Cormorant Garamond, 20px, appears 0.3s after title
- Date/location context: Satoshi 13px, appears subtly below
- If memory has a location, the background subtly shifts to show the map zoomed to that pin
- Between memories: generous empty space (80vh minimum) so each one breathes
- Emotion indicators: subtle ambient background color shift per memory's emotion (barely perceptible, 5-10% opacity tinted overlay)

**Map Reveal:**
- After all memories, the full map appears with all locations
- Markers drop in sequentially (0.3s delay between each)
- If route exists, a subtle animated line traces between them

**Closing:**
- Final centered text: the AI-generated relationship essence
- Below it: "Made with The Memory Map" in Satoshi 12px, var(--text-tertiary)
- Link to create your own (back to landing)

---

## RESPONSIVE BREAKPOINTS

```
Desktop: 1024px+
Tablet: 768px - 1023px
Mobile: 375px - 767px
```

Key mobile adjustments:
- Timeline goes single-column (cards full-width, alternating stays but with indentation instead of left/right positioning)
- Map becomes collapsible section
- Memory input takes full width with more vertical space
- Shared view works beautifully on mobile (this is where most recipients will view)
- Touch targets minimum 44px

---

## ANIMATION LIBRARY

All animations should be defined as reusable CSS classes or React motion components:

```css
/* Entrance */
.fade-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Timeline node pulse */
@keyframes node-pulse {
  0% { box-shadow: 0 0 0 0 rgba(212, 165, 116, 0.4); }
  70% { box-shadow: 0 0 0 12px rgba(212, 165, 116, 0); }
  100% { box-shadow: 0 0 0 0 rgba(212, 165, 116, 0); }
}

/* Ambient breathe for resting nodes */
@keyframes breathe {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}

/* Card slide-in from left */
.slide-left {
  opacity: 0;
  transform: translateX(-30px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

/* Card slide-in from right */
.slide-right {
  opacity: 0;
  transform: translateX(30px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

/* Map marker drop */
@keyframes marker-drop {
  0% { transform: translateY(-20px); opacity: 0; }
  60% { transform: translateY(2px); opacity: 1; }
  100% { transform: translateY(0); opacity: 1; }
}

/* Scroll indicator bounce */
@keyframes gentle-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}
```

---

## LOADING AND EMPTY STATES

**AI Processing (while Claude analyzes a memory):**
- Memory card appears immediately with pulsing skeleton
- Skeleton: warm-tinted rectangles with subtle shimmer animation (left-to-right gradient sweep)
- Text below input: "Understanding your memory..." in Satoshi 13px italic, var(--text-tertiary)
- Duration: typically 1-3 seconds

**Empty Timeline:**
- Single centered message: "Your timeline is empty. Share your first memory above."
- Faint dotted vertical line where timeline will grow

**No Locations:**
- Map panel shows muted background with text: "No places mentioned yet. If a memory happened somewhere specific, we'll map it."

**Share Link Generation:**
- Button shows loading spinner (amber), text changes to "Creating your link..."
- On success: link appears with copy button, subtle success animation (checkmark fade-in)

---

## ACCESSIBILITY REQUIREMENTS

- All interactive elements keyboard accessible
- Focus states: 2px outline in var(--accent-primary), 2px offset
- Color contrast: all text meets WCAG AA against backgrounds
- Reduced motion: respect prefers-reduced-motion media query (disable non-essential animations)
- Alt text on map markers with place names
- Semantic HTML: proper heading hierarchy, landmark regions
- Screen reader: timeline memories are an ordered list semantically

---

## FILE STRUCTURE (Replit)

```
/src
  /components
    /landing
      HeroSection.jsx
      HowItWorks.jsx
    /create
      MemoryInput.jsx
      MemoryTimeline.jsx
      MemoryCard.jsx
      RelationshipMap.jsx
      ActionBar.jsx
    /preview
      PreviewView.jsx
      ShareControls.jsx
    /shared
      SharedView.jsx
      SharedMemoryMoment.jsx
      SharedMapReveal.jsx
      SharedClosing.jsx
    /common
      ScrollReveal.jsx
      LoadingSkeleton.jsx
      Button.jsx
  /hooks
    useScrollReveal.js
    useMemoryProcessor.js (Claude API integration)
    useMapbox.js
  /utils
    api.js (Claude API calls)
    storage.js (memory state management)
    shareLink.js (URL generation)
  /styles
    globals.css (CSS variables, base styles, animations)
    fonts.css (font imports)
  App.jsx
  index.html
```
