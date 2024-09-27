import React, { useState } from 'react';
import { Link } from "react-router-dom";



function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    return (
        <div className="bg-[#f5ebdc] fixed w-full top-0 z-50 shadow-md">
          <div className="flex items-center justify-between w-[90%] m-[auto] pt-3 flex-wrap">
            <div className="flex items-center gap-4">
              <div className="w-12">
                <img
                  src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/08/Burger-King-logo.svg"
                  alt="Burger King Logo"
                  className="w-full h-full"
                />
              </div>
              <div className="hidden md:flex gap-4">
                <div className="text-[16px] font-[900] font-[flame] hover:bg-[rgb(232,224,210)] hover:text-[#d72300] rounded-xl px-2 py-1">
                  <Link to='/order'>Order</Link>
                </div>
                <div className="text-[16px] font-[900] font-[flame] hover:bg-[rgb(232,224,210)] hover:text-[#d72300] rounded-xl px-2 py-1">
                  <Link to='/menu'>Menu</Link>
                </div>
                <div className="text-[16px] font-[900] font-[flame] hover:bg-[rgb(232,224,210)] hover:text-[#d72300] rounded-xl px-2 py-1">
                  <Link to='/application'>Offers</Link>
                </div>
                <div className="text-[16px] font-[900] font-[flame] hover:bg-[rgb(232,224,210)] hover:text-[#d72300] rounded-xl px-2 py-1">
                  <Link to='/restaurants'>Restaurants</Link>
                </div>
                <div className="text-[16px] font-[900] font-[flame] hover:bg-[rgb(232,224,210)] hover:text-[#d72300] rounded-xl px-2 py-1">
                  <Link to='/careers'>Careers</Link>
                </div>
                <div className="text-[16px] font-[900] font-[flame] hover:bg-[rgb(232,224,210)] hover:text-[#d72300] rounded-xl px-2 py-1">
                  <Link to='/news'>News</Link>
                </div>
              </div>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu}>
                <svg
                  className="w-8 h-8 text-[#d72300]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>
          {menuOpen && (
            <div className="flex flex-col gap-4 mt-4 pb-5 px-4 md:hidden">
              <div className="text-[16px] font-[900] font-[flame] hover:bg-[rgb(232,224,210)] hover:text-[#d72300] rounded-xl px-2 py-1">
                <Link to='/order'>Order</Link>
              </div>
              <div className="text-[16px] font-[900] font-[flame] hover:bg-[rgb(232,224,210)] hover:text-[#d72300] rounded-xl px-2 py-1">
                <Link to='/menu'>Menu</Link>
              </div>
              <div className="text-[16px] font-[900] font-[flame] hover:bg-[rgb(232,224,210)] hover:text-[#d72300] rounded-xl px-2 py-1">
                <Link to='/confirmation'>Offers</Link>
              </div>
              <div className="text-[16px] font-[900] font-[flame] hover:bg-[rgb(232,224,210)] hover:text-[#d72300] rounded-xl px-2 py-1">
                <Link to='/restaurants'>Restaurants</Link>
              </div>
              <div className="text-[16px] font-[900] font-[flame] hover:bg-[rgb(232,224,210)] hover:text-[#d72300] rounded-xl px-2 py-1">
                <Link to='/careers'>Careers</Link>
              </div>
              <div className="text-[16px] font-[900] font-[flame] hover:bg-[rgb(232,224,210)] hover:text-[#d72300] rounded-xl px-2 py-1">
                <Link to='/news'>News</Link>
              </div>
            </div>
          )}
          <div className="flex gap-5 mt-10 justify-center pb-5 flex-wrap">
            <div className="text-[16px] font-[800] font-[flame] hover:text-[#d72300] hover:underline hover:underline-offset-[20px]"
              style={{ textDecorationColor: 'black' }}>
              <Link>Flame Grilled Burgers</Link>
            </div>
            <div className="text-[16px] font-[800] font-[flame] hover:text-[#d72300] hover:underline hover:underline-offset-[20px]"
              style={{ textDecorationColor: 'black' }}>
              <Link>Chicken Burgers</Link>
            </div>
            <div className="text-[16px] font-[800] font-[flame] hover:text-[#d72300] hover:underline hover:underline-offset-[20px]"
              style={{ textDecorationColor: 'black' }}>
              <Link>Sides</Link>
            </div>
            <div className="text-[16px] font-[800] font-[flame] hover:text-[#d72300] hover:underline hover:underline-offset-[20px]"
              style={{ textDecorationColor: 'black' }}>
              <Link>Drinks</Link>
            </div>
            <div className="text-[16px] font-[800] font-[flame] hover:text-[#d72300] hover:underline hover:underline-offset-[20px]"
              style={{ textDecorationColor: 'black' }}>
              <Link>Deserts</Link>
            </div>
          </div>
        </div>
      );
}

export default Header