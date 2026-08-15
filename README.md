# Vedant Thakur — Portfolio

A personal portfolio website for **Vedant Thakur, Video Editor & Content Creator**.
Built with Next.js (App Router), React, TypeScript and Tailwind CSS.

The work is presented as vertical YouTube embeds — no video files are stored in
this repository.

---

## 1. What this project is

A single-page portfolio with these sections:

| Section | What it does |
| --- | --- |
| Hero | Name, title, positioning line, two calls to action |
| Selected Work | Featured projects in a large grid, the rest in a smaller grid, filtered by All / Reels / AI Ads |
| Project viewer | Opens on click — full vertical video plus title, category, description, role and skills |
| Experience | BeerBiceps SkillHouse and CreedStar Sports |
| Educational Content | Course production work |
| About | Short personal introduction |
| Tools | Software and AI tools |
| Contact | Email, LinkedIn, Instagram, YouTube |

Folder structure:

```
app/          Page, layout, global styles, favicon, Open Graph image
components/   Reusable UI components
data/         All content — projects.ts and site.ts
public/       Static files (put images here if you add any)
```

---

## 2. Install dependencies

You need **Node.js 18.17 or newer** (Node 20 recommended). Check with `node -v`.

From inside the project folder:

```bash
npm install
```

---

## 3. Run it locally

```bash
npm run dev
```

Then open <http://localhost:3000> in your browser.
Stop the server with `Ctrl + C`.

---

## 4. Add a new portfolio project

Open `data/projects.ts` and add one object to the `projects` array:

```ts
{
  id: "skillhouse-reel-09",
  title: "SkillHouse Reel 09",
  category: "Reels",       // "Reels" or "AI Ads"
  youtubeId: "NEW_VIDEO_ID",
  priority: "good",        // "featured" | "good" | "secondary"
}
```

That's it — the card, the filter counts and the video viewer update
automatically. Nothing else needs editing.

**Finding the YouTube ID:** it's the part of the link after `/shorts/` or after
`?v=`. For `https://youtube.com/shorts/pTprEeQBLis?feature=share` the ID is
`pTprEeQBLis`.

**Optional fields** — add these to override the generic category text for one
project:

```ts
description: "One or two lines about the project.",
role: ["Video Editing", "Motion Graphics"],
skills: ["Editing", "Sound Design"],
```

**Ordering:** projects marked `priority: "featured"` appear first, in the large
grid. Everything else appears under "More Work", in the order it's listed in the
file.

**Videos must be Public or Unlisted on YouTube** for the embed to play. Private
videos will not load.

---

## 5. Change contact and social links

Open `data/site.ts` and scroll to the `contact` array at the bottom. Replace the
empty strings:

```ts
export const contact: ContactLink[] = [
  { label: "Email", value: "you@email.com", href: "mailto:you@email.com" },
  { label: "LinkedIn", value: "linkedin.com/in/your-handle", href: "https://www.linkedin.com/in/your-handle" },
  { label: "Instagram", value: "@your-handle", href: "https://instagram.com/your-handle" },
  { label: "YouTube", value: "youtube.com/@your-handle", href: "https://youtube.com/@your-handle" },
];
```

Any link left empty shows a clearly marked placeholder on the page instead of a
broken link, so you can spot what's still missing.

While you're in `data/site.ts`, you can also edit the experience entries, the
About paragraphs, the tools lists, and `siteUrl` (set that to your real domain
once the site is live — it's used for the Open Graph preview).

---

## 6. Build for production

```bash
npm run build
npm run start
```

`npm run build` creates the optimised production build. `npm run start` serves
it locally at <http://localhost:3000> so you can check it before publishing.

---

## Other things worth knowing

- **Colours and fonts** live in `tailwind.config.ts` and `app/globals.css`.
- **Favicon** is `app/icon.svg`. Replace that file to change it.
- **Link preview image** is `app/opengraph-image.png` (1200×630). Replace it
  with your own image using the same filename.
- **Fonts** (Inter + Manrope) are loaded from Google Fonts in `app/layout.tsx`.
- **Thumbnails** come straight from YouTube, so they update if you change a
  video's thumbnail.
