// src/components/UI/Loader.tsx
import React, { useEffect, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface LoaderProps {
  onLoadComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onLoadComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onLoadComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 bg-gray-900 flex items-center justify-center z-[9999] transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{ minHeight: '100vh' }}
    >
      <div style={{ width: '300px', height: '300px' }}>
        <DotLottieReact
          src="https://lottie.host/2c898724-2557-4bd9-8396-d297912d7322/y2sJn5nKeS.lottie"
          autoplay
          loop
        />
      </div>
    </div>
  );
};

export default Loader;
