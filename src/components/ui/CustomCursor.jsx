import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function CustomCursor() {
  const cursorRef = useRef(null);
  const auraRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (!finePointer) return undefined;

    document.body.classList.add('has-custom-cursor');
    const cursorX = gsap.quickTo(cursorRef.current, 'x', { duration: 0.18, ease: 'power3.out' });
    const cursorY = gsap.quickTo(cursorRef.current, 'y', { duration: 0.18, ease: 'power3.out' });
    const auraX = gsap.quickTo(auraRef.current, 'x', { duration: 0.45, ease: 'power3.out' });
    const auraY = gsap.quickTo(auraRef.current, 'y', { duration: 0.45, ease: 'power3.out' });

    const move = (event) => {
      cursorX(event.clientX - 5);
      cursorY(event.clientY - 5);
      auraX(event.clientX - 100);
      auraY(event.clientY - 100);
    };

    const interactive = 'a, button, input, textarea, select, [data-cursor="interactive"]';
    const over = (event) => {
      if (event.target.closest(interactive)) {
        document.body.classList.add('cursor-active');
      }
    };
    const out = (event) => {
      if (event.target.closest(interactive)) {
        document.body.classList.remove('cursor-active');
      }
    };

    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('mouseover', over);
    window.addEventListener('mouseout', out);

    return () => {
      document.body.classList.remove('has-custom-cursor', 'cursor-active');
      window.removeEventListener('pointermove', move);
      window.removeEventListener('mouseover', over);
      window.removeEventListener('mouseout', out);
    };
  }, []);

  return (
    <>
      <div ref={auraRef} className="cursor-aura" aria-hidden="true" />
      <div ref={cursorRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
