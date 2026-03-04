'use client';

import { useState } from 'react';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'How we work' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="text-lg font-semibold tracking-tight sm:text-xl">
          Ottech
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden sm:block">
          <ul className="flex items-center gap-6 text-base text-slate-300">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger button — mobile only */}
        <button
          type="button"
          className="flex items-center sm:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="relative h-5 w-6">
            <span
              className={`absolute left-0 h-0.5 w-6 bg-slate-100 transition-all duration-200 ${menuOpen ? 'top-2.5 rotate-45' : 'top-0'}`}
            />
            <span
              className={`absolute left-0 top-2.5 h-0.5 w-6 bg-slate-100 transition-opacity duration-200 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
            />
            <span
              className={`absolute left-0 h-0.5 w-6 bg-slate-100 transition-all duration-200 ${menuOpen ? 'top-2.5 -rotate-45' : 'top-[1.25rem]'}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav aria-label="Mobile navigation" className="border-t border-white/10 sm:hidden">
          <ul className="mx-auto max-w-6xl space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
