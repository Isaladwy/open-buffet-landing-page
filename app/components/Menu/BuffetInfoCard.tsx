import Image from 'next/image';

export default function BuffetInfoCard() {
  return (
    <div className="flex relative items-center gap-3 justify-between bg-[#eaf5f2] rounded-2xl p-2 md:p-4 w-full mx-auto my-8 shadow-md">
      <div className="flex flex-col text-[#233a45] font-bold text-base md:text-lg leading-relaxed pr-4">
        <h2 className="font-bold text-2xl mb-5">قوائم البوفيه</h2>
        <ul className="flex flex-col gap-2 drop-shadow-xs text-[var(--logo-green)]">
          <span>أطباق رئيسية</span>
          <span>مقبلات متنوعة</span>
          <span>سرفيس خضار</span>
          <span>مشروبات</span>
          <span>حلويات</span>
        </ul>
      </div>
      <div className="absolute w-3/4 h-full left-0 rounded-2xl overflow-hidden z-0">
        <Image
          src="/DSC09743.jpg"
          alt="حلويات البوفيه"
          fill
          className="object-fill sm:object-cover   "
        />
      </div>
    </div>
  );
}
