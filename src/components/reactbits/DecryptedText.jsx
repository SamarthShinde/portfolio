import { useEffect, useRef, useState } from 'react';

// Adapted from reactbits.dev "Decrypted Text" — scrambles characters
// then reveals the real string when the element scrolls into view.
const CHARS = '!<>-_\\/[]{}—=+*^?#________';

export default function DecryptedText({ text, speed = 28, className = '', as: Tag = 'span' }) {
  const [out, setOut] = useState(text);
  const ref = useRef(null);
  const ran = useRef(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || ran.current) return;
        ran.current = true;
        obs.disconnect();
        let frame = 0;
        const total = text.length * 2 + 8;
        const tick = () => {
          let s = '';
          for (let i = 0; i < text.length; i++) {
            if (i < (frame - 4) / 1.6) s += text[i];
            else if (text[i] === ' ') s += ' ';
            else s += CHARS[Math.floor(Math.random() * CHARS.length)];
          }
          setOut(s);
          frame++;
          if (frame < total) setTimeout(tick, speed);
          else setOut(text);
        };
        tick();
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [text, speed]);

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {out}
    </Tag>
  );
}
