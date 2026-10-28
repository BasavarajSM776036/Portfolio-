import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personal } from '../data';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#beyond', label: 'Beyond Code' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      setHidden(y > lastY.current + 10 && y > 200);
      if (y < lastY.current - 10 || y < 100) setHidden(false);
      lastY.current = y;

      // Active section detection
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive('#' + sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className={`navbar${scrolled ? ' scrolled' : ''}`}
        animate={{ y: hidden ? -120 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        aria-label="Main navigation"
      >
        <div className="navbar-inner">
          <a
            href="#hero"
            className="navbar-logo"
            onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
            aria-label="Basavaraj Maneppagol — home"
          >
            BM
          </a>

          <ul className="navbar-links" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={active === link.href ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar-cta">
            <a
              href={personal.resume}
              download="Basavaraj_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '0.45rem 1rem', fontSize: '0.8rem' }}
            >
              Resume ↓
            </a>
            <a
              href="#contact"
              className="navbar-hire"
              onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-label="Mobile navigation menu"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href={personal.resume}
              download="Basavaraj_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ marginTop: '1rem' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.06 }}
            >
              Download Resume ↓
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
