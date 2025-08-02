import React from 'react';

// Import all components
import Header from './components/Header';
import Hero from './components/Hero/Hero';
// import SpecialOccasion from './components/SpecialOccasion';
// import ChefRecommend from './components/ChefRecommend/ChefRecommend';
import CustomerReviews from './components/CustomerReviews/CustomerReviews';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm/ContactForm';
import BuffetCategories from './components/Menu/BuffetCategories';
import SpecialOffers from './components/Menu/SpecialOffers';

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/Catering-Services-Landing-Page-Background.png')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-white/50 z-0" aria-hidden="true"></div>
      <div className="relative z-10">
        <Header />
        <Hero />
        <div className="w-[80%] mx-auto ">
          {/* <SpecialOccasion /> */}
          {/* <ChefRecommend /> */}
          <BuffetCategories />
          <SpecialOffers />
          <CustomerReviews />
          <ContactForm />
        </div>
        <Footer />
      </div>
    </div>
  );
}
