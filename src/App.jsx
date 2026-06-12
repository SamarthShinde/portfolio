import { useEffect, useState } from 'react';
import BackgroundFX from './fx/BackgroundFX';
import Hud from './components/Hud';
import Hero from './sections/Hero';
import Timeline from './sections/Timeline';
import Strengths from './sections/Strengths';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

function Boot({ onDone }) {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { onDone(); return; }
    let p = 0;
    const t = setInterval(() => {
      p += Math.random() * 9 + 3;
      if (p >= 100) { p = 100; clearInterval(t); setTimeout(onDone, 350); }
      setPct(Math.floor(p));
    }, 60);
    return () => clearInterval(t);
  }, [onDone]);
  return (
    <div className="boot">
      <div className="boot-title">SAMARTH.EXE</div>
      <div className="boot-sub">LOADING WORLD…</div>
      <div className="boot-track"><div style={{ width: `${pct}%` }} /></div>
      <div className="boot-pct">{pct}%</div>
      <div className="boot-hint">▲ ▲ ▼ ▼ ◀ ▶ ◀ ▶ B A</div>
    </div>
  );
}

export default function App() {
  const [booted, setBooted] = useState(false);
  return (
    <>
      {!booted && <Boot onDone={() => setBooted(true)} />}
      <BackgroundFX />
      <Hud />
      <main className={booted ? 'world ready' : 'world'}>
        <Hero />
        <Timeline />
        <Strengths />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}
