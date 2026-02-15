import React from 'react';
import { Hero } from './Hero';
import { Features } from './Features';
import { Testimonials } from './Testimonials';
import { Pricing } from './Pricing';
import { ContactCTA } from './ContactCTA';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <ContactCTA />
    </>
  );
};