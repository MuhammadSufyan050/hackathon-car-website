import { AiFillHeart } from "react-icons/ai";
import Image from 'next/image';
import React from 'react';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

const Detail = () => {
  return (
    <div className="max-w-[1017px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Section */}
      <div className="w-full flex flex-col items-center">
        {/* Main Car Card */}
        <div className="bg-[#3563E9] w-full h-[360px] text-white rounded-[10px] flex flex-col items-start justify-between p-5 relative">
          <div className="flex-1">
            <h1 className="mb-4 font-semibold text-[32px] leading-10 tracking-tight">
              Sports car with the best <br /> design and acceleration
            </h1>
            <p className="mb-4 text-base font-medium tracking-tight">
              Safety and comfort while driving a <br /> futuristic and elegant sports car
            </p>
          </div>
          <div className="absolute bottom-4 left-4">
            <Image
              src="/Car-2.png"
              alt="Car 2"
              height={480}
              width={540}
              className="w-[380px] h-[120px] object-contain"
            />
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-between gap-4 mt-6">
          <Image
            src="/view-1.png"
            alt="View 1"
            width={50}
            height={50}
            className="w-[148px] h-[124px] rounded-[10px]"
          />
          <Image
            src="/View-2.png"
            alt="View 2"
            width={50}
            height={50}
            className="w-[148px] h-[124px] rounded-[10px]"
          />
          <Image
            src="/View-3.png"
            alt="View 3"
            width={50}
            height={50}
            className="w-[148px] h-[124px] rounded-[10px]"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full h-auto p-7 bg-white rounded-[10px]">
        {/* Title and Favorite Icon */}
        <div className="flex justify-between items-center">
          <h2 className="text-[32px] font-bold">Nissan GT – R</h2>
          <AiFillHeart className="text-red-500 text-2xl cursor-pointer" />
        </div>

        {/* Rating */}
        <div className="flex items-center gap-[4px] mt-2">
          <p className="text-yellow-500 flex items-center gap-[2px]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <CiStar />
          </p>
          <p className="text-[#596780]">440+ Reviews</p>
        </div>

        {/* Description */}
        <p className="text-[#596780] font-normal text-xl mt-4">
          NISMO has become the embodiment of Nissans outstanding performance, inspired by the most unforgiving proving ground, the race track.
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
          <div className="flex justify-between">
            <span className="font-medium text-xl text-[#90A3BF]">Type:</span>
            <span className="ml-2 font-semibold text-xl text-[#596780]">Car</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-xl text-[#90A3BF]">Sport:</span>
            <span className="ml-2 font-semibold text-xl text-[#596780]">Manual</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-xl text-[#90A3BF]">Capacity:</span>
            <span className="ml-2 font-semibold text-xl text-[#596780]">2 Person</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-xl text-[#90A3BF]">Gasoline:</span>
            <span className="ml-2 font-semibold text-xl text-[#596780]">70L</span>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex justify-between items-center mt-6">
          <div>
            <div className="flex items-center">
              <span className="text-3xl font-bold text-black">$80.00</span>
              <span className="text-base font-bold text-[#90A3BF] ml-2">/days</span>
            </div>
            <span className="text-[#90A3BF] line-through text-base font-bold">$100.00</span>
          </div>
          <Link href="/payment">
          <button className="bg-[#3563E9] w-[140px] h-[56px] text-white rounded-[4px] font-medium hover:bg-blue-600">
            Rent Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;
