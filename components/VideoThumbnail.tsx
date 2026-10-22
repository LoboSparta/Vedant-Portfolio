"use client";

import { useState } from "react";

interface VideoThumbnailProps {
  youtubeId: string;
  alt: string;
  className?: string;
  /** "vertical" for Reels / Shorts (9:16), "landscape" for 16:9 video. */
  shape?: "vertical" | "landscape";
}

/**
 * YouTube serves several thumbnail sizes and not every one exists for every
 * video. We try the best-fitting image first and fall back gracefully.
 *
 * - vertical: the tall "original aspect ratio" image YouTube makes for Shorts.
 * - landscape: the largest 16:9 image. The last fallback (hqdefault) is a
 *   4:3 image with black bars; object-cover in a 16:9 frame crops those off.
 */
function sourcesFor(youtubeId: string, shape: "vertical" | "landscape") {
  const base = `https://i.ytimg.com/vi/${youtubeId}`;
  if (shape === "landscape") {
    return [
      `${base}/maxresdefault.jpg`,
      `${base}/hq720.jpg`,
      `${base}/hqdefault.jpg`,
    ];
  }
  return [`${base}/oardefault.jpg`, `${base}/hq720.jpg`, `${base}/hqdefault.jpg`];
}

export default function VideoThumbnail({
  youtubeId,
  alt,
  className = "",
  shape = "vertical",
}: VideoThumbnailProps) {
  const sources = sourcesFor(youtubeId, shape);
  const [index, setIndex] = useState(0);

  const tryNext = () =>
    setIndex((current) => Math.min(current + 1, sources.length - 1));

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={sources[index]}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={tryNext}
      onLoad={(event) => {
        // YouTube answers a missing large thumbnail with a tiny grey
        // placeholder (about 120px wide) instead of an error.
        if (event.currentTarget.naturalWidth <= 120) tryNext();
      }}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
