import { motion } from 'framer-motion';
import Section, { rise } from '../components/Section';
import { patent, recognition, education, certs } from '../data/resume';

export default function Achievements() {
  return (
    <Section id="achievements" level="06" label="TROPHY ROOM" title={<>Achievements <em>Unlocked</em></>}>
      <motion.div
        className="legendary"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={rise}
      >
        <div className="leg-badge">🏆 LEGENDARY ITEM — INDIAN PATENT</div>
        <h3>{patent.title}</h3>
        <div className="leg-grid">
          <div><span>APPLICATION NO.</span><b>{patent.appNo}</b></div>
          <div><span>FILED</span><b>{patent.filed}</b></div>
          <div><span>STATUS</span><b>{patent.status}</b></div>
        </div>
      </motion.div>

      <div className="ach-row">
        <motion.blockquote
          className="ach-quote"
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={rise} custom={1}
        >
          <p>“{recognition.quote}”</p>
          <footer>
            <b>{recognition.author}</b>
            <span>{recognition.role} — {recognition.org}</span>
          </footer>
        </motion.blockquote>

        <motion.div
          className="ach-side"
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={rise} custom={2}
        >
          {education.map((e) => (
            <div key={e.deg} className="edu-row">
              <div className="edu-gpa">{e.gpa}</div>
              <div>
                <b>{e.deg}</b>
                <span>{e.school} · {e.years}</span>
              </div>
            </div>
          ))}
          <div className="cert-row">
            {certs.map((c) => (
              <span key={c.name} className="chip chip-gold">{c.name} — {c.inst}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
