import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  default: {
    hidden: { opacity: 0, y: 28, filter: 'blur(14px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.94, filter: 'blur(12px)' },
    visible: { opacity: 1, scale: 1, filter: 'blur(0px)' },
  },
  left: {
    hidden: { opacity: 0, x: -34, filter: 'blur(12px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
  },
  right: {
    hidden: { opacity: 0, x: 34, filter: 'blur(12px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
  },
};

export function Reveal({ children, className = '', delay = 0, variant = 'default' }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants[variant]}
      transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
