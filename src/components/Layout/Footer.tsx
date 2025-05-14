import React from 'react';
import { ChevronRight, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { FooterLink, SocialLink } from '../../types';

const Footer: React.FC = () => {
  const quickLinks: FooterLink[] = [
    { label: 'Home', href: '/' },
    { label: 'Know Us', href: '/know-us' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
    { label: 'Philanthropy', href: '/philanthropy' } 
  ];

  const projectLinks: FooterLink[] = [
    { label: 'The Nivaasa', href: '/projects/1' },
    { label: 'Stand Alone Villa', href: '/projects/2' },
    { label: 'Aira', href: '/projects/3' },
    { label: 'Aadriti Blossoms', href: '/projects/4' },
    { label: 'Niravana', href: '/projects/5' },
    { label: 'Uno Villa', href: '/projects/6' }
  ];

  const socialLinks: SocialLink[] = [
    { platform: 'Facebook', icon: 'facebook', href: 'https://facebook.com/' },
    { platform: 'Instagram', icon: 'instagram', href: 'https://instagram.com/aadriti_constructions' },
    { platform: 'Twitter', icon: 'twitter', href: 'https://twitter.com/' },
    { platform: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com/' }
  ];

  const renderSocialIcon = (icon: string) => {
    switch (icon) {
      case 'facebook': return <Facebook className="w-5 h-5" />;
      case 'instagram': return <Instagram className="w-5 h-5" />;
      case 'twitter': return <Twitter className="w-5 h-5" />;
      case 'linkedin': return <Linkedin className="w-5 h-5" />;
      default: return null;
    }
  };

  const handleLinkClick = () => window.scrollTo(0, 0);

  return (
    <footer className="bg-gray-900 pt-16 pb-6 text-sm">
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-3 gap-10 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-red-600">
              Quick Links
            </h3>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-3">
                  <Link 
                    to={link.href} 
                    onClick={handleLinkClick}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 inline-flex items-center"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-red-600">
              Projects
            </h3>
            <ul>
              {projectLinks.map((link, index) => (
                <li key={index} className="mb-3">
                  <Link 
                    to={link.href} 
                    onClick={handleLinkClick}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 inline-flex items-center"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-red-600">
              Follow Us
            </h3>
            <ul className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <a 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    aria-label={social.platform}
                  >
                    {renderSocialIcon(social.icon)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center text-gray-500 text-xs border-t border-gray-700 pt-5">
          © {new Date().getFullYear()} Aadriti Constructions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
