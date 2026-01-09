# CLAUDE.md

This file provides guidance for Claude Code when working with this repository.

## Project Overview

This is a **React portfolio website** built with Create React App (CRA). It's a personal developer portfolio showcasing projects, bio, and contact information with a distinctive retro pixel-art aesthetic.

## Commands

```bash
npm start        # Development server on localhost:3000
npm run build    # Production build to /build folder
npm test         # Run Jest tests in watch mode
```

## Architecture

### Directory Structure

- `src/components/` - Page components (NavBar, Bio, Projects, Contact)
- `src/pixel-system/` - Custom retro design system with pixel-art styling
  - `config/pixelConfig.js` - Design tokens (colors, sizes, animations)
  - `components/` - Reusable pixel-styled components
  - `sprites/` - Canvas-based sprite animation
- `src/assets/` - SVG icons and images
- `src/index.css` - Global styles (all CSS in one file)
- `public/` - Static assets

### Key Dependencies

- React 18 + React Router 6 for UI and navigation
- Formspree for contact form backend (form ID: xzbnvjlr)
- GSAP, Pixi.js, Howler available for animations/graphics/audio
- PostCSS + Autoprefixer for CSS processing

## Code Conventions

- **Components**: Functional components with hooks (useState), no TypeScript
- **Styling**: Single global CSS file (index.css), no CSS modules or styled-components
- **Responsive breakpoints**: 320px, 768px, 1024px, 1200px
- **Color format**: RGBA used extensively
- **Pixel system**: Uses 4x scale factor, helper functions `px()` and `pixelSize()` for pixel-perfect rendering

## External Services

- **Formspree**: Contact form submission (no backend required)
- **External links**: GitHub, LinkedIn, Dropbox (resume), Medium blog

## Testing

- Jest with React Testing Library
- Test files use `*.test.js` naming convention
- Run with `npm test`
