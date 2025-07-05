import React from 'react';
import Slider from 'react-slick';
import ReviewCard, { Review } from './ReviewCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ReviewSlider({ reviews }: { reviews: Review[] }) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
  };

  return (
    <Slider {...sliderSettings}>
      {reviews.map((review, idx) => (
        <div key={idx}>
          <ReviewCard review={review} />
        </div>
      ))}
    </Slider>
  );
}
