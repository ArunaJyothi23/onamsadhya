'use client';

import React from 'react';

const cateringTypes = [
{
  title: 'Family & Friends',
  subtitle: 'Intimate Gatherings',
  description:
  'Celebrate together with a traditional vegetarian feast for your Onam gathering. Whether it is a small family meal or a larger get-together at home, we can discuss the options that suit your occasion.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_192baf47c-1765873810762.png",
  alt: 'Family gathered around a table enjoying a festive Indian vegetarian meal together during Onam celebrations',
  icon:
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>

},
{
  title: 'Community & Cultural Events',
  subtitle: 'Group Celebrations',
  description:
  'Make your community Onam celebration special with a festive food experience. From cultural associations to temple events and community halls, we can discuss catering options for your group gathering.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_178225a30-1784011245771.png",
  alt: 'Community gathering with people enjoying a festive South Indian vegetarian meal at a cultural celebration event',
  icon:
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>

},
{
  title: 'Corporate & Office Celebrations',
  subtitle: 'Workplace Events',
  description:
  'Share the spirit of Onam with colleagues at your workplace or company event. A traditional Sadhya is a wonderful way to celebrate cultural diversity and bring your team together over great food.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_192baf47c-1765873810762.png",
  alt: 'Corporate team celebrating together at an office event with a festive Indian vegetarian meal',
  icon:
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>

}];


export default function OnamCatering() {
  const scrollToEnquiry = () => {
    const el = document.getElementById('enquiry-form');
    if (el) el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="py-16 md:py-24 bg-[#F2EDE3]"
      aria-labelledby="catering-heading">
      
      <div className="max-w-[1290px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2D6A4F] mb-3">
            Onam Catering for Every Celebration
          </p>
          <h2
            id="catering-heading"
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#DF3F00] mb-4">
            
            Bring Your Onam Celebration Together with Great Food
          </h2>
          <p className="text-[#666666] max-w-2xl mx-auto text-base leading-relaxed">
            Whatever the occasion, Madras Flavours can discuss how to bring a traditional Onam Sadhya experience to your celebration. Please enquire to confirm available options for your event.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cateringTypes?.map((type) =>
          <article
            key={type?.title}
            className="bg-white rounded-xl overflow-hidden shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] hover:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.15)] transition-all duration-300 group flex flex-col">
            
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                src={type?.image}
                alt={type?.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/60 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg p-2 text-white">
                  {type?.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs font-semibold tracking-wider uppercase text-[#2D6A4F] mb-1">{type?.subtitle}</p>
                <h3 className="text-lg font-bold text-[#0E1317] mb-3">{type?.title}</h3>
                <p className="text-sm text-[#666666] leading-relaxed flex-1">{type?.description}</p>
                <button
                onClick={scrollToEnquiry}
                className="mt-5 w-full bg-[#0E1317] hover:bg-[#DF3F00] text-white font-bold py-3 px-4 rounded transition-all duration-300 text-sm">
                
                  Enquire About This Event
                </button>
              </div>
            </article>
          )}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-[#666666] mt-8">
          Service availability, delivery, on-site staffing and venue catering are subject to confirmation with the Madras Flavours team. Please enquire with your event details.
        </p>
      </div>
    </section>);

}