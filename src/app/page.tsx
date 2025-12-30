import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import SpeakersSection from '@/components/sections/speakers';
import ScheduleSection from '@/components/sections/schedule';
import SponsorsSection from '@/components/sections/sponsors';
import GallerySection from '@/components/sections/gallery';
import FaqSection from '@/components/sections/faq';
import CoreTeamSection from '@/components/sections/core-team';
import ContestsSection from '@/components/sections/contests';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SpeakersSection />
        <CoreTeamSection />
        <ScheduleSection />
        <ContestsSection />
        <SponsorsSection />
        <GallerySection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
