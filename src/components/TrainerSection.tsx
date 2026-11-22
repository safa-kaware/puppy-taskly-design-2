import React, { useState } from 'react';
import { Check, Pencil, RotateCcw } from 'lucide-react';
import { DEFAULT_TRAINER_PROFILE, IMAGES, TrainerProfile } from '../data/academyData';
import { BotanicalSprigHorizontal, EditorialImage, WillowBranchSvg } from './BotanicalMotifs';

export const TrainerSection: React.FC = () => {
  const [profile, setProfile] = useState<TrainerProfile>(DEFAULT_TRAINER_PROFILE);
  const [isEditing, setIsEditing] = useState(false);

  const handleReset = () => {
    setProfile(DEFAULT_TRAINER_PROFILE);
  };

  return (
    <section id="trainer" className="py-14 sm:py-24 lg:py-28 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-9 sm:gap-12 lg:gap-16 items-stretch">
          {/* Left Portrait Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative max-w-[20rem] sm:max-w-md mx-auto lg:mx-0 w-full">
              {/* Decorative oatmeal backdrop shape */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 sm:-inset-4 translate-x-2.5 translate-y-3 sm:translate-x-3 sm:translate-y-4 rounded-[2.5rem] sm:rounded-[3rem] rounded-tl-[6rem] sm:rounded-tl-[8rem] bg-[#DAD7CD] -z-0"
              />
              <WillowBranchSvg className="w-20 h-20 sm:w-24 sm:h-24 text-[#344E41]/40 absolute -bottom-6 -left-5 sm:-bottom-8 sm:-left-7 z-20 pointer-events-none" />

              <div className="relative z-10 aspect-[4/5] sm:aspect-[3/4] rounded-[2rem] sm:rounded-[2.5rem] rounded-tl-[5.5rem] sm:rounded-tl-[7.5rem] overflow-hidden shadow-[0_24px_50px_-20px_rgba(41,45,40,0.25)] bg-[#DAD7CD]">
                <EditorialImage
                  src={IMAGES.trainerPortrait}
                  alt="Warm editorial portrait of the Wag and Willow puppy trainer sitting beside a golden puppy"
                  className="w-full h-full object-cover"
                  fallbackLabel="Trainer Portrait"
                />
              </div>
            </div>
          </div>

          {/* Right Biography & Editable Placeholder Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3 sm:mb-4">
              <div className="flex items-center gap-2.5 text-[11px] sm:text-xs tracking-[0.2em] font-medium text-[#344E41]">
                <span>YOUR GUIDE &amp; EDUCATOR</span>
                <BotanicalSprigHorizontal className="w-10 sm:w-12 h-4 text-[#CB997E]" />
              </div>

              <div className="flex items-center gap-2">
                {isEditing && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 min-h-[44px] px-3.5 rounded-full text-xs font-medium text-[#292D28]/70 hover:text-[#344E41] hover:bg-[#DAD7CD]/50 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setIsEditing((prev) => !prev)}
                  className="inline-flex items-center gap-1.5 min-h-[44px] px-4 rounded-full border border-[#344E41]/25 text-xs font-medium text-[#344E41] hover:bg-[#DAD7CD]/60 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#344E41]"
                >
                  {isEditing ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Done Editing</span>
                    </>
                  ) : (
                    <>
                      <Pencil className="w-3.5 h-3.5" />
                      <span>Customize Placeholders</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <h2 className="font-serif text-[clamp(1.85rem,5.5vw,2.75rem)] leading-[1.12] text-[#292D28] mb-5 sm:mb-7">
              Meet the Human Behind{' '}
              <span className="italic font-normal text-[#344E41]">the Happy Paws.</span>
            </h2>

            {isEditing ? (
              <div className="space-y-4 bg-[#FAF7F2] p-5 sm:p-7 rounded-[1.75rem] border border-[#DAD7CD]">
                <p className="text-xs text-[#344E41]/80">
                  Interactive prototype preview: edit the trainer fields below to test how real
                  copy appears in the layout.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-xs font-medium uppercase tracking-wider text-[#344E41]">
                      Trainer Name
                    </span>
                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      className="mt-1.5 w-full min-h-[44px] rounded-xl border border-[#DAD7CD] bg-[#F5F0E8] px-3.5 py-2.5 text-base sm:text-sm text-[#292D28] focus:outline-none focus:border-[#344E41]"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium uppercase tracking-wider text-[#344E41]">
                      Role &amp; Location
                    </span>
                    <input
                      type="text"
                      value={profile.role}
                      onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                      className="mt-1.5 w-full min-h-[44px] rounded-xl border border-[#DAD7CD] bg-[#F5F0E8] px-3.5 py-2.5 text-base sm:text-sm text-[#292D28] focus:outline-none focus:border-[#344E41]"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-xs font-medium uppercase tracking-wider text-[#344E41]">
                    Professional Introduction
                  </span>
                  <textarea
                    rows={3}
                    value={profile.introduction}
                    onChange={(e) => setProfile({ ...profile, introduction: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-[#DAD7CD] bg-[#F5F0E8] px-3.5 py-2.5 text-base sm:text-sm text-[#292D28] focus:outline-none focus:border-[#344E41]"
                  />
                </label>

                <label className="block">
                  <span className="text-xs font-medium uppercase tracking-wider text-[#344E41]">
                    Certifications
                  </span>
                  <textarea
                    rows={2}
                    value={profile.certifications}
                    onChange={(e) => setProfile({ ...profile, certifications: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-[#DAD7CD] bg-[#F5F0E8] px-3.5 py-2.5 text-base sm:text-sm text-[#292D28] focus:outline-none focus:border-[#344E41]"
                  />
                </label>

                <label className="block">
                  <span className="text-xs font-medium uppercase tracking-wider text-[#344E41]">
                    Training Philosophy
                  </span>
                  <textarea
                    rows={3}
                    value={profile.philosophy}
                    onChange={(e) => setProfile({ ...profile, philosophy: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-[#DAD7CD] bg-[#F5F0E8] px-3.5 py-2.5 text-base sm:text-sm text-[#292D28] focus:outline-none focus:border-[#344E41]"
                  />
                </label>
              </div>
            ) : (
              <div className="space-y-5 sm:space-y-6">
                <div>
                  <h3 className="font-serif text-2xl text-[#344E41]">{profile.name}</h3>
                  <p className="text-sm text-[#CB997E] font-medium mt-0.5">{profile.role}</p>
                </div>

                <div className="space-y-4 sm:space-y-5">
                  <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF7F2] border border-[#DAD7CD]">
                    <p className="text-xs tracking-[0.16em] uppercase font-semibold text-[#344E41] mb-1.5">
                      Professional Introduction
                    </p>
                    <p className="text-[15px] leading-relaxed text-[#292D28]/82">
                      {profile.introduction}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="p-5 sm:p-6 rounded-2xl bg-[#DAD7CD]/55 border border-[#DAD7CD]">
                      <p className="text-xs tracking-[0.16em] uppercase font-semibold text-[#344E41] mb-1.5">
                        Certifications
                      </p>
                      <p className="text-sm leading-relaxed text-[#292D28]/82">
                        {profile.certifications}
                      </p>
                    </div>

                    <div className="p-5 sm:p-6 rounded-2xl bg-[#A3B18A]/28 border border-[#A3B18A]/45">
                      <p className="text-xs tracking-[0.16em] uppercase font-semibold text-[#344E41] mb-1.5">
                        Training Philosophy
                      </p>
                      <p className="text-sm leading-relaxed text-[#292D28]/82">
                        {profile.philosophy}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
