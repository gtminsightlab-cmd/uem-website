import Link from 'next/link';

const footerLinks = {
  'Capabilities': [
    { href: '/services', label: 'Launch Architecture' },
    { href: '/services', label: 'Retention Engine' },
    { href: '/services', label: 'Talent Architecture' },
    { href: '/services#addons', label: 'Coaching & Training' },
  ],
  'Company': [
    { href: '/about', label: 'Our Story' },
    { href: '/about#principal', label: 'Sharon Lee' },
    { href: '/resources', label: 'Resources' },
    { href: '/contact', label: 'Contact' },
  ],
  'Focus Areas': [
    { href: '/services', label: 'GLP-1 & Dual Agonists' },
    { href: '/services', label: 'Triple Agonists' },
    { href: '/services', label: 'Obesity Therapies' },
    { href: '/services', label: 'US Market Entry' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0A0F1A] pt-14 pb-7">
      <div className="container-content">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-11 border-b border-white/[0.07]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-navy border border-gold/40 flex items-center justify-center">
                <span className="font-serif text-base text-gold">U</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white">Upper Echelon</span>
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-gold">
                  Management
                </span>
              </div>
            </div>
            <p className="text-xs text-white/[0.38] leading-relaxed max-w-[220px]">
              Elite launch architecture for advanced metabolic and obesity therapies. Principal-led. No handoffs.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-[10px] font-bold tracking-[0.16em] uppercase text-gold mb-4">
                {heading}
              </h4>
              <div className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[13px] text-white/[0.45] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-5 gap-3">
          <span className="text-[11px] text-white/[0.28] tracking-wide">
            &copy; {new Date().getFullYear()} Upper Echelon Management. All rights reserved.
          </span>
          <div className="flex items-center gap-1.5 text-[10px] text-white/[0.28] tracking-widest uppercase">
            <span className="w-[5px] h-[5px] rounded-full bg-gold animate-pulse" />
            Accepting Engagements
          </div>
        </div>
      </div>
    </footer>
  );
}
