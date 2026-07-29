import { useEffect, useState } from 'react';
import { profile } from '../../data/siteData';
import { useActiveSection } from '../../hooks/useActiveSection';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'github', label: 'GitHub' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(NAV_ITEMS.map((i) => i.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/85 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="container-content flex items-center justify-between h-16" aria-label="Primary">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          className="font-mono text-sm text-text hover:text-accent transition-colors"
        >
          <span className="text-accent">~/</span>
          {profile.name.toLowerCase().replace(' ', '-')}
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                aria-current={active === item.id ? 'page' : undefined}
                className={`px-3 py-2 text-sm rounded-md font-medium transition-colors ${
                  active === item.id ? 'text-accent' : 'text-muted hover:text-text'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={profile.resumeUrl} download className="hidden md:inline-flex btn-secondary text-sm py-2">
          Resume
        </a>

        <button
          className="md:hidden flex items-center justify-center w-10 h-10 text-text"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-surface border-t border-border">
          <ul className="container-content py-3 flex flex-col">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`block py-3 text-base font-medium border-b border-border/60 last:border-none ${
                    active === item.id ? 'text-accent' : 'text-text'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a href={profile.resumeUrl} download className="btn-primary w-full justify-center">
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
