import { motion } from 'framer-motion';
import DecryptedText from './reactbits/DecryptedText';

export const rise = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] } }),
};

// Full-viewport scroll-snap zone with game-style header.
export default function Section({ id, level, label, title, children, className = '' }) {
  return (
    <section id={id} className={`zone ${className}`}>
      <div className="zone-inner">
        <motion.div
          className="zone-head"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={rise}
        >
          <div className="zone-level">
            <span className="zone-lvl-chip">LEVEL {level}</span>
            <DecryptedText text={label} className="zone-label" />
          </div>
          <h2 className="zone-title">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
