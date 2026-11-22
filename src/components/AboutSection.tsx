import React from 'react';
import { ABOUT_PILLARS } from '../data/academyData';
import { BotanicalSprigHorizontal, PillarIllustration } from './BotanicalMotifs';

export const AboutSection: React.FC = () => {
  const cardStyles: Record<'cream' | 'oatmeal' | 'sage', string> = {
    cream: 'bg-[#F5F0E8] border border-[#DAD7CD] text-[#292D28] lg:translate-y-0',
    oatmeal: 'bg-[#DAD7CD]/85 border border-[#DAD7CD] text-[#292D28] lg:translate-y-6',
    sage: 'bg-[#A3B18A]/55 border border-[#A3B18A]/60 text-[#292D28] lg:translate-y-2',
  };

  return (
    <section id="about" className="py-14 sm:py-24 lg:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Editorial Asymmetric Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 items-end mb-8 sm:mb-16">
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2.5 text-[11px] sm:text-xs tracking-[0.2em] font-medium text-[#344E41]">
              <span>OUR PHILOSOPHY</span>
              <BotanicalSprigHorizontal className="w-10 sm:w-12 h-4 text-[#CB997E]" />
            </div>
            <h2 className="font-serif text-[clamp(1.85rem,5.5vw,2.85rem)] leading-[1.12] text-[#292D28]">
              Not Just Training.{' '}
              <span className="italic font-normal text-[#344E41]">A Little More Love.</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[15px] sm:text-base leading-relaxed text-[#292D28]/78">
              The first sixteen weeks shape how your puppy feels about the world for years to come.
              Rather than rigid drills, we focus on gentle confidence, clear everyday habits, and
              calm curiosity—helping families feel connected right from the very first hello.
            </p>
          </div>
        </div>

        {/* Mobile-first horizontal swipe carousel, expanding to 3-col grid on md+ */}
        <div className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 pb-4">
          {ABOUT_PILLARS.map((pillar, idx) => (
            <article
              key={pillar.number}
              className={`group w-[84vw] max-w-[330px] shrink-0 snap-center md:w-auto md:max-w-none rounded-[2rem] p-6 sm:p-8 lg:p-9 transition-all duration-300 md:hover:-translate-y-1.5 shadow-[0_12px_34px_-18px_rgba(41,45,40,0.14)] flex flex-col justify-between min-h-[16.5rem] sm:min-h-[19rem] ${
                cardStyles[pillar.variant]
              } ${idx === 1 ? 'md:rounded-tl-[3.5rem]' : idx === 2 ? 'md:rounded-br-[3.5rem]' : ''}`}
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-5 sm:mb-7">
                  <span className="font-serif italic text-2xl sm:text-3xl text-[#CB997E] tabular-nums">
                    {pillar.number}
                  </span>
                  <div className="text-[#344E41] transition-transform duration-300 group-hover:scale-105">
                    <PillarIllustration motif={pillar.motif} className="w-10 h-10 sm:w-11 sm:h-11" />
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#344E41] mb-1">
                  {pillar.number} &ndash; {pillar.title}
                </h3>
                <p className="text-[11px] sm:text-xs tracking-[0.14em] uppercase text-[#292D28]/60 mb-3.5">
                  {pillar.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-[15px] leading-relaxed text-[#292D28]/82">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>

        {/* Quiet mobile swipe hint */}
        <p className="md:hidden mt-1 text-xs text-[#344E41]/65 text-center">
          Swipe across pillars &middot; 01 to 03
        </p>
      </div>
    </section>
  );
};
