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
      className="py-16 px-6 md:px-0 flex flex-col items-center bg-gray-50"
    >
      <h2 className="text-3xl font-bold mb-8 text-[var(--theme-dark-teal)] text-center font-[var(--font-cairo)]">
        دعنا نتواصل معك
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col gap-6"
        dir="rtl"
      >
        <div className="flex flex-col items-end">
          <label
            htmlFor="name"
            className="mb-2 text-gray-700 font-[var(--font-cairo)]"
          >
            الاسم
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded bg-gray-100 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--theme-orange)] font-[var(--font-cairo)] text-right"
            placeholder="أدخل اسمك"
          />
        </div>
        <div className="flex flex-col items-end">
          <label
            htmlFor="phone"
            className="mb-2 text-gray-700 font-[var(--font-cairo)]"
          >
            رقم الجوال
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 rounded bg-gray-100 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--theme-orange)] font-[var(--font-cairo)] text-right"
            placeholder="05xxxxxxxx"
          />
        </div>
        <button
          type="submit"
          className="bg-[var(--theme-green)] text-white font-bold py-3 rounded mt-4 hover:bg-opacity-90 transition-colors font-[var(--font-cairo)]"
        >
          إرسال
        </button>
        {submitted && (
          <div className="text-green-500 text-center mt-4 font-[var(--font-cairo)]">
            تم إرسال طلبك بنجاح! سنقوم بالتواصل معك قريباً.
          </div>
        )}
      </form>
    </section>
  );
}
