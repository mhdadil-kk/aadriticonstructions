import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section 
  id="home" 
  className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat pt-[160px]"
  style={{ 
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" 
  }}
>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
      
      <div className="max-w-4xl px-5 text-center z-10 animate-fadeIn">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 uppercase tracking-wider text-white animate-fadeInDown">
          Building Dreams, One Brick at a Time
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-10 tracking-widest text-red-500 animate-fadeInUp">
          BUILDING THE NEXT ERA
        </p>
        <a 
          href="#contact" 
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-full uppercase text-sm tracking-wider transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg animate-fadeInUp"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default HeroSection;