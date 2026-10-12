'use client';

import React from 'react';

const locations = [
  {
    name: 'Hounslow',
    address: '116 High St, Hounslow, TW3 1NA',
    phone: '020 8607 4204',
    href: 'https://madrasflavours.co.uk/hounslow/',
    linkText: 'View Hounslow restaurant',
  },
  {
    name: 'Reading',
    address: '11-13 Kings Rd, Reading, RG1 3AR',
    phone: '0118 950 5626',
    href: 'https://madrasflavours.co.uk/reading/',
    linkText: 'View Reading restaurant',
  },
  {
    name: 'Dartford',
    address: 'Dartford, Kent',
    phone: '01322 558884',
    href: 'https://madrasflavours.co.uk/dartford/',
    linkText: 'View Dartford restaurant',
  },
];

export default function OnamLocations() {
  return (
    <section
      className="py-16 md:py-24 bg-white"
      aria-labelledby="locations-heading"
    >
      <div className="max-w-[1290px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2D6A4F] mb-3">
              Our Locations
            </p>
            <h2
              id="locations-heading"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#DF3F00] mb-6 leading-tight"
            >
              Find Madras Flavours Near You
            </h2>
            <p className="text-[#2E2E2E] text-base leading-relaxed mb-6">
              Madras Flavours has restaurants in Hounslow, Reading and Dartford. If you are interested in Onam Sadhya dining or catering, please contact your nearest branch or use our enquiry form to confirm availability for your location and date.
            </p>
            <p className="text-[#666666] text-sm leading-relaxed mb-8">
              Onam Sadhya availability and catering services may vary by location. We recommend contacting the team directly to confirm what is available at your nearest restaurant or for your event area.
            </p>

            {/* Internal Links */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://madrasflavours.co.uk/our-restaurants/"
                className="inline-flex items-center justify-center gap-2 bg-[#2D6A4F] hover:bg-[#1B4332] text-white font-bold px-5 py-3 rounded transition-all duration-300 text-sm"
              >
                Find your nearest Madras Flavours restaurant
              </a>
              <a
                href="https://madrasflavours.co.uk/catering/"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#2D6A4F] text-[#2D6A4F] hover:bg-[#2D6A4F] hover:text-white font-bold px-5 py-3 rounded transition-all duration-300 text-sm"
              >
                Explore our catering services
              </a>
            </div>
          </div>

          {/* Location Cards */}
          <div className="space-y-4">
            {locations?.map((loc) => (
              <div
                key={loc?.name}
                className="bg-[#F2EDE3] rounded-xl p-5 flex items-start gap-4 hover:shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] transition-all duration-300"
              >
                <div className="w-10 h-10 bg-[#2D6A4F] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#0E1317] mb-1">{loc?.name}</h3>
                  <p className="text-sm text-[#666666] mb-1">{loc?.address}</p>
                  <p className="text-sm text-[#666666] mb-2">{loc?.phone}</p>
                  <a
                    href={loc?.href}
                    className="text-xs font-bold text-[#2D6A4F] hover:text-[#1B4332] transition-colors"
                  >
                    {loc?.linkText} →
                  </a>
                </div>
              </div>
            ))}

            {/* Disclaimer */}
            <div className="bg-[#2D6A4F]/5 border border-[#2D6A4F]/20 rounded-xl p-4">
              <p className="text-xs text-[#666666] leading-relaxed">
                <strong className="text-[#2D6A4F]">Please note:</strong> Onam Sadhya availability and catering services are subject to confirmation with each location. Please contact the team or use our enquiry form to confirm availability for your specific requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
