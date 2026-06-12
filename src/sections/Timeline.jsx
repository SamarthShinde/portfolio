import { motion } from 'framer-motion';
import Section, { rise } from '../components/Section';
import { timeline } from '../data/resume';

export default function Timeline() {
  return (
    <Section id="timeline" level="01" label="ORIGIN STORY" title={<>Career <em>Timeline</em></>}>
      <div className="tl">
        {timeline.map((e, i) => (
          <motion.div
            key={i}
            className={`tl-node ${e.now ? 'now' : ''} tag-${e.tag.toLowerCase()}`}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={rise}
            custom={i % 3}
          >
            <div className="tl-dot" />
            <div className="tl-year">{e.year}</div>
            <div className="tl-card">
              <span className="tl-tag">{e.tag}</span>
              <h3>{e.title}</h3>
              <p>{e.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
