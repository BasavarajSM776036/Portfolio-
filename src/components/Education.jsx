import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { education, certifications } from '../data';
import vtricksImg from '../assets/vtricks-certificate.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  }),
};

const certIcons = ['🌐', '📊', '🤖', '📡', '🛢️'];

export default function Education() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [lightbox, setLightbox] = useState(false);

  return (
    <>
      <section className="section" id="education" ref={ref} aria-label="Education and certifications">
        <div className="container">
          <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <motion.div className="section-label" variants={fadeUp}>
              Education & Certifications
            </motion.div>

            <motion.h2
              className="heading-lg"
              variants={fadeUp}
              custom={1}
              style={{ marginBottom: '3rem' }}
            >
              Academic foundation &<br />
              <span className="gradient-text">continuous learning</span>
            </motion.h2>

            <div className="edu-grid">
              {/* Education Card */}
              <motion.div className="edu-card glass-card" variants={fadeUp} custom={2}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎓</div>
                <div className="edu-degree">{education.degree}</div>
                <div className="edu-institution">{education.institution}</div>

                <div className="edu-meta">
                  <span className="edu-chip">📅 {education.period}</span>
                  <span className="edu-chip">📍 {education.location}</span>
                </div>

                <div className="cgpa-badge">
                  <div>
                    <div className="cgpa-number">{education.cgpa}</div>
                    <div className="cgpa-label">CGPA</div>
                  </div>
                  <div style={{ width: '1px', height: '40px', background: 'rgba(99,102,241,0.15)', margin: '0 1rem' }} />
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Graduated</div>
                    <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.9rem' }}>2026</div>
                  </div>
                </div>

                {/* Vtricks Certificate thumbnail */}
                <div style={{ marginTop: '1.5rem' }}>
                  <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                    Certificate
                  </p>
                  <div
                    className="cert-card-thumb"
                    onClick={() => setLightbox(true)}
                    data-cursor-label="View"
                    role="button"
                    aria-label="View Vtricks Technologies internship certificate"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setLightbox(true)}
                  >
                    <img
                      src={vtricksImg}
                      alt="Vtricks Technologies MERN Stack Internship Certificate for Basavaraj S Maneppagol"
                      loading="lazy"
                    />
                  </div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem', textAlign: 'center' }}>
                    Click to enlarge · Vtricks Technologies, MERN Stack
                  </p>
                </div>
              </motion.div>

              {/* Certifications */}
              <motion.div variants={fadeUp} custom={3}>
                <p style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                  Certifications & Courses
                </p>
                <ul className="cert-list" role="list">
                  {certifications.map((cert, i) => (
                    <motion.li
                      key={cert}
                      className="cert-item"
                      variants={fadeUp}
                      custom={i + 4}
                    >
                      <div className="cert-icon" aria-hidden="true">
                        {certIcons[i] || '📜'}
                      </div>
                      {cert}
                    </motion.li>
                  ))}
                </ul>

                {/* Skills summary box */}
                <motion.div
                  variants={fadeUp}
                  custom={10}
                  style={{
                    marginTop: '2rem',
                    padding: '1.5rem',
                    borderRadius: '20px',
                    background: 'linear-gradient(135deg, rgba(99,102,241,0.07), rgba(249,115,22,0.04))',
                    border: '1px solid rgba(99,102,241,0.15)',
                  }}
                >
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                    🌍 Languages I speak
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {[
                      { lang: 'Kannada', level: 'Native', pct: 100 },
                      { lang: 'English', level: 'Professional', pct: 85 },
                      { lang: 'Hindi', level: 'Conversational', pct: 60 },
                    ].map(({ lang, level, pct }) => (
                      <div key={lang}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                          <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)' }}>{lang}</span>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{level}</span>
                        </div>
                        <div style={{ height: '4px', borderRadius: '2px', background: 'rgba(99,102,241,0.12)', overflow: 'hidden' }}>
                          <motion.div
                            style={{ height: '100%', borderRadius: '2px', background: 'linear-gradient(90deg, var(--accent-from), var(--accent-to))' }}
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${pct}%` } : {}}
                            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(false)}
            role="dialog"
            aria-label="Certificate lightbox"
            aria-modal="true"
          >
            <motion.img
              src={vtricksImg}
              alt="Vtricks Technologies MERN Stack Internship Certificate"
              className="lightbox-img"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="lightbox-close"
              onClick={() => setLightbox(false)}
              aria-label="Close certificate view"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
