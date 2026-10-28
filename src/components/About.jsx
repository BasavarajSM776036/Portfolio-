import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personal, languages } from '../data';
import profileImg from '../assets/profile.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  }),
};

const quickFacts = [
  { icon: '📍', label: 'Location', value: 'Bengaluru, Karnataka, India' },
  { icon: '🎓', label: 'Education', value: 'B.E. CSE, SDMIT (8.14 CGPA)' },
  { icon: '💼', label: 'Current Role', value: 'Junior Engineer @ Digiscrypt' },
  { icon: '🏸', label: 'Beyond Code', value: 'National Sepak Takraw Player' },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="section" id="about" ref={ref} aria-label="About me">
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="section-label" variants={fadeUp}>
            About Me
          </motion.div>

          <div className="about-grid">
            {/* Photo */}
            <motion.div
              className="about-photo-col"
              variants={fadeUp}
              custom={1}
            >
              <div className="about-photo-frame">
                <img
                  src={profileImg}
                  alt="Basavaraj S Maneppagol"
                  loading="lazy"
                />
              </div>

              <div className="about-badge">
                <div className="about-badge-num">10+</div>
                <div className="about-badge-label">Projects Built</div>
              </div>
            </motion.div>

            {/* Content */}
            <div className="about-content">
              <motion.h2 className="heading-lg" variants={fadeUp} custom={2}>
                Building software that's<br />
                <span className="gradient-text">secure, fast & human</span>
              </motion.h2>

              <motion.p className="body-lg" variants={fadeUp} custom={3}>
                I'm a Software Engineer from Bengaluru with a deep focus on backend engineering,
                security and full-stack MERN development. At Digiscrypt Technologies, I work on
                backend systems, conduct code reviews and help build secure, reliable software.
              </motion.p>

              <motion.p className="body-lg" variants={fadeUp} custom={4}>
                I believe in writing clean, maintainable code — and I love turning complex
                problems into elegant solutions. When I'm not coding, I'm likely on the Sepak
                Takraw court, representing Karnataka.
              </motion.p>

              <motion.p
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--accent-from)',
                  fontWeight: 600,
                  fontStyle: 'italic',
                  paddingLeft: '1rem',
                  borderLeft: '3px solid var(--accent-from)',
                }}
                variants={fadeUp}
                custom={4.5}
              >
                "I'm also a freelancer — got an idea? I'd love to build it with you."
              </motion.p>

              {/* Quick facts */}
              <motion.div className="about-quick-facts" variants={fadeUp} custom={5}>
                {quickFacts.map((fact) => (
                  <div className="about-fact-card" key={fact.label}>
                    <span className="about-fact-icon" aria-hidden="true">{fact.icon}</span>
                    <div className="about-fact-text">
                      <strong>{fact.label}</strong>
                      <span>{fact.value}</span>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Languages */}
              <motion.div variants={fadeUp} custom={6}>
                <p style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  Languages
                </p>
                <div className="lang-chips">
                  {languages.map((lang) => (
                    <div key={lang.name} className="lang-chip">
                      {lang.name}
                      <span className="lang-level">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Contact mini */}
              <motion.div
                style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.5rem' }}
                variants={fadeUp}
                custom={7}
              >
                <a
                  href={`mailto:${personal.email}`}
                  className="btn-secondary"
                  style={{ padding: '0.6rem 1.25rem', fontSize: '0.82rem' }}
                >
                  ✉ Email Me
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ padding: '0.6rem 1.25rem', fontSize: '0.82rem' }}
                >
                  in LinkedIn
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ padding: '0.6rem 1.25rem', fontSize: '0.82rem' }}
                >
                  ⌨ GitHub
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
