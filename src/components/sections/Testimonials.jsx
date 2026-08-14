import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { testimonials } from '../../data/portfolio.js';
import { SectionHeader } from '../ui/SectionHeader.jsx';

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % testimonials.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, []);

  const go = (direction) => {
    setIndex((value) => (value + direction + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-shell">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeader
          eyebrow="Testimonials"
          title="Trusted by people who care about product quality."
          description="A lightweight carousel with readable motion, glass treatment, and clear controls."
        />

        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl sm:p-10">
          <Quote className="text-cyan-300" size={34} />
          <div className="mt-8 min-h-[250px]">
            <AnimatePresence mode="wait">
              <motion.article
                key={active.name}
                initial={{ opacity: 0, y: 18, scale: 0.98, filter: 'blur(12px)' }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -18, scale: 0.98, filter: 'blur(12px)' }}
                transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-2xl font-medium leading-10 text-[var(--text-strong)]">
                  &ldquo;{active.quote}&rdquo;
                </p>
                <div className="mt-8">
                  <p className="text-lg font-semibold text-[var(--text-strong)]">{active.name}</p>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">{active.role}</p>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex gap-2">
              {testimonials.map((item, itemIndex) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setIndex(itemIndex)}
                  className={`h-2.5 rounded-md transition-all duration-300 ${
                    index === itemIndex ? 'w-10 bg-cyan-300' : 'w-2.5 bg-white/25 hover:bg-white/45'
                  }`}
                  aria-label={`Show testimonial from ${item.name}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                className="grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-white/[0.06] text-[var(--text-strong)] transition hover:bg-white/[0.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-white/[0.06] text-[var(--text-strong)] transition hover:bg-white/[0.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                aria-label="Next testimonial"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
