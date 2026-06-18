import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { ColophonSection } from '@/components/sections/ColophonSection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main id="main" tabIndex={-1}>
        <div id="top" />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <ColophonSection />
      </main>
      <Footer />
    </div>
  );
}
