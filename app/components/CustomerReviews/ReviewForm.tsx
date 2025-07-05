import React from 'react';

interface ReviewFormProps {
  newReview: { name: string; review: string; stars: number };
  setNewReview: React.Dispatch<
    React.SetStateAction<{ name: string; review: string; stars: number }>
  >;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  loading?: boolean;
}

export default function ReviewForm({
  newReview,
  setNewReview,
  onSubmit,
  onCancel,
  loading,
}: ReviewFormProps) {
  const handleStarClick = (starCount: number) => {
    setNewReview((prev) => ({ ...prev, stars: starCount }));
  };

  return (
    <form
      onSubmit={onSubmit}
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
              disabled={loading}
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
          disabled={loading}
        >
          إرسال الرأي
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 bg-gray-600 text-white font-bold py-3 rounded hover:bg-gray-700 transition-colors [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]"
          disabled={loading}
        >
          إلغاء
        </button>
      </div>
    </form>
  );
}
