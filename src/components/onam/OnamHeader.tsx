'use client';

import React, { useState, useEffect } from 'react';

const navLinks = [
{ label: 'Home', href: 'https://madrasflavours.co.uk/' },
{ label: 'Our Restaurants', href: 'https://madrasflavours.co.uk/our-restaurants/' },
{ label: 'Partner with Us', href: 'https://madrasflavours.co.uk/partner-with-us/' },
{ label: 'Catering', href: 'https://madrasflavours.co.uk/catering/' },
{ label: 'Events', href: 'https://madrasflavours.co.uk/events/' },
{ label: 'Contact', href: 'https://madrasflavours.co.uk/contact/' }];


export default function OnamHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToEnquiry = () => {
    const el = document.getElementById('enquiry-form');
    if (el) el?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-white'}`
      }
      style={{ fontFamily: "'Poppins', sans-serif" }}>
      
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" />
      
      <div className="max-w-[1290px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="https://madrasflavours.co.uk/" className="flex-shrink-0">
            <img
              src="https://madrasflavours.co.uk/wp-content/uploads/2025/03/logo-2-1024x409.png"
              alt="Madras Flavours – South Indian Vegetarian Restaurant"
              className="h-10 md:h-12 w-auto"
              width={240}
              height={96} />
            
          </a>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
            {navLinks?.map((link) =>
            <a
              key={link?.label}
              href={link?.href}
              className="px-3 py-2 text-sm font-bold text-gray-800 hover:text-[#DF3F00] transition-colors duration-200">
              
                {link?.label}
              </a>
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={scrollToEnquiry}
              className="bg-[#2D6A4F] hover:bg-[#1B4332] text-white text-sm font-bold px-5 py-3 rounded transition-all duration-300 shadow-md hover:shadow-lg">
              
              Enquire About Onam Sadhya
            </button>
          </div>

          {/* Mobile: CTA + Hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={scrollToEnquiry}
              className="bg-[#2D6A4F] hover:bg-[#1B4332] text-white text-xs font-bold px-3 py-2 rounded transition-colors duration-200">
              
              Enquire
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
              className="p-2 text-gray-800">
              
              {mobileOpen ?
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg> :

              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              }
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen &&
        <div className="lg:hidden border-t border-gray-100 py-3 bg-white">
            <nav aria-label="Mobile navigation">
              {navLinks?.map((link) =>
            <a
              key={link?.label}
              href={link?.href}
              className="block px-4 py-3 text-sm font-bold text-gray-800 hover:text-[#DF3F00] hover:bg-gray-50 transition-colors"
              onClick={() => setMobileOpen(false)}>
              
                  {link?.label}
                </a>
            )}
            </nav>
          </div>
        }
      </div>
    </header>);

}