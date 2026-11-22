import React from 'react';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../data/academyData';
import { AnimatedPawTrail, EditorialImage, WillowBranchSvg } from './BotanicalMotifs';

interface FinalCtaSectionProps {
  onOpenRegistration: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenRegistration }) => {
  return (
    <section className="relative overflow-hidden bg-[#344E41] text-[#F5F0E8] py-16 sm:py-24 lg:py-28">
      {/* Subtle botanical & organic background silhouettes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#A3B18A]/12 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-0 w-96 h-96 rounded-full bg-[#CB997E]/12 blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          {/* Left Editorial Copy */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div className="flex items-center gap-3 text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[#DAD7CD]">
              <span>WAG &amp; WILLOW · EDMONTON</span>
              <AnimatedPawTrail className="text-[#CB997E]" />
            </div>

            <h2 className="font-serif text-[clamp(2rem,6vw,3.75rem)] leading-[1.08] text-[#F5F0E8] max-w-xl">
              Let&apos;s Make Puppyhood{' '}
              <span className="italic font-normal text-[#CB997E]">Wonderful.</span>
            </h2>

            <p className="text-[15px] sm:text-lg leading-relaxed text-[#DAD7CD] max-w-lg">
              Give your little companion the happiest possible start.
            </p>

            <div className="pt-1 sm:pt-2">
              <button
                type="button"
                onClick={onOpenRegistration}
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto min-h-[48px] px-8 py-4 rounded-full bg-[#F5F0E8] text-[#344E41] text-sm sm:text-base font-medium hover:bg-[#DAD7CD] active:scale-[0.98] transition-all duration-200 cursor-pointer whitespace-nowrap shadow-[0_18px_36px_-14px_rgba(0,0,0,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5F0E8]"
              >
                <span>Join Our Puppy Class</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Cute Puppy in Decorative Organic Shape */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-64 sm:w-84 lg:w-96 aspect-square">
              <WillowBranchSvg className="w-20 h-20 sm:w-24 sm:h-24 text-[#A3B18A]/60 absolute -top-5 -right-3 rotate-45 z-20 pointer-events-none" />
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-[44%_56%_62%_38%/46%_42%_58%_54%] bg-[#CB997E]/30 translate-x-2.5 translate-y-2.5 sm:translate-x-3 sm:translate-y-3"
              />
              <div className="relative w-full h-full overflow-hidden rounded-[58%_42%_46%_54%/44%_56%_44%_56%] ring-4 ring-[#F5F0E8]/25 shadow-2xl bg-[#DAD7CD]">
                <EditorialImage
                  src={IMAGES.ctaPuppy}
                  alt="Adorable spaniel mix puppy looking warmly upward surrounded by sunlit foliage"
                  className="w-full h-full object-cover"
                  fallbackLabel="Puppy Portrait"
                />
              </div>
              <WillowBranchSvg className="w-16 h-16 sm:w-20 sm:h-20 text-[#CB997E]/70 absolute -bottom-4 -left-3 -rotate-12 z-20 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
