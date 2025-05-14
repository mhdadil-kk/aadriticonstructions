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
      image: "https://media-hosting.imagekit.io/fc61513b2da54f2a/image1.jpg?Expires=1841805930&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=LlDDffNzcHyyZkA4gFsQfVcTc7AtIu9BStNnOTUbb8GAAsaW7Cv3z0Bj9WFCmqYMbnSVAJTYil5rLU1zz4GFKnT~CSvsUmX6tfO5EC6RsqaBz4CeFrcwiN4PvQxZfG-jZLRa8lMCuPtRCJ7wcYm0APxJDtyDJuv4B28xmLOTgx6VuxfMSjLrIb6rbg~dnwv7YyzoJL6p1KmSGrr6XMhnM1miNgx0LF6P2tJZhZKejo2HOkFZC9ABp-WANWWvdtMSZ4lGHscImKuvKJVUQefbTfrCWLmAU1aFRKf9K4N5D5IqQfO~bV1JY5UPdt9ubbaHMesEcBc34MhgrWvIlUkghg__",

      description: "With an MBA and extensive experience in construction, Anil leads with vision and strategic direction."
    },
    {
      name: "Ajitha Reddy Annula",
      position: "Director & CTO",
      image: "https://media-hosting.imagekit.io/ec98d2e2ac504643/image2.jpg?Expires=1841805932&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=2mgbhQM7Au1~Wc1~L3L5YUDNVgCVzEp1qjhxoCFNT5WR6ARByPYzTQApzLfUijXZUdRijEUBpL4q9npXqgHtOu-nF04YMFxsF2By8ngMvhvv~WvDH8Hrij5WxkZA3jqgcRMAw-tK0W2Xd1D3j9zoTmASc6OPDgvy9aHyWZ7KHcCAQ9uDv~dTAbI4HdbFUfLYn57d-KGIlh~hDs8dQPlg0If8USkNBiFHb~NxUO176r2jHEoqWLjpYS3q4V5PKLGDYS1LeuL53BsugGC66862h3SB8u2~qUfyTZUVanTBiGBg7TRuFygMEtXsQu4LBmoiwiOeuj6lj42JcWvP9d1bCA__",
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
                className="group flex flex-col items-center text-center"
              >
                <div className="relative overflow-hidden rounded-lg w-80 h-80 sm:w-96 sm:h-96">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-red-500 font-medium text-sm sm:text-base">{member.position}</p>
                  </div>
                </div>

                {/* Description placed below image, aligned with it */}
                <p className="text-gray-400 text-sm sm:text-base mt-4 max-w-md">
                  {member.description}
                </p>
              </AnimatedSection>

            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default KnowUsPage;