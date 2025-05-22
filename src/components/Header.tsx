
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Database, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-unchained-navy/95 backdrop-blur-sm py-2 shadow-lg' 
          : 'bg-unchained-navy py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/d1aa872c-3b36-485d-85df-457a0c194e20.png" 
              alt="UnChained Logo" 
              className="h-8 w-8 transition-transform duration-300 group-hover:rotate-12"
            />
            <span className="text-2xl font-bold tracking-tight text-white ml-2">UnChained</span>
          </div>
          <span className="text-xs px-2 py-1 bg-unchained-red rounded-full text-white">Beta</span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 mx-auto">
          <a href="/#features" className="text-white hover:text-gray-300 transition-colors">Features</a>
          <a href="/#how-it-works" className="text-white hover:text-gray-300 transition-colors">How It Works</a>
          <a href="/#search" className="text-white hover:text-gray-300 transition-colors">Search</a>
          <a href="/#about" className="text-white hover:text-gray-300 transition-colors">About</a>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-unchained-navy">
            <Database className="mr-2 h-4 w-4" />
            API Access
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-unchained-navy shadow-lg md:hidden animate-fade-in">
            <div className="flex flex-col p-4 space-y-3">
              <a href="/#features" className="text-white py-2 hover:bg-blue-800 px-4 rounded" onClick={() => setIsMenuOpen(false)}>Features</a>
              <a href="/#how-it-works" className="text-white py-2 hover:bg-blue-800 px-4 rounded" onClick={() => setIsMenuOpen(false)}>How It Works</a>
              <a href="/#search" className="text-white py-2 hover:bg-blue-800 px-4 rounded" onClick={() => setIsMenuOpen(false)}>Search</a>
              <a href="/#about" className="text-white py-2 hover:bg-blue-800 px-4 rounded" onClick={() => setIsMenuOpen(false)}>About</a>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-unchained-navy mt-2">
                <Database className="mr-2 h-4 w-4" />
                API Access
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
