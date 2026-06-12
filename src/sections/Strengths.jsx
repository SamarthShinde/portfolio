import { motion } from 'framer-motion';
import Section, { rise } from '../components/Section';
import SpotlightCard from '../components/reactbits/SpotlightCard';
import { strengths } from '../data/resume';

export default function Strengths() {
  return (
    <Section id="strengths" level="02" label="CORE ATTRIBUTES" title={<>Character <em>Strengths</em></>}>
      <div className="str-grid">
        {strengths.map((s, i) => (
          <motion.div
            key={s.name}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={rise}
            custom={i % 3}
          >
            <SpotlightCard className="str-card" color={i % 2 ? 'rgba(255,43,214,0.13)' : 'rgba(0,240,255,0.13)'}>
              <div className="str-icon">{s.icon}</div>
              <h3>{s.name}</h3>
              <p>{s.body}</p>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
