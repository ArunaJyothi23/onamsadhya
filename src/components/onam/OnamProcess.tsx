'use client';

import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Send Your Enquiry',
    description:
      'Tell us about your event date, expected number of guests and the type of celebration you are planning. Use our enquiry form or contact the team directly.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Discuss Your Menu',
    description:
      'Our team will confirm the available dishes and suitable options for your Onam Sadhya. We will discuss what is possible based on your requirements and the Onam season.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Receive Your Quote',
    description:
      'Once your menu and requirements are confirmed, we will provide pricing based on your confirmed guest numbers, menu selections and event details.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Confirm Your Celebration',
    description:
      'Finalise all arrangements directly with the Madras Flavours team. Please note that submitting an enquiry does not constitute a confirmed booking until agreed in writing.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function OnamProcess() {
  const scrollToEnquiry = () => {
    const el = document.getElementById('enquiry-form');
    if (el) el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="py-16 md:py-24 bg-[#1B4332]"
      aria-labelledby="process-heading"
    >
      <div className="max-w-[1290px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D4AF37] mb-3">
            Our Catering Process
          </p>
          <h2
            id="process-heading"
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
          >
            Plan Your Onam Sadhya
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-base leading-relaxed">
            Getting started is simple. Here is how we work with you to plan your Onam celebration.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps?.map((step, index) => (
            <div key={step?.number} className="relative">
              {/* Connector line */}
              {index < steps?.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+2.5rem)] right-0 h-0.5 bg-[#D4AF37]/30 z-0" />
              )}
              <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:bg-white/15 transition-all duration-300">
                <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center text-[#D4AF37] mx-auto mb-4">
                  {step?.icon}
                </div>
                <div className="text-3xl font-bold text-[#D4AF37]/40 mb-2">{step?.number}</div>
                <h3 className="text-base font-bold text-white mb-3">{step?.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{step?.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={scrollToEnquiry}
            className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#b8962e] text-[#1B4332] font-bold px-8 py-4 rounded transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Enquiry
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
