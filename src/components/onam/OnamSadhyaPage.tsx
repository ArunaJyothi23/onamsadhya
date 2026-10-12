'use client';

import React from 'react';
import OnamHeader from './OnamHeader';
import OnamHero from './OnamHero';
import OnamIntro from './OnamIntro';
import OnamDishes from './OnamDishes';
import OnamCatering from './OnamCatering';
import OnamWhyUs from './OnamWhyUs';
import OnamProcess from './OnamProcess';
import OnamGallery from './OnamGallery';
import OnamFAQ from './OnamFAQ';
import OnamEnquiryForm from './OnamEnquiryForm';
import OnamLocations from './OnamLocations';
import OnamCTA from './OnamCTA';
import OnamFooter from './OnamFooter';
import OnamStructuredData from './OnamStructuredData';

export default function OnamSadhyaPage() {
  return (
    <>
      <OnamStructuredData />
      <OnamHeader />
      <main id="main-content">
        <OnamHero />
        <OnamIntro />
        <OnamDishes />
        <OnamCatering />
        <OnamWhyUs />
        <OnamProcess />
        <OnamGallery />
        <OnamFAQ />
        <OnamEnquiryForm />
        <OnamLocations />
        <OnamCTA />
      </main>
      <OnamFooter />
    </>
  );
}
