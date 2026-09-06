'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Commercialization Office' },
  { href: '/aesthetic-medicine', label: 'Aesthetics' },
  { href: '/launchos', label: 'RxLaunchOS' },
  { href: '/insights', label: 'Insights' },
  { href: '/resources', label: 'Research' },
  { href: '/about', label: 'About' },
];

const launchosLoginUrl = 'https://app.rxlaunchos.com/login';
const launchosPricingUrl = 'https://app.rxlaunchos.com/pricing';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <nav aria-label="Primary navigation" className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/[0.96] shadow-[0_1px_12px_rgba(0,0,0,0.04)] backdrop-blur-md">
        <div className="container-content">
          <div className="flex h-[72px] items-center justify-between">
            <Link href="/" className="group flex items-center gap-2.5" aria-label="Upper Echelon Management home">
              <div className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center bg-navy transition-transform duration-200 group-hover:scale-105">
                <span className="font-serif text-base font-medium text-gold-light">U</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] font-semibold leading-tight tracking-[0.01em] text-navy">
                  Upper Echelon
                </span>
                <span className="text-[9px] font-semibold uppercase leading-tight tracking-[0.18em] text-gold-dark">
                  Management
                </span>
              </div>
            </Link>

            <div className="hidden items-center gap-1 xl:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={`rounded px-3 py-1.5 text-[12px] font-medium transition-all duration-200 ${
                    isActive(link.href)
                      ? 'bg-surface text-navy'
                      : 'text-mid hover:bg-surface hover:text-navy'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a href={launchosLoginUrl} className="ml-2 rounded border border-navy/25 px-4 py-2.5 text-[12px] font-semibold text-navy transition-colors hover:border-navy hover:bg-surface">
                RxLaunchOS Login
              </a>
              <Link href="/contact" className="btn-navy ml-3 px-5 py-2.5 text-[12px]">
                Start a Conversation
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded touch-manipulation xl:hidden"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              <span className={`block h-[1.5px] w-5 bg-navy transition-all ${mobileOpen ? 'translate-y-[6.5px] rotate-45' : ''}`} />
              <span className={`block h-[1.5px] w-5 bg-navy transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-[1.5px] w-5 bg-navy transition-all ${mobileOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen ? (
        <div
          className="fixed inset-x-0 bottom-0 top-[72px] z-40 bg-navy/25 xl:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="max-h-full overflow-y-auto border-t border-gray-200 bg-white shadow-lg"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex flex-col gap-1 p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={`flex min-h-11 items-center rounded px-4 py-2.5 text-[15px] font-medium ${
                    isActive(link.href) ? 'bg-surface text-navy' : 'text-navy hover:bg-surface'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a href={launchosLoginUrl} className="mt-2 flex min-h-11 items-center justify-center rounded border border-navy/25 px-5 py-3 text-center text-[13px] font-semibold text-navy">
                RxLaunchOS Login
              </a>
              <a href={launchosPricingUrl} className="flex min-h-11 items-center justify-center rounded border border-navy/25 px-5 py-3 text-center text-[13px] font-semibold text-navy">
                RxLaunchOS Pricing
              </a>
              <Link href="/contact" className="mt-2 flex min-h-11 items-center justify-center rounded bg-navy px-5 py-3 text-center text-[13px] font-semibold text-white">
                Start a Conversation
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}
