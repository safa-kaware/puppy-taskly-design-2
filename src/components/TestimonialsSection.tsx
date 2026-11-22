import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/academyData';
import { BotanicalSprigHorizontal, GentlePawSvg } from './BotanicalMotifs';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="py-14 sm:py-24 lg:py-28 bg-[#DAD7CD]/45 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center justify-center gap-2.5 text-[11px] sm:text-xs tracking-[0.2em] font-medium text-[#344E41] mb-3 sm:mb-4">
            <BotanicalSprigHorizontal className="w-8 sm:w-10 h-4 text-[#CB997E] rotate-180" />
            <span>FAMILY NOTES</span>
            <BotanicalSprigHorizontal className="w-8 sm:w-10 h-4 text-[#CB997E]" />
          </div>
          <h2 className="font-serif text-[clamp(1.85rem,5.5vw,2.85rem)] leading-[1.12] text-[#292D28]">
            Tails Wag.{' '}
            <span className="italic font-normal text-[#344E41]">Hearts Melt.</span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-[#292D28]/65">
            Sample review placeholders shown below until verified Edmonton client stories are
            supplied.
          </p>
        </div>

        {/* Interactive Carousel Card */}
        <div className="relative rounded-[1.75rem] sm:rounded-[2.5rem] bg-[#F5F0E8] border border-[#DAD7CD] p-6 sm:p-12 lg:p-14 shadow-[0_24px_55px_-26px_rgba(41,45,40,0.16)]">
          <div className="flex items-center justify-between gap-4 mb-5 sm:mb-7">
            <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#A3B18A]/30 text-[#344E41] flex items-center justify-center shrink-0">
              <Quote className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.6} />
            </span>

            <span className="text-[11px] sm:text-xs tracking-wide text-[#CB997E] font-medium text-right">
              {current.cohortLabel}
            </span>
          </div>

          <div className="min-h-[11rem] sm:min-h-[10.5rem] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <blockquote className="font-serif text-lg sm:text-2xl lg:text-[1.65rem] leading-[1.45] text-[#292D28] mb-6 sm:mb-7">
                  {current.quote}
                </blockquote>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 sm:pt-5 border-t border-[#DAD7CD]">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-full bg-[#344E41]/10 text-[#344E41] flex items-center justify-center shrink-0">
                      <GentlePawSvg className="w-4 h-4" />
                    </span>
                    <div>
                      <p className="font-medium text-sm sm:text-base text-[#344E41]">
                        {current.author}
                      </p>
                      <p className="text-xs sm:text-sm text-[#292D28]/65">{current.puppyInfo}</p>
                    </div>
                  </div>

                  <span className="text-xs font-medium text-[#292D28]/55 tabular-nums">
                    0{activeIndex + 1} / 0{TESTIMONIALS.length}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls */}
          <div className="mt-6 sm:mt-8 flex items-center justify-between gap-4">
            <div className="flex items-center gap-0.5" role="tablist" aria-label="Select sample review">
              {TESTIMONIALS.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={idx === activeIndex}
                  aria-label={`View sample review ${idx + 1}`}
                  onClick={() => setActiveIndex(idx)}
                  className="min-w-[36px] min-h-[44px] flex items-center justify-center cursor-pointer focus-visible:outline-2 focus-visible:outline-[#344E41] rounded-full"
                >
                  <span
                    className={`h-2.5 rounded-full transition-all duration-200 ${
                      idx === activeIndex
                        ? 'w-7 bg-[#344E41]'
                        : 'w-2.5 bg-[#DAD7CD] hover:bg-[#A3B18A]'
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous review"
                className="min-w-[44px] min-h-[44px] rounded-full border border-[#344E41]/25 text-[#344E41] hover:bg-[#344E41] hover:text-[#F5F0E8] active:scale-95 transition-all flex items-center justify-center cursor-pointer focus-visible:outline-2 focus-visible:outline-[#344E41]"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next review"
                className="min-w-[44px] min-h-[44px] rounded-full border border-[#344E41]/25 text-[#344E41] hover:bg-[#344E41] hover:text-[#F5F0E8] active:scale-95 transition-all flex items-center justify-center cursor-pointer focus-visible:outline-2 focus-visible:outline-[#344E41]"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
