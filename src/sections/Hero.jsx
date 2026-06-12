import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import GlitchText from '../components/reactbits/GlitchText';
import StarBorder from '../components/reactbits/StarBorder';
import { identity, stats, techMarquee } from '../data/resume';

function useTypedRoles(roles) {
  const [txt, setTxt] = useState('');
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTxt(roles[0]);
      return;
    }
    let r = 0, c = 0, del = false, alive = true;
    const step = () => {
      if (!alive) return;
      const cur = roles[r];
      c += del ? -1 : 1;
      setTxt(cur.slice(0, c));
      let wait = del ? 40 : 90;
      if (!del && c === cur.length) { del = true; wait = 1700; }
      if (del && c === 0) { del = false; r = (r + 1) % roles.length; wait = 300; }
      setTimeout(step, wait);
    };
    const t = setTimeout(step, 900);
    return () => { alive = false; clearTimeout(t); };
  }, [roles]);
  return txt;
}

export default function Hero() {
  const typed = useTypedRoles(identity.roles);

  return (
    <section id="hero" className="zone zone-hero">
      <div className="zone-inner hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-tag">
            <span className="blink-dot" /> PLAYER ONE — READY &nbsp;·&nbsp; {identity.title.toUpperCase()}
          </div>
          <h1 className="hero-name">
            <GlitchText>SAMARTH</GlitchText>
            <GlitchText className="glitch-alt">SHINDE</GlitchText>
          </h1>
          <div className="hero-typed">
            <span className="prompt">&gt;_</span> {typed}
            <span className="caret" />
          </div>
          <p className="hero-desc">
            I build <strong>intelligent systems</strong> at the intersection of AI, data engineering, and real-world
            impact — from <strong>patented safety technology</strong> to retail forecasting pipelines powering
            billion-dollar brands.
          </p>
          <div className="hero-btns">
            <StarBorder href="#projects" color="#ff2bd6" className="sb-primary">VIEW INVENTORY ▸</StarBorder>
            <StarBorder href="#contact" color="#00f0ff">JOIN PARTY</StarBorder>
          </div>
        </motion.div>

        <motion.div
          className="hero-portrait"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="portrait-frame">
            <img src="/hero.jpg" alt="Samarth Shinde" />
            <div className="portrait-scan" />
            <span className="pf-corner c1" /><span className="pf-corner c2" />
            <span className="pf-corner c3" /><span className="pf-corner c4" />
            <div className="portrait-plate">
              <b>{identity.name}</b>
              <span>LV.22 · {identity.location}</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="hero-stats">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="hstat"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 + i * 0.12 }}
          >
            <b>{s.value}{s.suffix}</b>
            <span>{s.label}</span>
          </motion.div>
        ))}
      </div>

      <div className="hero-marquee" aria-hidden="true">
        <div className="hm-track">
          {[...techMarquee, ...techMarquee].map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
