import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';


function Headers() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="bg-[#f5ebdc] fixed w-full top-0 z-50 shadow-md">
      <div className="flex justify-between items-center w-[90%] m-[auto] pt-3">
        <div className="flex items-center gap-6">
          <div className="w-12">
            <img src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/08/Burger-King-logo.svg" alt="" width="100%" height="100%" />
          </div>
          <div className={`lg:flex gap-6 ${menuOpen ? 'block' : 'hidden'} lg:block`}>
            <div className="text-[16px] font-[900] font-[flame] hover:bg-[rgb(232,224,210)] hover:text-[#d72300] rounded-xl p-[2.5px]">
              <Link to='/order'>Order</Link>
            </div>
            <div className="text-[16px] font-[900] font-[flame] hover:bg-[rgb(232,224,210)] hover:text-[#d72300] rounded-xl p-[2.5px]">
              <Link to='/menu'>Menu</Link>
            </div>
            <div className="text-[16px] font-[900] font-[flame] hover:bg-[rgb(232,224,210)] hover:text-[#d72300] rounded-xl p-[2.5px]">
              <Link to='/checkout'>Offers</Link>
            </div>
            <div className="text-[16px] font-[900] font-[flame] hover:bg-[rgb(232,224,210)] hover:text-[#d72300] rounded-xl p-[2.5px]">
              <Link to='/restaurants'>Restaurants</Link>
            </div>
            <div className="text-[16px] font-[900] font-[flame] hover:bg-[rgb(232,224,210)] hover:text-[#d72300] rounded-xl p-[2.5px]">
              <Link to='/careers'>Careers</Link>
            </div>
            <div className="text-[16px] font-[900] font-[flame] hover:bg-[rgb(232,224,210)] hover:text-[#d72300] rounded-xl p-[2.5px]">
              <Link to='/news'>News</Link>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>
    </div>
  );
};


export default Headers