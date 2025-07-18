'use client';
import React, { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Function to validate Saudi phone numbers
  const validateSaudiPhone = (phoneNumber: string): boolean => {
    // Remove all non-digit characters
    const cleanNumber = phoneNumber.replace(/\D/g, '');

    // Saudi phone number patterns:
    // 1. +966xxxxxxxxx (11 digits starting with 966)
    // 2. 966xxxxxxxxx (12 digits starting with 966)
    // 3. 05xxxxxxxx (10 digits starting with 05)
    // 4. 5xxxxxxxx (9 digits starting with 5)

    if (cleanNumber.length === 11 && cleanNumber.startsWith('966')) {
      return true;
    }
    if (cleanNumber.length === 12 && cleanNumber.startsWith('966')) {
      return true;
    }
    if (cleanNumber.length === 10 && cleanNumber.startsWith('05')) {
      return true;
    }
    if (cleanNumber.length === 9 && cleanNumber.startsWith('5')) {
      return true;
    }

    return false;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);

    // Clear error when user starts typing
    if (phoneError) {
      setPhoneError('');
    }

    // Validate if user has entered something
    if (value && !validateSaudiPhone(value)) {
      setPhoneError('يرجى إدخال رقم جوال سعودي صحيح (مثال: 05xxxxxxxx)');
    } else {
      setPhoneError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate phone number before submission
    if (!validateSaudiPhone(phone)) {
      setPhoneError('يرجى إدخال رقم جوال سعودي صحيح');
      return;
    }

    setSubmitted(true);
    setName('');
    setPhone('');

    // Hide the success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);

    // Here you can handle sending the data to your backend or service
  };

  return (
    <section
      id="booking"
      className="py-16 px-6 md:px-0 flex flex-col items-center bg-[#f7f7fe]"
    >
      <h2 className="text-3xl font-bold mb-8 text-[#5ca88d] text-center [text-shadow:_1px_1px_3px_rgb(0_0_0_/_30%)]">
        دعنا نتواصل معك
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-full bg-[#233a45] max-w-md  p-8 rounded-2xl shadow-lg border border-[var(--accent)] flex flex-col gap-6"
        dir="rtl"
      >
        <div className="flex flex-col items-start">
          <label
            htmlFor="name"
            className="mb-2 text-white font-[var(--font-cairo)] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]"
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
        <div className="flex flex-col items-start">
          <label
            htmlFor="phone"
            className="mb-2 text-white font-[var(--font-cairo)] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]"
          >
            رقم الجوال السعودي
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={phone}
            onChange={handlePhoneChange}
            className={`w-full p-3 rounded bg-[#181c1b] text-white border font-[var(--font-cairo)] text-right focus:outline-none focus:ring-2 ${
              phoneError
                ? 'border-red-500 focus:ring-red-500'
                : 'border-[var(--accent)] focus:ring-[var(--accent)]'
            }`}
            placeholder="05xxxxxxxx"
          />
          {phoneError && (
            <p className="text-red-400 text-sm mt-1 font-[var(--font-cairo)]">
              {phoneError}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={!!phoneError}
          className={`font-bold py-3 rounded mt-4 transition-colors [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)] ${
            phoneError
              ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
              : 'bg-[var(--accent)] text-[#181c1b] hover:bg-white'
          }`}
        >
          إرسال
        </button>
        {submitted && (
          <div className="text-green-400 text-center mt-4 font-[var(--font-cairo)] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">
            تم إرسال طلبك بنجاح! سنقوم بالتواصل معك في اقرب وقت.
          </div>
        )}
      </form>
    </section>
  );
}
