import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { profile } from '../../data/portfolio.js';

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[var(--footer-bg)] px-4 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <a href="#home" className="group inline-flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/[0.08] text-sm font-bold text-[var(--text-strong)] transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
            {profile.initials}
          </span>
          <span className="text-sm text-[var(--text-muted)]">
            Built with care by <strong className="font-semibold text-[var(--text-strong)]">{profile.name}</strong>
          </span>
        </a>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <Sparkles size={16} className="text-cyan-300" />
            Available for engineering & software roles
          </span>
          <a
            href="#home"
            className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/[0.06] text-[var(--text-strong)] transition hover:-translate-y-1 hover:bg-white/[0.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
