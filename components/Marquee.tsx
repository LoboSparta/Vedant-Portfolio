const phrases = ["Video editing", "Motion graphics", "Sound & rhythm", "Stories that move"];

export default function Marquee() {
  const items = [...phrases, ...phrases];
  return (
    <div className="marquee-viewport" aria-label="Video editing, motion graphics, sound and rhythm, stories that move">
      <div className="marquee-track" aria-hidden="true">
        {items.map((phrase, index) => (
          <span key={`${phrase}-${index}`} className="marquee-item">
            {phrase}<span className="marquee-star">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
