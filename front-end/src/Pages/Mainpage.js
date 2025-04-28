import React from 'react';
import HeroBanner from '../Sections/HeroBanner';
import MainSection from '../Sections/MainSection';
import CategoryCarousel from '../Sections/CategoryCarousel';
import FeaturedListings from '../Sections/FeaturedListings';
import HowItWorks from '../Sections/HowItWorks';
import Testimonials from '../Sections/Testimonials';
import CallToActionBanner from '../Sections/CallToActionBanner';
import Footer from '../Sections/Footer';

function Mainpage() {
  return (
    <div>
      <HeroBanner />
      <MainSection />
      <CategoryCarousel />
      <FeaturedListings />
      <HowItWorks />
      <Testimonials />
      <CallToActionBanner />
      <Footer />
    </div>
  );
}

export default Mainpage;
