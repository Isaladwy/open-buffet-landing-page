import Image from 'next/image';

export default function BuffetInfoCard() {
  return (
    <div className="flex relative items-center gap-3 justify-between bg-[#eaf5f2] rounded-2xl p-2 md:p-4 w-full mx-auto my-8  shadow-md">
      <div className="flex flex-col text-[#233a45] font-bold text-base md:text-lg leading-relaxed pr-1">
        <h2 className="font-bold text-2xl mb-5">قوائم البوفيه</h2>
        <ul className="flex text-green-600 flex-col gap-2 drop-shadow-xs">
          <li className="flex items-center gap-2">
            <span className=" font-bold">✓</span>
            أطباق رئيسية
          </li>
          <li className="flex items-center gap-2">
            <span className=" font-bold">✓</span>
            مقبلات متنوعة
          </li>
          <li className="flex items-center gap-2">
            <span className=" font-bold">✓</span>
            سرفيس خضار
          </li>
          <li className="flex items-center gap-2">
            <span className=" font-bold">✓</span>
            مشروبات
          </li>
          <li className="flex items-center gap-2">
            <span className=" font-bold">✓</span>
            حلويات
          </li>
        </ul>
      </div>
      <div className="absolute w-[50%] sm:w-[65%] md:w-3/4 h-full left-0 rounded-2xl overflow-hidden z-0">
        <Image
          src="/DSC09743.jpg"
          alt="حلويات البوفيه"
          fill
          className="object-cover    "
        />
      </div>
    </div>
  );
}
