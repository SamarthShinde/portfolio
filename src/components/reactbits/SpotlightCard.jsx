import { useRef } from 'react';

// Adapted from reactbits.dev "Spotlight Card" — radial glow follows the cursor.
export default function SpotlightCard({ children, className = '', color = 'rgba(0,240,255,0.14)' }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--spot-x', `${e.clientX - r.left}px`);
    el.style.setProperty('--spot-y', `${e.clientY - r.top}px`);
    el.style.setProperty('--spot-color', color);
  };

  return (
    <div ref={ref} onMouseMove={onMove} className={`spotlight-card ${className}`}>
      {children}
    </div>
  );
}
