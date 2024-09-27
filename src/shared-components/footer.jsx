import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
function Footer() {
  return (
    <div className="bg-[#502314]">
      <div className="flex flex-col md:flex-row justify-between w-[90%] m-auto text-white pt-16">
        <h1 className="text-2xl font-bold font-sans text-center md:text-left mb-6 md:mb-0">
          BURGER KING
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 font-[800] text-center md:text-left font-[flame]">
          <div className="mr-4">
            <h1 className="font-[flame]">
              <span className="text-lg">BK</span>
              <span className="text-[11px] relative top-[-8px] pr-1">®</span>
              <span className="text-xl">INFO</span>
            </h1>
            <h2 className="mt-4 mb-2">
              <Link>About BK</Link>
            </h2>
            <h2 className="mb-2">
              <Link>Privacy Policy</Link>
            </h2>
            <h2 className="mb-2">
              <Link>Reach out to US</Link>
            </h2>
            <h2 className="mb-2">
              <Link>Terms and Conditions</Link>
            </h2>
          </div>
          <div>
            <h1 className="font-[flame]">
              <span className="text-lg">BK</span>
              <span className="text-[11px] relative top-[-8px] pr-1">®</span>
              <span className="text-xl">Cares</span>
            </h1>
            <h2 className="mt-4 mb-2">
              <Link>Allergens Info</Link>
            </h2>
            <h2 className="mb-2">
              <Link>Food Quality</Link>
            </h2>
            <h2>
              <Link>Responsibility</Link>
            </h2>
          </div>
          <div>
            <h1 className="font-[flame]">
              <span className="text-lg">BK</span>
              <span className="text-[11px] relative top-[-8px] pr-1">®</span>
              <span className="text-xl">YOU</span>
            </h1>
            <h2 className="mt-4 mb-2">
              <Link>Careers</Link>
            </h2>
            <h2>
              <Link>Privacy Policy</Link>
            </h2>
          </div>
        </div>
      </div>
      <div className="w-[90%] m-auto text-[#ae8e84] mt-1">
        <hr className="h-[0.8px] bg-[#ae8e84]" />
      </div>
      <div className="flex flex-col md:flex-row justify-between w-[90%] m-auto mt-10 text-white pb-10">
        <div className="font-[800] font-[flame] text-xs text-center md:text-left mb-6 md:mb-0">
          <h1>TM & Copyright 2021 Burger King Corporation. All Rights Reserved.</h1>
        </div>
        <div className="flex gap-6 justify-center md:justify-start">
          <div>
            <Link to="https://www.facebook.com/">
              <FaFacebookF />
            </Link>
          </div>
          <div>
            <Link to="https://www.instagram.com/">
              <FaInstagram />
            </Link>
          </div>
          <div>
            <Link to="https://x.com/?lang=en">
              <FaTwitter />
            </Link>
          </div>
          <div>
            <Link to="https://www.youtube.com/">
              <CiYoutube />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
