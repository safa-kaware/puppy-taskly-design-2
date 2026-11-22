import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { FAQ_ITEMS } from '../data/academyData';
import { BotanicalSprigHorizontal } from './BotanicalMotifs';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-14 sm:py-24 lg:py-28 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start">
          {/* Left Sticky Editorial Intro */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="flex items-center gap-2.5 text-[11px] sm:text-xs tracking-[0.2em] font-medium text-[#344E41] mb-3 sm:mb-4">
              <span>HELPFUL ANSWERS</span>
              <BotanicalSprigHorizontal className="w-10 sm:w-12 h-4 text-[#CB997E]" />
            </div>
            <h2 className="font-serif text-[clamp(1.85rem,5.5vw,2.85rem)] leading-[1.12] text-[#292D28] mb-3 sm:mb-5">
              A Few Little{' '}
              <span className="italic font-normal text-[#344E41]">Questions.</span>
            </h2>
            <p className="text-[15px] sm:text-base leading-relaxed text-[#292D28]/78 max-w-md">
              Preparing for your puppy&apos;s first class should feel calm and effortless. Here is
              everything families usually wonder before Week 01 begins.
            </p>
          </div>

          {/* Right Smooth Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-[1.35rem] sm:rounded-[1.5rem] border transition-colors duration-200 ${
                    isOpen
                      ? 'bg-[#FAF7F2] border-[#A3B18A]'
                      : 'bg-[#FAF7F2]/75 border-[#DAD7CD] hover:border-[#A3B18A]/70'
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`${item.id}-panel`}
                    onClick={() => toggleItem(item.id)}
                    className="w-full min-h-[56px] px-4 py-4 sm:px-7 sm:py-6 flex items-center justify-between gap-3 sm:gap-4 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#344E41] rounded-[1.35rem] sm:rounded-[1.5rem]"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-serif italic text-sm sm:text-base text-[#CB997E] tabular-nums shrink-0">
                        0{idx + 1}
                      </span>
                      <span className="font-serif text-base sm:text-xl text-[#292D28]">
                        {item.question}
                      </span>
                    </div>

                    <span
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? 'bg-[#344E41] text-[#F5F0E8] rotate-45'
                          : 'bg-[#DAD7CD]/65 text-[#344E41] rotate-0'
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`${item.id}-panel`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 sm:px-7 sm:pb-7 pl-14 sm:pl-16 text-[15px] leading-relaxed text-[#292D28]/80">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
