/**
 * ---------------------------------------------------------------------------
 * SITE CONTENT — name, navigation, experience, tools and contact links.
 * ---------------------------------------------------------------------------
 * Edit the text here rather than inside the components.
 * The contact links at the bottom of this file are placeholders: fill them in
 * before you publish the site.
 */

export const profile = {
  name: "Vedant Thakur",
  title: "Video Editor & Content Creator",
  positioning:
    "Short-form editing · Advertising · AI-assisted creatives · Educational content",
  location: "India",
} as const;

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export interface ExperienceItem {
  company: string;
  role: string;
  type: string;
  period: string;
  summary: string;
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "BeerBiceps SkillHouse",
    role: "Video Editor",
    type: "Full-time",
    period: "December 2025 – Present",
    summary:
      "My first full-time video editing role, and where most of the work on this site was made. I edit across short-form and long-form, advertising and educational content.",
    points: [
      "Instagram Reels, YouTube Shorts and other short-form content",
      "Long-form content, social media advertisements and educational content",
      "AI-assisted UGC and talking-head creatives",
      "Motion graphics, subtitles, sound design and colour correction",
      "Masking, tracking and post-production finishing",
      "Working alongside the creative and marketing teams",
    ],
  },
  {
    company: "CreedStar Sports",
    role: "Freelance Video Editor & Content Creator",
    type: "Freelance",
    period: "March 2026 – Present",
    summary:
      "Content production for a cricket academy — I handle it end to end, from the camera on the ground to the post going live on Instagram.",
    points: [
      "Shooting cricket content at the academy",
      "Editing Reels, training videos and promotional sports content",
      "Post-production and finishing",
      "Publishing the finished content on Instagram",
      "Around 10–15 Reels completed so far",
    ],
  },
];

export interface CourseItem {
  name: string;
  detail?: string;
}

export const courseWork = {
  intro:
    "Alongside social content, I've worked on educational course production at BeerBiceps SkillHouse.",
  courses: [
    { name: "Content Creation for Business" },
    {
      name: "Premiere Pro Basics",
      detail: "Intro slate design and bonus module production.",
    },
  ] as CourseItem[],
};

export const about = {
  paragraphs: [
    "I started editing on my phone, cutting clips for social media because I wanted them to look better than they did. That turned into editing my own YouTube and vlog content, which is where I actually learned pacing, sound, and how much a single cut can change the way something feels.",
    "That's roughly 2+ years of hands-on editing — personal and social work first, professional work after. Since December 2025 I've been a full-time Video Editor at BeerBiceps SkillHouse, working on short-form, advertising and educational content, and using AI tools where they genuinely speed the creative work up.",
    "Alongside that I freelance with CreedStar Sports, a cricket academy, where I'm on the ground with the camera as well as behind the timeline — shooting, editing, finishing and publishing the content myself.",
    "Most of my work lives in vertical video. I like the constraint: you get a few seconds and a small frame, so the cut, the sound and the text all have to earn their place.",
  ],
};

export const tools = {
  software: [
    "Adobe Premiere Pro",
    "After Effects",
    "DaVinci Resolve",
    "Photoshop",
    "Canva",
  ],
  ai: ["ChatGPT", "Flow AI", "Higgsfield", "ElevenLabs"],
};

/**
 * ---------------------------------------------------------------------------
 * CONTACT LINKS — REPLACE THESE BEFORE PUBLISHING
 * ---------------------------------------------------------------------------
 * Leave a value as an empty string ("") and the site will show a clearly
 * marked placeholder instead of a broken link. Fill in the real values:
 *
 *   email: "vedant@example.com"
 *   linkedin: "https://www.linkedin.com/in/your-handle"
 */
export interface ContactLink {
  label: string;
  /** Text shown on screen. Leave "" to show the placeholder note. */
  value: string;
  /** Full URL. Leave "" to show the placeholder note. */
  href: string;
}

export const contact: ContactLink[] = [
  { label: "Email", value: "", href: "" }, // e.g. value: "you@email.com", href: "mailto:you@email.com"
  { label: "LinkedIn", value: "", href: "" }, // e.g. value: "linkedin.com/in/handle", href: "https://..."
  { label: "Instagram", value: "", href: "" }, // e.g. value: "@handle", href: "https://instagram.com/handle"
  { label: "YouTube", value: "", href: "" }, // e.g. value: "youtube.com/@handle", href: "https://..."
];

/** Used for metadata / Open Graph. Replace once you know the live URL. */
export const siteUrl = "https://example.com";
