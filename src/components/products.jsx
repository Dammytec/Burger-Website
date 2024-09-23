import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useState, useEffect } from "react";

/*const products = [
  /*  {
      imgSrc: "https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/Whopper-Sandw-1024x659.jpg",
      title: "Whoppy",
      time: "10 - 20mins",
      price: "&#8358;1200",
    },
    {
      imgSrc: "https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/steakhouses-1024x659.jpg",
      title: "Steakhouse",
      time: "10 - 20mins",
      price: "&#8358;1200",
    },
    {
      imgSrc: "https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-bk-nigeria//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/12/big-king-middle-bun-1024x659.jpeg",
      title: "Big King",
      time: "10 - 20mins",
      price: "&#8358;1200",
    },
    {
      imgSrc: "https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/08/769_DOUBLE-WHOPPER.jpg",
      title: "Double Whopper",
      time: "10 - 20mins",
      price: "&#8358;1200",
    },
    {
      imgSrc: "https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/double-steakhouse-wi-1024x659.jpg",
      title: "Double Steakhouse",
      time: "10 - 20mins",
      price: "&#8358;1200",
    },
    {
      imgSrc: "https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/big-king-xxlw-1024x659.jpg",
      title: "Big King XXL",
      time: "10 - 20mins",
      price: "&#8358;1200",
    },
    {
      imgSrc: "https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/whopper-jnr-1024x659.jpg",
      title: "Whopper Jr",
      time: "10 - 20mins",
      price: "&#8358;1200",
    },
    {
      imgSrc: "https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/cheeseburger-sandwich-1024x659.jpg",
      title: "Cheeseburger",
      time: "10 - 20mins",
      price: "&#8358;1200",
    },
    {
      imgSrc: "https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/hamburger-1024x659.jpg",
      title: "Hamburger",
      time: "10 - 20mins",
      price: "&#8358;1200",
    },
    {
      imgSrc: "https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/hamburger-1024x659.jpg",
      title: "Double Cheeseburger",
      time: "10 - 20mins",
      price: "&#8358;1200",
    },
    {
      imgSrc: "https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/original-chicken-1-1024x659.jpg",
      title: "Chicken Royale",
      time: "10 - 20mins",
      price: "&#8358;1200",
    },
    {
      imgSrc: "https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-bk-nigeria/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/12/King-Fillet-.png",
      title: "Chicken Fillet",
      time: "10 - 20mins",
      price: "&#8358;1200",
    },
    {
      imgSrc: "https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/crispy-chicken-main-1024x659.jpg",
      title: "Crispy Chicken",
      time: "10 - 20mins",
      price: "&#8358;1200",
    },
    {
      imgSrc: "https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-bk-nigeria/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/12/Plantain-Cubes-Regular-1024x1024.png",
      title: "Plantain Cubes",
      time: "10 - 20mins",
      price: "&#8358;1200",
    },
    {
      imgSrc: "https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-bk-nigeria/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/12/Potato-Cubes-Regular-1024x1024.png",
      title: "Potato Cubes",
      time: "10 - 20mins",
      price: "&#8358;1200",
    },
    {
      imgSrc: "https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-bk-nigeria/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/12/Yam-Fries-Regular-1024x1024.png",
      title: "Yam Fries",
      time: "10 - 20mins",
      price: "&#8358;1200",
    },
    {
      imgSrc: "https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/chicken-wings-1024x659.jpg",
      title: "Chicken Wings",
      time: "10 - 20mins",
      price: "&#8358;1200",
    },
    {
      imgSrc: "https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/chili-cheese-1024x659.jpg",
      title: "Cheesy Bites",
      time: "10 - 20mins",
      price: "&#8358;1200",
    },
    {
        imgSrc: "https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/chicken-nuggets-1024x659.jpg",
        title: "Chicken Nuggets",
        time: "10 - 20mins",
        price: "&#8358;1200",
      },
      {
        imgSrc: "https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/onion-rings-1024x659.jpg",
        title: "Onion Rings",
        time: "10 - 20mins",
        price: "&#8358;1200",
      },
      {
        imgSrc: "https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/fries-1024x659.jpg",
        title: "BK Fries",
        time: "10 - 20mins",
        price: "&#8358;1200",
      },
      {
        imgSrc: "https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/eva-water-1024x659.jpg",
        title: "Eva Water",
        time: "10 - 20mins",
        price: "&#8358;1200",
      },
      {
        imgSrc: "https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/sprite-1024x659.jpg",
        title: "Sprite",
        time: "10 - 20mins",
        price: "&#8358;1200",
      },
      {
        imgSrc: "https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/coke-1024x659.jpg",
        title: "Coke",
        time: "10 - 20mins",
        price: "&#8358;1200",
      },
      {
        imgSrc: "https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/caramel-sundae-1024x659.jpg",
        title: "Caramel Sundae",
        time: "10 - 20mins",
        price: "&#8358;1200",
      },
      {
        imgSrc: "https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/strawberry-sundae-1024x659.jpg",
        title: "Strawberry Sundae",
        time: "10 - 20mins",
        price: "&#8358;1200",
      },
      {
        imgSrc: "https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/chocolate-sundae-1024x659.jpg",
        title: "Chocolate sundae",
        time: "10 - 20mins",
        price: "&#8358;1200",
      },
      {
        imgSrc: "https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/kit-kat-fusion-1024x659.jpg",
        title: "Kit Kat Fusion",
        time: "10 - 20mins",
        price: "&#8358;1200",
      },*/
      import { CiShoppingCart } from 'react-icons/ci';

      const ProductList = ({ cartCount, setCartCount }) => {
        const [products, setProducts] = useState([]);
      
        useEffect(() => {
          const fetchProducts = async () => {
            try {
              const response = await axios.get('http://localhost:5000/product/get-products');
              setProducts(response.data);
            } catch (error) {
              console.error('Error fetching products:', error);
            }
          };
      
          fetchProducts();
        }, []);
      
        const addToCart = async (productId, quantity) => {
          const token = JSON.parse(localStorage.getItem('token'));
      
          if (!token) {
            console.error('No token found in local storage');
            return;
          }
      
          try {
            const response = await axios.post('http://localhost:5000/cart/cart',
              { productId, quantity },
              {
                headers: {
                  'Authorization': `Bearer ${token}`,
                },
              }
            );
            console.log('Add to cart response:', response);
      
            // Update cart count
            const newCartCount = cartCount + quantity;
            setCartCount(newCartCount);
            localStorage.setItem('cartCount', newCartCount);
          } catch (error) {
            console.error('Error adding to cart:', error.response ? error.response.data : error.message);
          }
        };
      
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-32 gap-10 w-full m-auto">
            {products.length > 0 ? (
              products.map((product, index) => (
                <div key={index} className="bg-[#f5ebdc] shadow-md mt-10 w-full sm:w-[250px]">
                  <div className="w-full sm:w-[250px]">
                    <img
                      src={product.imgSrc}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h1 className="text-center text-2xl font-[900] font-[flame] text-[#502314]">
                    {product.title}
                  </h1>
                  <div className="flex justify-between px-4">
                    <h2 className="font-[800] font-[flame] text-[#502314] text-xl">
                      {product.time}
                    </h2>
                    <h1
                      className="font-[900] text-[#d72300] text-xl"
                      dangerouslySetInnerHTML={{ __html: product.price }}
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      defaultValue={1} min={1} id={`quantity-${product._id}`}
                      className="border border-gray-300 p-1 rounded w-full"
                    />
                  </div>
                  <div className="text-center pb-2 pt-4">
                    <button
                      onClick={() => {
                        const quantity = parseInt(document.getElementById(`quantity-${product._id}`).value);
                        addToCart(product._id, quantity);
                      }}
                      className="bg-[#d72300] p-1 rounded-full text-white w-[150px] font-[flame]"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No products available.</p>
            )}
          </div>
        );
      };
      
      export default ProductList;
