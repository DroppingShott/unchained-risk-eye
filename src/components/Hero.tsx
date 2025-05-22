
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Shield, Search } from 'lucide-react';

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
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-64 w-64 rounded-full bg-blue-600/20 blur-3xl -top-20 -left-20 animate-float"></div>
        <div className="absolute h-64 w-64 rounded-full bg-unchained-red/10 blur-3xl top-40 right-20 animate-float" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute h-32 w-32 rounded-full bg-blue-400/10 blur-2xl bottom-20 left-1/4 animate-float" style={{animationDelay: '0.8s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-700/40 rounded-full mb-4 animate-fade-in backdrop-blur-sm">
              <Shield className="h-4 w-4 text-unchained-red" />
              <span className="text-sm font-medium">Blockchain Criminal Detection</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 animate-fade-in">
              Securing the Blockchain 
              <span className="text-unchained-red block mt-2">One Transaction at a Time</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Using advanced AI, we identify and track criminal activity across blockchain networks. 
              Prevent fraud, detect money laundering, and safeguard your digital assets.
            </p>
            <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Button 
                onClick={scrollToSearch}
                className="group bg-unchained-red hover:bg-red-700 text-white px-8 py-6 rounded-lg text-lg transform transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Start Analyzing
                <Search className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
              <div className="absolute inset-0 bg-unchained-navy rounded-full opacity-20 blur-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/ed165f8a-aa3b-432d-aec7-55877f99acc5.png" 
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
            className="p-3 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 animate-bounce"
          >
            <ArrowDown className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
