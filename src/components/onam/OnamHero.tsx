'use client';

import React from 'react';

export default function OnamHero() {
  const scrollToEnquiry = () => {
    const el = document.getElementById('enquiry-form');
    if (el) el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDishes = () => {
    const el = document.getElementById('onam-dishes');
    if (el) el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero: Celebrate Onam with Traditional Sadhya in London">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://img.rocket.new/generatedImages/rocket_gen_img_17c33cf88-1786201505316.png"
          alt="Traditional Kerala Onam Sadhya feast served on a fresh banana leaf with rice, colourful vegetarian curries, pickles, pappadam and traditional accompaniments"
          className="w-full h-full object-cover object-center"
          fetchPriority="high" />
        
        {/* Green overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B4332]/85 via-[#2D6A4F]/70 to-[#1B4332]/50" />
      </div>

      {/* Decorative pookalam SVG motif */}
      <div className="absolute top-24 right-8 md:right-16 opacity-10 hidden md:block">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="90" stroke="#D4AF37" strokeWidth="2" strokeDasharray="8 4" />
          <circle cx="100" cy="100" r="70" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="6 3" />
          <circle cx="100" cy="100" r="50" stroke="#D4AF37" strokeWidth="1" strokeDasharray="4 2" />
          <circle cx="100" cy="100" r="30" stroke="#D4AF37" strokeWidth="1" />
          {[0, 45, 90, 135, 180, 225, 270, 315]?.map((angle, i) =>
          <ellipse
            key={i}
            cx={100 + 70 * Math.cos(angle * Math.PI / 180)}
            cy={100 + 70 * Math.sin(angle * Math.PI / 180)}
            rx="12" ry="6"
            transform={`rotate(${angle} ${100 + 70 * Math.cos(angle * Math.PI / 180)} ${100 + 70 * Math.sin(angle * Math.PI / 180)})`}
            fill="#D4AF37" />

          )}
        </svg>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1290px] mx-auto px-4 sm:px-6 pt-24 pb-16 text-white">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-white/70">
              <li><a href="https://madrasflavours.co.uk/" className="hover:text-white transition-colors">Home</a></li>
              <li className="text-white/50">›</li>
              <li className="text-white/90">Onam Sadhya London</li>
            </ol>
          </nav>

          {/* Eyebrow */}
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#D4AF37] mb-4 animate-fadeInUp">
            Celebrate the Spirit of Kerala
          </p>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fadeInUp">
            Celebrate Onam with Traditional Sadhya in London
          </h1>

          {/* Supporting text */}
          <p className="text-base md:text-lg text-white/90 mb-8 max-w-2xl leading-relaxed animate-fadeInUp">
            Bring family, friends and colleagues together over the rich flavours of Kerala's beloved Onam feast. Discover a traditional vegetarian celebration with Madras Flavours.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              onClick={scrollToEnquiry}
              className="inline-flex items-center justify-center bg-[#DF3F00] hover:bg-[#c23500] text-white font-bold px-8 py-4 rounded transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base">
              
              Enquire About Onam Sadhya
            </button>
            <button
              onClick={scrollToDishes}
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#1B4332] font-bold px-8 py-4 rounded transition-all duration-300 text-sm md:text-base">
              
              Explore the Feast
            </button>
          </div>

          {/* Supporting line */}
          <p className="text-sm text-white/70 flex items-center gap-2">
            <svg className="w-4 h-4 text-[#D4AF37] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Perfect for family gatherings, community celebrations and corporate events.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>);

}