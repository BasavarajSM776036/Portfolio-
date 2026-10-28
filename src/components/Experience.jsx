import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experience } from '../data';

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i = 0) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

const typeColors = {
  'Full-time': '#22c55e',
  'Residency': '#8b5cf6',
  'Internship': '#f97316',
};

export default function Experience() {
  const { ref: sectionRef, inView } = useInView({ triggerOnce: true, threshold: 0.08 });
  const lineRef = useRef(null);

  // Draw timeline line on scroll
  useEffect(() => {
    if (!inView) return;
    const line = lineRef.current;
    if (!line) return;
    let start = null;
    const duration = 1400;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      line.style.transform = `scaleY(${progress})`;
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView]);

  return (
    <section className="section" id="experience" ref={sectionRef} aria-label="Work experience">
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="section-label" variants={fadeLeft}>
            Experience
          </motion.div>

          <motion.h2 className="heading-lg" variants={fadeLeft} custom={1} style={{ marginBottom: '1rem' }}>
            Where I've worked
          </motion.h2>
          <motion.p className="body-lg" variants={fadeLeft} custom={2} style={{ maxWidth: 520, marginBottom: '3.5rem' }}>
            A journey through backend engineering, security and full-stack development.
          </motion.p>

          <div className="timeline">
            {/* Animated line */}
            <div
              style={{
                position: 'absolute',
                left: '10px',
                top: 0,
                bottom: 0,
                width: '2px',
                background: 'linear-gradient(to bottom, #6366f1, #8b5cf6, #f97316)',
                transformOrigin: 'top',
                transform: 'scaleY(0)',
              }}
              ref={lineRef}
              aria-hidden="true"
            />

            {experience.map((exp, i) => (
              <motion.div
                key={i}
                className="timeline-item"
                variants={fadeLeft}
                custom={i + 3}
              >
                <div className="timeline-card">
                  <div className="timeline-header">
                    <div>
                      <div className="timeline-role">{exp.role}</div>
                      <div className="timeline-company">
                        {exp.company}
                        <span style={{ color: 'var(--text-muted)', fontWeight: 400, margin: '0 0.4rem' }}>·</span>
                        <span style={{ color: 'var(--text-muted)', fontWeight: 400, fontSize: '0.85rem' }}>{exp.location}</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', alignItems: 'flex-end' }}>
                      <span className="timeline-period">{exp.period}</span>
                      <span style={{
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        color: typeColors[exp.type] || 'var(--accent-from)',
                        background: `${typeColors[exp.type] || 'var(--accent-from)'}18`,
                        padding: '0.15rem 0.6rem',
                        borderRadius: '100px',
                      }}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <ul className="timeline-bullets" role="list">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi}>{b}</li>
                    ))}
                  </ul>

                  {exp.certificate && (
                    <div style={{ marginTop: '1rem' }}>
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.78rem',
                        color: 'var(--accent-from)',
                        fontWeight: 600,
                        background: 'rgba(99,102,241,0.08)',
                        border: '1px solid rgba(99,102,241,0.2)',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '100px',
                      }}>
                        🏆 Certificate of Completion — See Education section
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
