/**
 * ---------------------------------------------------------------------------
 * LONG-FORM COLLECTIONS — landscape 16:9 videos, shown as one collection.
 * ---------------------------------------------------------------------------
 * To add or rename an episode, edit the `episodes` array below.
 *
 *   { id: "YOUTUBE_VIDEO_ID" }                       -> labelled "Episode N"
 *   { id: "YOUTUBE_VIDEO_ID", title: "Real title" }  -> uses the real title
 *
 * Only add a `title` once you have confirmed it. Nothing is invented here.
 * The `id` is the part of the link after youtu.be/ or after ?v=
 *   https://youtu.be/PTn_5iWnwP0  ->  "PTn_5iWnwP0"
 */

export interface LongFormEpisode {
  /** YouTube video ID. */
  id: string;
  /** Optional. Leave out unless confirmed. */
  title?: string;
}

export const longFormCollection = {
  title: "The Ranveer Show — Podcast Editing",
  description:
    "Long-form podcast editing focused on pacing, continuity, and a polished viewing experience.",
  /** The six full-length episodes, in the order they were supplied. */
  episodes: [
    { id: "PTn_5iWnwP0" },
    { id: "lqOH-zxtCDE" },
    { id: "_L2cqQayZSo" },
    { id: "GRvShUB2XBc" },
    { id: "Q_BzkN397aA" },
    { id: "ZMg5MbaXmcw" },
  ] as LongFormEpisode[],
};

/** Neutral label used when no confirmed title has been added. */
export function episodeLabel(episode: LongFormEpisode, index: number): string {
  return episode.title ?? `Episode ${index + 1}`;
}
