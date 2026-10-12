'use client';

import React from 'react';

export default function OnamIntro() {
  return (
    <section
      className="py-16 md:py-24 bg-[#F2EDE3]"
      aria-labelledby="onam-intro-heading">
      
      <div className="max-w-[1290px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2D6A4F] mb-3">
              Kerala's Most Beloved Festival
            </p>
            <h2
              id="onam-intro-heading"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#DF3F00] mb-6 leading-tight">
              
              A Taste of Kerala's Most Cherished Celebration
            </h2>
            <div className="space-y-4 text-[#2E2E2E] text-base leading-relaxed">
              <p>
                Onam is Kerala's most celebrated harvest festival — a time of joy, togetherness and gratitude that brings communities together across the world. Rooted in the legend of King Mahabali, Onam is observed with vibrant pookalam flower arrangements, traditional music, and above all, the magnificent Onam Sadhya.
              </p>
              <p>
                The Onam Sadhya is a grand vegetarian feast traditionally served on a fresh banana leaf. It is one of the most elaborate and culturally significant meals in Indian cuisine, featuring an array of carefully prepared dishes — each with its own place on the leaf and its own role in the meal.
              </p>
              <p>
                A traditional Sadhya includes steamed rice, a variety of vegetable curries, lentil-based sambar, tangy rasam, crunchy pappadam, pickles, chutneys and the beloved payasam desserts. Every element is prepared with fresh ingredients and time-honoured recipes, creating a feast that is as nourishing as it is celebratory.
              </p>
              <p>
                At Madras Flavours, we bring the spirit of this cherished tradition to London. Whether you are celebrating with family, hosting a community event or planning a workplace gathering, we are here to help you create a memorable Onam Sadhya experience.
              </p>
            </div>

            {/* Highlight badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              {['100% Vegetarian', 'Traditional Recipes', 'Banana Leaf Served', 'Festive & Authentic']?.map((badge) =>
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 bg-[#2D6A4F]/10 text-[#2D6A4F] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#2D6A4F]/20">
                
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {badge}
                </span>
              )}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-[0px_0px_30px_0px_rgba(0,0,0,0.15)]">
              <img
                src="https://img.rocket.new/generatedImages/rocket_gen_img_17c33cf88-1786201505316.png"
                alt="Traditional Kerala Onam Sadhya served on a fresh banana leaf with rice, sambar, avial, thoran, pickles and payasam arranged in the traditional order"
                className="w-full h-[400px] md:h-[500px] object-cover"
                loading="lazy" />
              
            </div>
            {/* Decorative gold accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-[#D4AF37]/10 border-2 border-[#D4AF37]/30 hidden md:block" />
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-[#2D6A4F]/10 border-2 border-[#2D6A4F]/30 hidden md:block" />
          </div>
        </div>
      </div>
    </section>);

}