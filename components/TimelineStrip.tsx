import VideoThumbnail from "./VideoThumbnail";
import { getProjects } from "@/data/projects";
import { longFormCollection } from "@/data/longform";

type Clip =
  | { kind: "tall"; id: string }
  | { kind: "wide"; id: string };

/** A deterministic waveform, drawn as one SVG path (no randomness, so the
 *  server and browser always render exactly the same thing). */
const WAVE_BARS = 300;
const WAVE_STEP = 5;
const WAVE_HEIGHT = 40;

function wavePath(): string {
  const mid = WAVE_HEIGHT / 2;
  let d = "";
  for (let i = 0; i < WAVE_BARS; i += 1) {
    const envelope = Math.abs(Math.sin(i * 0.19) * Math.cos(i * 0.043 + 1));
    const texture = ((i * 7) % 5) / 4;
    const half = 2 + Math.round(envelope * 13 + texture * 4);
    const x = i * WAVE_STEP + 2;
    d += `M${x} ${mid - half}V${mid + half}`;
  }
  return d;
}

function Waveform() {
  const width = WAVE_BARS * WAVE_STEP;
  return (
    <svg
      className="wave"
      width={width}
      height={WAVE_HEIGHT}
      viewBox={`0 0 ${width} ${WAVE_HEIGHT}`}
      aria-hidden="true"
    >
      <path
        d={wavePath()}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/**
 * A decorative, non-interactive "timeline" built from the real work:
 * a video track of thumbnails drifting past a fixed playhead, over an audio
 * waveform track. Pure CSS motion (transform only). Hidden from assistive
 * technology, and static when reduced motion is requested.
 */
export default function TimelineStrip() {
  const tall = getProjects()
    .filter((project) => project.featured)
    .map((project) => project.youtubeId);
  const wide = longFormCollection.episodes.slice(0, 2).map((e) => e.id);

  // Vertical clips with a landscape podcast clip after every second one.
  const clips: Clip[] = [];
  tall.forEach((id, index) => {
    clips.push({ kind: "tall", id });
    if (index % 2 === 1 && wide[Math.floor(index / 2)]) {
      clips.push({ kind: "wide", id: wide[Math.floor(index / 2)] });
    }
  });

  // Four identical copies make the loop seamless (see .track in globals.css).
  const copies = [0, 1, 2, 3];

  return (
    <div className="strip" aria-hidden="true">
      <div className="strip-row">
        <span className="strip-gutter">V1</span>
        <div className="playhead" />
        <div className="track py-3">
          {copies.map((copy) => (
            <div key={copy} className="flex">
              {clips.map((clip, index) => (
                <div
                  key={`${copy}-${clip.id}-${index}`}
                  className={`clip ${clip.kind === "tall" ? "clip-tall" : "clip-wide"}`}
                >
                  <VideoThumbnail
                    youtubeId={clip.id}
                    alt=""
                    shape={clip.kind === "tall" ? "vertical" : "landscape"}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="strip-row border-t border-line">
        <span className="strip-gutter">A1</span>
        <div className="track track-slow py-2">
          {copies.map((copy) => (
            <Waveform key={copy} />
          ))}
        </div>
      </div>
    </div>
  );
}
