
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSearch = () => {
    const searchElement = document.getElementById('search');
    if (searchElement) {
      searchElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-unchained-navy to-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Blockchain Monitoring & Risk Assessment Framework
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Advanced detection of suspicious blockchain activity through AI-powered analysis and human oversight.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToSearch}
                className="bg-unchained-red hover:bg-red-700 text-white px-8 py-6 rounded-lg text-lg"
              >
                Start Analyzing
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-unchained-navy px-8 py-6 rounded-lg text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
              <div className="absolute inset-0 bg-unchained-navy rounded-full opacity-20 blur-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg 
                  className="w-48 h-48 md:w-64 md:h-64" 
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    fill="#FFFFFF" 
                    d="M100,20 C120,20 140,30 150,50 C160,70 160,90 150,110 C140,130 120,140 100,140 C80,140 60,130 50,110 C40,90 40,70 50,50 C60,30 80,20 100,20 Z" 
                  />
                  <path 
                    fill="none" 
                    stroke="#E63946" 
                    strokeWidth="8"
                    strokeLinecap="round" 
                    d="M100,45 L100,100 L130,115" 
                  />
                  <circle 
                    cx="100" 
                    cy="100" 
                    r="80" 
                    fill="none" 
                    stroke="#FFFFFF" 
                    strokeWidth="4" 
                    strokeDasharray="10,5" 
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={scrollToSearch} 
            className="p-3 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300"
          >
            <ArrowDown className="h-6 w-6 text-white animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
