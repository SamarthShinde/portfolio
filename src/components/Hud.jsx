import { useEffect, useState } from 'react';
import { zones, identity } from '../data/resume';

// Game HUD: top nav bar + bottom zone indicator + XP (scroll) bar.
export default function Hud() {
  const [active, setActive] = useState(0);
  const [xp, setXp] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setXp(max > 0 ? (window.scrollY / max) * 100 : 0);
      const yc = window.scrollY + window.innerHeight * 0.45;
      let cur = 0;
      zones.forEach((z, i) => {
        const el = document.getElementById(z.id);
        if (el && el.offsetTop <= yc) cur = i;
      });
      setActive(cur);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="hud-top">
        <a className="hud-logo" href="#hero" onClick={(e) => go(e, 'hero')}>
          <span className="hud-logo-mark">▲</span> {identity.alias}
        </a>
        <nav className="hud-nav">
          {zones.slice(1).map((z, i) => (
            <a key={z.id} href={`#${z.id}`} onClick={(e) => go(e, z.id)} className={active === i + 1 ? 'on' : ''}>
              <sup>{String(i + 1).padStart(2, '0')}</sup>
              {z.nav}
            </a>
          ))}
        </nav>
        <div className="hud-status"><i /> ONLINE</div>
      </header>

      <div className="hud-bottom">
        <div className="hud-zone">
          ZONE {String(active).padStart(2, '0')} // {zones[active].label}
        </div>
        <div className="hud-xp">
          <span>XP</span>
          <div className="hud-xp-track"><div className="hud-xp-fill" style={{ width: `${xp}%` }} /></div>
          <span className="hud-xp-num">{Math.round(xp)}%</span>
        </div>
      </div>

      <div className="hud-rail">
        {zones.map((z, i) => (
          <a key={z.id} href={`#${z.id}`} onClick={(e) => go(e, z.id)} className={active === i ? 'on' : ''} aria-label={z.nav} />
        ))}
      </div>
    </>
  );
}
