import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // Mobile image URL
  const mobileLogoUrl = "https://ik.imagekit.io/ln0l6bblz/aadriti_logo_mob?updatedAt=1747472104153";
  
  // Desktop/laptop image URL
  const desktopLogoUrl = "https://ik.imagekit.io/ln0l6bblz/aadriti_logo?updatedAt=1747472155554";

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="w-full relative">
        {/* Image Logo Background - full width */}
        <div className="w-full relative z-30 flex justify-center">
          <img 
            src={isMobile ? mobileLogoUrl : desktopLogoUrl}
            alt="Aadriti Constructions Logo"
            className="w-full h-32 lg:h-32 object-contain"
          />
          <Link 
            to="/" 
            onClick={handleNavClick} 
            className="absolute inset-0" 
            aria-label="Aadriti Constructions"
          />
          
          {/* Hamburger menu button - positioned at bottom right of logo container */}
          <div className="absolute bottom-2 right-2 lg:hidden z-40">
            <button 
              onClick={toggleMobileMenu} 
              className="text-gray-800 p-1 rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-300 bg-white shadow-md"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className={`w-full bg-red-600 transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0 lg:max-h-full'} lg:block overflow-hidden`}>
        <div className="container mx-auto">
          <ul className="lg:flex lg:justify-center">
            {[ 
              { label: 'Home', path: '/' },
              { label: 'Know Us', path: '/know-us' },
              { label: 'Our Journey', path: '/timeline' },
              { label: 'Services', path: '/services' },
              { label: 'Projects', path: '/projects' },
              { label: 'Contact', path: '/contact' },
              { label: 'Philanthropy', path: '/philanthropy' },
            ].map((item) => (
              <li key={item.label} className="mx-1 lg:mx-5">
                <Link 
                  to={item.path} 
                  className={`text-white font-medium text-base lg:text-lg py-3 lg:py-4 px-2 block text-center relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gray-900 after:transition-all after:duration-300 hover:text-gray-900 hover:after:w-full ${
                    location.pathname === item.path ? 'after:w-full text-gray-900' : ''
                  }`}
                  onClick={handleNavClick}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
