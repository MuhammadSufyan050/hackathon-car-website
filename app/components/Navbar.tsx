import { CiSearch } from "react-icons/ci";
import { FaSlidersH, FaHeart, FaBell, FaCog } from "react-icons/fa";
import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
  return (
    <div className="max-w-[1440px] h-auto sm:h-[124px] flex flex-col sm:flex-row items-center sm:justify-between px-4 py-4 mx-auto bg-white">
      {/* Logo */}
      <h1 className="font-bold text-[32px] leading-10 tracking-tight text-[#3563E9]">
        MORENT
      </h1>

      {/* Search Bar */}
      <div className="flex items-center w-full sm:w-[492px] h-11 mt-4 sm:mt-0 sm:mr-20 border border-[#C3D4E9] rounded-full px-4">
        <CiSearch className="w-6 h-6 text-[#596780]" />
        <input
          type="text"
          placeholder="Search something here"
          className="flex-grow px-2 py-1 outline-none text-gray-700"
        />
        <FaSlidersH className="text-gray-500" />
      </div>

      {/* Icons & Authentication */}
      <div className="flex items-center space-x-4 mt-4 sm:mt-0">
        {[FaHeart, FaBell, FaCog].map((Icon, index) => (
          <div
            key={index}
            className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full border border-[#C3D4E9] hover:border-blue-500 cursor-pointer relative"
          >
            <Icon className="text-gray-600 w-6 h-6 hover:text-blue-500" />
            {Icon === FaBell && (
              <span className="absolute top-1 right-1 bg-red-500 w-2 h-2 rounded-full"></span>
            )}
          </div>
        ))}

        {/* Authentication Button */}
        <div className="w-10 h-10 sm:w-11 sm:h-11 flex cursor-pointer items-center justify-center rounded-full border border-[#C3D4E9]">
          <SignedOut>
            <SignInButton>
              <CgProfile className="text-gray-600 w-6 h-6 hover:text-blue-500 cursor-pointer" />
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </div>
  );
}
