import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 mx-auto gap-4 p-8">
  {/* First Card */}
  <div className="bg-[#54A6FF] max-w-[640px] h-[360px] text-white rounded-[10px] flex flex-col items-start justify-between p-5 relative">
    <div className="flex-1">
      <h1 className="mb-4 font-medium text-[32px] leading-10 tracking-tight text-left">
        The Best Platform <br /> for Car Rental
      </h1>
      <p className="mb-4 text-base font-medium tracking-tight">
        Ease of doing car rental safely and <br /> reliably. Of course at a low
        price.
      </p>
      <button className="bg-[#3563E9] w-[120px] h-11 text-base font-medium tracking-tight hover:bg-blue-600 text-white px-5 rounded-[4px]">
        Rental Car
      </button>
    </div>
    <div className="absolute bottom-4 left-4">
      <Image
        src="/car-1.png"
        alt="Car 1"
        height={480}
        width={540}
        className="object-contain"
      />
    </div>
  </div>

  {/* Second Card (Hidden on screens <= 800px) */}
  <div className="hidden md:flex bg-[#3563E9] max-w-[640px] h-[360px] text-white rounded-[10px] flex-col items-start justify-between p-5 relative">
    <div className="flex-1">
      <h1 className="mb-4 font-medium text-[32px] leading-10 tracking-tight text-left">
        Easy way to rent a <br /> car at a low price
      </h1>
      <p className="mb-4 text-base font-medium tracking-tight">
        Providing cheap car rental services <br /> and safe and comfortable facilities.
      </p>
      <button className="bg-[#54A6FF] w-[120px] h-11 text-base font-medium tracking-tight hover:bg-blue-600 text-white px-5 rounded-[4px]">
        Rental Car
      </button>
    </div>
    <div className="absolute bottom-4 right-40">
      <Image
        src="/image-8.png"
        alt="Car 1"
        height={180}
        width={240}
        className="object-contain"
      />
    </div>
  </div>
</div>

  );
};

export default HeroSection;
