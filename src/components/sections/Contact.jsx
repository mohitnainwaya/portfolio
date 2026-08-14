import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { profile } from '../../data/portfolio.js';
import { MagneticButton } from '../ui/MagneticButton.jsx';
import { Reveal } from '../ui/Reveal.jsx';
import { SectionHeader } from '../ui/SectionHeader.jsx';

const initialForm = {
  name: '',
  email: '',
  message: '',
};

export function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('');

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus('Your email client is opening with the message prepared.');
  };

  return (
    <section id="contact" className="section-shell pb-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Contact"
          title="Get In Touch"
          description="Feel free to reach out for software engineering internships, technical roles, project collaborations, or academic inquiries."
        />

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal variant="left">
            <div className="grid gap-4">
              <div className="rounded-lg border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl">
                <div className="grid h-12 w-12 place-items-center rounded-md border border-white/10 bg-white/[0.08] text-cyan-300">
                  <Mail size={22} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[var(--text-strong)]">Email</h3>
                <a href={`mailto:${profile.email}`} className="mt-2 inline-block text-[var(--text-muted)] hover:text-cyan-200">
                  {profile.email}
                </a>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl">
                <div className="grid h-12 w-12 place-items-center rounded-md border border-white/10 bg-white/[0.08] text-emerald-300">
                  <Phone size={22} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[var(--text-strong)]">Phone</h3>
                <a href={`tel:${profile.phone}`} className="mt-2 inline-block text-[var(--text-muted)] hover:text-cyan-200">
                  +91 {profile.phone}
                </a>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl">
                <div className="grid h-12 w-12 place-items-center rounded-md border border-white/10 bg-white/[0.08] text-amber-300">
                  <MapPin size={22} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[var(--text-strong)]">Location</h3>
                <p className="mt-2 text-[var(--text-muted)]">{profile.location}</p>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl">
                <h3 className="text-xl font-semibold text-[var(--text-strong)]">Social</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {profile.social.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-white/[0.06] text-[var(--text-strong)] transition hover:-translate-y-1 hover:bg-white/[0.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                        aria-label={item.label}
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right">
            <form onSubmit={submit} className="rounded-lg border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="field-label">
                  <span>Name</span>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={update}
                    autoComplete="name"
                    placeholder="Your name"
                    className="field-input"
                  />
                </label>
                <label className="field-label">
                  <span>Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={update}
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="field-input"
                  />
                </label>
              </div>
              <label className="field-label mt-5">
                <span>Message</span>
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={update}
                  rows={7}
                  placeholder="Tell me what you want to build..."
                  className="field-input resize-none"
                />
              </label>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <MagneticButton as="button" type="submit" icon={Send} className="w-full sm:w-auto">
                  Send Message
                </MagneticButton>
                {status ? <p className="text-sm text-emerald-300" role="status">{status}</p> : null}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
