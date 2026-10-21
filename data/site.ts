/**
 * ---------------------------------------------------------------------------
 * SITE CONTENT — profile, navigation, experience, tools and contact links.
 * ---------------------------------------------------------------------------
 */

export const profile = {
  name: "Vedant Thakur",
  title: "Video Editor & Motion Storyteller",
  positioning:
    "Short-form · Long-form · AI-assisted Ads · Motion Graphics",
  location: "India",
  portraitAlt: "Portrait of Vedant Thakur",
} as const;

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Long-form", href: "#long-form" },
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
      "My first full-time video editing role, where I worked across social-first edits, long-form content, advertising and educational production.",
    points: [
      "Instagram Reels, YouTube Shorts and other short-form content",
      "Long-form podcast and educational content editing",
      "AI-assisted advertising and talking-head creatives",
      "Motion graphics, subtitles, sound design and colour correction",
      "Masking, tracking and post-production finishing",
      "Collaborating with creative and marketing teams",
    ],
  },
  {
    company: "CreedStar Sports",
    role: "Freelance Video Editor & Content Creator",
    type: "Freelance",
    period: "March 2026 – Present",
    summary:
      "Content production for a cricket academy — from filming on the ground to editing, finishing and publishing on Instagram.",
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
    "Educational video production combines clear structure, careful pacing and visual support to help an idea land.",
  courses: [
    { name: "Content Creation for Business" },
    { name: "Premiere Pro Basics", detail: "Intro slate design and bonus module production." },
  ] as CourseItem[],
};

export const about = {
  paragraphs: [
    "I started editing on my phone, cutting clips for social media because I wanted them to look better than they did. That turned into editing my own YouTube videos and vlogs — where I began learning pacing, sound, and how much a single cut can change the way something feels.",
    "That became 2+ years of hands-on editing: personal and social work first, then professional production. Since December 2025, I've worked full-time as a Video Editor at BeerBiceps SkillHouse across short-form, long-form, advertising and educational content, using AI tools when they genuinely help the creative process.",
    "Alongside that, I freelance with CreedStar Sports, a cricket academy, where I'm behind the camera as well as behind the timeline — shooting, editing, finishing and publishing the content myself.",
    "Whether it's a quick vertical edit, an AI-assisted commercial or a full-length podcast, I care about rhythm, clarity and the little details that make the viewing experience feel effortless.",
  ],
};

export const tools = {
  software: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Photoshop", "Canva"],
  ai: ["ChatGPT", "Flow AI", "Higgsfield", "ElevenLabs"],
};

export interface ContactLink {
  label: string;
  value: string;
  href: string;
}

export const contact: ContactLink[] = [
  { label: "Email", value: "vedantrthakur27@gmail.com", href: "mailto:vedantrthakur27@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/vedant-thakur-027d", href: "https://www.linkedin.com/in/vedant-thakur-027d" },
  { label: "Phone", value: "+91 93729 13003", href: "tel:+919372913003" },
];

/** Used for metadata / Open Graph. */
export const siteUrl = "https://vedant-portfolio-sigma.vercel.app/";
