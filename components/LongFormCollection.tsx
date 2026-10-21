"use client";

import { useState } from "react";
import styles from "./LongFormCollection.module.css";

/**
 * The six videos, in the order you supplied them.
 * Titles could NOT be retrieved while building this, so each episode uses a
 * neutral label. To add a real title later, fill in `title` for that entry.
 */
export type LongFormEpisode = {
  id: string; // YouTube video ID
  title?: string; // optional, only set if confirmed
};

export const RANVEER_SHOW_EPISODES: LongFormEpisode[] = [
  { id: "PTn_5iWnwP0" },
  { id: "lqOH-zxtCDE" },
  { id: "_L2cqQayZSo" },
  { id: "GRvShUB2XBc" },
  { id: "Q_BzkN397aA" },
  { id: "ZMg5MbaXmcw" },
];

type Props = {
  title?: string;
  description?: string;
  episodes?: LongFormEpisode[];
};

function EpisodeCard({
  episode,
  index,
}: {
  episode: LongFormEpisode;
  index: number;
}) {
  const [playing, setPlaying] = useState(false);
  // Try the highest-resolution thumbnail first, then fall back.
  const [thumb, setThumb] = useState<"maxresdefault" | "hqdefault">(
    "maxresdefault"
  );
  const label = episode.title ?? `Episode ${index + 1}`;
  const watchUrl = `https://www.youtube.com/watch?v=${episode.id}`;

  return (
    <li className={styles.item}>
      <div className={styles.frame}>
        {playing ? (
          <iframe
            className={styles.media}
            src={`https://www.youtube-nocookie.com/embed/${episode.id}?autoplay=1&rel=0&playsinline=1`}
            title={`${label} — The Ranveer Show`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <button
            type="button"
            className={styles.poster}
            onClick={() => setPlaying(true)}
            aria-label={`Play ${label}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={styles.media}
              src={`https://i.ytimg.com/vi/${episode.id}/${thumb}.jpg`}
              alt=""
              loading="lazy"
              decoding="async"
              onLoad={(e) => {
                // YouTube serves a 120px-wide placeholder when maxres is missing.
                if (thumb === "maxresdefault" && e.currentTarget.naturalWidth <= 120) {
                  setThumb("hqdefault");
                }
              }}
              onError={() => setThumb("hqdefault")}
            />
            <span className={styles.play} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22">
                <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <div className={styles.meta}>
        <h4 className={styles.episodeTitle}>{label}</h4>
        <a
          className={styles.link}
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch on YouTube
          <span className={styles.srOnly}> (opens in a new tab)</span>
        </a>
      </div>
    </li>
  );
}

export default function LongFormCollection({
  title = "The Ranveer Show — Podcast Editing",
  description = "Long-form podcast editing focused on pacing, continuity, and a polished viewing experience.",
  episodes = RANVEER_SHOW_EPISODES,
}: Props) {
  return (
    <div className={styles.collection} id="long-form">
      <header className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </header>
      <ul className={styles.grid}>
        {episodes.map((ep, i) => (
          <EpisodeCard key={ep.id} episode={ep} index={i} />
        ))}
      </ul>
    </div>
  );
}
