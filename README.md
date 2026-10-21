# Vedant Thakur — Video Editor & Motion Storyteller

A personal portfolio showcasing short-form editing, AI-assisted advertising, motion graphics, and long-form podcast editing. Built with Next.js App Router, React, TypeScript and Tailwind CSS.

## Portfolio sections

- Hero and motion-led introduction
- Selected Work with filters for Reels and AI Ads
- The Ranveer Show long-form podcast collection (six 16:9 YouTube embeds)
- Professional experience
- Educational course production
- About, tools and contact

## Content editing

Project metadata for short-form work lives in `data/projects.ts`. Profile text, experience, About copy, course work, tools, contact details, navigation, and the canonical site URL live in `data/site.ts`.

The Ranveer Show episode IDs live in `components/LongFormCollection.tsx`. Keep the component and `components/LongFormCollection.module.css` together in the `components` folder.

## Tech

- Next.js 14 App Router
- React 18 and TypeScript
- Tailwind CSS
- CSS animations and IntersectionObserver reveal component; no extra animation library

The YouTube videos are embedded from YouTube. No video files are stored in the repository. Private videos cannot be embedded publicly.

## Build scripts

```bash
npm install
npm run dev
npm run build
```

`npm run build` is the production build check. Deployments are handled by Vercel when the connected GitHub production branch is updated.
