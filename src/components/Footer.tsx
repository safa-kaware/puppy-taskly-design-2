import React from 'react';
import { GentlePawSvg } from './BotanicalMotifs';

interface FooterProps {
  onOpenRegistration: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRegistration }) => {
  return (
    <footer className="bg-[#292D28] text-[#DAD7CD] pt-12 pb-24 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-8 sm:pb-10 border-b border-[#DAD7CD]/15">
          <div className="md:col-span-5 space-y-2.5 sm:space-y-3">
            <div className="flex items-center gap-2.5 text-[#F5F0E8]">
              <GentlePawSvg className="w-5 h-5 text-[#CB997E]" />
              <span className="font-serif text-xl sm:text-2xl tracking-[0.06em] font-semibold">
                WAG &amp; WILLOW
              </span>
            </div>
            <p className="font-serif italic text-base text-[#CB997E]">
              Little Paws. Wonderful Beginnings.
            </p>
            <p className="text-sm text-[#DAD7CD]/75 max-w-sm leading-relaxed">
              Boutique six-week puppy training and positive socialisation academy in Edmonton,
              Alberta, Canada.
            </p>
          </div>

          <div className="md:col-span-4 space-y-3">
            <p className="text-xs tracking-[0.18em] uppercase text-[#A3B18A] font-medium">
              Explore
            </p>
            <nav aria-label="Footer Navigation" className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-sm">
              <a href="#about" className="py-1 hover:text-[#F5F0E8] transition-colors">
                Philosophy
              </a>
              <a href="#program" className="py-1 hover:text-[#F5F0E8] transition-colors">
                Six-Week Program
              </a>
              <a href="#experience" className="py-1 hover:text-[#F5F0E8] transition-colors">
                Studio Experience
              </a>
              <a href="#trainer" className="py-1 hover:text-[#F5F0E8] transition-colors">
                Meet the Trainer
              </a>
              <a href="#class-info" className="py-1 hover:text-[#F5F0E8] transition-colors">
                Class Info
              </a>
              <a href="#faq" className="py-1 hover:text-[#F5F0E8] transition-colors">
                FAQ
              </a>
            </nav>
          </div>

          <div className="md:col-span-3 space-y-3">
            <p className="text-xs tracking-[0.18em] uppercase text-[#A3B18A] font-medium">
              Enrollment
            </p>
            <p className="text-sm text-[#DAD7CD]/75">Edmonton, Alberta, Canada</p>
            <button
              type="button"
              onClick={onOpenRegistration}
              className="inline-flex items-center justify-center w-full sm:w-auto min-h-[44px] px-5 py-2.5 rounded-full border border-[#DAD7CD]/30 text-sm text-[#F5F0E8] hover:bg-[#344E41] hover:border-[#344E41] transition-colors cursor-pointer"
            >
              Reserve Your Place
            </button>
          </div>
        </div>

        <div className="pt-6 sm:pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#DAD7CD]/60 text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()} WAG &amp; WILLOW. Edmonton Puppy Academy.</p>
          <p>Interactive design prototype &middot; Sample trainer, pricing &amp; review placeholders</p>
        </div>
      </div>
    </footer>
  );
};
