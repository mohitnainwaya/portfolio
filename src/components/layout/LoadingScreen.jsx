import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../data/portfolio.js';

export function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-[var(--bg)]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="flex flex-col items-center gap-5">
        <div className="relative grid h-20 w-20 place-items-center rounded-lg border border-white/10 bg-white/[0.06] shadow-glow">
          <span className="text-2xl font-bold text-[var(--text-strong)]">{profile.initials}</span>
          <motion.span
            className="absolute inset-0 rounded-lg border border-cyan-300/40"
            animate={{ scale: [1, 1.22, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <div className="h-1 w-48 overflow-hidden rounded-md bg-white/10">
          <motion.div
            className="h-full rounded-md bg-[linear-gradient(90deg,#22d3ee,#34d399,#f59e0b,#fb7185)]"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.05, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </motion.div>
  );
}
