import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personal } from '../data';

export default function Preloader({ onComplete }) {
  const letters = personal.name.split('');

  return (
    <AnimatePresence>
      <motion.div
        className="preloader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="preloader-name">
          {personal.name.split(' ').map((word, wi) => (
            <motion.span
              key={wi}
              style={{ display: 'inline-block', marginRight: wi < 2 ? '0.3em' : 0 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: wi * 0.18,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {wi === 0 ? (
                <span className="gradient-text">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </div>

        <motion.p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Software Engineer
        </motion.p>

        <div className="preloader-bar">
          <motion.div
            className="preloader-progress"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
            onAnimationComplete={onComplete}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
