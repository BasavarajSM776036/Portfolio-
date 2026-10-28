import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const spotlightRef = useRef(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // 3D tilt effect
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -8;
    const rotY = ((x - cx) / cx) * 8;
    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-8px) scale(1.01)`;
    if (spotlightRef.current) {
      spotlightRef.current.style.setProperty('--x', `${(x / rect.width) * 100}%`);
      spotlightRef.current.style.setProperty('--y', `${(y / rect.height) * 100}%`);
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = '';
  };

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      custom={index}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <div
        ref={cardRef}
        className="project-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        data-cursor-label="View"
        style={{ transition: 'transform 0.15s ease, box-shadow 0.4s ease' }}
      >
        {/* Spotlight overlay */}
        <div ref={spotlightRef} className="project-spotlight" aria-hidden="true" />

        {/* Top color bar */}
        <div
          className="project-card-top"
          style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}88)` }}
        />

        <div className="project-card-body">
          <div className="project-number" aria-hidden="true">
            {String(project.id).padStart(2, '0')}
          </div>

          <h3 className="project-title">{project.title}</h3>
          <p className="project-tagline">{project.tagline}</p>

          <ul className="project-highlights" role="list">
            {project.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>

          <div className="project-stack" role="list" aria-label="Tech stack">
            {project.stack.map((tech) => (
              <span key={tech} className="tech-chip" role="listitem">{tech}</span>
            ))}
          </div>

          <div className="project-actions">
            {project.live !== '#' ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn live"
                aria-label={`View ${project.title} live demo`}
              >
                ↗ Live Demo
              </a>
            ) : (
              <span
                className="project-btn live"
                style={{ opacity: 0.5, cursor: 'default' }}
                aria-label="Live demo coming soon"
              >
                ↗ Live Soon
              </span>
            )}

            {project.github !== '#' ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn github"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                ⌨ GitHub
              </a>
            ) : (
              <span
                className="project-btn github"
                style={{ opacity: 0.5, cursor: 'default' }}
              >
                ⌨ GitHub
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="section" id="projects" ref={ref} aria-label="Projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Projects</div>
          <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>
            Things I've built
          </h2>
          <p className="body-lg" style={{ maxWidth: 520, marginBottom: '3rem' }}>
            From PWAs to full-stack ERP systems — each project solving a real problem.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
