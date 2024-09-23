import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Headers from "../shared-components/headers";
import { CiLocationArrow1 } from "react-icons/ci";
import Footer from "../shared-components/footer";

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      };
    
      return (

        <div className="bg-[#f5ebdc]">
        <Headers />
        <div className="w-full mx-auto">
          <Slider {...settings}>
            <div>
              <img
                src="https://burgerkingmenus.com/wp-content/uploads/2024/05/Is-Burger-King-Running-Any-Specials-Today.webp"
                alt="Image 1"
                className="w-full h-[430px] sm:h-[350px] md:h-[400px] lg:h-[430px] object-cover rounded-lg" 
                style={{ backgroundPosition: 'center' }}
              />
            </div>
            <div>
              <img
                src="https://menuspricesph.com/wp-content/uploads/2024/03/imgonline-com-ua-Compressed-dYKKCcO0Fv3-1536x864.webp"
                alt="Image 2"
                className="w-full h-[430px] sm:h-[350px] md:h-[400px] lg:h-[430px] object-cover rounded-lg"
                style={{ backgroundPosition: 'center' }}
              />
            </div>
            <div>
              <img
                src="https://burgerkingmenus.com/wp-content/uploads/2024/05/Is-Burger-King-Running-Any-Specials-Today.webp"
                alt="Image 3"
                className="w-full h-[430px] sm:h-[350px] md:h-[400px] lg:h-[430px] object-cover rounded-lg"
                style={{ backgroundPosition: 'center' }}
              />
            </div>
            <div>
              <img
                src="https://external-preview.redd.it/8zCPNNpqYMiHuEvhQ_hrh087Oow1nJ7Xlu7ls93RXPo.jpg?width=640&crop=smart&auto=webp&s=225814c0fdf042b36d2d13adafbdf6467611c64c"
                alt="Image 4"
                className="w-full h-[430px] sm:h-[350px] md:h-[400px] lg:h-[430px] object-cover rounded-lg"
                style={{ backgroundPosition: 'center' }}
              />
            </div>
          </Slider>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center bg-[#eddec7] w-[90%] mt-6 mx-auto gap-8 lg:gap-[200px] pt-10 mb-9 rounded">
          <div className="ml-5 lg:ml-14 pb-10">
            <h1 className="font-[900] font-[flame] text-2xl md:text-3xl pb-4">Store locator</h1>
            <h3 className="font-[900] font-[flame] pb-5">Find a location nearby</h3>
            <div className="flex items-center bg-white w-full sm:w-[470px] shadow-md h-14 rounded">
              <input 
                type="text" 
                placeholder="Your address" 
                className="outline-none w-[70%] sm:w-[400px] font-[flame] font-[700] text-black placeholder:text-black pl-4" 
              />
              <div className="pr-2 font-[900]">
                <CiLocationArrow1 className="text-2xl" />
              </div>
            </div>
          </div>
          <div className="w-[80%] sm:w-[210px] pb-10">
            <img src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/08/BK_ILLUSTRATION_PICKLE_EYE_MASK_ST_FC_RGB-2-1-1.png" 
                 alt="" 
                 className="w-full h-full object-cover" />
          </div>
        </div>
        
        <div className="bg-[#d72300] h-auto lg:h-[505px]">
          <div className="flex flex-col lg:flex-row items-center w-[87%] mx-auto gap-8 lg:gap-28">
            <div className="w-full lg:w-[300px] h-auto lg:h-[500px] pl-12">
              <img 
                src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-bk-nigeria/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/12/new-phone.png" 
                className="w-full h-full object-cover" 
                alt="" 
                style={{ paddingTop: '70px' }} 
              />
            </div>
            <div className="text-center lg:text-left">
              <div className="font-[900] font-[flame] text-3xl sm:text-4xl lg:text-6xl mt-6 lg:mt-14 text-white lg:ml-12">
                <h1 className="mb-2">Download our app and</h1>
                <h1 className="mb-2">discover the incredible</h1>
                <h1 className="mb-7">offers we have for you!</h1>
              </div>
              <div className="flex justify-center lg:justify-start gap-8 lg:ml-11">
                <div className="w-[120px] sm:w-[150px]"><Link to='https://play.google.com/store/apps/details?id=ng.burgerking&pcampaignid=web_share'><img src="https://www.goajo.com/image/app/android.svg" alt="" /></Link></div>
                <div className="w-[120px] sm:w-[150px]"><Link  to='https://apps.apple.com/ng/app/burger-king-nigeria/id1580902175'><img src="https://www.goajo.com/image/app/ios.svg" alt="" /></Link></div>
              </div>
              <div className="text-xs sm:text-sm font-[100] font-[flame] mt-5 text-white lg:ml-9 tracking-tight">
                <p>Apple and the Apple logo are trademarks of Apple Inc., registered in the US and other countries. App Store is a</p>
                <p>service mark of Apple Inc. Google Play is a trademark of Google Inc. Terms and Conditions apply.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="font-[900] font-[flame] text-2xl sm:text-3xl mt-5 w-[90%] mx-auto">News</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-[90%] mx-auto mt-5 mb-20">
          <div>
            <div className="w-full h-[240px]">
              <img 
                src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-bk-nigeria//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/12/meet-the-long-kings.jpg" 
                alt="" 
                className="w-full h-full object-cover rounded-lg" 
              />
            </div>
            <div>
              <h1 className="font-[900] font-[flame] text-2xl mt-5">WHAT'S BETTER THAN ONE KING?</h1>
              <h3 className="font-[900] font-[flame] tracking-tight mt-1">
                Burger King is now Grilling in Nigeria and the Whopper has a new home
              </h3>
            </div>
          </div>
          <div>
            <div className="w-full h-[240px]">
              <img 
                src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-bk-nigeria/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/12/New-Sides-Intro-Blog-1.jpg" 
                alt="" 
                className="w-full h-full object-cover rounded-lg" 
              />
            </div>
            <div>
              <h1 className="font-[900] font-[flame] text-2xl mt-5">NEW SIDES ALERT!!</h1>
              <h3 className="font-[900] font-[flame] tracking-tight mt-2">Burger King has introduced NEW SIDES to the BK SIDE GENG</h3>
            </div>
          </div>
          <div>
            <div className="w-full h-[240px]">
              <img 
                src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-bk-nigeria/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/12/Artboard-15-20.jpg" 
                alt="" 
                className="w-full h-full object-cover rounded-lg" 
              />
            </div>
            <div>
              <h1 className="font-[900] font-[flame] text-2xl mt-5">INTRODUCING THE SIDE KINGS!</h1>
              <h3 className="font-[900] font-[flame] tracking-tight mt-1">
                Check out the BK SIDE KINGS with more sides like Chicken Fries, Cheesy Loaded Fries and our Mozzarella Cheese Sticks.
              </h3>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
      
      );
};
  
  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 transform -translate-y-1/2 right-4 text-white bg-gray-800 bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    );
  };
  
  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 transform -translate-y-1/2 left-4 text-white bg-gray-800 bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
    );
};
  
  export default Home;
  