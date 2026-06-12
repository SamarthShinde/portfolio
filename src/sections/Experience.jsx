import { motion } from 'framer-motion';
import Section, { rise } from '../components/Section';
import { experience } from '../data/resume';

export default function Experience() {
  return (
    <Section id="experience" level="04" label="QUEST LOG" title={<>Missions <em>Completed</em></>}>
      <div className="quests">
        {experience.map((q, i) => (
          <motion.article
            key={i}
            className={`quest ${q.now ? 'active-quest' : ''}`}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={rise}
            custom={i}
          >
            <header>
              <span className="quest-period">{q.period}</span>
              <span className="quest-org">{q.org}</span>
              {q.now && <span className="quest-live"><i /> ACTIVE QUEST</span>}
            </header>
            <h3>{q.role}</h3>
            <p>{q.body}</p>
            <div className="chipset">
              {q.tags.map((t) => <span key={t} className="chip">{t}</span>)}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
