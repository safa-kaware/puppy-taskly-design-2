import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, ChevronLeft, ChevronRight, Sparkles, X } from 'lucide-react';
import { WeekCurriculum } from '../data/academyData';
import { EditorialImage, GentlePawSvg, WeekMotifIllustration } from './BotanicalMotifs';

interface WeekModalProps {
  week: WeekCurriculum | null;
  totalWeeks: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onReserve: () => void;
}

export const WeekModal: React.FC<WeekModalProps> = ({
  week,
  totalWeeks,
  onClose,
  onPrev,
  onNext,
  onReserve,
}) => {
  useEffect(() => {
    if (!week) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [week, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {week && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-[#292D28]/60 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="week-modal-title"
        >
          <motion.div
            key={week.week}
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 36 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden rounded-t-[2rem] sm:rounded-[2.25rem] bg-[#F5F0E8] text-[#292D28] shadow-[0_32px_80px_-20px_rgba(0,0,0,0.35)] border-t sm:border border-[#DAD7CD]"
          >
            {/* Mobile Bottom Sheet Drag Handle */}
            <div className="sm:hidden pt-3 pb-1 flex justify-center bg-[#F5F0E8] shrink-0">
              <span className="w-10 h-1.5 rounded-full bg-[#DAD7CD]" aria-hidden="true" />
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close week details"
              className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 z-20 min-w-[44px] min-h-[44px] rounded-full bg-[#F5F0E8]/95 hover:bg-[#DAD7CD] text-[#292D28] flex items-center justify-center transition-colors cursor-pointer shadow-sm focus-visible:outline-2 focus-visible:outline-[#344E41]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto flex-1 grid grid-cols-1 md:grid-cols-12">
              {/* Left Puppy Visual Panel */}
              <div className="md:col-span-5 bg-[#DAD7CD]/55 p-4 sm:p-8 flex flex-col justify-between gap-4 sm:gap-6">
                <div className="relative aspect-[16/10] sm:aspect-[4/3] md:aspect-[4/5] rounded-[1.35rem] sm:rounded-[1.75rem] overflow-hidden shadow-md bg-[#DAD7CD]">
                  <EditorialImage
                    src={week.image}
                    alt={week.imageAlt}
                    className="w-full h-full object-cover"
                    fallbackLabel={week.title}
                  />
                </div>

                <div className="flex items-center justify-between pt-1 text-[#344E41]">
                  <div className="flex items-center gap-2.5">
                    <WeekMotifIllustration motif={week.motif} className="w-8 h-8 sm:w-9 sm:h-9 text-[#CB997E]" />
                    <div className="text-xs leading-tight">
                      <p className="font-medium text-[#344E41]">Weekly At-Home Focus</p>
                      <p className="text-[#292D28]/70 mt-0.5">Gentle 2-minute play sessions</p>
                    </div>
                  </div>
                  <GentlePawSvg className="w-5 h-5 text-[#A3B18A]" />
                </div>
              </div>

              {/* Right Curriculum Content Panel */}
              <div className="md:col-span-7 p-5 sm:p-9 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 text-xs tracking-[0.18em] uppercase font-medium text-[#CB997E] mb-2">
                    <span>
                      {week.numberLabel} of 0{totalWeeks}
                    </span>
                    <span aria-hidden="true">&middot;</span>
                    <span className="text-[#344E41]">Six-Week Curriculum</span>
                  </div>

                  <h3
                    id="week-modal-title"
                    className="font-serif text-2xl sm:text-3xl text-[#292D28] leading-tight mb-3 sm:mb-4 pr-10"
                  >
                    {week.title}
                  </h3>

                  <p className="text-[15px] sm:text-base leading-relaxed text-[#292D28]/80 mb-5 sm:mb-6">
                    {week.fullDescription}
                  </p>

                  <div className="mb-5 sm:mb-6">
                    <h4 className="text-xs tracking-[0.16em] uppercase font-semibold text-[#344E41] mb-3">
                      Learning Objectives
                    </h4>
                    <ul className="space-y-2.5">
                      {week.objectives.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm sm:text-[15px] text-[#292D28]/85"
                        >
                          <span className="mt-0.5 w-5 h-5 rounded-full bg-[#A3B18A]/35 text-[#344E41] flex items-center justify-center shrink-0">
                            <Check className="w-3.5 h-3.5" strokeWidth={2.2} />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-[#FAF7F2] border border-[#DAD7CD] p-4 mb-2 sm:mb-7">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#344E41] mb-1">
                      <Sparkles className="w-3.5 h-3.5 text-[#CB997E]" />
                      <span>Home Practice Ritual</span>
                    </div>
                    <p className="text-sm text-[#292D28]/80 leading-relaxed">{week.homePractice}</p>
                  </div>
                </div>

                {/* Desktop inline controls */}
                <div className="hidden md:flex pt-5 border-t border-[#DAD7CD] items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={onPrev}
                      className="inline-flex items-center gap-1.5 min-h-[44px] px-4 py-2 rounded-full border border-[#344E41]/25 text-sm font-medium text-[#344E41] hover:bg-[#DAD7CD]/60 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#344E41]"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Previous</span>
                    </button>
                    <button
                      type="button"
                      onClick={onNext}
                      className="inline-flex items-center gap-1.5 min-h-[44px] px-4 py-2 rounded-full border border-[#344E41]/25 text-sm font-medium text-[#344E41] hover:bg-[#DAD7CD]/60 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#344E41]"
                    >
                      <span>Next Week</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onReserve();
                    }}
                    className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-full bg-[#344E41] text-[#F5F0E8] text-sm font-medium hover:bg-[#292D28] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Reserve Your Spot
                  </button>
                </div>
              </div>
            </div>

            {/* Sticky Thumb-Zone Footer Controls on Mobile & Tablet */}
            <div
              className="md:hidden shrink-0 border-t border-[#DAD7CD] bg-[#F5F0E8] px-4 py-3 flex items-center justify-between gap-2"
              style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
            >
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={onPrev}
                  aria-label="Previous week"
                  className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] px-3 rounded-full border border-[#344E41]/25 text-xs font-medium text-[#344E41] active:bg-[#DAD7CD]/60 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="ml-1">Prev</span>
                </button>
                <button
                  type="button"
                  onClick={onNext}
                  aria-label="Next week"
                  className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] px-3 rounded-full border border-[#344E41]/25 text-xs font-medium text-[#344E41] active:bg-[#DAD7CD]/60 cursor-pointer"
                >
                  <span className="mr-1">Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onReserve();
                }}
                className="flex-1 max-w-[11.5rem] min-h-[44px] px-4 rounded-full bg-[#344E41] text-[#F5F0E8] text-xs font-medium active:scale-[0.98] transition-transform cursor-pointer whitespace-nowrap"
              >
                Reserve Spot
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
