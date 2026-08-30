'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Commercialization Office' },
  { href: '/launchos', label: 'LaunchOS' },
  { href: '/insights', label: 'Insights' },
  { href: '/about', label: 'About' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/[0.96] shadow-[0_1px_12px_rgba(0,0,0,0.04)] backdrop-blur-md">
        <div className="container-content">
          <div className="flex h-[72px] items-center justify-between">
            <Link href="/" className="group flex items-center gap-2.5" aria-label="Upper Echelon Management home">
              <div className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center bg-navy transition-transform duration-200 group-hover:scale-105">
                <span className="font-serif text-base font-medium text-gold">U</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] font-semibold leading-tight tracking-[0.01em] text-navy">
                  Upper Echelon
                </span>
                <span className="text-[9px] font-semibold uppercase leading-tight tracking-[0.18em] text-gold">
                  Management
                </span>
              </div>
            </Link>

            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded px-3 py-1.5 text-[12px] font-medium transition-all duration-200 ${
                    isActive(link.href)
                      ? 'bg-surface text-navy'
                      : 'text-mid hover:bg-surface hover:text-navy'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="btn-navy ml-3 px-5 py-2.5 text-[12px]">
                Start a Conversation
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="flex flex-col gap-[5px] p-2 lg:hidden"
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
            >
              <span className={`block h-[1.5px] w-5 bg-navy transition-all ${mobileOpen ? 'translate-y-[6.5px] rotate-45' : ''}`} />
              <span className={`block h-[1.5px] w-5 bg-navy transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-[1.5px] w-5 bg-navy transition-all ${mobileOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-x-0 top-[72px] z-40 border-t border-gray-200 bg-white shadow-lg transition-all duration-200 lg:hidden ${
          mobileOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 p-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded px-4 py-2.5 text-[15px] font-medium ${
                isActive(link.href) ? 'bg-surface text-navy' : 'text-navy hover:bg-surface'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="mt-2 rounded bg-navy px-5 py-3 text-center text-[13px] font-semibold text-white">
            Start a Conversation
          </Link>
        </div>
      </div>
    </>
  );
}
