
import React from 'react';
import { Database, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-unchained-navy text-white py-4 px-6 flex justify-between items-center shadow-lg">
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          <Shield className="h-8 w-8 mr-2" />
          <span className="text-2xl font-bold tracking-tight">UnChained</span>
        </div>
        <span className="text-xs px-2 py-1 bg-unchained-red rounded-full">Beta</span>
      </div>
      
      <div className="hidden md:flex space-x-6 mx-auto">
        <a href="#features" className="hover:text-gray-300 transition-colors">Features</a>
        <a href="#how-it-works" className="hover:text-gray-300 transition-colors">How It Works</a>
        <a href="#search" className="hover:text-gray-300 transition-colors">Search</a>
        <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="outline" className="text-white border-white hover:bg-white hover:text-unchained-navy">
          <Database className="mr-2 h-4 w-4" />
          API Access
        </Button>
      </div>
    </header>
  );
};

export default Header;
