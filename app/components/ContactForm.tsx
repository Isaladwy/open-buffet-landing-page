'use client';
import React, { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can handle sending the data to your backend or service
  };

  return (
    <section
      id="booking"
      className="py-16 px-6 md:px-0 flex flex-col items-center bg-[#232a28]"
    >
      <h2 className="text-3xl font-bold mb-8 text-[var(--accent)] text-center font-[var(--font-cairo)]">
        دعنا نتواصل معك
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-[var(--background)] p-8 rounded-2xl shadow-lg border border-[var(--accent)] flex flex-col gap-6"
        dir="rtl"
      >
        <div className="flex flex-col items-end">
          <label
            htmlFor="name"
            className="mb-2 text-white font-[var(--font-cairo)]"
          >
            الاسم
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded bg-[#181c1b] text-white border border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] font-[var(--font-cairo)] text-right"
            placeholder="أدخل اسمك"
          />
        </div>
        <div className="flex flex-col items-end">
          <label
            htmlFor="phone"
            className="mb-2 text-white font-[var(--font-cairo)]"
          >
            رقم الجوال
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 rounded bg-[#181c1b] text-white border border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] font-[var(--font-cairo)] text-right"
            placeholder="05xxxxxxxx"
          />
        </div>
        <button
          type="submit"
          className="bg-[var(--accent)] text-[#181c1b] font-bold py-3 rounded mt-4 hover:bg-white transition-colors font-[var(--font-cairo)]"
        >
          إرسال
        </button>
        {submitted && (
          <div className="text-green-400 text-center mt-4 font-[var(--font-cairo)]">
            تم إرسال طلبك بنجاح! سنقوم بالتواصل معك قريباً.
          </div>
        )}
      </form>
    </section>
  );
}
