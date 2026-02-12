# CLAUDE.md - The Memory Map
## Wispr Flow Valentine's Day Challenge Entry

You are building "The Memory Map", a Valentine's Day web app that turns spoken memories about a relationship into a beautiful, interactive visual timeline. This is a competition entry for Wispr Flow's Valentine's Day Build Challenge with $5K in prizes.

---

## THE CONCEPT

A single-page web app where someone talks about a relationship (partner, friend, parent, anyone) and the app transforms those memories into an interactive, shareable visual experience. The memories become the Valentine's gift itself.

The user speaks or types memories. Each memory gets placed on an animated timeline. Locations mentioned get plotted on a subtle map. The final output is a unique shareable URL the recipient can open and experience.

This is NOT a card maker. NOT a gift finder. NOT a quiz. It's a relationship rendered visually from your own words.

---

## TECH STACK

- **Frontend:** React (via Replit)
- **Styling:** Tailwind CSS + custom CSS for animations
- **AI Processing:** Claude API (Anthropic) for memory extraction, theming, and sentiment
- **Maps:** Mapbox GL JS (free tier, subtle dark style)
- **Hosting/Deploy:** Replit
- **Voice Input Context:** Built to pair with Wispr Flow (voice-to-text feeds the memory input)

---

## DESIGN SYSTEM

### Aesthetic Direction: "Warm Noir"
Think: love letters written in amber ink on black paper. Intimate, cinematic, not cute.

### Color Palette
```
--bg-primary: #0A0A0A          (near black)
--bg-secondary: #111111         (card/section backgrounds)
--bg-elevated: #1A1A1A          (hover states, modals)
--accent-primary: #D4A574       (warm amber/copper, main accent)
--accent-secondary: #E8C9A0     (lighter amber for highlights)
--accent-glow: rgba(212, 165, 116, 0.15)  (ambient glow effects)
--text-primary: #F5F0EB         (warm white)
--text-secondary: #A89B8C       (muted warm gray)
--text-tertiary: #6B5F54        (subtle labels)
--border-subtle: rgba(212, 165, 116, 0.1)  (dividers)
--timeline-line: rgba(212, 165, 116, 0.3)  (the timeline spine)
```

### Typography
```
--font-display: 'Playfair Display', serif    (headlines, memory titles, emotional moments)
--font-body: 'Satoshi', sans-serif           (body text, UI elements, inputs)
--font-accent: 'Cormorant Garamond', serif   (quotes, memory excerpts, the shareable view)
```

Import from Google Fonts:
- Playfair Display: 400, 500, 700
- Cormorant Garamond: 300, 400, 500 italic
- Satoshi: via CDN (https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap)

### Spacing
- Section padding: 120px vertical minimum
- Card padding: 32px
- Timeline node spacing: 80px between memories
- Container max-width: 1200px

### Animation Principles
- Entrance animations: fade-up with 0.6s ease-out, staggered 0.1s between elements
- Timeline nodes: pulse glow on appear, subtle breathe animation at rest
- Map pins: drop-in with slight bounce
- Page transitions: smooth crossfade 0.4s
- Hover states: 0.2s ease, subtle scale(1.02) on cards
- NO bouncy/playful animations. Everything should feel cinematic and intentional.
- Scroll-triggered reveals for timeline sections

### Interactive Elements
- Memory input: large, centered textarea with warm border glow on focus
- Timeline: vertical spine with alternating left/right memory cards
- Memory cards: slight glass morphism effect (backdrop-blur with warm tint)
- Map: dark style, amber pins, minimal UI chrome
- Share button: prominent but earned (appears after 3+ memories added)

---

## COMPONENT ARCHITECTURE

```
App
├── LandingView (intro + start experience)
│   ├── HeroSection (headline, subhead, single CTA)
│   └── HowItWorks (3-step visual, subtle)
│
├── CreateView (the memory input experience)
│   ├── MemoryInput (textarea + voice indicator + submit)
│   ├── MemoryTimeline (grows as memories are added)
│   │   └── MemoryCard (individual memory node)
│   ├── RelationshipMap (Mapbox, plots locations mentioned)
│   └── ActionBar (add more / preview / share)
│
├── PreviewView (see the final gift before sharing)
│   ├── TimelineFullView (polished read-only timeline)
│   ├── MapFullView (all locations, animated route)
│   └── ShareControls (generate link, copy, social share)
│
└── SharedView (what the recipient sees at the unique URL)
    ├── RecipientHero (personalized intro)
    ├── TimelineExperience (scroll-driven reveal of each memory)
    ├── MapExperience (locations animate in sequence)
    └── ClosingMessage (final note from creator)
```

---

## AI INTEGRATION (Claude API)

### Memory Processing Pipeline

When a user submits a memory (text block), send to Claude API with this system prompt:

```
You are analyzing a personal memory shared about a relationship. Extract the following as JSON:

{
  "title": "A short, evocative title for this memory (max 6 words)",
  "date_hint": "Any date, year, season, or time reference mentioned (null if none)",
  "location": {
    "place_name": "Location mentioned (null if none)",
    "coordinates": [lat, lng] or null
  },
  "emotion": "primary emotion (joy, nostalgia, gratitude, love, humor, bittersweet, adventure, comfort)",
  "excerpt": "The most vivid 1-2 sentences from the original text, lightly cleaned up",
  "theme_tags": ["array of 1-3 thematic tags like 'first times', 'travel', 'everyday moments', 'milestones'"]
}

Keep the person's voice. Don't rewrite their words. Just extract and organize.
```

### Relationship Summary Generation

After 3+ memories, generate an overall relationship theme:

```
Based on these memories about a relationship, generate:

{
  "relationship_essence": "One sentence capturing what makes this relationship special",
  "dominant_themes": ["top 3 themes across all memories"],
  "timeline_title": "A poetic but not cheesy title for this collection (max 8 words)",
  "color_mood": "warm_amber | deep_rose | golden_hour | midnight_blue"
}

Be specific to THESE memories. No generic love quotes.
```

---

## COPY (Do Not Let AI Write This)

### Landing Page

**Headline:** "Turn your memories into something they can see."

**Subhead:** "Talk about the person you love. We'll turn it into a visual story you can share."

**CTA:** "Start Your Memory Map"

**How It Works:**
1. "Share your memories" - Talk or type about moments that matter
2. "Watch it take shape" - Each memory becomes a point on your timeline
3. "Send it as a gift" - Share a link they'll actually want to keep

### Empty State (Create View)
"Start with any memory. The first time you met. Last Tuesday. The thing they always say. There's no wrong place to begin."

### Share View Intro (What recipient sees)
"Someone made this for you. These are their memories of the two of you, in their own words."

### After Generating
"This is your Memory Map. Every point is a real moment, in your own words. Send it to the person who was there."

---

## CRITICAL DO-NOTs

- Do NOT use pink. This is not a Hallmark card. Warm amber/copper palette only.
- Do NOT use heart icons, cupid imagery, or Valentine cliches anywhere.
- Do NOT use gradient backgrounds.
- Do NOT use stock illustrations or decorative SVGs.
- Do NOT make it "cute." Make it cinematic.
- Do NOT use Inter, Roboto, or any default sans-serif.
- Do NOT auto-play music or audio.
- Do NOT require sign-up or login to create or view.
- Do NOT use em-dashes anywhere in copy or UI text.
- Do NOT add confetti, sparkles, or particle effects.
- Do NOT use words: innovative, journey, unlock, empower, delve, landscape.

---

## PERFORMANCE REQUIREMENTS

- First contentful paint under 1.5s
- Smooth 60fps on timeline scroll animations
- Mapbox loads lazily (only when location data exists)
- Claude API calls are non-blocking with skeleton loading states
- Works fully on mobile (responsive from 375px)
- Shareable links work without JavaScript for basic content (progressive enhancement)

---

## SUCCESS CRITERIA

Before submitting, the build must pass these checks:

1. Can someone understand what this does within 5 seconds of landing?
2. Does the memory input feel natural and inviting, not like a form?
3. Do the timeline animations feel cinematic, not generic?
4. Is the shared view (recipient experience) genuinely moving?
5. Does it work flawlessly on mobile?
6. Would you actually send this to someone you care about?
7. Does the demo video show Wispr Flow as a natural part of the creation process?

---

## BUILD ORDER

Phase 1: Structure (skeleton components, routing, layout)
Phase 2: Design system (colors, fonts, spacing, base animations)
Phase 3: Memory input + timeline (core interaction loop)
Phase 4: AI integration (Claude API for memory processing)
Phase 5: Map integration (Mapbox, location plotting)
Phase 6: Share flow (URL generation, recipient view)
Phase 7: Polish (animations, micro-interactions, responsive QA)
Phase 8: Demo video recording with Wispr Flow

---

## REMINDER

This is a competition entry. Every pixel matters. Every animation should feel intentional. The recipient experience (shared view) is the most important screen because that's what makes this a gift, not just an app.

Build it like you're sending it to someone you love.
