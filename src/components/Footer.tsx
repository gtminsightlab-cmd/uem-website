import Link from 'next/link';

const footerLinks = {
  'Commercialization Office': [
    { href: '/services#readiness', label: 'Commercial Readiness' },
    { href: '/services#office', label: 'Fractional Launch Office' },
    { href: '/services#organization', label: 'Organization & Field Design' },
    { href: '/services#experts', label: 'Scoped Expert Engagements' },
  ],
  Product: [
    { href: '/launchos', label: 'LaunchOS Overview' },
    { href: 'https://launchos-demo.vercel.app/login', label: 'LaunchOS Demo & Login' },
    { href: 'https://launchos-demo.vercel.app/pricing', label: 'Plans & Monthly Pricing' },
    { href: '/contact', label: 'Discuss Enterprise Scope' },
  ],
  Company: [
    { href: '/about', label: 'About UEM' },
    { href: '/insights', label: 'Commercialization Insights' },
    { href: '/resources', label: 'Research & Methodology' },
    { href: '/contact', label: 'Contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0A0F1A] pb-7 pt-14">
      <div className="container-content">
        <div className="grid grid-cols-1 gap-12 border-b border-white/[0.07] pb-11 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center border border-gold/40 bg-navy">
                <span className="font-serif text-base text-gold">U</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white">Upper Echelon</span>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gold">Management</span>
              </div>
            </div>
            <p className="mb-4 max-w-[240px] text-xs leading-relaxed text-white/[0.42]">
              Operator leadership and a commercialization operating system for high-stakes U.S. launches.
            </p>
            <Link href="/contact" className="text-xs text-white/[0.55] transition-colors hover:text-gold">
              Begin an inquiry through the contact form →
            </Link>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.16em] text-gold">{heading}</h2>
              <div className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <Link key={link.label} href={link.href} className="text-[13px] text-white/[0.5] transition-colors hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-5 sm:flex-row">
          <span className="text-[11px] tracking-wide text-white/[0.3]">
            &copy; {new Date().getFullYear()} Upper Echelon Management. All rights reserved.
          </span>
          <span className="text-[10px] uppercase tracking-[0.14em] text-white/[0.3]">
            Evidence before certainty
          </span>
        </div>
      </div>
    </footer>
  );
}
