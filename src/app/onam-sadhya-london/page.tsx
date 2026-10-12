import type { Metadata } from 'next';
import OnamSadhyaPage from '@/components/onam/OnamSadhyaPage';

export const metadata: Metadata = {
  title: 'Onam Sadhya London | Kerala Feast & Catering | Madras Flavours',
  description:
  'Celebrate Onam with traditional Kerala Sadhya in London from Madras Flavours. Explore our vegetarian festive feast and enquire about Onam catering for your celebration.',
  alternates: {
    canonical: 'https://madrasflavours.co.uk/onam-sadhya-london/'
  },
  openGraph: {
    title: 'Onam Sadhya London | Kerala Feast & Catering | Madras Flavours',
    description:
    'Celebrate Onam with traditional Kerala Sadhya in London from Madras Flavours. Explore our vegetarian festive feast and enquire about Onam catering for your celebration.',
    url: 'https://madrasflavours.co.uk/onam-sadhya-london/',
    siteName: 'Madras Flavours Restaurants',
    images: [
    {
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_17c33cf88-1786201505316.png",
      width: 1200,
      height: 630,
      alt: 'Traditional Kerala Onam Sadhya feast served on a fresh banana leaf with rice, curries, pickles and payasam'
    }],

    locale: 'en_GB',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Onam Sadhya London | Kerala Feast & Catering | Madras Flavours',
    description:
    'Celebrate Onam with traditional Kerala Sadhya in London from Madras Flavours.'
  }
};

export default function Page() {
  return <OnamSadhyaPage />;
}