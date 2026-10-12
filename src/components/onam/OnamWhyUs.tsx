'use client';

import React from 'react';

const reasons = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Established South Indian Brand',
    description:
      'Madras Flavours is an established South Indian vegetarian restaurant brand with locations in Hounslow, Reading, Dartford and Leicester, built on a genuine passion for authentic cuisine.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Rooted in Culinary Tradition',
    description:
      'Our menu is inspired by the rich culinary traditions of South India, including the Udupi and Chettinad styles that have shaped generations of vegetarian cooking.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Vegetarian Food for Every Occasion',
    description:
      'All our food is vegetarian, making it ideal for family gatherings, community celebrations and workplace events where inclusive, plant-based dining is important.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'Catering Services Available',
    description:
      'Madras Flavours offers existing catering services and menu options for events and celebrations. Enquire to discuss what is available for your Onam celebration.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Welcoming Approach to Culture',
    description:
      'We believe food is a celebration of culture, family and community. Our team is welcoming and passionate about sharing the joy of South Indian cuisine with everyone.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Recognised Quality',
    description:
      'Madras Flavours has been recognised with a Healthier Catering award from the London Borough of Hounslow and a Quality Business Award, reflecting our commitment to standards.',
  },
];

export default function OnamWhyUs() {
  return (
    <section
      className="py-16 md:py-24 bg-white"
      aria-labelledby="why-us-heading"
    >
      <div className="max-w-[1290px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2D6A4F] mb-3">
            Why Choose Madras Flavours
          </p>
          <h2
            id="why-us-heading"
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#DF3F00] mb-4"
          >
            Celebrate with Madras Flavours
          </h2>
          <p className="text-[#666666] max-w-2xl mx-auto text-base leading-relaxed">
            Discover why families, communities and organisations choose Madras Flavours for their South Indian celebrations.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {reasons?.map((reason) => (
            <div
              key={reason?.title}
              className="bg-[#F2EDE3] rounded-xl p-6 hover:shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-[#2D6A4F]/10 rounded-xl flex items-center justify-center text-[#2D6A4F] mb-4 group-hover:bg-[#2D6A4F] group-hover:text-white transition-all duration-300">
                {reason?.icon}
              </div>
              <h3 className="text-base font-bold text-[#0E1317] mb-2">{reason?.title}</h3>
              <p className="text-sm text-[#666666] leading-relaxed">{reason?.description}</p>
            </div>
          ))}
        </div>

        {/* Internal Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://madrasflavours.co.uk/catering/"
            className="inline-flex items-center justify-center gap-2 border-2 border-[#2D6A4F] text-[#2D6A4F] hover:bg-[#2D6A4F] hover:text-white font-bold px-6 py-3 rounded transition-all duration-300 text-sm"
          >
            Explore our catering services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="https://madrasflavours.co.uk/our-restaurants/"
            className="inline-flex items-center justify-center gap-2 border-2 border-[#0E1317] text-[#0E1317] hover:bg-[#0E1317] hover:text-white font-bold px-6 py-3 rounded transition-all duration-300 text-sm"
          >
            Find your nearest Madras Flavours restaurant
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
