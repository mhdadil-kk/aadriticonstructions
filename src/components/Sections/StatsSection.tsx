import React, { useEffect, useRef, useState } from 'react';
import { Award, CheckCircle, Building, HardHat } from 'lucide-react';
import type { Stat } from '../../types';
import SectionHeader from '../UI/SectionHeader';

const renderIcon = (icon: string) => {
  switch (icon) {
    case 'award':
      return <Award className="w-10 h-10 text-red-600" />;
    case 'check':
      return <CheckCircle className="w-10 h-10 text-red-600" />;
    case 'building':
      return <Building className="w-10 h-10 text-red-600" />;
    case 'hardhat':
      return <HardHat className="w-10 h-10 text-red-600" />;
    default:
      return null;
  }
};

const StatsSection: React.FC = () => {
  const stats: Stat[] = [
    { icon: 'award', value: 5, label: 'Years of Excellence' },
    { icon: 'check', value: 5, label: 'Projects Completed' },
    { icon: 'building', value: 30000, isSqFt: true, label: 'Built up' },
    { icon: 'hardhat', value: 15000, isSqFt: true, label: 'Under Construction' },
    { icon: 'building', value: 45000, isSqFt: true, label: 'Planning' }
  ];

  return (
    <section 
      id="stats" 
      className="py-24 bg-cover bg-center bg-fixed"
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" 
      }}
    >
      <div className="container mx-auto px-5">
        <SectionHeader 
          title="Our Impact" 
          description="Numbers that tell our story of growth and excellence."
        />

        <div className="flex flex-wrap justify-around mt-12">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StatItemProps {
  stat: Stat;
}

const StatItem: React.FC<StatItemProps> = ({ stat }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.5 });

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = stat.value;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, stat.value]);

  return (
    <div className="flex-1 min-w-[200px] text-center p-8 bg-opacity-5 bg-white rounded-lg transition-all duration-300 hover:bg-opacity-10 hover:transform hover:-translate-y-1 mb-6 md:mb-0">
      <div className="flex justify-center mb-5">
        {renderIcon(stat.icon)}
      </div>
      <div ref={countRef} className="flex items-center justify-center">
        <h3 className="text-3xl md:text-4xl font-bold text-white relative inline-block">
          {count}
          {!stat.isSqFt && <span className="absolute text-red-500 text-2xl md:text-3xl -right-5">+</span>}
        </h3>
        {stat.isSqFt && <span className="ml-2 text-xl text-white">sq.ft.</span>}
      </div>
      <p className="text-sm uppercase tracking-wider text-gray-400 mt-2">{stat.label}</p>
    </div>
  );
};

export default StatsSection;