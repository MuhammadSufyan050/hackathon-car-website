import { AiFillHeart } from "react-icons/ai";
import Image from 'next/image';
import React from 'react';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

const Detail = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Section */}
      <div className="flex flex-col items-center">
        {/* Main Car Card */}
        <div className="bg-[#3563E9] w-full md:h-[360px] h-[300px] text-white rounded-[10px] flex flex-col items-start justify-between p-5 relative">
  <div className="flex-1">
    <h1 className="mb-4 font-semibold text-[24px] md:text-[32px] leading-8 md:leading-10 tracking-tight">
      Sports car with the best <br className="hidden md:block" /> design and acceleration
    </h1>
    <p className="mb-4 text-sm md:text-base font-medium tracking-tight">
      Safety and comfort while driving a <br className="hidden md:block" /> futuristic and elegant sports car
    </p>
  </div>
  <div className="absolute bottom-4 left-4">
    <Image
      src="/Car-2.png"
      alt="Car 2"
      height={480}
      width={540}
      className="w-full md:w-[380px] h-auto object-contain"
    />
  </div>
</div>


        {/* Thumbnails */}
        <div className="flex justify-between gap-4 mt-6">
          <Image
            src="/view-1.png"
            alt="View 1"
            width={148}
            height={124}
            className="w-full max-w-[100px] sm:max-w-[148px] h-auto rounded-lg object-cover"
          />
          <Image
            src="/view-2.png"
            alt="View 2"
            width={148}
            height={124}
            className="w-full max-w-[100px] sm:max-w-[148px] h-auto rounded-lg object-cover"
          />
          <Image
            src="/view-3.png"
            alt="View 3"
            width={148}
            height={124}
            className="w-full max-w-[100px] sm:max-w-[148px] h-auto rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-white rounded-lg p-6">
        {/* Title and Favorite Icon */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Nissan GT – R</h2>
          <AiFillHeart className="text-red-500 text-2xl cursor-pointer" />
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          <div className="text-yellow-500 flex items-center gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <CiStar />
          </div>
          <p className="text-gray-500">440+ Reviews</p>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm sm:text-base mt-4">
          NISMO has become the embodiment of Nissan outstanding performance, inspired by the most unforgiving proving ground, the race track.
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-4 mt-6 text-sm sm:text-base">
          <div className="flex justify-between">
            <span className="font-medium text-gray-400">Type:</span>
            <span className="font-semibold text-gray-600">Car</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-400">Sport:</span>
            <span className="font-semibold text-gray-600">Manual</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-400">Capacity:</span>
            <span className="font-semibold text-gray-600">2 Person</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-400">Gasoline:</span>
            <span className="font-semibold text-gray-600">70L</span>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center mt-6">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <div className="flex items-center justify-center sm:justify-start">
              <span className="text-xl sm:text-3xl font-bold text-black">$80.00</span>
              <span className="text-sm sm:text-base font-bold text-gray-400 ml-2">/days</span>
            </div>
            <span className="text-gray-400 line-through text-sm sm:text-base">$100.00</span>
          </div>
          <Link href="/payment">
            <button className="bg-[#3563E9] px-6 py-3 text-white rounded hover:bg-blue-600">
              Rent Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;
