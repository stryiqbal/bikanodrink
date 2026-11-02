# Bikanodrink — Signature Flavours

A responsive product landing page for Bikanodrink's Badam, Chocolate, Coffee, and Thandai flavours. The hero uses a scroll-driven sequence of product frames, with flavour-specific descriptions, colours, and purchase details.

## Tech stack

- Next.js and React
- TypeScript
- Tailwind CSS
- Framer Motion

## Getting started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

The project is configured for static export. The generated site is written to `out/` and can be deployed to a static hosting provider.

## Project structure

```text
app/                 Page and global styles
components/          Navbar, footer, and scroll-driven hero
data/products.ts     Flavour content, features, and colour palettes
public/images/       150 animation frames for each flavour
public/bahanbaku/    Ingredient images used in flavour descriptions
public/purchase/     Purchase section images
public/logo/         Brand logo
```

Each hero sequence is expected at `public/images/<Flavour>/frame_001.jpg` through `frame_150.jpg`. Flavour content and palettes are defined in `data/products.ts`; the corresponding description copy is in `app/page.tsx`.
