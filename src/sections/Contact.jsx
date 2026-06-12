import { motion } from 'framer-motion';
import Section, { rise } from '../components/Section';
import StarBorder from '../components/reactbits/StarBorder';
import { identity } from '../data/resume';

const LINKS = [
  { k: 'EMAIL', v: identity.email, href: `mailto:${identity.email}` },
  { k: 'LINKEDIN', v: 'samarth-shinde', href: identity.linkedin },
  { k: 'GITHUB', v: 'SamarthShinde', href: identity.github },
  { k: 'PHONE', v: identity.phone, href: identity.phoneHref },
];

export default function Contact() {
  return (
    <Section id="contact" level="07" label="JOIN PARTY" title={<>Continue<em>?</em></>} className="zone-contact">
      <motion.p
        className="contact-sub"
        initial="hidden" whileInView="show" viewport={{ once: true }} variants={rise}
      >
        Open to exciting opportunities in AI, ML, and backend engineering.
        Let's create something impactful together. <span className="blink-txt">INSERT COIN TO START ▮</span>
      </motion.p>

      <motion.div
        className="contact-cta"
        initial="hidden" whileInView="show" viewport={{ once: true }} variants={rise} custom={1}
      >
        <StarBorder href={`mailto:${identity.email}`} color="#39ff14" className="sb-primary sb-big">
          PRESS START — SEND MESSAGE
        </StarBorder>
      </motion.div>

      <div className="contact-grid">
        {LINKS.map((l, i) => (
          <motion.a
            key={l.k}
            href={l.href}
            target={l.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="contact-cell"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={rise} custom={i}
          >
            <span>{l.k}</span>
            <b>{l.v}</b>
          </motion.a>
        ))}
      </div>

      <footer className="site-footer">
        <span>{identity.name} · AI Engineer · {identity.location}</span>
        <span>“{identity.motto}” — GAME OVER? NEVER. PLAY AGAIN ↻</span>
      </footer>
    </Section>
  );
}
