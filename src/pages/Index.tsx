import React from 'react';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Footer } from '@/components/Footer';
import ContentSection from '@/components/ContentSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <ContentSection />
      <Footer />
    </div>
  );
};

export default Index;
