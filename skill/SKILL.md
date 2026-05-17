---
name: koskar-design
description: Analyzes a website URL and generates an accurate DESIGN.md capturing the site's reusable design system. Use when user wants to reverse-engineer a website's visual style.
---

# Koskar Design

This skill helps an AI agent analyze any website and produce a comprehensive DESIGN.md that captures its design system — enabling another agent to recreate a similar visual style.

## When to Use

- User invokes "koskar design" with a URL
- User gives you a URL and asks to "analyze" or "reverse-engineer" it
- User wants a "design document" or "design.md" for a site
- User says "what's the design system of this site?"
- User wants to clone/imitate a site's visual style

## Invocation Patterns

### Direct Command
```
koskar design https://stripe.com
koskar design analyze https://linear.app
```

### Natural Language
```
Analyze https://stripe.com and create a DESIGN.md
Reverse-engineer the design of https://linear.app
What's the design system of https://apple.com?
Create a design doc for https://figma.com
```

## How to Use

1. **Receive URL** from user
2. **Visit and inspect** the website thoroughly:
   - Browse multiple pages (home, about, pricing, blog, etc.)
   - Inspect CSS/styling to identify fonts, colors, spacing
   - Interact with components (hover states, transitions)
   - Test responsive behavior (mobile vs desktop)
3. **Generate DESIGN.md** following the output schema below
4. **Save** the file to the current working directory (confirm filename with user)

## Analysis Guidelines

- Look beyond the surface — inspect actual CSS values
- Note specific hex colors, not just "blue"
- Record exact font families, weights, sizes
- Measure spacing patterns (4px, 8px, 16px, 24px, 32px, etc.)
- Identify component patterns (buttons, cards, inputs, nav)
- Note motion/animation styles if visible
- Capture imagery and icon styles
- Note what makes the site feel *distinctive* (not generic)

## Output: DESIGN.md Schema

```markdown
# Design System: [Site Name]

## Overview
- **Site analyzed:** [URL]
- **Date:** [YYYY-MM-DD]
- **Visual direction:** [1-2 sentence summary of aesthetic]
- **Target vibe:** [e.g., modern SaaS, brutalist, luxury, playful, minimal...]

## Layout Structure
- **Grid system:** [e.g., 12-column, CSS Grid, flexbox-based]
- **Max content width:** [e.g., 1200px, 1280px]
- **Page sections:** [list key sections: hero, nav, features, footer, etc.]
- **Layout patterns:** [e.g., alternating sections, full-width hero, card grids]

## Typography
- **Primary font:** [name, e.g., Inter, Playfair Display]
- **Secondary font:** [if different]
- **Monospace font:** [if used]
- **Heading sizes:** [e.g., H1: 48px, H2: 36px...]
- **Body size:** [e.g., 16px]
- **Line height:** [e.g., 1.5]
- **Font weights used:** [e.g., 400, 500, 600, 700]
- **Letter spacing:** [if notable]

## Color Palette
- **Primary:** [hex, e.g., #1a1a1a]
- **Secondary:** [hex]
- **Accent:** [hex]
- **Background:** [hex - may vary by section]
- **Surface:** [hex for cards, inputs]
- **Text:** [hex for body, headings]
- **Muted:** [hex for secondary text]
- **Error/Success:** [if applicable]
- **Gradient:** [if used - describe direction and colors]

## Spacing System
- **Base unit:** [e.g., 4px or 8px]
- **Common spacing values:** [list: 8, 16, 24, 32, 48, 64...]
- **Section padding:** [e.g., 64px vertical]
- **Component gaps:** [e.g., 16px between cards]

## Components

### Buttons
- **Primary:** [bg color, text color, border-radius, padding]
- **Secondary:** [outline style, hover behavior]
- **States:** [hover, active, disabled]

### Forms/Inputs
- **Style:** [border, bg, border-radius, padding]
- **Focus state:** [ring, border color change]
- **Labels:** [position, typography]

### Navigation
- **Type:** [horizontal, hamburger, sticky, fixed]
- **Logo placement:** [left, center]
- **Links:** [inline, dropdown, mega-menu]

### Cards
- **Container:** [bg, border, shadow, border-radius]
- **Content spacing:** [padding]
- **Hover effect:** [lift, shadow change]

### Sections
- **Hero:** [layout, height, content alignment]
- **Features:** [grid, card style]
- **Footer:** [columns, links, newsletter]

## Motion & Interaction
- **Transitions:** [duration, easing, e.g., 200ms ease]
- **Hover effects:** [scale, color change, shadow]
- **Page transitions:** [if visible]
- **Animations:** [any subtle animations, loading states]

## Responsive Behavior
- **Breakpoints:** [e.g., 640px, 768px, 1024px, 1280px]
- **Mobile layout:** [how layout adapts]
- **Touch targets:** [minimum size, spacing]

## Imagery & Iconography
- **Photo style:** [e.g., product shots, lifestyle, illustrations]
- **Icon style:** [e.g., outline, filled, custom vs library]
- **Border radius on images:** [e.g., 8px, 16px, full circle]

## Implementation Notes
- **CSS approach:** [e.g., Tailwind, CSS modules, styled-components, vanilla]
- **Framework hints:** [if detectable, e.g., Next.js, React]
- **Notable techniques:** [any specific patterns worth noting]

## Things to Avoid
- Generic AI-generated aesthetic (describe what "generic" looks like)
- Specific patterns that would make it feel like a cheap clone
- Overused color combinations
- Generic font choices (e.g., generic sans-serif)
```