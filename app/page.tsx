import React from 'react';

// Import all components
import Header from '../components/Header';
import Hero from '../components/Hero/Hero';
// import SpecialOccasion from './components/SpecialOccasion';
// import ChefRecommend from './components/ChefRecommend/ChefRecommend';
import CustomerReviews from '../components/CustomerReviews/CustomerReviews';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm/ContactForm';
import BuffetCategories from '../components/Menu/BuffetCategories';
import BuffetInfoCard from '../components/Menu/BuffetInfoCard';
import SpecialOffers from '../components/Menu/SpecialOffers';

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/Catering-Services-Landing-Page-Background.png')] bg-cover bg-center relative">
      {/* WhatsApp CTA Button */}
      <a
        href="https://wa.me/+966593366301" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-4 bottom-[20%] z-50 flex items-center justify-center w-16 h-16 rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition-colors"
        style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)' }}
        aria-label="تواصل عبر واتساب"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.87 11.87 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.98L0 24l6.19-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.77 0-3.5-.46-5.01-1.33l-.36-.21-3.68.96.98-3.58-.23-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.16-.01-.36-.01-.56-.01-.19 0-.51.07-.78.36-.27.29-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.19 2.1 3.21 5.09 4.37.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.09 1.7-.69 1.94-1.36.24-.67.24-1.25.17-1.36-.07-.11-.26-.18-.55-.33z" />
        </svg>
      </a>
      <div
        className="absolute inset-0 bg-white/70 z-0"
        aria-hidden="true"
      ></div>
      <div className="relative z-10">
        <Header />
        <Hero />
        <div className="w-[80%] mx-auto ">
          {/* <SpecialOccasion /> */}
          {/* <ChefRecommend /> */}
          <BuffetCategories />
          <BuffetInfoCard />
          <SpecialOffers />
          <CustomerReviews />
          <ContactForm />
        </div>
        <Footer />
      </div>
    </div>
  );
}
