import React from 'react';
import { ArrowRight, Target, Users, Lightbulb, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../UI/SectionHeader';
import AnimatedSection from '../UI/AnimatedSection';

const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: <Target className="w-12 h-12 text-red-500" />,
      title: "Strategic Vision",
      description: "Building tomorrow's landmarks with innovative design and sustainable practices"
    },
    {
      icon: <Users className="w-12 h-12 text-red-500" />,
      title: "Expert Team",
      description: "Skilled professionals committed to delivering excellence in every project"
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-red-500" />,
      title: "Innovation First",
      description: "Embracing cutting-edge technology and modern construction methods"
    },
    {
      icon: <Award className="w-12 h-12 text-red-500" />,
      title: "Quality Assured",
      description: "Maintaining the highest standards in construction and customer satisfaction"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(60deg, #ffffff77 25%, transparent 25.5%, transparent 75%, #ffffff77 75%, #ffffff77), linear-gradient(60deg, #ffffff77 25%, transparent 25.5%, transparent 75%, #ffffff77 75%, #ffffff77)",
          backgroundSize: "80px 140px",
          backgroundPosition: "0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px"
        }}></div>
      </div>

      <div className="container mx-auto px-5 relative">
        <AnimatedSection animation="fade-in-section">
          <SectionHeader 
            title="Building Dreams Into Reality" 
            description="Since 2019, we've been transforming the construction landscape with innovative designs and sustainable practices."
          />
        </AnimatedSection>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <AnimatedSection 
              key={index}
              animation="scale-in"
              className="bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm border border-gray-700 transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-in-section" className="mt-16 text-center">
          <Link 
            to="/know-us"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-all duration-300 group"
          >
            Know More About Us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;