'use client';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const reviews = [
  {
    name: 'سارة الأحمد',
    review: 'تجربة رائعة! تنوع الأطباق وجودة الخدمة جعلت الحفل مميزاً جداً.',
    stars: 5,
  },
  {
    name: 'محمد العتيبي',
    review: 'بوفيه غني بالأصناف الطازجة. أنصح به للحفلات والأعراس.',
    stars: 5,
  },
  {
    name: 'ريم السبيعي',
    review: 'الطعام لذيذ والأجواء راقية. شكراً لفريق العمل على التنظيم الرائع.',
    stars: 4,
  },
];

export default function CustomerReviews() {
  const [allReviews, setAllReviews] = useState(reviews);
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    review: '',
    stars: 5,
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();

    if (newReview.name.trim() && newReview.review.trim()) {
      const reviewToAdd = {
        ...newReview,
        name: newReview.name.trim(),
        review: newReview.review.trim(),
      };

      setAllReviews((prev) => [reviewToAdd, ...prev]);
      setNewReview({ name: '', review: '', stars: 5 });
      setShowForm(false);
      setSubmitted(true);

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  };

  const handleStarClick = (starCount: number) => {
    setNewReview((prev) => ({ ...prev, stars: starCount }));
  };

  return (
    <section id="reviews" className="py-16 px-6 md:px-12 bg-[#f7f7fe]">
      <h2 className="text-3xl font-bold mb-10 text-[var(--logo-green)] text-center [text-shadow:_1px_1px_3px_rgb(0_0_0_/_25%)]">
        آراء العملاء
      </h2>

      {/* Add Review Button */}
      <div className="text-center mb-8">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-[var(--accent)] text-[#181c1b] font-bold py-3 px-6 rounded-lg hover:bg-white transition-colors [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]"
        >
          {showForm ? 'إلغاء إضافة رأي' : 'أضف رأيك'}
        </button>
      </div>

      {/* Review Submission Form */}
      {showForm && (
        <div className="max-w-2xl mx-auto mb-12">
          <form
            onSubmit={handleSubmitReview}
            className="bg-[#233a45] p-8 rounded-2xl shadow-lg border border-[var(--accent)]"
            dir="rtl"
          >
            <h3 className="text-2xl font-bold mb-6 text-white text-center [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">
              أضف رأيك
            </h3>

            <div className="mb-6">
              <label className="block text-white mb-2 font-[var(--font-cairo)] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">
                الاسم
              </label>
              <input
                type="text"
                required
                value={newReview.name}
                onChange={(e) =>
                  setNewReview((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full p-3 rounded bg-[#181c1b] text-white border border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] font-[var(--font-cairo)] text-right"
                placeholder="أدخل اسمك"
              />
            </div>

            <div className="mb-6">
              <label className="block text-white mb-2 font-[var(--font-cairo)] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">
                التقييم
              </label>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleStarClick(star)}
                    className="text-2xl transition-colors"
                  >
                    <span
                      className={
                        star <= newReview.stars
                          ? 'text-[var(--accent)]'
                          : 'text-gray-500'
                      }
                    >
                      ★
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-white mb-2 font-[var(--font-cairo)] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">
                الرأي
              </label>
              <textarea
                required
                value={newReview.review}
                onChange={(e) =>
                  setNewReview((prev) => ({ ...prev, review: e.target.value }))
                }
                className="w-full p-3 rounded bg-[#181c1b] text-white border border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] font-[var(--font-cairo)] text-right resize-none"
                rows={4}
                placeholder="اكتب رأيك عن تجربتك معنا..."
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-[var(--accent)] text-[#181c1b] font-bold py-3 rounded hover:bg-white transition-colors [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]"
              >
                إرسال الرأي
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="flex-1 bg-gray-600 text-white font-bold py-3 rounded hover:bg-gray-700 transition-colors [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]"
              >
                إلغاء
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Success Message */}
      {submitted && (
        <div className="max-w-2xl mx-auto mb-8">
          <div className="bg-green-600 text-white p-4 rounded-lg text-center font-[var(--font-cairo)] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">
            شكراً لك! تم إضافة رأيك بنجاح.
          </div>
        </div>
      )}

      {/* Reviews Slider */}
      <div className="max-w-2xl mx-auto">
        <Slider {...sliderSettings}>
          {allReviews.map((item, idx) => (
            <div key={idx}>
              <div className="bg-[#233a45] p-8 rounded-2xl shadow-lg flex flex-col items-center text-center border border-[var(--accent)] min-h-[320px]">
                <div className="w-16 h-16 rounded-full bg-[var(--accent)] flex items-center justify-center text-xl font-bold text-[#232a28] mb-4 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]">
                  {item.name[0]}
                </div>
                <h3 className="font-bold text-white mb-2 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">
                  {item.name}
                </h3>
                <div className="text-[var(--accent)] mb-2 text-lg [text-shadow:_1px_1px_2px_rgb(0_0_0_/_25%)]">
                  {'★'.repeat(item.stars)}
                </div>
                <p className="text-white/80 font-[var(--font-cairo)] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]">
                  {item.review}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
