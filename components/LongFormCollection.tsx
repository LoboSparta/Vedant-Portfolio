"use client";

import { useState } from "react";
import styles from "./LongFormCollection.module.css";

export type LongFormEpisode = { id: string; title?: string };

export const RANVEER_SHOW_EPISODES: LongFormEpisode[] = [
  { id: "PTn_5iWnwP0" },
  { id: "lqOH-zxtCDE" },
  { id: "_L2cqQayZSo" },
  { id: "GRvShUB2XBc" },
  { id: "Q_BzkN397aA" },
  { id: "ZMg5MbaXmcw" },
];

type Props = { title?: string; description?: string; episodes?: LongFormEpisode[] };

function EpisodeCard({ episode, index }: { episode: LongFormEpisode; index: number }) {
  const [playing, setPlaying] = useState(false);
  const [thumb, setThumb] = useState<"maxresdefault" | "hqdefault">("maxresdefault");
  const label = episode.title ?? `Episode ${String(index + 1).padStart(2, "0")}`;
  const watchUrl = `https://www.youtube.com/watch?v=${episode.id}`;

  return (
    <li className={styles.item}>
      <div className={styles.frame}>
        {playing ? (
          <iframe className={styles.media} src={`https://www.youtube-nocookie.com/embed/${episode.id}?autoplay=1&rel=0&playsinline=1`} title={`${label} — The Ranveer Show`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
        ) : (
          <button type="button" className={styles.poster} onClick={() => setPlaying(true)} aria-label={`Play ${label}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.media} src={`https://i.ytimg.com/vi/${episode.id}/${thumb}.jpg`} alt="" loading="lazy" decoding="async" onLoad={(e) => { if (thumb === "maxresdefault" && e.currentTarget.naturalWidth <= 120) setThumb("hqdefault"); }} onError={() => setThumb("hqdefault")} />
            <span className={styles.play} aria-hidden="true"><svg viewBox="0 0 24 24" width="22" height="22"><path d="M8 5.5v13l11-6.5z" fill="currentColor" /></svg></span>
          </button>
        )}
      </div>
      <div className={styles.meta}>
        <h4 className={styles.episodeTitle}>{label}</h4>
        <a className={styles.link} href={watchUrl} target="_blank" rel="noopener noreferrer">Watch on YouTube<span className={styles.srOnly}> (opens in a new tab)</span></a>
      </div>
    </li>
  );
}

export default function LongFormCollection({ title = "The Ranveer Show", description = "Full-length podcast edits — shaping long conversations into a clear, considered viewing experience.", episodes = RANVEER_SHOW_EPISODES }: Props) {
  return (
    <section className="shell scroll-mt-24 py-16 md:py-24" id="long-form">
      <div className={styles.collection}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Long-form / Podcast editing</p>
          <h2 className={styles.title}>{title} <span>— Podcast edits</span></h2>
          <p className={styles.description}>{description}</p>
          <div className={styles.sectionMeta}><span>Six published episodes</span><span>Landscape format / 16:9</span></div>
        </header>
        <ul className={styles.grid}>{episodes.map((episode, index) => <EpisodeCard key={episode.id} episode={episode} index={index} />)}</ul>
      </div>
    </section>
  );
}
