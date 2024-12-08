import React from "react";

const Footer = () => {
  return (
    <footer className="p-5">
      <div className="max-w-[1440px] mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Left Section */}
          <div className="mb-6 md:mb-0 flex flex-col gap-4">
          <h1 className="font-bold text-[32px] leading-10 tracking-tight text-[#3563E9] text-left">
          MORENT
        </h1>
            <p className="max-w-[289px] text-base text-opacity-[60%] text-[#131313] font-medium tracking-tight">
              Our vision is to provide convenience and help increase your sales
              business
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-wrap gap-16">
            {/* About Section */}
            <div>
              <h1 className="font-semibold mb-8 text-xl text-[#1A202C]  tracking-tight">About</h1>
              <ul className="space-y-6 text-base text-opacity-[60%] text-[#131313] font-medium tracking-tight">
                <li>How it works</li>
                <li>Featured</li>
                <li>Partnership</li>
                <li>Business Relation</li>
              </ul>
            </div>

            {/* Community Section */}
            <div>
            <h1 className="font-semibold mb-8 text-xl text-[#1A202C]  tracking-tight">Community</h1>
              <ul className="space-y-6 text-base text-opacity-[60%] text-[#131313] font-medium tracking-tight">
                <li>Events</li>
                <li>Blog</li>
                <li>Podcast</li>
                <li>Invite a friend</li>
              </ul>
            </div>

            {/* Socials Section */}
            <div>
            <h1 className="font-semibold mb-8 text-xl text-[#1A202C]  tracking-tight">Socials</h1>
              <ul className="space-y-6 text-base text-opacity-[60%] text-[#131313] font-medium tracking-tight">
                <li>Discord</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-[#131313] border-opacity-[16%]" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between text-sm">
          <p className=" text-base  text-[#131313] font-medium tracking-tight">©2022 MORENT. All rights reserved</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:underline text-base  text-[#131313] font-medium tracking-tight">
              Privacy & Policy
            </a>
            <a href="#" className="hover:underline text-base  text-[#131313] font-medium tracking-tight">
              Terms & Condition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;