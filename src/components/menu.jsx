import React from "react";
import { Link } from "react-router-dom";
import Header from "../shared-components/header";
import Footer from "../shared-components/footer";

function Menu() {
    return(
      <div className=" ">
      <Header />
      <div className="pt-40 bg-[#f5ebdc]">
        <div className="font-[Flame-Bold] font-[900] w-[90%] m-[auto]">
          <h1>
            <Link to="/home">HOME</Link> / <Link className="text-[#d72300] sm:pt-52">MENU</Link>
          </h1>
        </div>
        <div className="font-[Flame-Bold] font-[900] w-[90%] m-[auto] mt-20 text-2xl md:text-3xl">
          <h1>Flame Grilled Burgers</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] m-[auto] mt-10">
          <div className="group">
            <div className="w-full max-w-[355px] transition-transform duration-300 ease-in-out group-hover:scale-110 pt-3 mx-auto">
              <img
                src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/Whopper-Sandw-1024x659.jpg"
                alt="Whopper"
                className="w-full h-full"
              />
            </div>
            <h1 className="font-[Flame-Bold] font-[900] text-xl md:text-2xl mt-7 text-center md:text-left md:ml-28">
              Whopper
            </h1>
          </div>
          <div className="group">
            <div className="w-full max-w-[355px] transition-transform duration-300 ease-in-out group-hover:scale-110 pt-3 mx-auto">
              <img
                src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/steakhouses-1024x659.jpg"
                alt="Steakhouse"
                className="w-full h-full"
              />
            </div>
            <h1 className="font-[Flame-Bold] font-[900] text-xl md:text-2xl mt-7 text-center md:text-left md:ml-28">
              Steakhouse
            </h1>
          </div>
          <div className="group">
  <div className="w-full max-w-[355px] sm:max-w-[400px] transition-transform duration-300 ease-in-out group-hover:scale-110 pt-3 mx-auto">
    <img
      src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-bk-nigeria//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/12/big-king-middle-bun-1024x659.jpeg"
      alt="Big King"
      className="w-full h-full"
    />
  </div>
  <h1 className="font-[Flame-Bold] font-[900] text-xl sm:text-2xl mt-7 text-center sm:text-left sm:ml-28">
    Big King
  </h1>
</div>

<div className="group">
  <div className="w-full max-w-[355px] sm:max-w-[400px] transition-transform duration-300 ease-in-out group-hover:scale-110 pt-3 mx-auto">
    <img
      src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/08/769_DOUBLE-WHOPPER.jpg"
      alt="Double Whopper"
      className="w-full h-full"
    />
  </div>
  <h1 className="font-[Flame-Bold] font-[900] text-xl sm:text-2xl mt-7 text-center sm:text-left sm:ml-28">
    Double Whopper
  </h1>
</div>

<div className="group">
  <div className="w-full max-w-[355px] sm:max-w-[350px] transition-transform duration-300 ease-in-out group-hover:scale-110 pt-3 mx-auto">
    <img
      src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/double-steakhouse-wi-1024x659.jpg"
      alt="Double Steakhouse"
      className="w-full h-full"
    />
  </div>
  <h1 className="font-[Flame-Bold] font-[900] text-xl sm:text-2xl mt-7 text-center sm:text-left sm:ml-28">
    Double Steakhouse
  </h1>
</div>

<div className="group">
  <div className="w-full max-w-[355px] sm:max-w-[350px] transition-transform duration-300 ease-in-out group-hover:scale-110 pt-3 mx-auto">
    <img
      src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/big-king-xxlw-1024x659.jpg"
      alt="Big King XXL"
      className="w-full h-full"
    />
  </div>
  <h1 className="font-[Flame-Bold] font-[900] text-xl sm:text-2xl mt-7 text-center sm:text-left sm:ml-28">
    Big King XXL
  </h1>
</div>

<div className="group">
  <div className="w-full max-w-[355px] sm:max-w-[350px] transition-transform duration-300 ease-in-out group-hover:scale-110 pt-3 mx-auto">
    <img
      src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/whopper-jnr-1024x659.jpg"
      alt="Whopper Jr"
      className="w-full h-full"
    />
  </div>
  <h1 className="font-[Flame-Bold] font-[900] text-xl sm:text-2xl mt-7 text-center sm:text-left sm:ml-28">
    Whopper Jr
  </h1>
</div>

<div className="group">
  <div className="w-full max-w-[355px] sm:max-w-[350px] transition-transform duration-300 ease-in-out group-hover:scale-110 pt-3 mx-auto">
    <img
      src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/cheeseburger-sandwich-1024x659.jpg"
      alt="Cheeseburger"
      className="w-full h-full"
    />
  </div>
  <h1 className="font-[Flame-Bold] font-[900] text-xl sm:text-2xl mt-7 text-center sm:text-left sm:ml-28">
    Cheeseburger
  </h1>
</div>

<div className="group">
  <div className="w-full max-w-[355px] sm:max-w-[350px] transition-transform duration-300 ease-in-out group-hover:scale-110 pt-3 mx-auto">
    <img
      src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/hamburger-1024x659.jpg"
      alt="Hamburger"
      className="w-full h-full"
    />
  </div>
  <h1 className="font-[Flame-Bold] font-[900] text-xl sm:text-2xl mt-7 text-center sm:text-left sm:ml-28">
    Hamburger
  </h1>
</div><div className="group">
  <div className="w-[350px] sm:w-[300px] md:w-[250px] lg:w-[350px] transition-transform duration-300 ease-in-out group-hover:scale-110 pt-3">
    <img
      src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/hamburger-1024x659.jpg"
      alt="Whopper"
      className="w-full h-full"
    />
  </div>
  <h1 className="font-[Flame-Bold] font-[900] text-lg md:text-xl lg:text-2xl mt-7 ml-auto text-center lg:ml-28">
    Double Cheeseburger
  </h1>
</div>

     </div>
     <div className="font-[Flame-Bold] font-[900] w-[90%] m-[auto] mt-20 text-2xl md:text-3xl">
  <h1>Chicken Burgers</h1>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-[90%] m-auto">
  <div className="group">
    <div className="w-full md:w-[345px] transition-transform duration-300 ease-in-out group-hover:scale-110 pt-3">
      <img
        src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/original-chicken-1-1024x659.jpg"
        alt="Whopper"
        className="w-full h-full"
      />
    </div>
    <h1 className="font-[Flame-Bold] font-[900] text-xl md:text-2xl mt-7  md:text-left md:ml-28">
      Chicken Royale
    </h1>
  </div>
  
  <div className="group">
    <div className="w-full md:w-[225px] transition-transform duration-300 ease-in-out group-hover:scale-110 pt-3">
      <img
        src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-bk-nigeria/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/12/King-Fillet-.png"
        alt="Whopper"
        className="w-full h-full"
      />
    </div>
    <h1 className="font-[Flame-Bold] font-[900] text-xl md:text-2xl mt-7 text-center md:text-left md:ml-28">
      King Chicken Fillet
    </h1>
  </div>
  
  <div className="group">
    <div className="w-full md:w-[350px] transition-transform duration-300 ease-in-out group-hover:scale-110 pt-3">
      <img
        src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/crispy-chicken-main-1024x659.jpg"
        alt="Whopper"
        className="w-full h-full"
      />
    </div>
    <h1 className="font-[Flame-Bold] font-[900] text-xl md:text-2xl mt-7 text-center md:text-left md:ml-28">
      Crispy Chicken
    </h1>
  </div>
            </div>
            <div className="font-[Flame-Bold] font-[900] w-[90%] m-[auto] mt-20 text-2xl md:text-3xl">
                <h1>Sides</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-[90%] m-[auto]">
            <div className="group">
                  <div className="w-[230px] ml-8 transition-transform duration-300 ease-in-out group-hover:scale-110 pt-3">
                    <img
                      src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-bk-nigeria/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/12/Plantain-Cubes-Regular-1024x1024.png"
                      alt="Whopper"
                        className="w-full h-full"
                           />
                        </div>
                       <h1 className="font-[Flame-Bold] font-[900] text-2xl mt-7 ml-24">
                         Plantain Cubes
                      </h1>
                </div>
                <div className="group">
                  <div className="w-[230px] ml-12 transition-transform duration-300 ease-in-out group-hover:scale-110 pt-3">
                    <img
                      src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-bk-nigeria/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/12/Potato-Cubes-Regular-1024x1024.png"
                      alt="Whopper"
                        className="w-full h-full"
                           />
                        </div>
                       <h1 className="font-[Flame-Bold] font-[900] text-2xl mt-7 ml-28">
                         Potato Cubes
                      </h1>
                </div>
                <div className="group">
                  <div className="w-[230px] ml-10 transition-transform duration-300 ease-in-out group-hover:scale-110 pt-3">
                    <img
                      src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-bk-nigeria/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/12/Yam-Fries-Regular-1024x1024.png"
                      alt="Whopper"
                        className="w-full h-full"
                           />
                        </div>
                       <h1 className="font-[Flame-Bold] font-[900] text-2xl mt-7 ml-28">
                         Yam Fries
                      </h1>
                </div>

                <div className="group">
                  <div className="w-[350px] transition-transform duration-300 ease-in-out group-hover:scale-110 pt-3">
                    <img
                      src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/chicken-wings-1024x659.jpg"
                      alt="Whopper"
                        className="w-full h-full"
                           />
                        </div>
                       <h1 className="font-[Flame-Bold] font-[900] text-2xl mt-7 ml-28">
                         Chicken Wings
                      </h1>
                </div>
                <div className="group">
                  <div className="w-[350px] transition-transform duration-300 ease-in-out group-hover:scale-110 pt-3">
                    <img
                      src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/chili-cheese-1024x659.jpg"
                      alt="Whopper"
                        className="w-full h-full"
                           />
                        </div>
                       <h1 className="font-[Flame-Bold] font-[900] text-2xl mt-7 ml-28">
                         Cheesy Bites
                      </h1>
                </div>
                <div className="group">
                  <div className="w-[350px] transition-transform duration-300 ease-in-out group-hover:scale-110 pt-3">
                    <img
                      src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/chicken-nuggets-1024x659.jpg"
                      alt="Whopper"
                        className="w-full h-full"
                           />
                        </div>
                       <h1 className="font-[Flame-Bold] font-[900] text-2xl mt-7 ml-28">
                         Chicken Nuggets
                      </h1>
                </div>
                <div className="group">
                  <div className="w-[350px] transition-transform duration-300 ease-in-out group-hover:scale-110 pt-3">
                    <img
                      src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/onion-rings-1024x659.jpg"
                      alt="Whopper"
                        className="w-full h-full"
                           />
                        </div>
                       <h1 className="font-[Flame-Bold] font-[900] text-2xl mt-7 ml-28">
                         Onion Rings
                      </h1>
                </div>
                <div className="group">
                  <div className="w-[350px] transition-transform duration-300 ease-in-out group-hover:scale-110 pt-3">
                    <img
                      src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/fries-1024x659.jpg"
                      alt="Whopper"
                        className="w-full h-full"
                           />
                        </div>
                       <h1 className="font-[Flame-Bold] font-[900] text-2xl mt-7 ml-28">
                         BK Fries
                      </h1>
                </div>
            </div>
            <div className=" font-[Flame-Bold] font-[900] w-[90%] m-[auto] mt-10 text-3xl">
                <h1>Drinks</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-[90%] m-[auto]">
            <div className="group">
                  <div className="w-[350px] transition-transform duration-300 ease-in-out group-hover:scale-110 pt-3">
                    <img
                      src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/eva-water-1024x659.jpg"
                      alt="Whopper"
                        className="w-full h-full"
                           />
                        </div>
                       <h1 className="font-[Flame-Bold] font-[900] text-2xl mt-7 ml-28">
                         Eva Water
                      </h1>
                </div>
                <div className="group">
                  <div className="w-[350px] transition-transform duration-300 ease-in-out group-hover:scale-110 pt-3">
                    <img
                      src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/sprite-1024x659.jpg"
                      alt="Whopper"
                        className="w-full h-full"
                           />
                        </div>
                       <h1 className="font-[Flame-Bold] font-[900] text-2xl mt-7 ml-36">
                         Sprite
                      </h1>
                </div>
                <div className="group">
                  <div className="w-[350px] transition-transform duration-300 ease-in-out group-hover:scale-110 pt-3">
                    <img
                      src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/coke-1024x659.jpg"
                      alt="Whopper"
                        className="w-full h-full"
                           />
                        </div>
                       <h1 className="font-[Flame-Bold] font-[900] text-2xl mt-7 ml-36">
                         Coke
                      </h1>
                </div>
            </div>
            <div className=" font-[Flame-Bold] font-[900] w-[90%] m-[auto] mt-10 text-3xl">
                <h1>Desserts</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-[90%] m-[auto]">
            <div className="group">
                  <div className="w-[350px] transition-transform duration-300 ease-in-out group-hover:scale-110 pt-3">
                    <img
                      src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/caramel-sundae-1024x659.jpg"
                      alt="Whopper"
                        className="w-full h-full"
                           />
                        </div>
                       <h1 className="font-[Flame-Bold] font-[900] text-2xl mt-7 ml-28">
                         Caramel Sundae
                      </h1>
                </div>
                <div className="group">
                  <div className="w-[350px] transition-transform duration-300 ease-in-out group-hover:scale-110 pt-3">
                    <img
                      src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/strawberry-sundae-1024x659.jpg"
                      alt="Whopper"
                        className="w-full h-full"
                           />
                        </div>
                       <h1 className="font-[Flame-Bold] font-[900] text-2xl mt-7 ml-28">
                         Strawberry Sundae
                      </h1>
                </div>
                <div className="group">
                  <div className="w-[350px] transition-transform duration-300 ease-in-out group-hover:scale-110 pt-3">
                    <img
                      src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/chocolate-sundae-1024x659.jpg"
                      alt="Whopper"
                        className="w-full h-full"
                           />
                        </div>
                       <h1 className="font-[Flame-Bold] font-[900] text-2xl mt-7 ml-28">
                         Chocolate sundae
                      </h1>
                </div>
                <div className="group">
                  <div className="w-[350px] transition-transform duration-300 ease-in-out group-hover:scale-110 pt-3 ">
                    <img
                      src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/kit-kat-fusion-1024x659.jpg"
                      alt="Whopper"
                        className="w-full h-full"
                           />
                        </div>
                       <h1 className="font-[Flame-Bold] font-[900] text-2xl mt-7 ml-28 pb-24">
                         Kit Kat Fusion
                      </h1>
                </div>
            </div>
         </div>
         <Footer/>
        </div>
    )
}
export default Menu