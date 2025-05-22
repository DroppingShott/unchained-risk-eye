
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
        <Features />
        <ProcessFlow />
        <SearchSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
