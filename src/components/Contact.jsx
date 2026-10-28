import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personal } from '../data';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  }),
};

const contactLinks = [
  {
    icon: '✉',
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    copyable: true,
  },
  {
    icon: '📞',
    label: 'Phone',
    value: personal.phone,
    href: `tel:${personal.phone}`,
    copyable: false,
  },
  {
    icon: 'in',
    label: 'LinkedIn',
    value: 'linkedin.com/in/basavaraj-maneppagol-6a9737315',
    href: personal.linkedin,
    copyable: false,
    external: true,
  },
  {
    icon: '⌨',
    label: 'GitHub',
    value: 'github.com/basavarajmaneppagol',
    href: personal.github,
    copyable: false,
    external: true,
  },
];

// EmailJS / Formspree integration
// To wire up EmailJS:
// 1. Create a free account at https://www.emailjs.com/
// 2. Create a service, template and get your Public Key
// 3. Replace the placeholders below with your actual IDs
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';    // ← Replace
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // ← Replace
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';     // ← Replace

// Alternative: Use Formspree
// 1. Go to https://formspree.io/, create a form and get the endpoint
// 2. Replace the action URL in the form submit handler

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [copied, setCopied] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Option A: Formspree (easiest — just replace YOUR_FORM_ID)
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {  // ← Replace YOUR_FORM_ID
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      // Fallback: open default email client
      const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
      const body = encodeURIComponent(`Hi Basavaraj,\n\n${form.message}\n\nFrom: ${form.name} (${form.email})`);
      window.open(`mailto:${personal.email}?subject=${subject}&body=${body}`);
      setStatus('idle');
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section" id="contact" ref={ref} aria-label="Contact">
      <div className="container">
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div className="section-label" variants={fadeUp}>
            Get In Touch
          </motion.div>

          <div className="contact-grid">
            {/* Left: Info */}
            <div className="contact-info">
              <motion.h2
                className="contact-headline"
                variants={fadeUp}
                custom={1}
              >
                Let's build<br />
                something<br />
                <span className="gradient-text">amazing.</span>
              </motion.h2>

              <motion.p className="body-lg" variants={fadeUp} custom={2}>
                Whether it's a full-stack project, a backend API, a freelance build, or just a
                conversation — I'm always open. Reach out through any channel below.
              </motion.p>

              <motion.div className="contact-links" variants={fadeUp} custom={3}>
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="contact-link-item"
                    aria-label={`${link.label}: ${link.value}`}
                  >
                    <div className="contact-link-icon" aria-hidden="true">{link.icon}</div>
                    <div className="contact-link-text">
                      <strong>{link.label}</strong>
                      <span>{link.value}</span>
                    </div>
                    {link.copyable && (
                      <button
                        className={`copy-btn${copied ? ' copied' : ''}`}
                        onClick={(e) => { e.preventDefault(); copyEmail(); }}
                        aria-label="Copy email to clipboard"
                      >
                        {copied ? '✓ Copied!' : 'Copy'}
                      </button>
                    )}
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Right: Form */}
            <motion.div className="contact-form glass-card" variants={fadeUp} custom={2}>
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    className="form-success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div style={{ fontSize: '3rem' }}>🎉</div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      Message sent!
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                      Thanks for reaching out. I'll get back to you within 24 hours.
                    </p>
                    <button
                      className="btn-primary"
                      onClick={() => setStatus('idle')}
                      style={{ marginTop: '1rem' }}
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    aria-label="Contact form"
                  >
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.75rem', color: 'var(--text-primary)' }}>
                      Send a message
                    </h3>

                    {/* Name */}
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        id="contact-name"
                        className="form-input"
                        value={form.name}
                        onChange={handleChange}
                        placeholder=" "
                        required
                        aria-label="Your name"
                      />
                      <label htmlFor="contact-name" className="form-label">Your Name</label>
                    </div>

                    {/* Email */}
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        id="contact-email"
                        className="form-input"
                        value={form.email}
                        onChange={handleChange}
                        placeholder=" "
                        required
                        aria-label="Your email address"
                      />
                      <label htmlFor="contact-email" className="form-label">Email Address</label>
                    </div>

                    {/* Message */}
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="contact-message"
                        className="form-textarea"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder=" "
                        required
                        aria-label="Your message"
                      />
                      <label htmlFor="contact-message" className="form-label">Your Message</label>
                    </div>

                    <button
                      type="submit"
                      className="form-submit"
                      disabled={status === 'sending'}
                      aria-label="Send message"
                    >
                      {status === 'sending' ? '⏳ Sending...' : '✦ Send Message'}
                    </button>

                    <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      Or email directly:{' '}
                      <a
                        href={`mailto:${personal.email}`}
                        style={{ color: 'var(--accent-from)', fontWeight: 600 }}
                      >
                        {personal.email}
                      </a>
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
