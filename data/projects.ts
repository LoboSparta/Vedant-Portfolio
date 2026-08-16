/**
 * ---------------------------------------------------------------------------
 * PROJECT DATA — this is the only file you need to edit to add or remove work.
 * ---------------------------------------------------------------------------
 *
 * To add a new project, append one object to the `projects` array below:
 *
 *   {
 *     id: "skillhouse-reel-09",
 *     title: "SkillHouse Reel 09",
 *     category: "Reels",
 *     youtubeId: "NEW_VIDEO_ID",
 *     priority: "good",
 *   }
 *
 * Everything else (description, role, skills, ordering, filtering, the grid,
 * the video viewer) is generated automatically. Only `id`, `title`,
 * `category` and `youtubeId` are required.
 *
 * Add `brand: "..."` to record which page or brand the work was published
 * under. It is shown in the project viewer and is not a filter.
 *
 * The `youtubeId` is the part of the URL after /shorts/ or after ?v=
 *   https://youtube.com/shorts/pTprEeQBLis  ->  "pTprEeQBLis"
 */

export type Category = "Reels" | "AI Ads";

/** Controls how much visual weight a project gets in the grid. */
export type Priority = "featured" | "good" | "secondary";

export interface Project {
  id: string;
  title: string;
  category: Category;
  youtubeId: string;
  /** Optional — defaults to true when priority is "featured". */
  featured?: boolean;
  /** Optional — defaults to "good". */
  priority?: Priority;
  /**
   * Optional — the page or brand the work was published under, e.g.
   * "BeerBiceps SkillHouse" or "Dhaanessh.ai". Shown in the project viewer
   * when present; simply omitted when it is not set.
   */
  brand?: string;
  /** Optional — falls back to the category description below. */
  description?: string;
  /** Optional — falls back to the category role below. */
  role?: string[];
  /** Optional — falls back to the category skills below. */
  skills?: string[];
}

/**
 * A project after defaults have been applied. Used by all components.
 * `brand` stays optional because it has no category-level fallback.
 */
export interface ResolvedProject
  extends Required<Omit<Project, "featured" | "brand">> {
  featured: boolean;
  brand?: string;
}

/** The filter options shown above the work grid. */
export const filters = ["All", "Reels", "AI Ads"] as const;
export type Filter = (typeof filters)[number];

/**
 * Generic, category-level fallbacks. These are intentionally plain — edit the
 * text here, or override it per project with `description` / `role` / `skills`.
 */
const categoryDefaults: Record<
  Category,
  { description: string; role: string[]; skills: string[] }
> = {
  Reels: {
    description:
      "Short-form vertical edit produced at BeerBiceps SkillHouse for Instagram Reels and YouTube Shorts.",
    role: ["Video Editing", "Post-Production"],
    skills: ["Editing", "Subtitles", "Sound Design", "Color Correction"],
  },
  "AI Ads": {
    description:
      "Advertising creative produced at BeerBiceps SkillHouse, combining AI-assisted visuals with editing, motion graphics and sound design.",
    role: ["Video Editing", "Motion Graphics", "AI-assisted Creative"],
    skills: [
      "Editing",
      "Motion Graphics",
      "AI-assisted Visuals",
      "Sound Design",
    ],
  },
};

/**
 * Reels edited for the Dhaanessh.ai Instagram page — the distribution page for
 * SkillHouse content created under our founder. Same ecosystem as the work
 * published on the main BeerBiceps SkillHouse channels, not outside client work.
 */
const dhaaneshReelDescription =
  "Short-form vertical edit for the Dhaanessh.ai Instagram page, the distribution page for SkillHouse content created under our founder. Edited in-house as part of the BeerBiceps SkillHouse ecosystem.";

export const projects: Project[] = [
  // -------------------------------------------------------------- Featured
  {
    id: "skillhouse-ai-ad-01",
    title: "Content Creation Empire — Promotional Ad",
    category: "AI Ads",
    youtubeId: "ELUwf25kz8o",
    priority: "featured",
    brand: "BeerBiceps SkillHouse",
  },
  {
    id: "skillhouse-reel-05",
    title: "3 Levels of Mentorship — Educational Reel",
    category: "Reels",
    youtubeId: "G2hLTxG-Cak",
    priority: "featured",
    brand: "BeerBiceps SkillHouse",
  },
  {
    id: "skillhouse-ai-ad-02",
    title: "Content Creation Empire — AI-Assisted Promotional Ad",
    category: "AI Ads",
    youtubeId: "TqxdCpAV--o",
    priority: "featured",
    brand: "BeerBiceps SkillHouse",
  },
  {
    id: "skillhouse-reel-02",
    title: "AI Productivity — Talking-Head Reel",
    category: "Reels",
    youtubeId: "8yPr0djWito",
    priority: "featured",
    brand: "Dhaanessh.ai",
    description: dhaaneshReelDescription,
  },
  {
    id: "skillhouse-ai-ad-05",
    title: "Live Distribution Workshop — Promotional Ad 03",
    category: "AI Ads",
    youtubeId: "bay16F71V1Y",
    priority: "featured",
    brand: "BeerBiceps SkillHouse",
  },
  {
    id: "skillhouse-reel-03",
    title: "AI Vaccine — AI-Assisted Educational Reel",
    category: "Reels",
    youtubeId: "j-8GIJeoIjc",
    priority: "featured",
    brand: "Dhaanessh.ai",
    description: dhaaneshReelDescription,
  },

  // ------------------------------------------------------------- More Work
  {
    id: "skillhouse-ai-ad-03",
    title: "Live Distribution Workshop — Promotional Ad",
    category: "AI Ads",
    youtubeId: "UTrKzF1spyo",
    priority: "good",
    brand: "BeerBiceps SkillHouse",
  },
  {
    id: "skillhouse-ai-ad-04",
    title: "Live Distribution Workshop — Promotional Ad 02",
    category: "AI Ads",
    youtubeId: "-552kHvDo_U",
    priority: "good",
    brand: "BeerBiceps SkillHouse",
  },
  {
    id: "skillhouse-ai-ad-06",
    title: "Video Editing Mastery — Course Promotional Ad",
    category: "AI Ads",
    youtubeId: "AU4Ybo40rao",
    priority: "good",
    brand: "BeerBiceps SkillHouse",
  },
  {
    // Originally filed under Reels — it is an advertisement, so it now sits in
    // AI Ads. Still published through the Dhaanessh.ai distribution page.
    id: "skillhouse-reel-06",
    title: "AI Workshop — Promotional Ad",
    category: "AI Ads",
    youtubeId: "dgGBpukQhmw",
    priority: "good",
    brand: "Dhaanessh.ai",
    description: dhaaneshReelDescription,
  },
  {
    id: "skillhouse-reel-01",
    title: "AI Literacy — Motion Graphics Reel",
    category: "Reels",
    youtubeId: "pTprEeQBLis",
    priority: "good",
    brand: "BeerBiceps SkillHouse",
  },
  {
    id: "skillhouse-reel-04",
    title: "Buzz by Jack Dorsey — News & Tech Reel",
    category: "Reels",
    youtubeId: "LWey6eEgotY",
    priority: "good",
    brand: "Dhaanessh.ai",
    description: dhaaneshReelDescription,
  },
  {
    id: "skillhouse-reel-07",
    title: "Tornyol Mosquito-Killing Drone — Tech Explainer Reel",
    category: "Reels",
    youtubeId: "NK1Bxqlc1cQ",
    priority: "good",
    brand: "Dhaanessh.ai",
    description: dhaaneshReelDescription,
  },
  {
    id: "skillhouse-reel-08",
    title: "Tau Robotics — Tech Explainer Reel",
    category: "Reels",
    youtubeId: "atyl-ero9is",
    priority: "good",
    brand: "Dhaanessh.ai",
    description: dhaaneshReelDescription,
  },
];

const priorityRank: Record<Priority, number> = {
  featured: 0,
  good: 1,
  secondary: 2,
};

/** Applies category defaults and sorts strongest work first. */
export function getProjects(): ResolvedProject[] {
  return projects
    .map((project) => {
      const defaults = categoryDefaults[project.category];
      const priority = project.priority ?? "good";

      return {
        ...project,
        priority,
        featured: project.featured ?? priority === "featured",
        description: project.description ?? defaults.description,
        role: project.role ?? defaults.role,
        skills: project.skills ?? defaults.skills,
      };
    })
    .sort((a, b) => priorityRank[a.priority] - priorityRank[b.priority]);
}

/** Filters the resolved list by the active category tab. */
export function filterProjects(
  allProjects: ResolvedProject[],
  filter: Filter,
): ResolvedProject[] {
  if (filter === "All") return allProjects;
  return allProjects.filter((project) => project.category === filter);
}
