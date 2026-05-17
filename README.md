# Koskar Design

```
╔═══════════════════════════════════════════════════════════════╗
║  _   _                   _  __ _           _                  ║
║ | | | |_ __  ___  ___   / |/ _| |_ ___ __| |_ ___ _ __ _   _ ║
║ | | | | '_ \| _ \/ _ \  | | |_| __/ __/ _| __/ _ \ '__| | | |║
║ | |_| | | | |  __/  __/ | |  _| |_ (__| _| ||  __/ |  | |_| |║
║  \___/|_| |_|\___|\___| |_|_|  \__\___|\__|\__\___|_|   \__,_║
║                                                               ║
║    Analyze any website → Generate DESIGN.md                 ║
╚═══════════════════════════════════════════════════════════════╝
```

AI agent skill for analyzing websites and generating DESIGN.md documents.

## Installation

```bash
npx skills add Adamkojohnko/koskar-design
```

## Usage

### Slash Command (Recommended)

In agents that support slash commands, you can invoke directly:

```
/koskar-design https://stripe.com
/koskar-design analyze https://linear.app
```

### Natural Language

Or just describe what you want:

```
Analyze https://stripe.com and create a DESIGN.md
Reverse-engineer the design of https://linear.app
What's the design system of https://apple.com?
Create a design doc for https://figma.com
Generate a DESIGN.md for https://vercel.com
```

The agent will visit the site, inspect its styling, and produce a DESIGN.md that captures:
- Typography (fonts, sizes, weights)
- Color palette (exact hex codes)
- Spacing and layout patterns
- Component styles (buttons, cards, inputs)
- Motion and interactions
- Things to avoid for authentic recreation

## Output

The skill generates a `DESIGN.md` file containing everything needed to recreate a site's visual style:

| Section | Description |
|---------|-------------|
| Overview | Visual direction, target vibe |
| Layout | Grid system, max width, sections |
| Typography | Fonts, sizes, weights |
| Colors | Exact hex codes for all colors |
| Spacing | Base unit, common values |
| Components | Buttons, forms, nav, cards |
| Motion | Transitions, hover effects |
| Responsive | Breakpoints, mobile layout |
| Implementation | CSS approach, framework hints |
| Things to Avoid | What makes clones feel generic |

## Compatibility

Claude Code, Codex, Cursor, OpenCode, and other CLI agents that support the Skills ecosystem.

---

Coming soon: website and webapp for public access.