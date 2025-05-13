import React from 'react';

interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 inline-block relative">
        {title}
        <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-red-600"></span>
      </h2>
      <p className="max-w-2xl mx-auto text-gray-400 mt-6">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;