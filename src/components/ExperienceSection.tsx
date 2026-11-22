import React, { useState } from 'react';
import { Expand, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { EXPERIENCE_GALLERY, ExperiencePhoto } from '../data/academyData';
import { BotanicalSprigHorizontal, EditorialImage, WillowBranchSvg } from './BotanicalMotifs';

export const ExperienceSection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<ExperiencePhoto | null>(null);

  return (
    <section id="experience" className="py-14 sm:py-24 lg:py-28 bg-[#FAF7F2] relative overflow-hidden">
      {/* Subtle organic blob accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-20 w-80 h-80 rounded-full bg-[#A3B18A]/15 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-end mb-8 sm:mb-14">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2.5 text-[11px] sm:text-xs tracking-[0.2em] font-medium text-[#344E41] mb-3 sm:mb-4">
              <span>THE STUDIO EXPERIENCE</span>
              <BotanicalSprigHorizontal className="w-10 sm:w-12 h-4 text-[#CB997E]" />
            </div>
            <h2 className="font-serif text-[clamp(1.85rem,5.5vw,2.85rem)] leading-[1.12] text-[#292D28]">
              Where Learning{' '}
              <span className="italic font-normal text-[#344E41]">Meets Play.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex items-start justify-between gap-4">
            <p className="text-[15px] sm:text-base leading-relaxed text-[#292D28]/78">
              Warm natural light, soft mats, unhurried socialisation, and fresh courtyard air. Every
              detail of our Edmonton space is designed so puppies feel safe to explore.
            </p>
            <WillowBranchSvg className="w-16 h-16 text-[#CB997E]/65 shrink-0 hidden sm:block" />
          </div>
        </div>

        {/* Mobile-first horizontal snap gallery, expanding to asymmetrical bento on lg+ */}
        <div className="flex lg:grid lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-7 overflow-x-auto lg:overflow-visible snap-x snap-mandatory -mx-4 px-4 lg:mx-0 lg:px-0 pb-3 lg:pb-0 items-stretch">
          {EXPERIENCE_GALLERY.map((photo, index) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setActivePhoto(photo)}
              className={`group relative w-[82vw] max-w-[340px] shrink-0 snap-center lg:w-auto lg:max-w-none overflow-hidden text-left cursor-pointer shadow-[0_18px_42px_-20px_rgba(41,45,40,0.22)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#344E41] aspect-[4/5] ${
                photo.spanClass
              } lg:${photo.aspectClass} ${
                index === 0
                  ? 'rounded-[2rem] rounded-tl-[4rem]'
                  : index === 1
                    ? 'rounded-[2rem] rounded-br-[4rem]'
                    : index === 2
                      ? 'rounded-[2rem] rounded-bl-[4rem]'
                      : 'rounded-[2rem] rounded-tr-[4rem]'
              }`}
            >
              <EditorialImage
                src={photo.image}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                fallbackLabel={photo.title}
              />

              {/* Measured Gradient Scrim for 4.5:1 Contrast */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#292D28]/85 via-[#292D28]/25 to-transparent transition-opacity duration-300"
              />

              {/* Subtle Expand Icon Affordance */}
              <span className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#F5F0E8]/90 text-[#344E41] flex items-center justify-center lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200 shadow-sm">
                <Expand className="w-4 h-4" />
              </span>

              {/* Editorial Caption */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7 text-[#F5F0E8]">
                <p className="text-[11px] sm:text-xs tracking-[0.16em] uppercase text-[#DAD7CD] mb-1">
                  {photo.category}
                </p>
                <h3 className="font-serif text-xl sm:text-2xl text-[#F5F0E8] mb-1">
                  {photo.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#F5F0E8]/85 max-w-md leading-relaxed">
                  {photo.caption}
                </p>
              </div>
            </button>
          ))}
        </div>

        <p className="lg:hidden mt-1 text-xs text-[#344E41]/65 text-center">
          Swipe gallery &middot; Tap any photo to enlarge
        </p>
      </div>

      {/* Bottom-Sheet / Modal Lightbox Preview */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-8 bg-[#292D28]/75 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={activePhoto.title}
          >
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 32 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full rounded-t-[2rem] sm:rounded-[2rem] overflow-hidden bg-[#F5F0E8] shadow-2xl"
              style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
            >
              <div className="sm:hidden pt-3 pb-1 flex justify-center bg-[#F5F0E8]">
                <span className="w-10 h-1.5 rounded-full bg-[#DAD7CD]" aria-hidden="true" />
              </div>
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                aria-label="Close gallery preview"
                className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 min-w-[44px] min-h-[44px] rounded-full bg-[#F5F0E8]/90 hover:bg-[#DAD7CD] text-[#292D28] flex items-center justify-center cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="aspect-[4/3] bg-[#DAD7CD]">
                <EditorialImage
                  src={activePhoto.image}
                  alt={activePhoto.alt}
                  className="w-full h-full object-cover"
                  fallbackLabel={activePhoto.title}
                />
              </div>
              <div className="p-5 sm:p-7">
                <p className="text-xs tracking-[0.16em] uppercase text-[#CB997E] mb-1">
                  {activePhoto.category}
                </p>
                <h3 className="font-serif text-2xl text-[#344E41] mb-1.5">{activePhoto.title}</h3>
                <p className="text-sm sm:text-base text-[#292D28]/80">{activePhoto.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
