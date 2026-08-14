import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, MousePointer2, Play, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { counters, profile } from '../../data/portfolio.js';
import { useTypingEffect } from '../../hooks/useTypingEffect.js';
import { MagneticButton } from '../ui/MagneticButton.jsx';
import { AnimatedCounter } from '../ui/AnimatedCounter.jsx';

export function Hero() {
  const typed = useTypingEffect(profile.typingPhrases);
  const visualRef = useRef(null);

  useEffect(() => {
    const root = visualRef.current;
    if (!root) return undefined;

    const elements = root.querySelectorAll('[data-float]');
    const tweens = Array.from(elements).map((element, index) =>
      gsap.to(element, {
        y: index % 2 === 0 ? -18 : 16,
        x: index % 3 === 0 ? 10 : -8,
        rotate: index % 2 === 0 ? 8 : -7,
        duration: 3.5 + index * 0.45,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      }),
    );

    const move = (event) => {
      const rect = root.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      gsap.to(root.querySelector('[data-portrait]'), {
        x: x * 18,
        y: y * 16,
        rotateY: x * 7,
        rotateX: y * -5,
        duration: 0.55,
        ease: 'power3.out',
      });
    };

    root.addEventListener('pointermove', move);
    return () => {
      root.removeEventListener('pointermove', move);
      tweens.forEach((tween) => tween.kill());
    };
  }, []);

  return (
    <section id="home" className="section-shell relative min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 bg-hero-mesh" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-12 lg:grid-cols-[1.08fr_0.92fr] lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: 'blur(14px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.06] px-3 py-2 text-sm font-medium text-[var(--text-muted)] shadow-glow backdrop-blur-xl">
            <Sparkles size={16} className="text-cyan-300" />
            <span>Open to Software & Engineering Internship Opportunities</span>
          </div>

          <h1 className="font-display text-5xl font-semibold leading-[1.03] text-[var(--text-strong)] sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>

          <p className="mt-5 text-lg font-semibold text-[var(--text-strong)] sm:text-2xl">
            {profile.title}
          </p>

          <div className="mt-6 min-h-9 text-xl font-medium text-[var(--text-muted)] sm:text-2xl">
            <span>I specialize in </span>
            <span className="animated-gradient-text">{typed}</span>
            <span className="ml-1 inline-block h-6 w-[2px] translate-y-1 animate-pulse bg-cyan-300" />
          </div>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--text-muted)] sm:text-lg">
            {profile.intro}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <MagneticButton href="#projects" icon={Play}>
              View Projects
            </MagneticButton>
            <MagneticButton href={profile.resume} download variant="secondary" icon={Download}>
              Download Resume
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary" icon={Mail}>
              Contact
            </MagneticButton>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {counters.map((item) => (
              <div key={item.label} className="rounded-lg border border-white/10 bg-white/[0.055] p-4 backdrop-blur-xl">
                <div className="text-2xl font-semibold text-[var(--text-strong)]">
                  <AnimatedCounter value={item.value} suffix={item.suffix} />
                </div>
                <div className="mt-1 text-xs font-medium uppercase text-[var(--text-subtle)]">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          ref={visualRef}
          initial={{ opacity: 0, scale: 0.94, filter: 'blur(16px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto h-[620px] w-full max-w-[520px] lg:h-[700px]"
        >
          <div data-float className="float-geo left-0 top-12 h-20 w-20 border-cyan-300/40" />
          <div data-float className="float-geo right-6 top-28 h-16 w-28 rotate-6 border-rose-300/40" />
          <div data-float className="float-geo bottom-28 left-8 h-24 w-14 -rotate-12 border-amber-300/40" />
          <div data-float className="float-line right-8 top-[52%]" />

          <div
            data-portrait
            className="absolute inset-x-4 top-10 rounded-lg border border-white/10 bg-white/[0.07] p-3 shadow-glow backdrop-blur-2xl transform-gpu"
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={profile.avatar}
                alt={`${profile.name} professional portrait`}
                className="h-[520px] w-full object-cover object-top sm:h-[590px]"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(0,0,0,0.72))]" />
              <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/10 bg-black/35 p-4 backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase text-white/60">Currently focusing on</p>
                    <p className="mt-1 text-sm font-semibold text-white">Full-Stack & Cloud Architecture</p>
                  </div>
                  <div className="grid h-11 w-11 place-items-center rounded-md bg-cyan-300 text-slate-950">
                    <MousePointer2 size={20} />
                  </div>
                </div>
              </div>
              <div className="scan-line" aria-hidden="true" />
            </div>
          </div>

          <div className="absolute -right-1 bottom-16 w-64 rounded-lg border border-white/10 bg-white/[0.08] p-4 shadow-coral backdrop-blur-2xl sm:-right-7">
            <p className="text-xs uppercase text-[var(--text-subtle)]">Engineering philosophy</p>
            <p className="mt-2 text-sm leading-6 text-[var(--text-strong)]">
              Rigorous engineering principles, clean software design, and high execution efficiency.
            </p>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium uppercase text-[var(--text-subtle)] md:flex"
      >
        <span>Scroll</span>
        <span className="grid h-10 w-6 place-items-start rounded-full border border-white/15 p-1">
          <ArrowDown size={14} className="mx-auto animate-bounce text-cyan-300" />
        </span>
      </a>
    </section>
  );
}
