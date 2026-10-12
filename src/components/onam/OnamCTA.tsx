'use client';

import React from 'react';

export default function OnamCTA() {
  const scrollToEnquiry = () => {
    const el = document.getElementById('enquiry-form');
    if (el) el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      aria-labelledby="cta-heading">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://img.rocket.new/generatedImages/rocket_gen_img_17c33cf88-1786201505316.png"
          alt="Traditional Kerala Onam Sadhya feast on banana leaf"
          className="w-full h-full object-cover object-center"
          loading="lazy" />
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B4332]/92 via-[#1B4332]/85 to-[#1B4332]/75" />
      </div>

      {/* Gold floral decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60" />

      {/* Decorative pookalam motif */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
          <circle cx="150" cy="150" r="140" stroke="#D4AF37" strokeWidth="2" strokeDasharray="10 5" />
          <circle cx="150" cy="150" r="110" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="8 4" />
          <circle cx="150" cy="150" r="80" stroke="#D4AF37" strokeWidth="1" strokeDasharray="6 3" />
          <circle cx="150" cy="150" r="50" stroke="#D4AF37" strokeWidth="1" />
          <circle cx="150" cy="150" r="20" fill="#D4AF37" opacity="0.5" />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330]?.map((angle, i) =>
          <ellipse
            key={i}
            cx={150 + 110 * Math.cos(angle * Math.PI / 180)}
            cy={150 + 110 * Math.sin(angle * Math.PI / 180)}
            rx="15" ry="7"
            transform={`rotate(${angle} ${150 + 110 * Math.cos(angle * Math.PI / 180)} ${150 + 110 * Math.sin(angle * Math.PI / 180)})`}
            fill="#D4AF37" />

          )}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1290px] mx-auto px-4 sm:px-6 text-center">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D4AF37] mb-4">
          Make This Onam Unforgettable
        </p>
        <h2
          id="cta-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-3xl mx-auto">
          
          Make This Onam a Celebration to Remember
        </h2>
        <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Planning a family feast, community gathering or office celebration? Contact Madras Flavours to discuss your Onam Sadhya menu and catering requirements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToEnquiry}
            className="inline-flex items-center justify-center gap-2 bg-[#DF3F00] hover:bg-[#c23500] text-white font-bold px-8 py-4 rounded transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base">
            
            Enquire About Onam Sadhya
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <a
            href="https://madrasflavours.co.uk/catering/"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#1B4332] font-bold px-8 py-4 rounded transition-all duration-300 text-sm md:text-base">
            
            View Catering Options
          </a>
        </div>
      </div>
    </section>);

}