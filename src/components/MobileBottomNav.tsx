import React, { useEffect, useState } from 'react';
import { CalendarCheck, Compass, HeartHandshake, Home } from 'lucide-react';

interface MobileBottomNavProps {
  onOpenRegistration: () => void;
}

type NavSection = 'top' | 'about' | 'program' | 'class-info';

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOpenRegistration }) => {
  const [activeSection, setActiveSection] = useState<NavSection>('top');

  useEffect(() => {
    const sections: NavSection[] = ['top', 'about', 'program', 'class-info'];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: '-35% 0px -50% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const navItems: { id: NavSection; label: string; href: string; icon: typeof Home }[] = [
    { id: 'top', label: 'Home', href: '#top', icon: Home },
    { id: 'about', label: 'Philosophy', href: '#about', icon: HeartHandshake },
    { id: 'program', label: '6 Weeks', href: '#program', icon: Compass },
  ];

  return (
    <nav
      aria-label="Mobile Thumb Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#F5F0E8]/95 backdrop-blur-md border-t border-[#DAD7CD] shadow-[0_-8px_24px_-12px_rgba(41,45,40,0.18)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="grid grid-cols-4 items-center h-14 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setActiveSection(item.id)}
              className={`min-h-[44px] flex flex-col items-center justify-center gap-0.5 rounded-xl transition-colors ${
                isActive ? 'text-[#344E41]' : 'text-[#292D28]/60 hover:text-[#344E41]'
              }`}
            >
              <Icon className="w-[19px] h-[19px]" strokeWidth={isActive ? 2.25 : 1.75} />
              <span className="text-[11px] font-medium tracking-tight leading-none whitespace-nowrap">
                {item.label}
              </span>
            </a>
          );
        })}

        <button
          type="button"
          onClick={onOpenRegistration}
          className="min-h-[44px] mx-1 px-2 flex flex-col items-center justify-center gap-0.5 rounded-2xl bg-[#344E41] text-[#F5F0E8] active:scale-[0.97] transition-transform cursor-pointer"
        >
          <CalendarCheck className="w-[19px] h-[19px]" strokeWidth={2} />
          <span className="text-[11px] font-medium tracking-tight leading-none whitespace-nowrap">
            Reserve
          </span>
        </button>
      </div>
    </nav>
  );
};
