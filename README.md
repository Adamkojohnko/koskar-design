# Koskar Design

AI agent skill for analyzing websites and generating DESIGN.md documents.

## What It Does

Analyzes any website URL and produces a comprehensive DESIGN.md that captures its design system — enabling another agent to recreate a similar visual style.

## Installation

```bash
npx skills add Adamkojohnko/koskar-design
```

## Usage

### How It Works

When the user gives you a website URL and asks to analyze, reverse-engineer, or document its design system, this skill will guide you through:

1. Visiting and inspecting the website thoroughly
2. Identifying fonts, colors, spacing, components, and patterns
3. Generating an accurate DESIGN.md with implementation guidance

### Example Prompts

Try these in your CLI agent:

```
Analyze https://stripe.com and create a DESIGN.md
Reverse-engineer the design of https://linear.app
What's the design system of https://apple.com?
Create a design doc for https://figma.com
```

The agent will visit the site, inspect its styling, and produce a DESIGN.md that captures:
- Typography (fonts, sizes, weights)
- Color palette (exact hex codes)
- Spacing and layout patterns
- Component styles (buttons, cards, inputs)
- Motion and interactions
- Things to avoid for authentic recreation

## Compatibility

Claude Code, Codex, Cursor, OpenCode, and other CLI agents that support the Skills ecosystem.

---

Coming soon: website and webapp for public access.