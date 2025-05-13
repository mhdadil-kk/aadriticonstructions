import React from 'react';
import { Building, PenTool as Tools } from 'lucide-react';
import type{  Service } from '../../types';
import SectionHeader from '../UI/SectionHeader';

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      icon: 'building',
      title: 'Development',
      description: (
        <ul className="list-disc pl-5 space-y-2 text-gray-400">
          <li>Residential (Apartments, Villas)</li>
          <li>Commercial real estate</li>
          <li>Plotting development</li>
          <li>Government contracts</li>
          <li>Infrastructure and transport projects</li>
        </ul>
      )
    },
    {
      icon: 'tools',
      title: 'Maintenance',
      description: (
        <ul className="list-disc pl-5 space-y-2 text-gray-400">
          <li>Comprehensive repair & maintenance services</li>
          <li>Building upkeep</li>
          <li>Infrastructure maintenance</li>
        </ul>
      )
    }
  ];

  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'building':
        return <Building className="w-10 h-10 text-red-600" />;
      case 'tools':
        return <Tools className="w-10 h-10 text-red-600" />;
      default:
        return null;
    }
  };

  return (
    <section id="services" className="py-24" style={{ backgroundColor: 'rgb(33 33 33)' }}>
      <div className="container mx-auto px-5">
        <SectionHeader 
          title="Our Services" 
          description="We offer comprehensive construction solutions tailored to meet your specific needs."
        />
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="relative overflow-hidden bg-[#2c2c2c] p-8 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg 
              before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-0 before:bg-gradient-to-r before:from-red-800 before:to-red-600 before:opacity-10 before:z-[-1] before:transition-all before:duration-500 hover:before:h-full"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  {renderIcon(service.icon)}
                </div>
                <h3 className="text-2xl font-semibold text-white relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-16">
                  {service.title}
                </h3>
              </div>
              <div className="text-gray-400">
                {service.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;