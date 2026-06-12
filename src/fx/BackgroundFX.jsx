import { useEffect, useRef } from 'react';
import { SCENES } from './scenes';
import { sceneVideos, zones } from '../data/resume';

// Fixed full-screen canvas. Watches the scroll position of every zone
// section and crossfades between procedural scenes (or drop-in videos)
// as each new section enters the viewport.
export default function BackgroundFX() {
  const canvasRef = useRef(null);
  const videoRefs = useRef({});

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const states = SCENES.map(() => ({}));
    let raf = 0;
    let w = 0, h = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = canvas.width = Math.floor(window.innerWidth * dpr);
      h = canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const smooth = (x) => x * x * (3 - 2 * x);

    const sceneFloat = () => {
      const yc = window.scrollY + window.innerHeight / 2;
      const B = window.innerHeight * 0.22; // blend half-width around boundaries
      let f = 0;
      for (let k = 1; k < zones.length; k++) {
        const el = document.getElementById(zones[k].id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        f += Math.max(0, Math.min(1, (yc - (top - B)) / (2 * B)));
      }
      return Math.min(f, SCENES.length - 1);
    };

    const drawScene = (i, t, alpha) => {
      if (alpha <= 0.01 || !SCENES[i]) return;
      ctx.save();
      ctx.globalAlpha = alpha;
      SCENES[i](ctx, w, h, t, states[i]);
      ctx.restore();
    };

    const updateVideos = (sf) => {
      Object.entries(videoRefs.current).forEach(([idx, el]) => {
        if (!el) return;
        const d = Math.abs(sf - Number(idx));
        const op = Math.max(0, 1 - d * 2);
        el.style.opacity = op.toFixed(2);
        if (op > 0 && el.paused) el.play().catch(() => {});
        if (op === 0 && !el.paused) el.pause();
      });
    };

    const start = performance.now();
    const frame = (now) => {
      const t = (now - start) / 1000;
      const sf = sceneFloat();
      const i0 = Math.floor(sf);
      const f = smooth(sf - i0);
      const bg = ctx.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0, '#06020f');
      bg.addColorStop(1, '#0a0318');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);
      drawScene(i0, t, 1 - f);
      drawScene(i0 + 1, t, f);
      updateVideos(sf);
      raf = requestAnimationFrame(frame);
    };

    if (reduced) {
      // static single render, refreshed on scroll only
      const renderOnce = () => {
        const sf = sceneFloat();
        ctx.fillStyle = '#06020f';
        ctx.fillRect(0, 0, w, h);
        drawScene(Math.round(sf), 10, 1);
      };
      renderOnce();
      window.addEventListener('scroll', renderOnce, { passive: true });
      return () => {
        window.removeEventListener('scroll', renderOnce);
        window.removeEventListener('resize', resize);
      };
    }

    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="bgfx" aria-hidden="true">
      <canvas ref={canvasRef} />
      {zones.map((z, i) =>
        sceneVideos[z.id] ? (
          <video
            key={z.id}
            ref={(el) => (videoRefs.current[i] = el)}
            src={sceneVideos[z.id]}
            muted
            loop
            playsInline
            preload="metadata"
            style={{ opacity: 0 }}
          />
        ) : null
      )}
      <div className="bgfx-vignette" />
      <div className="bgfx-scanlines" />
    </div>
  );
}
