import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenRegistration: () => void;
}

const NAV_LINKS = [
  { label: 'Philosophy', href: '#about' },
  { label: 'Curriculum', href: '#program' },
  { label: 'Experience', href: '#experience' },
  { label: 'Trainer', href: '#trainer' },
  { label: 'FAQ', href: '#faq' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegistration }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#F5F0E8]/95 backdrop-blur-md border-b border-[#DAD7CD]'
          : 'bg-[#F5F0E8]/85 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-12 md:h-20 flex items-center justify-between gap-4 md:gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          className="font-serif text-lg sm:text-xl md:text-2xl tracking-[0.06em] font-semibold text-[#344E41] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#344E41]"
        >
          WAG &amp; WILLOW
        </a>

        {/* Zone 2: 5 concise single-line navigation links (tablet/desktop) */}
        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-7 lg:gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 text-sm font-medium text-[#292D28]/80 hover:text-[#344E41] transition-colors duration-200 whitespace-nowrap shrink-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1.5px] after:bg-[#CB997E] after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#344E41]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenRegistration}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 min-h-[44px] rounded-full bg-[#344E41] text-[#F5F0E8] text-sm font-medium hover:bg-[#292D28] transition-colors duration-200 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#344E41]"
          >
            Reserve a Spot
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center min-w-[44px] min-h-[44px] rounded-full text-[#344E41] hover:bg-[#DAD7CD]/60 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#344E41]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#F5F0E8] border-b border-[#DAD7CD] px-4 pb-6 pt-2">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="min-h-[44px] flex items-center px-3 rounded-xl text-base font-medium text-[#292D28] hover:bg-[#DAD7CD]/50 hover:text-[#344E41] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenRegistration();
              }}
              className="mt-3 w-full min-h-[48px] px-5 rounded-full bg-[#344E41] text-[#F5F0E8] text-base font-medium hover:bg-[#292D28] transition-colors cursor-pointer"
            >
              Reserve Your Puppy&apos;s Place
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
