import Image from 'next/image';

export default function BuffetInfoCard() {
  return (
    <>
      {/* Mobile Layout */}
      <div className="sm:hidden bg-[#eaf5f2] rounded-2xl p-2 w-full mx-auto my-8 shadow-md">
        <div className="relative w-full h-[400px]">
          {/* Photo div for mobile */}
          <div className="absolute w-full h-[60%] rounded-2xl overflow-hidden">
            <Image
              src="/DSC09743.jpg"
              alt="حلويات البوفيه"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Content div for mobile */}
          <div className="absolute bottom-0 w-full flex flex-col justify-between items-center text-[#233a45] font-bold text-base leading-relaxed">
            <h2 className="font-bold text-2xl mb-5 text-center">قوائم البوفيه</h2>
            <ul className="grid grid-cols-2 text-green-600 gap-2 drop-shadow-xs">
              <li className="flex items-center gap-2">
                <span className="font-bold bg-green-600 w-6 h-6 flex items-center justify-center text-white rounded-full p-1">✓</span>
                أطباق رئيسية
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold bg-green-600 w-6 h-6 flex items-center justify-center text-white rounded-full p-1">✓</span>
                مقبلات متنوعة
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold bg-green-600 w-6 h-6 flex items-center justify-center text-white rounded-full p-1">✓</span>
                سرفيس خضار
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold bg-green-600 w-6 h-6 flex items-center justify-center text-white rounded-full p-1">✓</span>
                مشروبات
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold bg-green-600 w-6 h-6 flex items-center justify-center text-white rounded-full p-1">✓</span>
                حلويات
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Desktop Layout */}
      <div className="hidden sm:block bg-[#eaf5f2] rounded-2xl p-4 w-full mx-auto my-8 shadow-md">
        <div className="flex relative items-center gap-3 justify-between">
          {/* Photo for desktop */}
          <div className="absolute w-[50%] sm:w-[65%] lg:w-3/4 h-full left-0 rounded-2xl overflow-hidden z-0">
            <Image
              src="/DSC09743.jpg"
              alt="حلويات البوفيه"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Content for desktop */}
          <div className="flex flex-col text-[#233a45] font-bold text-lg leading-relaxed pr-1 w-auto z-10 relative">
            <h2 className="font-bold text-2xl mb-5 text-right">قوائم البوفيه</h2>
            <ul className="flex text-green-600 md:pr-12 pr-8 flex-col gap-2 drop-shadow-xs">
              <li className="flex items-center gap-2">
                <span className="font-bold bg-green-600 w-6 h-6 flex items-center justify-center text-white rounded-full p-1">✓</span>
                أطباق رئيسية
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold bg-green-600 w-6 h-6 flex items-center justify-center text-white rounded-full p-1">✓</span>
                مقبلات متنوعة
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold bg-green-600 w-6 h-6 flex items-center justify-center text-white rounded-full p-1">✓</span>
                سرفيس خضار
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold bg-green-600 w-6 h-6 flex items-center justify-center text-white rounded-full p-1">✓</span>
                مشروبات
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold bg-green-600 w-6 h-6 flex items-center justify-center text-white rounded-full p-1">✓</span>
                حلويات
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
