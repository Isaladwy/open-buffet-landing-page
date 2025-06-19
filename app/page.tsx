import React from 'react';

// Import all components
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import SpecialBuffet from './components/SpecialBuffet';
import PopularRestaurants from './components/PopularRestaurants';
import BookTable from './components/BookTable';
import SpecialOfferBanner from './components/SpecialOfferBanner';
import BestBuffet from './components/BestBuffet';
import PartyBuffetBanner from './components/PartyBuffetBanner';
import CustomerReviews from './components/CustomerReviews';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF9FE]">
      <Header />
      <Hero />
      <Services />
      <SpecialBuffet />
      <PopularRestaurants />
      <BookTable />
      <SpecialOfferBanner />
      <BestBuffet />
      <PartyBuffetBanner />
      <CustomerReviews />
      <CTASection />
      <Footer />
    </div>
  );
}
