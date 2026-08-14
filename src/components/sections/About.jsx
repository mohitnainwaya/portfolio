import React from 'react';
import { BookOpen, Compass, GraduationCap, Lightbulb, Sparkles } from 'lucide-react';
import { about, counters, profile } from '../../data/portfolio.js';
import { AnimatedCounter } from '../ui/AnimatedCounter.jsx';
import { Reveal } from '../ui/Reveal.jsx';
import { SectionHeader } from '../ui/SectionHeader.jsx';

export function About() {
  const cards = [
    { title: 'Passion', icon: Lightbulb, body: about.passion },
    { title: 'Career goal', icon: Compass, body: about.goal },
    { title: 'Education', icon: GraduationCap, body: about.education },
  ];

  return (
    <section id="about" className="section-shell">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow={about.eyebrow} title={about.heading} description={about.story} />

        <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal variant="left">
            <div className="relative">
              <div className="absolute -inset-3 rounded-lg border border-cyan-300/20" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] p-3 shadow-glow backdrop-blur-xl">
                <img
                  src={profile.avatar}
                  alt={`${profile.name} working in a modern studio`}
                  className="h-[520px] w-full rounded-lg object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5">
            <div className="grid gap-5 md:grid-cols-3">
              {cards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <Reveal key={card.title} delay={index * 0.08} variant="scale">
                    <article className="h-full rounded-lg border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.08]">
                      <div className="mb-4 grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-white/[0.08] text-cyan-300">
                        <Icon size={20} />
                      </div>
                      <h3 className="text-lg font-semibold text-[var(--text-strong)]">{card.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{card.body}</p>
                    </article>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.1}>
              <div className="rounded-lg border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-white/[0.08] text-amber-300">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase text-[var(--text-subtle)]">Fun facts</p>
                    <h3 className="text-xl font-semibold text-[var(--text-strong)]">How I think about the craft</h3>
                  </div>
                </div>
                <div className="mt-6 grid gap-3 md:grid-cols-3">
                  {about.facts.map((fact) => (
                    <div key={fact} className="rounded-lg border border-white/10 bg-black/[0.12] p-4 text-sm leading-6 text-[var(--text-muted)]">
                      {fact}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {counters.map((counter) => (
                  <div key={counter.label} className="rounded-lg border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl">
                    <div className="text-3xl font-semibold text-[var(--text-strong)]">
                      <AnimatedCounter value={counter.value} suffix={counter.suffix} />
                    </div>
                    <p className="mt-2 text-sm text-[var(--text-muted)]">{counter.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(45,212,191,0.12),rgba(251,113,133,0.1),rgba(245,158,11,0.08))] p-6 backdrop-blur-xl">
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-cyan-300 text-slate-950">
                    <BookOpen size={20} />
                  </div>
                  <p className="text-base leading-8 text-[var(--text-muted)]">
                    Experience summary: I bridge full-stack software development and engineering design—building responsive React applications, scalable Spring Boot & Node.js REST APIs, cloud deployments on AWS, and automotive simulation systems.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
