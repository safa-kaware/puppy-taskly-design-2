/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { BackToTop } from './components/BackToTop';
import { ClassInfoSection } from './components/ClassInfoSection';
import { ExperienceSection } from './components/ExperienceSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Navbar } from './components/Navbar';
import { ProgramSection } from './components/ProgramSection';
import { RegistrationModal } from './components/RegistrationModal';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TrainerSection } from './components/TrainerSection';

export default function App() {
  const [registrationOpen, setRegistrationOpen] = useState(false);

  const openRegistration = () => setRegistrationOpen(true);
  const closeRegistration = () => setRegistrationOpen(false);

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#292D28] flex flex-col">
      <Navbar onOpenRegistration={openRegistration} />

      <main className="flex-1">
        <Hero />
        <AboutSection />
        <ProgramSection onOpenRegistration={openRegistration} />
        <ExperienceSection />
        <TrainerSection />
        <ClassInfoSection onOpenRegistration={openRegistration} />
        <TestimonialsSection />
        <FaqSection />
        <FinalCtaSection onOpenRegistration={openRegistration} />
      </main>

      <Footer onOpenRegistration={openRegistration} />

      <MobileBottomNav onOpenRegistration={openRegistration} />
      <RegistrationModal isOpen={registrationOpen} onClose={closeRegistration} />
      <BackToTop />
    </div>
  );
}
