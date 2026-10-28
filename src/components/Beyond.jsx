import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { achievements } from '../data';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

function CountUp({ target, suffix, duration = 2000, decimals = 0 }) {
  const [value, setValue] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (!inView) return;
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic
      setValue(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration, decimals]);

  return (
    <span ref={ref}>
      {decimals > 0 ? value.toFixed(decimals) : Math.round(value)}{suffix}
    </span>
  );
}

export default function Beyond() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section" id="beyond" ref={ref} aria-label="Beyond code — achievements">
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="section-label" variants={fadeUp}>
            Beyond the Code
          </motion.div>

          <div className="beyond-grid">
            {/* Left: Text & Ball */}
            <div>
              <motion.h2 className="heading-lg" variants={fadeUp} custom={1} style={{ marginBottom: '1rem' }}>
                When I'm not coding,<br />
                <span className="gradient-text">I'm on the court.</span>
              </motion.h2>

              <motion.p className="body-lg" variants={fadeUp} custom={2} style={{ marginBottom: '1.5rem' }}>
                {achievements.description}
              </motion.p>

              <motion.p
                className="body-lg"
                variants={fadeUp}
                custom={3}
                style={{
                  background: 'rgba(99,102,241,0.06)',
                  border: '1px solid rgba(99,102,241,0.15)',
                  borderRadius: '16px',
                  padding: '1.25rem',
                  fontSize: '0.9rem',
                  marginBottom: '2rem',
                }}
              >
                🏆 Sepak Takraw is a Southeast Asian sport combining volleyball, football and
                gymnastics — players kick a rattan ball over a net using acrobatic techniques.
                It demands explosive athleticism, precision and team synergy — skills that
                transfer beautifully to software engineering.
              </motion.p>

              {/* Animated ball */}
              <motion.div
                className="ball-animation"
                variants={fadeUp}
                custom={4}
                style={{ alignItems: 'flex-start' }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1.5rem' }}>
                  <div>
                    <div className="sepak-ball" aria-hidden="true" />
                    <div className="ball-shadow" aria-hidden="true" />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      Sepak Takraw
                    </p>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                      Karnataka State Representative
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Stats */}
            <motion.div className="stat-cards" variants={fadeUp} custom={2}>
              {achievements.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="stat-card"
                  variants={fadeUp}
                  custom={i + 3}
                >
                  <div className="stat-number" aria-label={`${stat.value}${stat.suffix} — ${stat.label}`}>
                    <CountUp
                      target={stat.value}
                      suffix={stat.suffix}
                      duration={1800}
                      decimals={stat.value % 1 !== 0 ? 2 : 0}
                    />
                  </div>
                  <div className="stat-label">{stat.label}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.5rem', lineHeight: 1.4 }}>
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
