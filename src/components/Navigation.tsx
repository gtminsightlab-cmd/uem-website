'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/[0.97] backdrop-blur-md border-b border-gray-200 shadow-[0_1px_12px_rgba(0,0,0,0.05)]'
            : 'bg-transparent'
        }`}
      >
        <div className="container-content">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-[34px] h-[34px] bg-navy flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
                <span className="font-serif text-base font-medium text-gold">U</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] font-semibold text-navy leading-tight tracking-[0.01em]">
                  Upper Echelon
                </span>
                <span className="text-[9px] font-semibold tracking-[0.18em] uppercase text-gold leading-tight">
                  Management
                </span>
              </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] font-medium px-4 py-1.5 rounded transition-all duration-200 ${
                    pathname === link.href
                      ? 'text-navy bg-surface'
                      : 'text-mid hover:text-navy hover:bg-surface'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="btn-navy ml-3 text-[12px] px-5 py-2.5">
                Schedule a Call
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-[5px] p-1"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-[1.5px] bg-navy transition-all duration-300 ${
                  mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-navy transition-all duration-300 ${
                  mobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-navy transition-all duration-300 ${
                  mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed top-[72px] left-0 right-0 bg-white border-t border-gray-200 z-40 shadow-lg transition-all duration-300 lg:hidden ${
          mobileOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="p-5 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[15px] font-medium px-4 py-2.5 rounded transition-colors ${
                pathname === link.href
                  ? 'text-navy bg-surface'
                  : 'text-navy hover:bg-surface'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-navy text-white text-center font-semibold text-[13px] px-5 py-3 rounded mt-2"
          >
            Schedule a Call
          </Link>
        </div>
      </div>
    </>
  );
}
