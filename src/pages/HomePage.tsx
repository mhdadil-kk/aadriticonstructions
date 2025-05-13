import React from 'react';
import HeroSection from '../components/Sections/HeroSection';
import AboutSection from '../components/Sections/AboutSection';
import ServicesSection from '../components/Sections/ServicesSection';
import StatsSection from '../components/Sections/StatsSection';
import ProjectsSection from '../components/Sections/ProjectsSection';
import TestimonialsSection from '../components/Sections/TestimonialsSection';
import ContactSection from '../components/Sections/ContactSection';

const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;