import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';

// Components
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Beyond from './components/Beyond';
import Freelance from './components/Freelance';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <>
      {/* Custom cursor (desktop only) */}
      <CustomCursor />

      {/* Scroll progress bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX }}
        aria-hidden="true"
      />

      {/* Aurora background */}
      <div className="aurora-bg" aria-hidden="true">
        <span />
      </div>

      {/* Film grain overlay */}
      <div className="grain" aria-hidden="true" />

      {/* Preloader */}
      <AnimatePresence>
        {!preloaderDone && (
          <Preloader onComplete={() => setTimeout(() => setPreloaderDone(true), 200)} />
        )}
      </AnimatePresence>

      {/* Main content */}
      <AnimatePresence>
        {preloaderDone && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Navbar />

            <main id="main-content" role="main">
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Beyond />
              <Freelance />
              <Education />
              <Contact />
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
