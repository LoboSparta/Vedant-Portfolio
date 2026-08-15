"use client";

import { useState } from "react";

interface VideoThumbnailProps {
  youtubeId: string;
  alt: string;
  className?: string;
}

/**
 * YouTube serves several thumbnail sizes and not every one exists for every
 * video. We try the original-aspect-ratio image first (the tall one YouTube
 * generates for Shorts) and fall back gracefully.
 */
function sourcesFor(youtubeId: string) {
  return [
    `https://i.ytimg.com/vi/${youtubeId}/oardefault.jpg`,
    `https://i.ytimg.com/vi/${youtubeId}/hq720.jpg`,
    `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`,
  ];
}

export default function VideoThumbnail({
  youtubeId,
  alt,
  className = "",
}: VideoThumbnailProps) {
  const sources = sourcesFor(youtubeId);
  const [index, setIndex] = useState(0);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={sources[index]}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() =>
        setIndex((current) => Math.min(current + 1, sources.length - 1))
      }
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
