import { motion } from 'framer-motion';
import Section, { rise } from '../components/Section';
import TiltedCard from '../components/reactbits/TiltedCard';
import { projects } from '../data/resume';

export default function Projects() {
  return (
    <Section id="projects" level="05" label="INVENTORY" title={<>Artifacts <em>Crafted</em></>}>
      <div className="pj-grid">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={rise}
            custom={i}
          >
            <TiltedCard className="pj-card">
              <div className="pj-head">
                <span>{p.id}</span>
                <span className="pj-rarity">★ RARE DROP</span>
              </div>
              <div className="pj-icon">{p.icon}</div>
              <h3>{p.name}</h3>
              <p>{p.body}</p>
              <div className="pj-metrics">
                {p.metrics.map((m) => (
                  <div key={m.l}><b>{m.v}</b><span>{m.l}</span></div>
                ))}
              </div>
              <div className="chipset">
                {p.tags.map((t) => <span key={t} className="chip">{t}</span>)}
              </div>
              <a className="pj-link" href={p.link} target="_blank" rel="noopener noreferrer">
                INSPECT ON GITHUB ↗
              </a>
            </TiltedCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
