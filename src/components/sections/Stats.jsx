import React from 'react';
import { statistics } from '../../data/portfolio.js';
import { AnimatedCounter } from '../ui/AnimatedCounter.jsx';
import { Reveal } from '../ui/Reveal.jsx';

export function Stats() {
  return (
    <section className="section-shell py-16">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(45,212,191,0.1),rgba(255,255,255,0.055),rgba(251,113,133,0.1))] p-5 backdrop-blur-xl">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {statistics.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="rounded-lg border border-white/10 bg-black/[0.12] p-5">
                    <div className="flex items-center justify-between gap-4">
                      <Icon size={20} className="text-cyan-300" />
                      <span className="text-xs uppercase text-[var(--text-subtle)]">Live metric</span>
                    </div>
                    <div className="mt-6 text-3xl font-semibold text-[var(--text-strong)]">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="mt-2 text-sm text-[var(--text-muted)]">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
