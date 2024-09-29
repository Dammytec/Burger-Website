import React from "react";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

function Header2() {
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar open/close

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Header */}
      <div className="bg-[#f5ebdc] fixed w-full top-0 z-50 flex justify-between items-center">
        <div className="flex items-center gap-6 w-[90%] m-[auto] pt-3">
          <div className="w-12">
            <img
              src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/08/Burger-King-logo.svg"
              alt="Logo"
              width="100%"
              height="100%"
            />
          </div>
          {/* Links - Hide on mobile */}
          <div className="hidden md:flex gap-6">
            <div className="text-[16px] font-[900] font-[flame] hover:bg-[rgb(232,224,210)] hover:text-[#d72300] rounded-xl p-[2.5px]">
              <Link to="/order">Order</Link>
            </div>
            <div className="text-[16px] font-[900] font-[flame] hover:bg-[rgb(232,224,210)] hover:text-[#d72300] rounded-xl p-[2.5px]">
              <Link to="/menu">Menu</Link>
            </div>
            <div className="text-[16px] font-[900] font-[flame] hover:bg-[rgb(232,224,210)] hover:text-[#d72300] rounded-xl p-[2.5px]">
              <Link to="/upload">Offers</Link>
            </div>
            <div className="text-[16px] font-[900] font-[flame] hover:bg-[rgb(232,224,210)] hover:text-[#d72300] rounded-xl p-[2.5px]">
              <Link to="/restaurants">Restaurants</Link>
            </div>
            <div className="text-[16px] font-[900] font-[flame] hover:bg-[rgb(232,224,210)] hover:text-[#d72300] rounded-xl p-[2.5px]">
              <Link to="/careers">Careers</Link>
            </div>
            <div className="text-[16px] font-[900] font-[flame] hover:bg-[rgb(232,224,210)] hover:text-[#d72300] rounded-xl p-[2.5px]">
              <Link to="/news">News</Link>
            </div>
          </div>
        </div>
        <div className="pr-6 hidden md:block">
          <button className="bg-[#d72300] p-1 w-24 rounded-full text-white font-[900] font-[flame]">
            <Link to="/">Register</Link>
          </button>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="md:hidden pr-6">
          <button onClick={toggleSidebar}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Sidebar for mobile view */}
      <div
        className={`fixed top-0 right-0 h-full bg-[#f5ebdc] w-[250px] transition-transform duration-300 z-40 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6 p-6">
          <div className="text-[16px] font-[900] font-[flame] hover:bg-[rgb(232,224,210)] hover:text-[#d72300] rounded-xl p-[2.5px]">
            <Link to="/order" onClick={toggleSidebar}>Order</Link>
          </div>
          <div className="text-[16px] font-[900] font-[flame] hover:bg-[rgb(232,224,210)] hover:text-[#d72300] rounded-xl p-[2.5px]">
            <Link to="/menu" onClick={toggleSidebar}>Menu</Link>
          </div>
          <div className="text-[16px] font-[900] font-[flame] hover:bg-[rgb(232,224,210)] hover:text-[#d72300] rounded-xl p-[2.5px]">
            <Link to="/offers" onClick={toggleSidebar}>Offers</Link>
          </div>
          <div className="text-[16px] font-[900] font-[flame] hover:bg-[rgb(232,224,210)] hover:text-[#d72300] rounded-xl p-[2.5px]">
            <Link to="/restaurants" onClick={toggleSidebar}>Restaurants</Link>
          </div>
          <div className="text-[16px] font-[900] font-[flame] hover:bg-[rgb(232,224,210)] hover:text-[#d72300] rounded-xl p-[2.5px]">
            <Link to="/careers" onClick={toggleSidebar}>Careers</Link>
          </div>
          <div className="text-[16px] font-[900] font-[flame] hover:bg-[rgb(232,224,210)] hover:text-[#d72300] rounded-xl p-[2.5px]">
            <Link to="/news" onClick={toggleSidebar}>News</Link>
          </div>
          <div className="text-[16px] font-[900] font-[flame] hover:bg-[rgb(232,224,210)] hover:text-[#d72300] rounded-xl p-[2.5px]">
            <Link to="/register" onClick={toggleSidebar}>Register</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header2;