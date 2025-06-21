import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[var(--background)] text-white py-12 px-6 md:px-12 border-t-2 border-[var(--accent)]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="font-bold mb-4 text-[var(--accent)]">بوفيه مفتوح</h3>
          <p className="text-sm text-white/80 mb-4">
            أفضل تجربة بوفيه في المدينة مع تشكيلة واسعة من الأطباق والمأكولات
            الطازجة.
          </p>
          <div className="flex space-x-4 space-x-reverse">
            <a
              href="#"
              className="text-[var(--accent)] hover:text-white transition-colors"
              aria-label="فيسبوك"
            >
              <i className="fab fa-facebook-f"></i>فيسبوك
            </a>
            <a
              href="#"
              className="text-[var(--accent)] hover:text-white transition-colors"
              aria-label="انستجرام"
            >
              <i className="fab fa-instagram"></i>انستجرام
            </a>
            <a
              href="#"
              className="text-[var(--accent)] hover:text-white transition-colors"
              aria-label="تويتر"
            >
              <i className="fab fa-twitter"></i>تويتر
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-[var(--accent)]">ساعات العمل</h3>
          <p className="text-sm text-white/80">
            الأحد - الخميس: 11 صباحاً - 10 مساءً
          </p>
          <p className="text-sm text-white/80">
            الجمعة - السبت: 10 صباحاً - 11 مساءً
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-[var(--accent)]">تواصل معنا</h3>
          <p className="text-sm text-white/80">شارع الطعام 123، مدينة الذوق</p>
          <p className="text-sm text-white/80">info@openbuffet.com</p>
          <p className="text-sm text-white/80">+966 555 555 555</p>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-[var(--accent)]">تطبيق الجوال</h3>
          <div className="flex space-x-2 space-x-reverse">
            <button className="bg-[var(--accent)] text-[#181c1b] text-xs px-3 py-2 rounded font-bold hover:bg-white transition-colors">
              App Store
            </button>
            <button className="bg-[var(--accent)] text-[#181c1b] text-xs px-3 py-2 rounded font-bold hover:bg-white transition-colors">
              Google Play
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--accent)] pt-6 text-center text-sm text-white/60">
        <p>© 2025 بوفيه مفتوح. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}
