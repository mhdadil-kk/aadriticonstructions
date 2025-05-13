import React, { useEffect } from 'react';
import { Target, Users, Lightbulb, Award, Building, Rocket, Heart } from 'lucide-react';
import AnimatedSection from '../components/UI/AnimatedSection';

const KnowUsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const team = [
    {
      name: "Anil Reddy Annula",
      position: "Managing Director & CEO",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "With an MBA and extensive experience in construction, Anil leads with vision and strategic direction."
    },
    {
      name: "Ajitha Reddy Annula",
      position: "Director & CTO",
      image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Specializing in Urban Planning & Architecture, bringing technical expertise to all projects."
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-red-500" />,
      title: "Our Vision",
      description: "To be the most trusted name in construction, delivering innovative and sustainable solutions that enhance lives and communities."
    },
    {
      icon: <Building className="w-8 h-8 text-red-500" />,
      title: "Our Niche",
      description: "Specializing in luxury residential developments, commercial spaces, and institutional projects with a focus on sustainability and modern design."
    },
    {
      icon: <Rocket className="w-8 h-8 text-red-500" />,
      title: "Our Goals",
      description: "To expand our footprint across India while maintaining our commitment to quality, innovation, and customer satisfaction."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Our Promise",
      description: "Delivering excellence in every project through transparency, quality craftsmanship, and timely execution."
    }
  ];

  return (
    <div className="pt-[calc(32px+var(--header-height,180px))] bg-gray-900 overflow-x-hidden">
      {/* Hero Section */}
      <AnimatedSection animation="fade-in-section" className="relative py-20 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6 animate-fadeInDown">
            Building Tomorrow's World Today
          </h1>
          <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto animate-fadeInUp">
            At Aadriti Constructions, we believe in creating spaces that inspire, endure, and enhance the quality of life for our customers.
          </p>
        </div>
      </AnimatedSection>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <AnimatedSection 
                key={index} 
                animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}
                className="bg-gray-800 p-6 sm:p-8 rounded-lg border border-gray-700 hover:border-red-500 transition-colors duration-300"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-section">
            <h2 className="text-3xl font-bold text-white text-center mb-12 sm:mb-16">Our Leadership Team</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {team.map((member, index) => (
              <AnimatedSection 
                key={index} 
                animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">{member.name}</h3>
                    <p className="text-red-500 font-medium text-sm sm:text-base">{member.position}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm sm:text-base">{member.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default KnowUsPage;