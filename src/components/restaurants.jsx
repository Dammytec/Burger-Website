import React from "react";
import Headers from "../shared-components/headers";
import Footer from "../shared-components/footer";
import { Link } from "react-router-dom";
import { CiLocationArrow1 } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useState , useEffect } from "react";
import ProductList from "./products";

function Restaurants(params) {

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const savedCartCount = parseInt(localStorage.getItem('cartCount'), 10);
    if (!isNaN(savedCartCount)) {
      setCartCount(savedCartCount);
    }
  }, []);
  return (
    <div className=" bg-[#f5ebdc]">
      <Headers />
      <div className=" flex gap-3">
        <div className="all h-[900px] overflow-y-scroll ">
          <div className="font-[Flame-Bold] font-[900] mt-20 text-center sm:text-left px-4 sm:px-0">
            <h1>
              <Link to="/home">HOME</Link> /{" "}
              <Link className="text-[#d72300]">MENU</Link>
            </h1>
          </div>
          <div className="flex items-center bg-white w-full max-w-[320px] shadow-md h-14 rounded mt-20 mx-auto sm:mx-0">
            <input
              type="text"
              placeholder="Please, enter your location"
              className="outline-none w-full max-w-[260px] font-[flame] font-[700] text-black placeholder:text-black text-[16px] pl-4"
            />
            <div className="pr-2 font-[900]">
              <CiLocationArrow1 className="text-2xl" />
            </div>
          </div>

          <div className=" ">
            <h2 className="font-[900] font-[flame] text-2xl sm:text-3xl text-[#502314] mt-4 sm:mt-6 mb-1 sm:mb-2">
              Restaurants
            </h2>

            <div className="w-full sm:w-[310px] m-2 sm:m-3">
              <button className="w-full text-left p-3 sm:p-4 border-2 border-transparent hover:border-orange-300 transition ease-out duration-400 bg-white rounded-md">
                <h1 className="text-lg sm:text-xl hover:text-[#d72300] font-[900] font-[flame] text-[#502314] tracking-tight mt-2">
                  Victoria Island
                </h1>
                <h1 className="text-base sm:text-[18px] text-[#502314] font-[500] font-[flame]">
                  274 Ajose adeogun
                </h1>
                <h4 className="font-[900] font-[flame] text-[#d72300] mt-2">
                  Show on map
                </h4>
              </button>
            </div>

            <div className="w-full sm:w-[310px] m-2 sm:m-3">
              <button className="w-full text-left p-4 border-2 border-transparent hover:border-orange-300 transition ease-out duration-400 bg-white rounded-md">
                <h1 className="text-lg sm:text-xl hover:text-[#d72300] font-[900] font-[flame] text-[#502314] tracking-tight mt-2">
                  Victoria Island
                </h1>
                <h1 className="text-base sm:text-lg text-[#502314] font-[500] font-[flame]">
                  274 Ajose adeogun
                </h1>
                <h4 className="font-[900] font-[flame] text-[#d72300] mt-2">
                  Show on map
                </h4>
              </button>
            </div>

            <div className="w-full sm:w-[310px] m-2 sm:m-3">
              <button className="w-full text-left p-3 sm:p-4 border-2 border-transparent hover:border-orange-300 transition ease-out duration-400 bg-white rounded-md">
                <h1 className="text-lg sm:text-xl hover:text-[#d72300] font-[900] font-[flame] text-[#502314] tracking-tight mt-2">
                  Victoria Island
                </h1>
                <h1 className="text-base sm:text-lg text-[#502314] font-[500] font-[flame]">
                  274 Ajose adeogun
                </h1>
                <h4 className="font-[900] font-[flame] text-[#d72300] mt-2">
                  Show on map
                </h4>
              </button>
            </div>

            <div className="w-full sm:w-[310px] m-2 sm:m-3">
              <button className="w-full text-left p-3 sm:p-4 border-2 border-transparent hover:border-orange-300 transition ease-out duration-400 bg-white rounded-md">
                <h1 className="text-lg sm:text-xl hover:text-[#d72300] font-[900] font-[flame] text-[#502314] tracking-tight mt-2">
                  Victoria Island
                </h1>
                <h1 className="text-base sm:text-lg text-[#502314] font-[500] font-[flame]">
                  274 Ajose adeogun
                </h1>
                <h4 className="font-[900] font-[flame] text-[#d72300] mt-2">
                  Show on map
                </h4>
              </button>
            </div>

            <div className="w-full sm:w-[310px] m-2 sm:m-3">
              <button className="w-full text-left p-3 sm:p-4 border-2 border-transparent hover:border-orange-300 transition ease-out duration-400 bg-white rounded-md">
                <h1 className="text-lg sm:text-xl hover:text-[#d72300] font-[900] font-[flame] text-[#502314] tracking-tight mt-2">
                  Victoria Island
                </h1>
                <h1 className="text-base sm:text-lg text-[#502314] font-[500] font-[flame]">
                  274 Ajose adeogun
                </h1>
                <h4 className="font-[900] font-[flame] text-[#d72300] mt-2">
                  Show on map
                </h4>
              </button>
            </div>
            <div className="w-full sm:w-[310px] m-2 sm:m-3">
              <button className="w-full text-left p-3 sm:p-4 border-2 border-transparent hover:border-orange-300 transition ease-out duration-400 bg-white rounded-md">
                <h1 className="text-lg sm:text-xl hover:text-[#d72300] font-[900] font-[flame] text-[#502314] tracking-tight mt-2">
                  Victoria Island
                </h1>
                <h1 className="text-base sm:text-lg text-[#502314] font-[500] font-[flame]">
                  274 Ajose adeogun
                </h1>
                <h4 className="font-[900] font-[flame] text-[#d72300] mt-2">
                  Show on map
                </h4>
              </button>
            </div>
            <div className="w-full sm:w-[310px] m-2 sm:m-3">
              <button className="w-full text-left p-3 sm:p-4 border-2 border-transparent hover:border-orange-300 transition ease-out duration-400 bg-white rounded-md">
                <h1 className="text-lg sm:text-xl hover:text-[#d72300] font-[900] font-[flame] text-[#502314] tracking-tight mt-2">
                  Victoria Island
                </h1>
                <h1 className="text-base sm:text-lg text-[#502314] font-[500] font-[flame]">
                  274 Ajose adeogun
                </h1>
                <h4 className="font-[900] font-[flame] text-[#d72300] mt-2">
                  Show on map
                </h4>
              </button>
            </div>

            <div className="w-full sm:w-[310px] m-2 sm:m-3">
              <button className="w-full text-left p-3 sm:p-4 border-2 border-transparent hover:border-orange-300 transition ease-out duration-400 bg-white rounded-md">
                <h1 className="text-lg sm:text-xl hover:text-[#d72300] font-[900] font-[flame] text-[#502314] tracking-tight mt-2">
                  Victoria Island
                </h1>
                <h1 className="text-base sm:text-lg text-[#502314] font-[500] font-[flame]">
                  274 Ajose adeogun
                </h1>
                <h4 className="font-[900] font-[flame] text-[#d72300] mt-2">
                  Show on map
                </h4>
              </button>
            </div>

            <div className="w-full sm:w-[310px] m-2 sm:m-3">
              <button className="w-full text-left p-3 sm:p-4 border-2 border-transparent hover:border-orange-300 transition ease-out duration-400 bg-white rounded-md">
                <h1 className="text-lg sm:text-xl hover:text-[#d72300] font-[900] font-[flame] text-[#502314] tracking-tight mt-2">
                  Victoria Island
                </h1>
                <h1 className="text-base sm:text-lg text-[#502314] font-[500] font-[flame]">
                  274 Ajose adeogun
                </h1>
                <h4 className="font-[900] font-[flame] text-[#d72300] mt-2">
                  Show on map
                </h4>
              </button>
            </div>

            <div className="w-full sm:w-[310px] m-2 sm:m-3">
              <button className="w-full text-left p-3 sm:p-4 border-2 border-transparent hover:border-orange-300 transition ease-out duration-400 bg-white rounded-md">
                <h1 className="text-lg sm:text-xl hover:text-[#d72300] font-[900] font-[flame] text-[#502314] tracking-tight mt-2">
                  Victoria Island
                </h1>
                <h1 className="text-base sm:text-lg text-[#502314] font-[500] font-[flame]">
                  274 Ajose adeogun
                </h1>
                <h4 className="font-[900] font-[flame] text-[#d72300] mt-2">
                  Show on map
                </h4>
              </button>
            </div>

            <div className="w-full sm:w-[310px] m-2 sm:m-3">
              <button className="w-full text-left p-3 sm:p-4 border-2 border-transparent hover:border-orange-300 transition ease-out duration-400 bg-white rounded-md">
                <h1 className="text-lg sm:text-xl hover:text-[#d72300] font-[900] font-[flame] text-[#502314] tracking-tight mt-2">
                  Victoria Island
                </h1>
                <h1 className="text-base sm:text-lg text-[#502314] font-[500] font-[flame]">
                  274 Ajose adeogun
                </h1>
                <h4 className="font-[900] font-[flame] text-[#d72300] mt-2">
                  Show on map
                </h4>
              </button>
            </div>
            <div className="w-full sm:w-[310px] m-2 sm:m-3">
              <button className="w-full text-left p-3 sm:p-4 border-2 border-transparent hover:border-orange-300 transition ease-out duration-400 bg-white rounded-md">
                <h1 className="text-lg sm:text-xl hover:text-[#d72300] font-[900] font-[flame] text-[#502314] tracking-tight mt-2">
                  Victoria Island
                </h1>
                <h1 className="text-base sm:text-lg text-[#502314] font-[500] font-[flame]">
                  274 Ajose adeogun
                </h1>
                <h4 className="font-[900] font-[flame] text-[#d72300] mt-2">
                  Show on map
                </h4>
              </button>
            </div>
            <div className="w-full sm:w-[310px] m-2 sm:m-3">
              <button className="w-full text-left p-3 sm:p-4 border-2 border-transparent hover:border-orange-300 transition ease-out duration-400 bg-white rounded-md">
                <h1 className="text-lg sm:text-xl hover:text-[#d72300] font-[900] font-[flame] text-[#502314] tracking-tight mt-2">
                  Victoria Island
                </h1>
                <h1 className="text-base sm:text-lg text-[#502314] font-[500] font-[flame]">
                  274 Ajose adeogun
                </h1>
                <h4 className="font-[900] font-[flame] text-[#d72300] mt-2">
                  Show on map
                </h4>
              </button>
            </div>

            <div className="w-full sm:w-[310px] m-2 sm:m-3">
              <button className="w-full text-left p-3 sm:p-4 border-2 border-transparent hover:border-orange-300 transition ease-out duration-400 bg-white rounded-md">
                <h1 className="text-lg sm:text-xl hover:text-[#d72300] font-[900] font-[flame] text-[#502314] tracking-tight mt-2">
                  Victoria Island
                </h1>
                <h1 className="text-base sm:text-lg text-[#502314] font-[500] font-[flame]">
                  274 Ajose adeogun
                </h1>
                <h4 className="font-[900] font-[flame] text-[#d72300] mt-2">
                  Show on map
                </h4>
              </button>
            </div>

            <div className="w-full sm:w-[310px] m-2 sm:m-3">
              <button className="w-full text-left p-3 sm:p-4 border-2 border-transparent hover:border-orange-300 transition ease-out duration-400 bg-white rounded-md">
                <h1 className="text-lg sm:text-xl hover:text-[#d72300] font-[900] font-[flame] text-[#502314] tracking-tight mt-2">
                  Victoria Island
                </h1>
                <h1 className="text-base sm:text-lg text-[#502314] font-[500] font-[flame]">
                  274 Ajose adeogun
                </h1>
                <h4 className="font-[900] font-[flame] text-[#d72300] mt-2">
                  Show on map
                </h4>
              </button>
            </div>
          </div>
        </div>
        <div>
        <div>
      <div className="mt-12 flex items-center justify-between gap-4 sm:gap-10 fixed top-0 z-50 w-full bg-[#f5ebdc] shadow-md h-12 px-4 sm:px-8">
        <div className="flex font-[900] font-[flame] text-lg sm:text-2xl gap-4 sm:gap-10">
          <div>
            <button>Burger</button>
          </div>
          <div>
            <button>Sides</button>
          </div>
          <div>
            <button>Drinks</button>
          </div>
          <div>
            <button>Desserts</button>
          </div>
        </div>
        <div className="flex items-center font-[900] font-[flame] text-lg sm:text-2xl bg-[#502314] rounded-full text-white p-1 sm:p-2">
          <div>
            <Link to="/cart">
              <CiShoppingCart />
            </Link>
          </div>
          <h1>
            <Link to="/cart">cart {cartCount}</Link>
          </h1>
        </div>
        <div></div>
      </div>
      <ProductList cartCount={cartCount} setCartCount={setCartCount} />
    </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Restaurants;
