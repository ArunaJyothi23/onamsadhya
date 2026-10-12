'use client';

import React, { useState } from 'react';

const galleryImages = [
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_17c33cf88-1786201505316.png",
  alt: 'Full traditional Kerala Onam Sadhya feast served on a fresh banana leaf with rice, curries, pickles and payasam',
  span: 'col-span-2 row-span-2'
},
{
  src: "https://images.unsplash.com/photo-1715860768502-2303a99f50a2",
  alt: 'Close-up of traditional Kerala sambar and vegetable curry served in small bowls on a banana leaf',
  span: ''
},
{
  src: "https://images.unsplash.com/photo-1649594451736-0dfbc5efb18e",
  alt: 'Colourful Kerala vegetable preparations including avial and thoran arranged on a banana leaf',
  span: ''
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1583c8c86-1772108606148.png",
  alt: 'Traditional Kerala payasam – festive dessert made with rice and coconut milk served in a small cup',
  span: ''
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1bc65f748-1764654407506.png",
  alt: 'Traditional South Indian sambar with vegetables and lentils in a copper bowl',
  span: ''
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1a1429b0b-1773128878497.png",
  alt: 'Kerala thoran – dry stir-fried vegetables with grated coconut and curry leaves',
  span: ''
},
{
  src: "https://images.unsplash.com/photo-1659446858830-37e8f7b86071",
  alt: 'Crispy pappadam and traditional Kerala pickles and chutneys served as Sadhya accompaniments',
  span: ''
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1a6a14f1c-1786259565034.png",
  alt: 'Family gathering around a table enjoying a traditional festive Indian vegetarian meal during Onam celebrations',
  span: 'col-span-2'
}];


export default function OnamGallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section
      className="py-16 md:py-24 bg-[#F2EDE3]"
      aria-labelledby="gallery-heading">
      
      <div className="max-w-[1290px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2D6A4F] mb-3">
            Photo Gallery
          </p>
          <h2
            id="gallery-heading"
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#DF3F00] mb-4">
            
            A Feast for the Eyes
          </h2>
          <p className="text-[#666666] max-w-xl mx-auto text-base leading-relaxed">
            A glimpse of the vibrant colours, textures and traditions that make an Onam Sadhya so special.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
          {galleryImages?.map((img, i) =>
          <button
            key={i}
            className={`relative overflow-hidden rounded-xl group cursor-pointer ${img?.span}`}
            onClick={() => setLightbox(img?.src)}
            aria-label={`View larger: ${img?.alt}`}>
            
              <img
              src={img?.src}
              alt={img?.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy" />
            
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </button>
          )}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-[#666666] mt-6">
          Images shown are representative of traditional Onam Sadhya and South Indian cuisine. They are not photographs taken at Madras Flavours restaurants.
        </p>
      </div>

      {/* Lightbox */}
      {lightbox &&
      <div
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        onClick={() => setLightbox(null)}
        role="dialog"
        aria-modal="true"
        aria-label="Image lightbox">
        
          <button
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          onClick={() => setLightbox(null)}
          aria-label="Close lightbox">
          
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
          src={lightbox}
          alt="Enlarged gallery image"
          className="max-w-full max-h-[90vh] object-contain rounded-lg"
          onClick={(e) => e?.stopPropagation()} />
        
        </div>
      }
    </section>);

}