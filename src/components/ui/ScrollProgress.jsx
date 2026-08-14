import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[90] h-1 w-full origin-left bg-[linear-gradient(90deg,#22d3ee,#34d399,#f59e0b,#fb7185)]"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
