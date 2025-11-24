# RNADW Design System

## Design Principles

### Typography & Alignment

**Rule: Default Left Alignment**
- **All text should be left-aligned by default** unless there's a specific reason for center or right alignment
- This applies to:
  - Hero sections (headings, descriptions, labels)
  - Content sections
  - Card text
  - Navigation text (when not centered)
  - Form labels and inputs

**Why**: Left alignment is more readable and creates a cleaner, more professional look. It's the natural reading direction and works better across all screen sizes.

**Implementation**:
```jsx
// ❌ Avoid center alignment by default
<div className="text-center">

// ✅ Use left alignment by default
<div>
// or explicitly
<div className="text-left">
```

**Exceptions**:
- Call-to-action sections where center alignment creates better focus
- Modal dialogs or alerts
- Specific decorative elements that need centering for visual balance

### Colors

**Primary Colors**:
- Yellow: `#FACC15` - Primary brand color
- Blue: `#2563EB` - Secondary brand color
- Pink: `#EC4899` - Accent color
- Green: `#10B981` - Accent color

**Neutrals**:
- Black: `#000000`
- Gray 900: `#111827`
- Gray 800: `#1F2937`
- Gray 700: `#374151`
- White: `#FFFFFF`

### Components

**Glassomorphism Cards**:
- Frosted glass effect with `backdrop-blur-xl`
- Semi-transparent backgrounds using color opacity (e.g., `${color}15`)
- Subtle borders with `border-white/20`
- Soft shadows using brand colors

**Hover Effects**:
- Scale transforms: `hover:scale-105`
- Rotation: `hover:-rotate-2`
- Opacity reveals: `opacity-0 group-hover:opacity-100`
- Smooth transitions: `transition-all duration-500-700`

**3D Effects**:
- Use `transform-gpu` for performance
- Apply `transformStyle: 'preserve-3d'` for depth
- Layer elements with `translateZ()` for parallax

### Animations

**Scroll Animations**:
- Use `useScrollAnimation` hook
- Staggered delays: 100ms, 200ms, 300ms increments
- Classes: `scroll-animate`, `scroll-animate-scale`

**Hover Animations**:
- Content reveal on hover (titles, descriptions)
- Height transitions: `max-h-0` to `max-h-40`
- Opacity fades: `opacity-0` to `opacity-100`

## Component Patterns

### Video Cards

**Structure**:
1. Glassomorphism container with brand color gradient
2. Video iframe with frosted glass border
3. Category badge (always visible)
4. Title (hidden by default, revealed on hover)
5. No descriptions (removed for cleaner look)

**Behavior**:
- 3D rotation on hover
- Glow shadow appears on hover
- Title expands smoothly on hover
- Card scales up slightly

### Hero Sections

**Layout**:
- Left-aligned content
- Label with decorative dots
- Large, bold headline
- Supporting description (max-width for readability)
- Optional stats or CTA buttons

**Styling**:
- Gradient backgrounds
- Decorative blobs with blur
- High contrast text
- Brand color accents

---

**Last Updated**: 2025-11-24
**Version**: 1.0
