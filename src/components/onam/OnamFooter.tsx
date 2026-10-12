'use client';

import React from 'react';

export default function OnamFooter() {
  return (
    <footer
      className="bg-[#131313] text-white"
      style={{ fontFamily: "'Poppins', sans-serif" }}
      aria-label="Site footer">
      
      {/* Main Footer */}
      <div className="max-w-[1290px] mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="https://madrasflavours.co.uk/">
              <img
                src="https://madrasflavours.co.uk/wp-content/uploads/2025/03/logo-2-1024x409.png"
                alt="Madras Flavours – South Indian Vegetarian Restaurant"
                className="h-12 w-auto brightness-0 invert"
                width={200}
                height={80}
                loading="lazy" />
              
            </a>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation" className="hidden md:block">
            <ul className="flex flex-wrap items-center gap-1 justify-center">
              {[
              { label: 'Home', href: 'https://madrasflavours.co.uk/' },
              { label: 'Our Restaurants', href: 'https://madrasflavours.co.uk/our-restaurants/' },
              { label: 'Partner with Us', href: 'https://madrasflavours.co.uk/partner-with-us/' },
              { label: 'Catering', href: 'https://madrasflavours.co.uk/catering/' },
              { label: 'Events', href: 'https://madrasflavours.co.uk/events/' },
              { label: 'Contact', href: 'https://madrasflavours.co.uk/contact/' }]?.
              map((link) =>
              <li key={link?.label}>
                  <a
                  href={link?.href}
                  className="px-3 py-1.5 text-sm text-white/80 hover:text-white transition-colors border-b border-white/20 hover:border-white">
                  
                    {link?.label}
                  </a>
                </li>
              )}
            </ul>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[
            {
              label: 'Facebook',
              href: '#',
              icon:
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                  </svg>

            },
            {
              label: 'Twitter',
              href: '#',
              icon:
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                  </svg>

            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/watch?v=XHOmBV4js_E',
              icon:
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 576 512">
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                  </svg>

            }]?.
            map((social) =>
            <a
              key={social?.label}
              href={social?.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social?.label}
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-[#D4AF37] hover:text-white transition-all duration-300">
              
                {social?.icon}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1290px] mx-auto px-4 sm:px-6 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/60 text-center sm:text-left">
              Madras Flavours &copy; Copyright 2026. All rights reserved.
            </p>
            <nav aria-label="Legal navigation">
              <ul className="flex flex-wrap items-center gap-4 justify-center">
                {[
                { label: 'Disclaimer', href: 'https://madrasflavours.co.uk/disclaimer/' },
                { label: 'Privacy Policy', href: 'https://madrasflavours.co.uk/privacy-policy/' },
                { label: 'Cookies Policy', href: 'https://madrasflavours.co.uk/cookies-policy/' }]?.
                map((link) =>
                <li key={link?.label}>
                    <a
                    href={link?.href}
                    className="text-xs text-white/60 hover:text-white transition-colors flex items-center gap-1">
                    
                      <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 320 512">
                        <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                      </svg>
                      {link?.label}
                    </a>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>);

}