import Hero from '@/components/sections/Hero';
import FeaturedWork from '@/components/sections/FeaturedWork';
import OriginCapabilities from '@/components/sections/OriginCapabilities';
import LabProcess from '@/components/sections/LabProcess';
import VisionKnowledge from '@/components/sections/VisionKnowledge';
import AboutContact from '@/components/sections/AboutContact';

export default function SmartTechExperience() {
  return (
    <main id="main-content">
      <Hero />
      <FeaturedWork />
      <OriginCapabilities />
      <LabProcess />
      <VisionKnowledge />
      <AboutContact />
    </main>
  );
}
