import React from 'react';

// Import all components
import Header from './components/Header';
// import Hero from './components/Hero';
// import SpecialOccasion from './components/SpecialOccasion';
// import ChefRecommend from './components/ChefRecommend';
import MenuSection from './components/MenuSection';
import CustomerReviews from './components/CustomerReviews';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* <Hero /> */}
      {/* <SpecialOccasion /> */}
      {/* <ChefRecommend /> */}
      <MenuSection />
      <CustomerReviews />
      <ContactForm />
      <Footer />
    </div>
  );
}
