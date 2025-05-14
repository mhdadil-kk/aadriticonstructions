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
  const mobileLogoUrl = "https://media-hosting.imagekit.io/3fdefc8434514bc8/WhatsApp%20Image%202025-04-28%20at%2011.47.14_b865ffd0.jpg?Expires=1840429120&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fhNks3hbGhp4pXuFvAK-7qBLh4WYhSblhxZGWfPu9a1qIXt2im8-ixBRP-4Xwotz5XXm75on-5EPFwDJ0IUCwkW4LXwXiUjwRHVBS4B0qcn2cweQjoXSJ1akSebIDW8T~zs6hHwM05~k4kRvOqiLn9mdhTOkUl1ZUTedO36osR~J2LCwyS5zcASbVoSel5SoWZXtH8U1p1sIXKiIRT7LhxGLYT4iyaKqPqu8QMZcuDV7CWkDlk4ibpRCJo~ya-k3upjDJFB3MqSZpRYES1oyZZFbX4-0Rk08e0J3oNTwqtSfMNWJSjR5RMS7Dz~5vIzRCBobI0AMEDxAyxpGbwwCMQ__";
  
  // Desktop/laptop image URL
  const desktopLogoUrl = "https://media-hosting.imagekit.io/b06addc70c0e4fe2/Pi7_Tool_WhatsApp%20Image%202025-04-28%20at%2011.47.14_b865ffd0%20(5).jpg?Expires=1840441601&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=frn13tWf8s4YoA9j8xmTVv4ydaixns3chWXI27ufg9Z28A9LwkVbuTllcReJw9tv0wBH6p3wbBjQfnZkTqdUvtJkZ0YhtL1THbHmZm-Neoz4sXW~UsvjB6j42aqvNSjeWuueCn4vIN4Hy2eCzuj7ZoID5ywwLWXxWa6d4q4kHyYapeDgtmeyp7Cxd7bXUeRf6vou-rXWliysZ4gSM0ogtlXgUTeFPRDcqWGUTCxyEaNS8MPGcz6SKfdEGPHzw6HveNfVyUvKVYXwoVLqHpOTn620j2jyOefFClpl5elPsEP9XJhpgi6cpEU3aTnsFFRyw6TBzbwRttKNN8iF1E-jhQ__";

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
