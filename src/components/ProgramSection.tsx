import React, { useState } from 'react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { SIX_WEEK_PROGRAM, WeekCurriculum } from '../data/academyData';
import { BotanicalSprigHorizontal, GentlePawSvg, WeekMotifIllustration } from './BotanicalMotifs';
import { WeekModal } from './WeekModal';

interface ProgramSectionProps {
  onOpenRegistration: () => void;
}

export const ProgramSection: React.FC<ProgramSectionProps> = ({ onOpenRegistration }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeTimelineWeek, setActiveTimelineWeek] = useState<number>(1);

  const selectedWeek: WeekCurriculum | null =
    selectedIndex !== null ? SIX_WEEK_PROGRAM[selectedIndex] : null;

  const handleOpenWeek = (idx: number) => {
    setActiveTimelineWeek(SIX_WEEK_PROGRAM[idx].week);
    setSelectedIndex(idx);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return 0;
      const nextIdx = (prev - 1 + SIX_WEEK_PROGRAM.length) % SIX_WEEK_PROGRAM.length;
      setActiveTimelineWeek(SIX_WEEK_PROGRAM[nextIdx].week);
      return nextIdx;
    });
  };

  const handleNext = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return 0;
      const nextIdx = (prev + 1) % SIX_WEEK_PROGRAM.length;
      setActiveTimelineWeek(SIX_WEEK_PROGRAM[nextIdx].week);
      return nextIdx;
    });
  };

  const getCardStyle = (index: number, isHighlighted: boolean) => {
    const baseShapes = [
      'rounded-[2rem] rounded-tr-[3.5rem]',
      'rounded-[2rem] rounded-bl-[3.5rem]',
      'rounded-[2rem] rounded-tl-[3.5rem]',
      'rounded-[2rem] rounded-br-[3.5rem]',
      'rounded-[2rem] rounded-tr-[3.5rem]',
      'rounded-[2rem] rounded-bl-[3.5rem]',
    ];
    const backgrounds = [
      'bg-[#FAF7F2]',
      'bg-[#DAD7CD]/55',
      'bg-[#A3B18A]/30',
      'bg-[#FAF7F2]',
      'bg-[#A3B18A]/25',
      'bg-[#DAD7CD]/65',
    ];
    const ring = isHighlighted
      ? 'ring-2 ring-[#344E41]/60 border-transparent'
      : 'border border-[#DAD7CD]';

    return `${baseShapes[index]} ${backgrounds[index]} ${ring}`;
  };

  return (
    <section id="program" className="py-14 sm:py-24 lg:py-28 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="max-w-3xl mb-7 sm:mb-14">
          <div className="flex items-center gap-2.5 text-[11px] sm:text-xs tracking-[0.2em] font-medium text-[#344E41] mb-3 sm:mb-4">
            <span>SIX-WEEK PROGRAM</span>
            <BotanicalSprigHorizontal className="w-10 sm:w-12 h-4 text-[#CB997E]" />
          </div>
          <h2 className="font-serif text-[clamp(1.85rem,5.5vw,2.85rem)] leading-[1.12] text-[#292D28] mb-3 sm:mb-5">
            Six Little Steps.{' '}
            <span className="italic font-normal text-[#344E41]">A Lifetime of Good Habits.</span>
          </h2>
          <p className="text-[15px] sm:text-base leading-relaxed text-[#292D28]/78">
            Each week builds gently on the last so puppies never feel rushed. Tap any week below to
            open its full curriculum sheet.
          </p>
        </div>

        {/* Interactive Timeline Stepper (44px+ touch height) */}
        <div
          aria-label="Six-Week Course Timeline"
          className="mb-6 sm:mb-10 flex items-center gap-2 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 pb-2"
        >
          {SIX_WEEK_PROGRAM.map((item, idx) => {
            const isActive = activeTimelineWeek === item.week;
            return (
              <button
                key={item.week}
                type="button"
                onClick={() => handleOpenWeek(idx)}
                onMouseEnter={() => setActiveTimelineWeek(item.week)}
                className={`group inline-flex items-center gap-2 min-h-[44px] px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#344E41] ${
                  isActive
                    ? 'bg-[#344E41] text-[#F5F0E8] shadow-sm'
                    : 'bg-[#FAF7F2] text-[#292D28]/80 border border-[#DAD7CD] hover:border-[#344E41]/40 hover:text-[#344E41]'
                }`}
              >
                <span className="tabular-nums opacity-75">0{item.week}</span>
                <span>{item.title.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile-First Interactive Tap-List Rows (< md) */}
        <div className="md:hidden rounded-[1.75rem] bg-[#FAF7F2] border border-[#DAD7CD] divide-y divide-[#DAD7CD]/80 overflow-hidden shadow-[0_12px_30px_-18px_rgba(41,45,40,0.12)]">
          {SIX_WEEK_PROGRAM.map((item, idx) => (
            <button
              key={item.week}
              type="button"
              onClick={() => handleOpenWeek(idx)}
              className="w-full min-h-[76px] px-4 py-4 flex items-center gap-3.5 text-left active:bg-[#DAD7CD]/40 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#344E41]"
            >
              <span className="w-11 h-11 rounded-2xl bg-[#F5F0E8] border border-[#DAD7CD] flex items-center justify-center text-[#344E41] shrink-0">
                <WeekMotifIllustration motif={item.motif} className="w-7 h-7" />
              </span>

              <div className="flex-1 min-w-0">
                <span className="block text-[11px] tracking-[0.16em] uppercase font-medium text-[#CB997E] tabular-nums">
                  {item.numberLabel}
                </span>
                <h3 className="font-serif text-lg text-[#292D28] leading-snug truncate">
                  {item.title}
                </h3>
                <p className="text-xs text-[#292D28]/70 line-clamp-1 mt-0.5">
                  {item.shortDescription}
                </p>
              </div>

              <span className="w-9 h-9 rounded-full bg-[#F5F0E8] border border-[#DAD7CD]/70 flex items-center justify-center text-[#344E41] shrink-0">
                <ChevronRight className="w-4 h-4" />
              </span>
            </button>
          ))}
        </div>

        {/* Tablet & Desktop Six Editorial Curriculum Cards (md+) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {SIX_WEEK_PROGRAM.map((item, idx) => {
            const isHighlighted = activeTimelineWeek === item.week;
            return (
              <button
                key={item.week}
                type="button"
                onClick={() => handleOpenWeek(idx)}
                onMouseEnter={() => setActiveTimelineWeek(item.week)}
                className={`group text-left p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-16px_rgba(52,78,65,0.2)] cursor-pointer flex flex-col justify-between min-h-[17.5rem] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#344E41] ${getCardStyle(
                  idx,
                  isHighlighted
                )}`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <span className="block text-xs tracking-[0.18em] uppercase font-medium text-[#CB997E] tabular-nums">
                        {item.numberLabel}
                      </span>
                      <div className="mt-1 flex items-center gap-1.5 text-[#344E41]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <GentlePawSvg className="w-3.5 h-3.5" />
                        <span className="text-[11px] font-medium text-[#344E41]/75">
                          Open lesson guide
                        </span>
                      </div>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-[#F5F0E8] border border-[#DAD7CD]/80 flex items-center justify-center text-[#344E41] group-hover:text-[#CB997E] transition-colors duration-200 shrink-0">
                      <WeekMotifIllustration motif={item.motif} className="w-8 h-8" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#292D28] group-hover:text-[#344E41] transition-colors mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-[15px] leading-relaxed text-[#292D28]/78">
                    {item.shortDescription}
                  </p>
                </div>

                <div className="mt-7 pt-4 border-t border-[#292D28]/10 flex items-center justify-between text-xs font-medium text-[#344E41]">
                  <span>View Week 0{item.week} Details</span>
                  <span className="w-8 h-8 rounded-full bg-[#F5F0E8] flex items-center justify-center group-hover:bg-[#344E41] group-hover:text-[#F5F0E8] transition-colors duration-200">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <WeekModal
        week={selectedWeek}
        totalWeeks={SIX_WEEK_PROGRAM.length}
        onClose={() => setSelectedIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
        onReserve={onOpenRegistration}
      />
    </section>
  );
};
