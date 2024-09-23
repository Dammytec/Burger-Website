import React, { useEffect, useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import Headers from "../shared-components/headers";
import { FaArrowLeft } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import Footer from "../shared-components/footer";
import axios from "axios";
import { jwtDecode } from 'jwt-decode';
 // Note the parentheses


 // Note: no underscore in jwtDecode


function Cart() {
  const [cartItems, setCart] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCart = async () => {
      const token = JSON.parse(localStorage.getItem('token'));
     
      console.log('Token for fetch:', token);
  
      if (!token) {
        console.error('No token found in local storage');
        return;
      }
  
      try {
        const response = await axios.get('http://localhost:5000/cart/read', {
          headers: {
            'Authorization': `Bearer ${token}`,  // Confirm this is correct
          },
        });
  
        console.log('Full response:', response);
        if (response.data && response.data.items) {
          setCart(response.data.items);
        } else {
          console.error('Unexpected response structure:', response.data);
        }
      } catch (error) {
        console.error('Error fetching cart:', error.response?.data || error.message);
        if (error.response?.status === 403) {
          console.error('Forbiddens: Check your token and permissions.');
        }
      }
    };
  
    fetchCart();
  }, []);
 
  const handleDeleteProduct = async (productId) => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      console.error('No token found in local storage');
      return;
    }
  
    try {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.userId;
      console.log('User ID:', userId);
      console.log('Product ID:', productId);
      
      await axios.delete(`http://localhost:5000/cart/delete/${userId}/${productId}`);
      
      // Update the cart items in the UI after successful deletion
      setCart(cartItems.filter(item => item.productId._id !== productId));
    } catch (error) {
      console.error('Error during deletion:', error.response?.data || error.message);
    }
  };
  
 



  const totalAmount = Array.isArray(cartItems)
    ? cartItems.reduce(
        (total, product) =>
          total + (product.productId.price || 0) * (product.quantity || 0),
        0
      )
    : 0;

    
    const calculateTotalAmount = (cartItems) => {
      return cartItems.reduce((total, item) => {
          const price = parseFloat(item.productId.price);
          const quantity = parseInt(item.quantity, 10);
  
          if (isNaN(price) || isNaN(quantity)) {
              console.warn('Invalid price or quantity:', item.productId.price, item.quantity);
              return total;  // Skip invalid items
          }
  
          return total + (price * quantity);
      }, 0);
  };
  
  const handleCheckout = () => {
      const totalAmount = calculateTotalAmount(cartItems);
  
      console.log('Total Amount before saving to localStorage:', totalAmount);
  
      if (isNaN(totalAmount)) {
          console.error('Total Amount is NaN');
          return;
      }
  
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      localStorage.setItem('totalAmount', totalAmount.toString());
      navigate('/checkout');
  };
  return (
    <div className="bg-[#f5ebdc]">
      <Headers />

      <div className="pt-36 w-[90%] m-auto">
        <Link to="/restaurants">
          <FaArrowLeft className="text-3xl md:text-4xl" />
        </Link>
      </div>

      <div className="w-[90%] md:w-[65%] m-auto mb-28">
      {Array.isArray(cartItems) &&
  cartItems.map((product) => (
    <div
      key={product._id}
      className="flex flex-col md:flex-row items-center justify-between mb-8"
    >
      <div className="bg-[#f5ebdc] shadow-md w-full md:w-[200px]">
        <div className="w-full">
          {product.productId.imgSrc ? (
            <img
              src={product.productId.imgSrc}
              alt={product.productId.title}
              className="w-full h-auto"
            />
          ) : (
            <p>No image available</p>
          )}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between md:gap-5 pt-3">
          <h1 className="text-center text-xl md:text-2xl font-[900] font-[flame] text-[#502314]">
            {product.productId.title || 'Untitled'}
          </h1>
          <h1 className="font-[900] text-[#d72300] text-lg md:text-xl">
  &#8358;{Number(product.productId.price).toFixed(2)}
</h1>

        </div>
        <div>
          <input
            type="number"
            defaultValue={product.quantity || 1}
            min={1}
            id={`quantity-${product._id}`}
            className="border border-gray-300 p-1 rounded w-full"
          />
        </div>
      </div>
      <div className="mt-5 md:mt-0">
        <FaDeleteLeft
          className="text-3xl md:text-4xl text-[#d72300] cursor-pointer"
          onClick={() => handleDeleteProduct(product.productId._id)}
        />
      </div>
    </div>
  ))}


        <div className="w-full">
          <hr className="h-[2px] bg-black" />
        </div>

        <div className="w-full md:w-[50%] m-auto mt-8">
          <div className="flex items-center justify-between">
            <h1 className="text-center text-xl md:text-2xl font-[900] font-[flame] text-[#502314]">
              Total
            </h1>
            <h1 className="font-[900] text-[#d72300] text-lg md:text-xl">
              &#8358;{totalAmount}
            </h1>
          </div>
          <div className="bg-[#d72300] p-2 md:p-1 mt-5 rounded-full text-center text-white font-[flame] font-[900] text-xl md:text-2xl">
            <button onClick={handleCheckout} >
              <Link  >Proceed to Checkout</Link>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Cart;
