import React from 'react';
import { Calendar, DollarSign, MapPin, Users } from 'lucide-react';
import { CLASS_DETAILS } from '../data/academyData';
import { AnimatedPawTrail, BotanicalSprigHorizontal } from './BotanicalMotifs';

interface ClassInfoSectionProps {
  onOpenRegistration: () => void;
}

export const ClassInfoSection: React.FC<ClassInfoSectionProps> = ({ onOpenRegistration }) => {
  const cards = [
    {
      label: 'Duration',
      value: CLASS_DETAILS.durationTitle,
      detail: CLASS_DETAILS.durationDetail,
      icon: Calendar,
      tone: 'bg-[#F5F0E8] border-[#DAD7CD]',
    },
    {
      label: 'Location',
      value: CLASS_DETAILS.locationTitle,
      detail: CLASS_DETAILS.locationDetail,
      icon: MapPin,
      tone: 'bg-[#DAD7CD]/55 border-[#DAD7CD]',
    },
    {
      label: 'Class Size',
      value: CLASS_DETAILS.classSizeTitle,
      detail: CLASS_DETAILS.classSizeDetail,
      icon: Users,
      tone: 'bg-[#A3B18A]/28 border-[#A3B18A]/50',
    },
    {
      label: 'Tuition',
      value: CLASS_DETAILS.priceTitle,
      detail: CLASS_DETAILS.priceDetail,
      icon: DollarSign,
      tone: 'bg-[#F5F0E8] border-[#DAD7CD]',
    },
  ];

  return (
    <section id="class-info" className="py-14 sm:py-24 lg:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 text-[11px] sm:text-xs tracking-[0.2em] font-medium text-[#344E41] mb-3 sm:mb-4">
              <span>CLASS DETAILS</span>
              <BotanicalSprigHorizontal className="w-10 sm:w-12 h-4 text-[#CB997E]" />
            </div>
            <h2 className="font-serif text-[clamp(1.85rem,5.5vw,2.85rem)] leading-[1.12] text-[#292D28]">
              Everything You{' '}
              <span className="italic font-normal text-[#344E41]">Need to Know.</span>
            </h2>
          </div>

          <AnimatedPawTrail className="text-[#CB997E]/75 hidden sm:inline-flex" />
        </div>

        {/* 4 Editorial Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-12">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={card.label}
                className={`p-5 sm:p-7 border transition-transform duration-300 md:hover:-translate-y-1 flex flex-col justify-between sm:min-h-[15rem] ${
                  card.tone
                } ${
                  index % 2 === 0
                    ? 'rounded-[1.65rem] sm:rounded-[2rem] sm:rounded-tr-[3.25rem]'
                    : 'rounded-[1.65rem] sm:rounded-[2rem] sm:rounded-bl-[3.25rem]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3 sm:mb-5">
                    <span className="text-[11px] sm:text-xs tracking-[0.16em] uppercase font-medium text-[#344E41]/75">
                      {card.label}
                    </span>
                    <span className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#DAD7CD] flex items-center justify-center text-[#CB997E]">
                      <Icon className="w-4 h-4" strokeWidth={1.75} />
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#344E41] leading-snug mb-2 sm:mb-3 tabular-nums">
                    {card.value}
                  </h3>
                </div>

                <p className="text-sm leading-relaxed text-[#292D28]/78">{card.detail}</p>
              </div>
            );
          })}
        </div>

        {/* Prominent Forest-Green Conversion Strip */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-5 p-6 sm:p-9 rounded-[1.75rem] sm:rounded-[2rem] bg-[#DAD7CD]/55 border border-[#DAD7CD]">
          <div className="text-center sm:text-left">
            <p className="font-serif text-xl sm:text-2xl text-[#344E41]">
              Ready to welcome calm mornings and happy walks?
            </p>
            <p className="text-sm text-[#292D28]/75 mt-1">
              Upcoming Edmonton puppy cohorts open for gentle small-group enrollment.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenRegistration}
            className="inline-flex items-center justify-center w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-full bg-[#344E41] text-[#F5F0E8] text-sm sm:text-base font-medium hover:bg-[#292D28] active:scale-[0.98] transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 shadow-[0_14px_28px_-10px_rgba(52,78,65,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#344E41]"
          >
            Reserve Your Puppy&apos;s Place
          </button>
        </div>
      </div>
    </section>
  );
};
