import React from "react";
import { Link } from "react-router-dom";
import Headers from "../shared-components/headers";
import Footer from "../shared-components/footer";

function News() {
  return (
    <div className="bg-[#f5ebdc]">
      <Headers />
      <div className="font-[900] font-[flame] text-2xl pt-32 w-[90%] m-[auto] text-center md:text-left">
        News
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-[90%] mx-auto mt-5 mb-20">
        <div>
          <div className="w-full h-[230px]">
            <img
              src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-bk-nigeria/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/12/New-Sides-Intro-Blog-1.jpg"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <h1 className="font-[900] font-[flame] text-2xl mt-5">
              NEW SIDES ALERT!!!
            </h1>
            <h3 className="font-[900] font-[flame] tracking-tight mt-1">
              Burger King has introduced NEW SIDES to the BK SIDES GENG
            </h3>
          </div>
        </div>
        <div>
          <div className="w-full h-[230px]">
            <img
              src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-bk-nigeria//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/12/meet-the-long-kings.jpg"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <h1 className="font-[900] font-[flame] text-2xl mt-5">
              WHAT’S BETTER THAN
            </h1>
            <h3 className="font-[900] font-[flame] tracking-tight mt-2">
              Burger King is now Grilling in Nigeria and the Whopper has a new
              Home!!
            </h3>
          </div>
        </div>
        <div>
          <div className="w-full h-[230px] shadow-md">
            <img
              src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/Artboard-1best-sellers-1.jpg"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <h1 className="font-[900] font-[flame] text-2xl mt-5">
              Best Sellers of the{" "}
            </h1>
            <h3 className="font-[900] font-[flame] tracking-tight mt-2">
              Say Hello to our Best Sellers of the month - The Whopper,
              Steakhouse, and the Big King.
            </h3>
          </div>
        </div>
        <div>
          <div className="w-full h-[230px] pt-4">
            <img
              src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/news-card.jpg"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <h1 className="font-[900] font-[flame] text-2xl mt-5">
              THE WHOPPER HAS A NEW
            </h1>
            <h3 className="font-[900] font-[flame] tracking-tight mt-2">
              Burger King is now Grilling in Nigeria and the Whopper has a new
              Home!!
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
  
}

export default News;
