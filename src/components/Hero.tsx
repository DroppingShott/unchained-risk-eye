
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
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 animate-fade-in">
              Blockchain Criminal Detection Framework
            </h1>
            <p className="text-xl mb-8 text-gray-200 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Identify and track criminal activity on the blockchain with our powerful AI-driven 
              analysis system. Detect money laundering, scams, and other suspicious transactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Button 
                onClick={scrollToSearch}
                className="bg-unchained-red hover:bg-red-700 text-white px-8 py-6 rounded-lg text-lg transform transition-all duration-300 hover:scale-105"
              >
                Start Analyzing
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-unchained-navy px-8 py-6 rounded-lg text-lg transform transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
              <div className="absolute inset-0 bg-unchained-navy rounded-full opacity-20 blur-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/d1aa872c-3b36-485d-85df-457a0c194e20.png" 
                  alt="UnChained Logo" 
                  className="w-48 h-48 md:w-64 md:h-64 object-contain animate-pulse-light"
                />
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
