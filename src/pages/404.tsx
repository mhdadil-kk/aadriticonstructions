import React from 'react';
import { Construction, Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="max-w-md text-center">
        {/* Simple 404 heading */}
        <h1 className="text-red-600 text-9xl font-bold mb-6">404</h1>
        
        {/* Icon */}
        <div className="mb-6">
          <Construction size={48} className="text-gray-400 mx-auto" />
        </div>
        
        {/* Message */}
        <h2 className="text-white text-2xl font-semibold mb-3">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          The page you're looking for is currently under construction or doesn't exist.
        </p>
        
        {/* Button */}
        <button 
          onClick={() => window.location.href = '/'} 
          className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded transition-colors duration-300"
        >
          <Home size={18} className="mr-2" />
          <span>Return to Home</span>
        </button>
      </div>
    </div>
  );
}