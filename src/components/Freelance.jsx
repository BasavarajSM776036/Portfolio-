import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { freelance, personal } from '../data';

const sparks = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 90 + 5}%`,
  delay: `${Math.random() * 4}s`,
  duration: `${3 + Math.random() * 3}s`,
  size: `${3 + Math.random() * 5}px`,
}));

export default function Freelance() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  const servicesOffered = [
    '⚛️ React Web Apps',
    '🟢 Node.js APIs',
    '🍃 MongoDB / MySQL DBs',
    '🔒 JWT Auth Systems',
    '📱 PWAs',
    '🚀 Netlify Deployments',
    '🔌 REST API Integration',
    '🛢️ Full-Stack MERN',
  ];

  return (
    <section className="freelance-section" id="freelance" ref={ref} aria-label="Freelance services">
      <div className="container">
        <motion.div
          className="freelance-card"
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Floating sparks */}
          <div className="freelance-sparks" aria-hidden="true">
            {sparks.map((s) => (
              <div
                key={s.id}
                className="spark"
                style={{
                  left: s.left,
                  bottom: 0,
                  width: s.size,
                  height: s.size,
                  animationDelay: s.delay,
                  animationDuration: s.duration,
                }}
              />
            ))}
          </div>

          {/* Badge */}
          <motion.div
            className="section-label"
            style={{ margin: '0 auto 1.5rem', display: 'inline-flex' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            ✦ Open to Freelance
          </motion.div>

          <motion.h2
            className="freelance-headline"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {freelance.headline}
          </motion.h2>

          <motion.p
            className="freelance-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            {freelance.subtext}
          </motion.p>

          <motion.p
            style={{
              fontSize: '0.95rem',
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
              fontStyle: 'italic',
            }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            Think of me like your own engineer — you bring the idea, I bring the code.
          </motion.p>

          <motion.div
            className="freelance-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.65 }}
          >
            <a
              href={`mailto:${personal.email}?subject=Freelance Project Inquiry`}
              className="btn-primary"
            >
              ✦ Let's Build Something
            </a>
            <a
              href={`https://wa.me/917760369208?text=Hi%20Basavaraj!%20I%20have%20a%20project%20idea...`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              💬 WhatsApp Me
            </a>
          </motion.div>

          <motion.div
            className="freelance-tags"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            {servicesOffered.map((s) => (
              <span key={s} className="freelance-tag">{s}</span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
