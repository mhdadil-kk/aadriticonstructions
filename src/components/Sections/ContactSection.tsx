import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import type { ContactInfo } from '../../types';
import SectionHeader from '../UI/SectionHeader';

const ContactSection: React.FC = () => {
  const contactInfo: ContactInfo[] = [
    {
      icon: 'phone',
      title: 'Phone',
      value: '+91 9908222749'
    },
    {
      icon: 'mail',
      title: 'Email',
      value: 'aadriticonstructions@gmail.com'
    },
    {
      icon: 'map',
      title: 'Address',
      value: 'Brahmanapally, Hyderabad, Telangana, India'
    },
    {
      icon: 'instagram',
      title: 'Instagram',
      value: '@aadriti_constructions',
      isLink: true,
      href: 'https://instagram.com/aadriti_constructions'
    }
  ];

  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'phone':
        return <Phone className="w-6 h-6 text-red-600" />;
      case 'mail':
        return <Mail className="w-6 h-6 text-red-600" />;
      case 'map':
        return <MapPin className="w-6 h-6 text-red-600" />;
      case 'instagram':
        return <Instagram className="w-6 h-6 text-red-600" />;
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-800">
      <div className="container mx-auto px-5">
        <SectionHeader 
          title="Contact Us" 
          description="Reach out to us for any inquiries or to discuss your construction needs."
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div>
            {contactInfo.map((item, index) => (
              <div key={index} className="flex mb-8">
                <div className="mr-4 mt-1">
                  {renderIcon(item.icon)}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                  {item.isLink ? (
                    <a 
                      href={item.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-400">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="h-80 md:h-auto rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.35363641596!2d78.5152785!3d17.3753574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99a00a1ffecf%3A0x46e0ef9dede1d5b9!2sAadriti%20Constructions%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1745477719323!5m2!1sen!2sin" 
              className="w-full h-full border-0" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;