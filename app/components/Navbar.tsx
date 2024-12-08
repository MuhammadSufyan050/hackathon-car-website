import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { FaSlidersH, FaHeart, FaBell, FaCog } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="max-w-[1440px] h-[124px] flex flex-col sm:flex-row items-center sm:justify-between px-4 py-4  mx-auto bg-white">
      {/* Top: Logo */}
      <div className="flex items-center justify-between w-full sm:w-auto">
        <h1 className="font-bold text-[32px] leading-10 tracking-tight text-[#3563E9] text-left">
          MORENT
        </h1>
        {/* Profile Picture on Small Screens */}
        <div className="w-11 h-11 bg-gray-200 rounded-full overflow-hidden ml-4 sm:hidden">
          <Image
            src="/profile.png"
            alt="Profile"
            width={100}
            height={100}
            className="w-11 h-11 object-cover"
          />
        </div>
      </div>

      {/* Center: Search Bar */}
      <div className="flex items-center w-full sm:w-[492px] h-11 mt-4 sm:mt-0 sm:mr-20 border-[1px] border-[#C3D4E9] rounded-[70px] px-4">
        <CiSearch className="w-6 h-6 text-[#596780]" />
        <input
          type="text"
          placeholder="Search something here"
          className="flex-grow px-2 py-1 outline-none text-gray-700"
        />
        <FaSlidersH className="text-gray-500" />
      </div>

      {/* Right: Icons */}
      <div className="flex items-center space-x-4 mt-4 sm:mt-0">
        {/* Icons for Large Screens */}
        <div className="hidden sm:flex items-center space-x-4">
          <div className="w-11 h-11 rounded-full border-[1px] border-[#C3D4E9] border-opacity-[80%] px-[10px] py-[10px]">
            <FaHeart className="text-gray-600 w-6 h-6 hover:text-blue-500 cursor-pointer" />
          </div>
          <div className="w-11 h-11 rounded-full border-[1px] border-[#C3D4E9] border-opacity-[80%] px-[10px] py-[10px] relative">
            <FaBell className="text-gray-600 w-6 h-6 hover:text-blue-500 cursor-pointer" />
            {/* Notification Dot */}
            <span className="absolute top-2 right-2 bg-red-500 w-2 h-2 rounded-full"></span>
          </div>
          <div className="w-11 h-11 rounded-full border-[1px] border-[#C3D4E9] border-opacity-[80%] px-[10px] py-[10px]">
            <FaCog className="text-gray-600 w-6 h-6 hover:text-blue-500 cursor-pointer" />
          </div>
        </div>

        {/* Profile Picture on Large Screens */}
        <div className="hidden sm:block w-11 h-11 bg-gray-200 rounded-full overflow-hidden">
          <Image
            src="/profile.png"
            alt="Profile"
            width={100}
            height={100}
            className="w-11 h-11 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
