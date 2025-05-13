import React from 'react';
import { ChevronRight, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import type { FooterLink, SocialLink } from '../../types';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const quickLinks: FooterLink[] = [
    { label: 'Home', href: '#home' },
    { label: 'Know Us', href: '/know-us' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const projectLinks: FooterLink[] = [
    { label: 'Aadriti Blossoms', href: '/projects/blossoms' },
    { label: 'The Nivaasa', href: '/projects/nivaasa' },
    { label: 'Aira', href: '/projects/aira' },
    { label: 'Villas @ Thorrur', href: '/projects/villas-thorrur' },
    { label: 'Niravana', href: '/projects/niravana' }
  ];

  const socialLinks: SocialLink[] = [
    { platform: 'Facebook', icon: 'facebook', href: 'https://facebook.com/' },
    { platform: 'Instagram', icon: 'instagram', href: 'https://instagram.com/aadriti_constructions' },
    { platform: 'Twitter', icon: 'twitter', href: 'https://twitter.com/' },
    { platform: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com/' }
  ];

  const renderSocialIcon = (icon: string) => {
    switch (icon) {
      case 'facebook':
        return <Facebook className="w-5 h-5" />;
      case 'instagram':
        return <Instagram className="w-5 h-5" />;
      case 'twitter':
        return <Twitter className="w-5 h-5" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-gray-900 pt-16 pb-6">
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-3 gap-10 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-red-600 pb-2">
              Quick Links
            </h3>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-3">
                  {link.href.startsWith('#') ? (
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-red-500 transition-colors duration-300 inline-flex items-center"
                    >
                      <ChevronRight className="w-4 h-4 mr-2" />
                      {link.label}
                    </a>
                  ) : (
                    <Link 
                      to={link.href} 
                      className="text-gray-400 hover:text-red-500 transition-colors duration-300 inline-flex items-center"
                      onClick={handleLinkClick}
                    >
                      <ChevronRight className="w-4 h-4 mr-2" />
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-red-600 pb-2">
              Projects
            </h3>
            <ul>
              {projectLinks.map((link, index) => (
                <li key={index} className="mb-3">
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 inline-flex items-center"
                    onClick={handleLinkClick}
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-red-600 pb-2">
              Connect With Us
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-opacity-5 bg-white rounded-full flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300 hover:transform hover:-translate-y-1"
                  aria-label={link.platform}
                >
                  {renderSocialIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Aadriti Constructions Private Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;