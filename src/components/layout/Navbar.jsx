import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { navigation, profile } from '../../data/portfolio.js';
import { useActiveSection } from '../../hooks/useActiveSection.js';

export function Navbar({ isDark, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const ids = navigation.map((item) => item.href.replace('#', ''));
  const active = useActiveSection(ids);

  const handleNavigate = () => setOpen(false);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-lg border border-white/10 bg-[var(--nav-bg)] px-3 py-3 shadow-glow backdrop-blur-2xl">
        <a
          href="#home"
          className="group flex min-w-0 items-center gap-3 rounded-md px-2 py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
          aria-label={`${profile.name} home`}
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-white/10 bg-white/[0.08] text-sm font-bold text-[var(--text-strong)] transition-transform duration-300 group-hover:scale-105">
            {profile.initials}
          </span>
          <span className="hidden text-sm font-semibold text-[var(--text-strong)] sm:block">
            {profile.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const id = item.href.replace('#', '');
            const isActive = active === id;
            return (
              <a
                key={item.href}
                href={item.href}
                className="relative rounded-md px-3 py-2 text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                <span className="relative z-10">{item.label}</span>
                {isActive ? (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-md border border-white/10 bg-white/[0.08]"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                  />
                ) : null}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/[0.06] text-[var(--text-strong)] transition hover:bg-white/[0.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/[0.06] text-[var(--text-strong)] transition hover:bg-white/[0.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -12, filter: 'blur(10px)' }}
            transition={{ duration: 0.24 }}
            className="mx-auto mt-3 max-w-7xl rounded-lg border border-white/10 bg-[var(--nav-bg)] p-3 shadow-glow backdrop-blur-2xl lg:hidden"
          >
            <div className="grid gap-1">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavigate}
                  className="rounded-md px-4 py-3 text-sm font-semibold text-[var(--text-muted)] transition hover:bg-white/[0.08] hover:text-[var(--text-strong)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
