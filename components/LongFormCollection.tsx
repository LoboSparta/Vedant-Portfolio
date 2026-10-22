"use client";

import { useState } from "react";
import VideoThumbnail from "./VideoThumbnail";
import { episodeLabel, longFormCollection } from "@/data/longform";

/**
 * The landscape (16:9) podcast collection. One large player, with every
 * episode listed beside it (or in a swipeable row on phones). Videos are
 * YouTube embeds; nothing is downloaded or re-uploaded, and the player only
 * loads when someone presses play.
 */
export default function LongFormCollection() {
  const { title, description, episodes } = longFormCollection;
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);

  const current = episodes[active];
  if (!current) return null;

  const label = episodeLabel(current, active);
  const watchUrl = `https://www.youtube.com/watch?v=${current.id}`;

  const choose = (index: number) => {
    setActive(index);
    setPlaying(true);
  };

  return (
    <div
      id="long-form"
      className="scroll-mt-24 rounded-[6px] border border-line bg-raise p-4 sm:p-6 lg:p-8"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-10">
        <div>
          <p className="text-xs font-medium text-accent">
            Long-Form · {episodes.length} full-length episodes
          </p>
          <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.02em] text-ink sm:text-3xl">
            {title}
          </h3>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-muted">
          {description}
        </p>
      </div>

      <div className="mt-6 grid gap-5 lg:mt-8 lg:grid-cols-12 lg:gap-8">
        {/* Main 16:9 player */}
        <div className="lg:col-span-8">
          <div className="relative aspect-video overflow-hidden rounded-[4px] border border-line bg-black">
            {playing ? (
              <iframe
                key={current.id}
                src={`https://www.youtube-nocookie.com/embed/${current.id}?autoplay=1&rel=0&playsinline=1`}
                title={`${label} — ${title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 h-full w-full border-0"
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label={`Play ${label}`}
                className="group absolute inset-0 block h-full w-full text-left"
              >
                <VideoThumbnail
                  youtubeId={current.id}
                  alt=""
                  shape="landscape"
                  className="transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-paper transition-transform duration-300 ease-editorial group-hover:scale-110 sm:h-20 sm:w-20">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="ml-1 h-6 w-6 sm:h-7 sm:w-7"
                      fill="currentColor"
                    >
                      <path d="M8 5.5v13l11-6.5-11-6.5z" />
                    </svg>
                  </span>
                </span>
                <span className="pointer-events-none absolute bottom-3 left-4 text-sm font-medium text-ink sm:bottom-4 sm:left-5">
                  {label}
                </span>
              </button>
            )}
          </div>

          <div className="mt-3 flex items-center justify-between gap-4">
            <p
              aria-live="polite"
              className="font-display text-base font-semibold text-ink"
            >
              {label}
            </p>
            <a
              href={watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center text-sm text-muted underline underline-offset-4 transition-colors duration-200 hover:text-ink"
            >
              Watch on YouTube
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>

        {/* Episode list: a swipeable row on phones, a stack beside the player on desktop */}
        <div className="lg:col-span-4">
          <p className="label mb-3 hidden lg:block">All episodes</p>
          <ol className="no-scrollbar -mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-1 sm:-mx-6 sm:px-6 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0">
            {episodes.map((episode, index) => {
              const isActive = index === active;
              const episodeName = episodeLabel(episode, index);

              return (
                <li
                  key={episode.id}
                  className="w-[46%] max-w-[220px] shrink-0 snap-start lg:w-full lg:max-w-none"
                >
                  <button
                    type="button"
                    onClick={() => choose(index)}
                    aria-label={`Play ${episodeName}`}
                    aria-current={isActive ? "true" : undefined}
                    className="group flex w-full flex-col gap-2 text-left lg:flex-row lg:items-center lg:gap-4"
                  >
                    <span
                      className={`relative block aspect-video w-full overflow-hidden rounded-[3px] border transition-colors duration-300 ease-editorial lg:w-36 lg:shrink-0 ${
                        isActive
                          ? "border-accent"
                          : "border-line group-hover:border-ink/40"
                      }`}
                    >
                      <VideoThumbnail
                        youtubeId={episode.id}
                        alt=""
                        shape="landscape"
                        className={`transition-opacity duration-300 ${
                          isActive ? "opacity-100" : "opacity-75 group-hover:opacity-100"
                        }`}
                      />
                    </span>
                    <span className="block">
                      <span
                        className={`block text-sm font-medium ${
                          isActive ? "text-ink" : "text-muted group-hover:text-ink"
                        }`}
                      >
                        {episodeName}
                      </span>
                      {isActive ? (
                        <span className="mt-0.5 block text-xs text-accent">
                          {playing ? "Now playing" : "Selected"}
                        </span>
                      ) : null}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
