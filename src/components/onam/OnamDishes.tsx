'use client';

import React from 'react';

const dishes = [
{
  title: 'Rice & Traditional Accompaniments',
  description:
  'Steamed Kerala red rice or white rice forms the heart of the Sadhya, served generously and accompanied by ghee, parippu (lentil dal) and traditional side preparations that set the stage for the feast.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_42cbf39f8-1791804333201.png",
  alt: 'Steamed white rice served on a banana leaf with ghee and lentil dal as part of a traditional Kerala Sadhya',
  emoji: '🍚'
},
{
  title: 'Avial & Seasonal Vegetables',
  description:
  'Avial is a beloved Kerala classic — a thick, coconut-based preparation of mixed seasonal vegetables cooked with yoghurt and curry leaves. Rich, aromatic and deeply satisfying.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_4c02a7859-1789477873230.png",
  alt: 'Avial – traditional Kerala mixed vegetable curry with coconut and yoghurt served in a small bowl',
  emoji: '🥦'
},
{
  title: 'Thoran & Vegetable Preparations',
  description:
  'Thoran is a dry stir-fry of finely chopped vegetables with freshly grated coconut, mustard seeds and curry leaves. Light, fragrant and full of texture, it adds wonderful variety to the Sadhya.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_46134a415-1791804331445.png",
  alt: 'Kerala thoran – dry stir-fried vegetables with grated coconut and curry leaves in a traditional preparation',
  emoji: '🥥'
},
{
  title: 'Sambar & Traditional Curries',
  description:
  'A rich, tamarind-based lentil sambar with vegetables and aromatic spices is a cornerstone of the Sadhya. Alongside it, a variety of traditional curries add depth and warmth to the feast.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_4a90319ae-1791804333204.png",
  alt: 'Traditional South Indian sambar – lentil and vegetable curry with tamarind and aromatic spices in a bowl',
  emoji: '🍲'
},
{
  title: 'Pickles, Pappadam & Side Dishes',
  description:
  'No Sadhya is complete without the crunch of freshly fried pappadam, the tang of mango pickle (inji puli), and a selection of chutneys and side preparations that bring contrast and excitement to every bite.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_45416f127-1791804332345.png",
  alt: 'Crispy pappadam, mango pickle and traditional Kerala chutneys arranged on a banana leaf as Sadhya accompaniments',
  emoji: '🫙'
},
{
  title: 'Payasam & Festive Desserts',
  description:
  'The Sadhya concludes with the sweet joy of payasam — a traditional Kerala dessert made with rice, lentils or vermicelli cooked in coconut milk and jaggery. A fitting, celebratory end to the feast.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_4351a2b2c-1791804329965.png",
  alt: 'Kerala payasam – traditional festive dessert made with rice and coconut milk served in a small cup',
  emoji: '🍮'
}];


export default function OnamDishes() {
  const scrollToEnquiry = () => {
    const el = document.getElementById('enquiry-form');
    if (el) el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="onam-dishes"
      className="py-16 md:py-24 bg-white"
      aria-labelledby="dishes-heading">
      
      <div className="max-w-[1290px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2D6A4F] mb-3">
            The Onam Sadhya Experience
          </p>
          <h2
            id="dishes-heading"
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#DF3F00] mb-4">
            
            Discover the Flavours of a Traditional Kerala Sadhya
          </h2>
          <p className="text-[#666666] max-w-2xl mx-auto text-base leading-relaxed">
            The following dishes are examples of what a traditional Onam Sadhya may include. The final menu and available dishes are subject to confirmation with the Madras Flavours team.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {dishes?.map((dish) =>
          <article
            key={dish?.title}
            className="bg-[#F2EDE3] rounded-xl overflow-hidden shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] hover:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.15)] transition-all duration-300 group">
            
              <div className="relative overflow-hidden h-52">
                <img
                src={dish?.image}
                alt={dish?.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className="absolute top-3 right-3 text-2xl">{dish?.emoji}</span>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-[#0E1317] mb-2">{dish?.title}</h3>
                <p className="text-sm text-[#666666] leading-relaxed">{dish?.description}</p>
              </div>
            </article>
          )}
        </div>

        {/* Disclaimer */}
        <div className="bg-[#2D6A4F]/5 border border-[#2D6A4F]/20 rounded-xl p-5 mb-8 text-center">
          <p className="text-sm text-[#2E2E2E] leading-relaxed">
            <strong className="text-[#2D6A4F]">Please note:</strong> The dishes listed above are traditional examples of an Onam Sadhya and are provided for reference only. The final menu, available dishes and serving arrangements are subject to confirmation directly with the Madras Flavours team.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={scrollToEnquiry}
            className="inline-flex items-center gap-2 bg-[#0E1317] hover:bg-[#DF3F00] text-white font-bold px-8 py-4 rounded transition-all duration-300 shadow-md hover:shadow-lg">
            
            Ask About the Onam Menu
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>);

}