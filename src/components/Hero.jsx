import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { personal } from '../data';
import profileImg from '../assets/profile.jpg';

const roles = personal.roles;

const techChips = [
  { label: 'React.js', emoji: '⚛️' },
  { label: 'Node.js', emoji: '🟢' },
  { label: 'MongoDB', emoji: '🍃' },
  { label: 'Express', emoji: '🚀' },
  { label: 'MySQL', emoji: '🛢️' },
  { label: 'JWT', emoji: '🔒' },
];

const orbitPositions = [
  { top: '5%', left: '50%', transform: 'translateX(-50%)' },
  { top: '50%', right: '-8%', transform: 'translateY(-50%)' },
  { bottom: '10%', left: '50%', transform: 'translateX(-50%)' },
  { top: '50%', left: '-8%', transform: 'translateY(-50%)' },
  { top: '20%', right: '0%' },
  { bottom: '20%', left: '0%' },
];

function RoleRotator() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % roles.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="hero-role-wrapper">
      <span className="hero-role-prefix">I'm a</span>
      <motion.span
        key={idx}
        className="hero-role-text"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -30, opacity: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        {roles[idx]}
      </motion.span>
    </div>
  );
}

export default function Hero() {
  const photoRef = useRef(null);
  const wrapperRef = useRef(null);
  const nameWords = ['Basavaraj', 'S', 'Maneppagol'];

  // Mouse parallax on photo
  useEffect(() => {
    const onMove = (e) => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      if (photoRef.current) {
        photoRef.current.style.transform = `perspective(800px) rotateY(${dx * 10}deg) rotateX(${-dy * 10}deg)`;
      }
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section className="hero section" id="hero" aria-label="Hero section">
      <div className="container">
        <div className="hero-grid">
          {/* Left: Text */}
          <div>
            <motion.div
              className="hero-tag"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="hero-tag-dot" aria-hidden="true" />
              Available for Freelance Projects
            </motion.div>

            <div className="hero-name" aria-label={personal.name}>
              {nameWords.map((word, wi) => (
                <div key={wi} style={{ overflow: 'hidden', display: 'block' }}>
                  {word.split('').map((char, ci) => (
                    <motion.span
                      key={ci}
                      style={{ display: 'inline-block' }}
                      initial={{ y: '120%', opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: 0.35 + wi * 0.12 + ci * 0.03,
                        duration: 0.65,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      {char === ' ' ? '\u00a0' : char}
                    </motion.span>
                  ))}
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <RoleRotator />
            </motion.div>

            <motion.p
              className="hero-desc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              {personal.summary}
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <a
                href="#contact"
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                ✦ Hire Me
              </a>
              <a
                href={personal.resume}
                download="Basavaraj_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                ↓ Download Resume
              </a>
            </motion.div>

            <motion.div
              className="hero-quick-facts"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              <div className="hero-fact">
                <span className="hero-fact-num">8.14</span>
                <span className="hero-fact-label">CGPA</span>
              </div>
              <div className="hero-fact">
                <span className="hero-fact-num">3+</span>
                <span className="hero-fact-label">Years Learning</span>
              </div>
              <div className="hero-fact">
                <span className="hero-fact-num">10+</span>
                <span className="hero-fact-label">Projects Built</span>
              </div>
              <div className="hero-fact">
                <span className="hero-fact-num">6×</span>
                <span className="hero-fact-label">National Athlete</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Photo */}
          <motion.div
            className="hero-photo-wrapper"
            ref={wrapperRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero-photo-bg" aria-hidden="true" />

            <div
              ref={photoRef}
              className="hero-photo-frame"
              style={{ transition: 'transform 0.1s linear' }}
            >
              <img
                src={profileImg}
                alt="Basavaraj S Maneppagol — Software Engineer"
                className="hero-photo"
                loading="eager"
              />
            </div>

            {/* Orbiting tech chips */}
            {techChips.slice(0, 4).map((chip, i) => (
              <motion.div
                key={chip.label}
                className="hero-orbit-item"
                style={{
                  position: 'absolute',
                  ...orbitPositions[i],
                  zIndex: 10,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                <span aria-hidden="true">{chip.emoji}</span>
                {chip.label}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
