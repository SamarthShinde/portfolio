import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Section, { rise } from '../components/Section';
import { skillGroups } from '../data/resume';

function XpBar({ name, pct, delay }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es[0].isIntersecting && (setOn(true), obs.disconnect()),
      { threshold: 0.4 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div className="xpbar" ref={ref}>
      <div className="xpbar-head">
        <span className="xpbar-name">{name}</span>
        <span className="xpbar-pct">{pct} / 100</span>
      </div>
      <div className="xpbar-track">
        <div className="xpbar-fill" style={{ width: on ? `${pct}%` : '0%', transitionDelay: `${delay}ms` }} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <Section id="skills" level="03" label="SKILL TREE" title={<>Abilities <em>Unlocked</em></>}>
      <div className="sk-grid">
        {skillGroups.map((g, gi) => (
          <motion.div
            key={g.channel}
            className="sk-panel"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={rise}
            custom={gi}
          >
            <div className="sk-channel">{g.channel}</div>
            {g.skills.map((s, i) => (
              <XpBar key={s.name} name={s.name} pct={s.pct} delay={i * 110} />
            ))}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
