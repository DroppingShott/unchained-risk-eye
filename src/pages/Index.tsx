
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProcessFlow from '@/components/ProcessFlow';
import SearchSection from '@/components/SearchSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
          <Features />
        </div>
        <div className="animate-fade-in" style={{animationDelay: '0.5s'}}>
          <ProcessFlow />
        </div>
        <div className="animate-fade-in" style={{animationDelay: '0.7s'}}>
          <SearchSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
