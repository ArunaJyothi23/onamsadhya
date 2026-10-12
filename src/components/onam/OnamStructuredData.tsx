import React from 'react';

export default function OnamStructuredData() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
    {
      '@type': 'Question',
      name: 'What is included in a traditional Onam Sadhya?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A traditional Onam Sadhya is a grand vegetarian feast served on a fresh banana leaf. It typically includes steamed rice, a variety of vegetable curries such as avial and thoran, sambar, rasam, crunchy pappadam, pickles, chutneys and one or more payasam desserts. The final menu available from Madras Flavours must be confirmed directly with the restaurant team.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I enquire about Onam Sadhya catering in London?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Madras Flavours welcomes enquiries from individuals, families, community groups and organisations interested in Onam Sadhya catering in London and the surrounding areas. Please submit your event details and the team will confirm available catering options.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I arrange Onam catering for a large group?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Please share your expected guest numbers when you enquire and the team will confirm minimum order quantities, capacity and what can be arranged for your event.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I request a menu and price for my Onam celebration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Once you have submitted your enquiry with your event date, guest count and requirements, the team will discuss available menu options and provide pricing based on your confirmed requirements.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does Madras Flavours offer delivery or event catering at my venue?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Madras Flavours offers catering services, but service availability, delivery coverage and on-site event catering depend on your location and requirements. Please provide your postcode and venue details when you enquire.'
      }
    },
    {
      '@type': 'Question',
      name: 'When should I book my Onam Sadhya?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We encourage early enquiries, particularly for the Onam season which typically falls in August or September. Submitting your enquiry well in advance gives the team the best opportunity to confirm arrangements.'
      }
    }]

  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://madrasflavours.co.uk/'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Onam Sadhya London',
      item: 'https://madrasflavours.co.uk/onam-sadhya-london/'
    }]

  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Madras Flavours',
    url: 'https://madrasflavours.co.uk/',
    logo: 'https://madrasflavours.co.uk/wp-content/uploads/2025/03/logo-2-1024x409.png',
    description:
    'Madras Flavours is an established South Indian vegetarian restaurant brand with locations in Hounslow, Reading, Dartford and Leicester, offering authentic South Indian cuisine and catering services.',
    servesCuisine: ['South Indian', 'Kerala', 'Vegetarian'],
    hasMenu: 'https://madrasflavours.co.uk/',
    location: [
    {
      '@type': 'Place',
      name: 'Madras Flavours Hounslow',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '116 High St',
        addressLocality: 'Hounslow',
        postalCode: 'TW3 1NA',
        addressCountry: 'GB'
      },
      telephone: '020 8607 4204'
    },
    {
      '@type': 'Place',
      name: 'Madras Flavours Reading',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '11-13 Kings Rd',
        addressLocality: 'Reading',
        postalCode: 'RG1 3AR',
        addressCountry: 'GB'
      },
      telephone: '0118 950 5626'
    }],

    sameAs: [
    'https://www.instagram.com/madrasflavoursuk/']

  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      
    </>);

}