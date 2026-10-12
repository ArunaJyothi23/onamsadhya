'use client';

import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is included in a traditional Onam Sadhya?',
    answer:
      'A traditional Onam Sadhya is a grand vegetarian feast served on a fresh banana leaf. It typically includes steamed rice, a variety of vegetable curries such as avial and thoran, sambar, rasam, crunchy pappadam, pickles, chutneys and one or more payasam desserts. The exact number and type of dishes can vary by region and occasion. Please note that the final menu available from Madras Flavours must be confirmed directly with the restaurant team.',
  },
  {
    question: 'Can I enquire about Onam Sadhya catering in London?',
    answer:
      'Yes, absolutely. We welcome enquiries from individuals, families, community groups and organisations interested in Onam Sadhya catering in London and the surrounding areas. Please submit your event details using our enquiry form and our team will be in touch to discuss the available catering options and confirm what is possible for your location and date.',
  },
  {
    question: 'Can I arrange Onam catering for a large group?',
    answer:
      'We welcome enquiries for groups of all sizes. Please share your expected guest numbers when you get in touch and our team will confirm minimum order quantities, capacity and what can be arranged for your event. We recommend enquiring as early as possible, particularly for larger gatherings during the Onam season.',
  },
  {
    question: 'Can I request a menu and price for my Onam celebration?',
    answer:
      'Yes. Once you have submitted your enquiry with your event date, guest count and requirements, our team will be able to discuss the available menu options and provide pricing based on your confirmed requirements. We do not publish fixed prices online as catering arrangements vary by event.',
  },
  {
    question: 'Does Madras Flavours offer delivery or event catering at my venue?',
    answer:
      'Madras Flavours offers catering services, but service availability, delivery coverage and on-site event catering depend on your location and requirements. Please provide your postcode and venue details when you enquire and our team will confirm what is available for your area.',
  },
  {
    question: 'When should I book my Onam Sadhya?',
    answer:
      'We strongly encourage early enquiries, particularly for the Onam season which typically falls in August or September. Demand for Onam catering can be high during this period. Submitting your enquiry well in advance gives the team the best opportunity to discuss your requirements and confirm arrangements. Please note that an enquiry does not guarantee availability until confirmed by the team.',
  },
];

export default function OnamFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="py-16 md:py-24 bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-[1290px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Header */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2D6A4F] mb-3">
              Frequently Asked Questions
            </p>
            <h2
              id="faq-heading"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#DF3F00] mb-6 leading-tight"
            >
              Your Onam Sadhya Questions Answered
            </h2>
            <p className="text-[#666666] text-base leading-relaxed mb-8">
              Have a question about Onam Sadhya in London or our catering services? We have answered the most common questions below. If you cannot find what you are looking for, please get in touch directly.
            </p>
            <div className="bg-[#F2EDE3] rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#2D6A4F] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[#0E1317] text-sm mb-1">Still have questions?</p>
                  <p className="text-sm text-[#666666] mb-3">Contact the Madras Flavours team directly to discuss your Onam Sadhya requirements.</p>
                  <a
                    href="https://madrasflavours.co.uk/contact/"
                    className="text-sm font-bold text-[#2D6A4F] hover:text-[#1B4332] transition-colors"
                  >
                    Get in touch →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-[#F2EDE3] transition-colors duration-200"
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className="font-bold text-[#0E1317] text-sm pr-4">{faq.question}</span>
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#2D6A4F] flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-45 bg-[#2D6A4F] border-[#2D6A4F]' : ''}`}>
                    <svg className={`w-3 h-3 ${openIndex === index ? 'text-white' : 'text-[#2D6A4F]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                {openIndex === index && (
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className="px-5 pb-5 bg-white"
                  >
                    <p className="text-sm text-[#666666] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
