import React, { forwardRef, useRef } from 'react';
import { gsap } from 'gsap';

export const MagneticButton = forwardRef(function MagneticButton(
  {
    as: Component = 'a',
    children,
    className = '',
    variant = 'primary',
    icon: Icon,
    iconRight,
    ...props
  },
  forwardedRef,
) {
  const localRef = useRef(null);

  const setRefs = (node) => {
    localRef.current = node;
    if (typeof forwardedRef === 'function') forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  };

  const handleMove = (event) => {
    const node = localRef.current;
    if (!node || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    gsap.to(node, {
      x: x * 0.18,
      y: y * 0.22,
      duration: 0.35,
      ease: 'power3.out',
    });
  };

  const handleLeave = () => {
    const node = localRef.current;
    if (!node) return;
    gsap.to(node, { x: 0, y: 0, duration: 0.55, ease: 'elastic.out(1, 0.45)' });
  };

  const styles = {
    primary:
      'border-white/10 bg-[linear-gradient(135deg,rgba(45,212,191,0.95),rgba(56,189,248,0.88),rgba(251,113,133,0.86))] text-slate-950 shadow-glow',
    secondary:
      'border-white/12 bg-white/[0.06] text-[var(--text-strong)] hover:bg-white/[0.1] dark:bg-white/[0.06]',
    ghost: 'border-transparent bg-transparent text-[var(--text-muted)] hover:text-[var(--text-strong)]',
  };

  return (
    <Component
      ref={setRefs}
      className={`magnetic-button inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-5 py-3 text-sm font-semibold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 ${styles[variant]} ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...props}
    >
      {Icon ? <Icon aria-hidden="true" size={18} /> : null}
      <span>{children}</span>
      {iconRight ? iconRight : null}
    </Component>
  );
});
