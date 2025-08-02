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
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div className="max-w-6xl mx-auto px-6">

      {/* <SpecialOccasion /> */}
      {/* <ChefRecommend /> */}
      <BuffetCategories />
      <SpecialOffers />
      <CustomerReviews />
      <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
