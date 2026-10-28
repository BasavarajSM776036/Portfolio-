import { personal } from '../data';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const year = new Date().getFullYear();

  const socialLinks = [
    { label: 'Email', href: `mailto:${personal.email}`, icon: '✉' },
    { label: 'LinkedIn', href: personal.linkedin, icon: 'in', external: true },
    { label: 'GitHub', href: personal.github, icon: '⌨', external: true },
    { label: 'Phone', href: `tel:${personal.phone}`, icon: '📞' },
  ];

  return (
    <footer className="footer" role="contentinfo" aria-label="Site footer">
      <div className="container">
        <div className="footer-inner">
          {/* Logo */}
          <div>
            <div className="footer-logo">Basavaraj S Maneppagol</div>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
              Software Engineer · Bengaluru, India
            </p>
          </div>

          {/* Social links */}
          <div style={{ display: 'flex', gap: '0.625rem' }}>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.external ? '_blank' : undefined}
                rel={s.external ? 'noopener noreferrer' : undefined}
                aria-label={s.label}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.75)',
                  border: '1px solid rgba(99,102,241,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(99,102,241,0.08)';
                  e.currentTarget.style.borderColor = 'var(--accent-from)';
                  e.currentTarget.style.color = 'var(--accent-from)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.75)';
                  e.currentTarget.style.borderColor = 'rgba(99,102,241,0.15)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.transform = '';
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="footer-copy">
            © {year} Basavaraj S Maneppagol. Crafted with ❤️
          </p>

          {/* Back to top */}
          <button
            className="back-to-top"
            onClick={scrollTop}
            aria-label="Back to top"
          >
            <span className="back-top-icon" aria-hidden="true">🚀</span>
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
