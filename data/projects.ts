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
  /** Optional — falls back to the category description below. */
  description?: string;
  /** Optional — falls back to the category role below. */
  role?: string[];
  /** Optional — falls back to the category skills below. */
  skills?: string[];
}

/** A project after defaults have been applied. Used by all components. */
export interface ResolvedProject extends Required<Omit<Project, "featured">> {
  featured: boolean;
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

export const projects: Project[] = [
  // ---------------------------------------------------------------- AI Ads
  {
    id: "skillhouse-ai-ad-01",
    title: "SkillHouse AI Ad 01",
    category: "AI Ads",
    youtubeId: "ELUwf25kz8o",
    priority: "featured",
  },
  {
    id: "skillhouse-ai-ad-02",
    title: "SkillHouse AI Ad 02",
    category: "AI Ads",
    youtubeId: "TqxdCpAV--o",
    priority: "featured",
  },
  {
    id: "skillhouse-ai-ad-03",
    title: "SkillHouse AI Ad 03",
    category: "AI Ads",
    youtubeId: "UTrKzF1spyo",
    priority: "featured",
  },
  {
    id: "skillhouse-ai-ad-04",
    title: "SkillHouse AI Ad 04",
    category: "AI Ads",
    youtubeId: "-552kHvDo_U",
    priority: "featured",
  },
  {
    id: "skillhouse-ai-ad-05",
    title: "SkillHouse AI Ad 05",
    category: "AI Ads",
    youtubeId: "bay16F71V1Y",
    priority: "good",
  },
  {
    id: "skillhouse-ai-ad-06",
    title: "SkillHouse AI Ad 06",
    category: "AI Ads",
    youtubeId: "AU4Ybo40rao",
    priority: "good",
  },

  // ----------------------------------------------------------------- Reels
  {
    id: "skillhouse-reel-01",
    title: "SkillHouse Reel 01",
    category: "Reels",
    youtubeId: "pTprEeQBLis",
    priority: "good",
  },
  {
    id: "skillhouse-reel-02",
    title: "SkillHouse Reel 02",
    category: "Reels",
    youtubeId: "8yPr0djWito",
    priority: "featured",
  },
  {
    id: "skillhouse-reel-03",
    title: "SkillHouse Reel 03",
    category: "Reels",
    youtubeId: "j-8GIJeoIjc",
    priority: "secondary",
  },
  {
    id: "skillhouse-reel-04",
    title: "SkillHouse Reel 04",
    category: "Reels",
    youtubeId: "LWey6eEgotY",
    priority: "good",
  },
  {
    id: "skillhouse-reel-05",
    title: "SkillHouse Reel 05",
    category: "Reels",
    youtubeId: "G2hLTxG-Cak",
    priority: "featured",
  },
  {
    id: "skillhouse-reel-06",
    title: "SkillHouse Reel 06",
    category: "Reels",
    youtubeId: "dgGBpukQhmw",
    priority: "featured",
  },
  {
    id: "skillhouse-reel-07",
    title: "SkillHouse Reel 07",
    category: "Reels",
    youtubeId: "NK1Bxqlc1cQ",
    priority: "good",
  },
  {
    id: "skillhouse-reel-08",
    title: "SkillHouse Reel 08",
    category: "Reels",
    youtubeId: "atyl-ero9is",
    priority: "good",
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
