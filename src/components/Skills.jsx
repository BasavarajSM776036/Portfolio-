import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

// Flat skill list for marquee
const allSkills = Object.values(skills).flat();

// Icon emoji map (fallback since we're not using react-icons to avoid bundle issues)
const emojiMap = {
  'JavaScript (ES6+)': '⚡',
  'Java': '☕',
  'Python': '🐍',
  'C': '⚙️',
  'React.js': '⚛️',
  'HTML5': '🌐',
  'CSS3': '🎨',
  'Tailwind CSS': '🌊',
  'Bootstrap': '🅱️',
  'Node.js': '🟢',
  'Express.js': '🚂',
  'REST APIs': '🔌',
  'JWT Auth': '🔒',
  'MVC / RBAC': '🏗️',
  'MongoDB': '🍃',
  'Mongoose': '🦦',
  'MySQL': '🛢️',
  'Git & GitHub': '🔀',
  'Postman': '📮',
  'VS Code': '💻',
  'Netlify': '🚀',
  'Linux (Basic)': '🐧',
  'DSA': '📊',
  'OOP': '🧩',
  'Async JS': '⚡',
  'Agile / SDLC': '🔄',
};

const skillCategories = Object.entries(skills);

// Double the arrays for seamless marquee loop
const row1 = [...allSkills, ...allSkills];
const row2 = [...allSkills.slice(Math.floor(allSkills.length / 2)), ...allSkills, ...allSkills.slice(0, Math.floor(allSkills.length / 2))];

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section" id="skills" ref={ref} aria-label="Skills">
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="section-label" variants={fadeUp}>
            Skills & Expertise
          </motion.div>

          <motion.h2 className="heading-lg" variants={fadeUp} custom={1} style={{ marginBottom: '1rem' }}>
            Technologies I work with
          </motion.h2>
          <motion.p className="body-lg" variants={fadeUp} custom={2} style={{ maxWidth: 560, marginBottom: '3rem' }}>
            From secure backend systems to reactive frontends — here's my toolkit.
          </motion.p>
        </motion.div>
      </div>

      {/* Marquee rows */}
      {inView && (
        <>
          <div className="skills-marquee-wrapper" aria-hidden="true">
            <div className="skills-marquee-track forward">
              {row1.map((skill, i) => (
                <div key={`r1-${i}`} className="skill-pill">
                  <span>{emojiMap[skill.name] || '✦'}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>

          <div className="skills-marquee-wrapper" aria-hidden="true" style={{ marginTop: '0.75rem' }}>
            <div className="skills-marquee-track backward">
              {row2.map((skill, i) => (
                <div key={`r2-${i}`} className="skill-pill">
                  <span>{emojiMap[skill.name] || '✦'}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Skills bento grid */}
      <div className="container">
        <motion.div
          className="skills-bento"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {skillCategories.map(([category, items], ci) => (
            <motion.div
              key={category}
              className="skill-category-card glass-card"
              variants={fadeUp}
              custom={ci * 0.5 + 3}
              data-cursor-label="Explore"
            >
              <div className="skill-category-title">{category}</div>
              <div className="skill-tags">
                {items.map((skill) => (
                  <span key={skill.name} className="skill-tag">
                    {emojiMap[skill.name] || '✦'} {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
