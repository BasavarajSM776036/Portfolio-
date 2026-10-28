import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const labelRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const outerPos = useRef({ x: -100, y: -100 });
  const raf = useRef(null);
  const [isMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(hover: none)').matches;
  });

  useEffect(() => {
    if (isMobile) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (innerRef.current) {
        innerRef.current.style.left = e.clientX + 'px';
        innerRef.current.style.top = e.clientY + 'px';
      }
      if (labelRef.current) {
        labelRef.current.style.left = e.clientX + 'px';
        labelRef.current.style.top = (e.clientY + 28) + 'px';
      }
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      if (outerRef.current) {
        outerPos.current.x = lerp(outerPos.current.x, pos.current.x, 0.1);
        outerPos.current.y = lerp(outerPos.current.y, pos.current.y, 0.1);
        outerRef.current.style.left = outerPos.current.x + 'px';
        outerRef.current.style.top = outerPos.current.y + 'px';
      }
      raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);
    window.addEventListener('mousemove', onMove, { passive: true });

    // Handle hover states
    const addHover = (el) => {
      el.addEventListener('mouseenter', () => {
        if (outerRef.current) outerRef.current.classList.add('hovering');
        const label = el.dataset.cursorLabel;
        if (label && labelRef.current) {
          labelRef.current.textContent = label;
          labelRef.current.classList.add('visible');
        }
      });
      el.addEventListener('mouseleave', () => {
        if (outerRef.current) outerRef.current.classList.remove('hovering');
        if (labelRef.current) labelRef.current.classList.remove('visible');
      });
    };

    const observer = new MutationObserver(() => {
      document.querySelectorAll('a, button, [data-cursor-label]').forEach(addHover);
    });
    observer.observe(document.body, { childList: true, subtree: true });
    document.querySelectorAll('a, button, [data-cursor-label]').forEach(addHover);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
      observer.disconnect();
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div ref={outerRef} className="cursor-outer" aria-hidden="true" />
      <div ref={innerRef} className="cursor-inner" aria-hidden="true" />
      <div ref={labelRef} className="cursor-label" aria-hidden="true" />
    </>
  );
}
