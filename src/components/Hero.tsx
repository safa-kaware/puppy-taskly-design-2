import React from 'react';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../data/academyData';
import {
  AnimatedPawTrail,
  BotanicalSprigHorizontal,
  EditorialImage,
  WillowBranchSvg,
} from './BotanicalMotifs';

export const Hero: React.FC = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#F5F0E8] pt-5 pb-14 sm:pt-10 sm:pb-20 lg:pt-16 lg:pb-28"
    >
      {/* Subtle organic curved background shape */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 w-[62%] h-[92%] rounded-bl-[14rem] bg-[#DAD7CD]/55 -z-0 hidden lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 right-8 w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-[#A3B18A]/20 blur-2xl -z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-9 sm:gap-12 lg:gap-10 items-center">
          {/* Left Editorial Copy Column (Mobile-first concise vertical flow) */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-7">
            <div className="flex items-center gap-2.5 text-[11px] sm:text-xs tracking-[0.2em] font-medium text-[#344E41]">
              <span>EDMONTON PUPPY ACADEMY</span>
              <BotanicalSprigHorizontal className="w-10 sm:w-12 h-4 text-[#CB997E]" />
            </div>

            <h1 className="font-serif text-[clamp(2.15rem,7.2vw,4.35rem)] leading-[1.07] tracking-[-0.015em] text-[#292D28] max-w-xl">
              Good Dogs Start With{' '}
              <span className="italic font-normal text-[#344E41]">Great Beginnings.</span>
            </h1>

            <p className="text-[15px] sm:text-lg leading-relaxed text-[#292D28]/80 max-w-lg">
              Helping little paws grow into confident, happy companions through positive, playful
              and practical training.
            </p>

            {/* Mobile-first full-width thumb-friendly CTA stack, inline on sm+ */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
              <a
                href="#program"
                className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto min-h-[48px] px-7 py-3.5 rounded-full bg-[#344E41] text-[#F5F0E8] text-sm sm:text-base font-medium hover:bg-[#292D28] active:scale-[0.98] transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#344E41]"
              >
                <span>Explore Our Classes</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#trainer"
                className="inline-flex items-center justify-center w-full sm:w-auto min-h-[48px] px-7 py-3.5 rounded-full border border-[#344E41]/35 text-[#344E41] text-sm sm:text-base font-medium hover:bg-[#DAD7CD]/60 active:scale-[0.98] transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#344E41]"
              >
                Meet Your Trainer
              </a>
            </div>

            {/* Quiet brand tagline + subtle animated paw trail */}
            <div className="pt-1 sm:pt-3 flex items-center gap-3.5 text-sm text-[#344E41]/80">
              <AnimatedPawTrail className="text-[#CB997E]" />
              <span className="font-serif italic text-sm sm:text-base text-[#344E41]">
                Little Paws. Wonderful Beginnings.
              </span>
            </div>
          </div>

          {/* Right Magazine Cover Visual Composition */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[20.5rem] sm:max-w-[27rem] lg:max-w-[33rem]">
              {/* Decorative botanical illustration top-left */}
              <WillowBranchSvg className="w-20 h-20 sm:w-28 sm:h-28 text-[#344E41]/45 absolute -top-5 -left-3 sm:-top-7 sm:-left-8 -rotate-12 z-20 pointer-events-none" />

              {/* Decorative organic sage ring behind photo */}
              <div
                aria-hidden="true"
                className="absolute inset-2.5 sm:inset-4 rounded-full border border-[#A3B18A]/70 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 pointer-events-none"
              />

              {/* Organic circular puppy portrait mask */}
              <div className="relative aspect-square rounded-full overflow-hidden shadow-[0_24px_60px_-18px_rgba(41,45,40,0.22)] ring-4 sm:ring-8 ring-[#F5F0E8] bg-[#DAD7CD]">
                <EditorialImage
                  src={IMAGES.heroPuppy}
                  alt="Golden retriever puppy sitting attentively in a sunlit outdoor meadow"
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.03]"
                  fallbackLabel="Golden Puppy Portrait"
                />
              </div>

              {/* Decorative botanical sprig bottom-right */}
              <WillowBranchSvg className="w-16 h-16 sm:w-20 sm:h-20 text-[#CB997E]/75 absolute -bottom-3 -right-2 rotate-[135deg] z-20 pointer-events-none" />

              {/* Floating cream information card */}
              <div className="animate-float-gentle absolute -bottom-3 left-0 sm:bottom-6 sm:-left-6 z-30 bg-[#F5F0E8] px-4 py-3 sm:px-6 sm:py-4 rounded-[1.35rem] sm:rounded-[1.75rem] shadow-[0_18px_40px_-12px_rgba(41,45,40,0.18)] border border-[#DAD7CD] max-w-[13.5rem] sm:max-w-[15.5rem]">
                <p className="font-serif text-base sm:text-xl leading-snug text-[#344E41]">
                  6 Weeks of <span className="italic">Puppy Magic</span>
                </p>
                <p className="mt-0.5 text-[11px] sm:text-xs tracking-wide text-[#292D28]/65">
                  Positive Foundation · Edmonton
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
