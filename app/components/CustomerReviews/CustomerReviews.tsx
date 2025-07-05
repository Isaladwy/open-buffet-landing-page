'use client';
import React, { useState, useEffect } from 'react';
import ReviewSlider from './ReviewSlider';
import ReviewForm from './ReviewForm';
import type { Review } from './ReviewCard';

export default function CustomerReviews() {
  const [allReviews, setAllReviews] = useState<Review[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    review: '',
    stars: 5,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Load reviews from API on component mount
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews');
        if (response.ok) {
          const reviews = await response.json();
          setAllReviews(reviews);
        } else {
          setAllReviews([]);
        }
      } catch {
        setAllReviews([]);
      }
    };
    fetchReviews();
  }, []);

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name.trim()) {
      alert('يرجى إدخال الاسم');
      return;
    }
    if (!newReview.review.trim()) {
      alert('يرجى إدخال الرأي');
      return;
    }
    if (newReview.stars < 1 || newReview.stars > 5) {
      alert('يرجى اختيار تقييم صحيح');
      return;
    }
    setLoading(true);
    const reviewToAdd = {
      ...newReview,
      name: newReview.name.trim(),
      review: newReview.review.trim(),
    };
    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewToAdd),
      });
      if (response.ok) {
        const reviewsResponse = await fetch('/api/reviews');
        if (reviewsResponse.ok) {
          const updatedReviews = await reviewsResponse.json();
          setAllReviews(updatedReviews);
        }
        setNewReview({ name: '', review: '', stars: 5 });
        setShowForm(false);
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } else {
        alert('فشل في حفظ المراجعة. يرجى المحاولة مرة أخرى.');
      }
    } catch {
      alert('حدث خطأ أثناء حفظ المراجعة. يرجى المحاولة مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="reviews" className="py-16 px-6 md:px-12 bg-[#f7f7fe]">
      <h2 className="text-3xl font-bold mb-10 text-[var(--logo-green)] text-center [text-shadow:_1px_1px_3px_rgb(0_0_0_/_25%)]">
        آراء العملاء
      </h2>
      {submitted && (
        <div className="max-w-2xl mx-auto mb-8">
          <div className="bg-green-600 text-white p-4 rounded-lg text-center font-[var(--font-cairo)] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">
            شكراً لك! تم إضافة رأيك بنجاح. (عدد المراجعات: {allReviews.length})
          </div>
        </div>
      )}
      <div className="max-w-2xl mx-auto">
        <ReviewSlider reviews={allReviews} />
      </div>
      <div className="text-center mt-14">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-[var(--accent)] text-[#181c1b] font-bold py-3 px-6 mb-4 rounded-lg hover:bg-white transition-colors [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]"
        >
          {showForm ? 'إلغاء إضافة رأي' : 'أضف رأيك'}
        </button>
      </div>
      {showForm && (
        <div className="max-w-2xl mx-auto mb-12">
          <ReviewForm
            newReview={newReview}
            setNewReview={setNewReview}
            onSubmit={handleSubmitReview}
            onCancel={() => setShowForm(false)}
            loading={loading}
          />
        </div>
      )}
    </section>
  );
}
