import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://burger-website-backend.vercel.app/auth/register', {
        firstName,
        lastName,
        email,
        password,
      });

      if (response.status === 200) {
        alert('Registration successful! Please check your email to verify your account.');
        navigate('/login');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 w-[90%] md:w-[75%] m-auto bg-white shadow-md rounded-2xl mt-14">
      <div className="w-full md:w-[500px]">
        <img
          src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/08/769_DOUBLE-WHOPPER.jpg"
          alt="Burger"
          className="h-[300px] md:h-[470px] w-full object-cover"
        />
      </div>
      <div className="w-full md:w-auto">
        <div>
          <h1 className="text-2xl font-[900] font-[flame] text-[#502314] mb-4">REGISTER</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 tracking-tight text-[#502314] font-[800] font-[flame]">First Name</label>
            <input
              type="text"
              placeholder="First name"
              className="border border-2px w-full md:w-[400px] outline-gray-500 h-10 pl-4 rounded"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="mt-3">
            <label className="block mb-2 tracking-tight text-[#502314] font-[800] font-[flame]">Last Name</label>
            <input
              type="text"
              placeholder="Last name"
              className="border border-2px w-full md:w-[400px] outline-gray-500 h-10 pl-4 rounded"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="mt-3">
            <label className="block mb-2 tracking-tight text-[#502314] font-[800] font-[flame]">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="border border-2px w-full md:w-[400px] outline-gray-500 h-10 pl-4 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mt-3">
            <label className="block mb-2 tracking-tight text-[#502314] font-[800] font-[flame]">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="border border-2px w-full md:w-[400px] outline-gray-500 h-10 pl-4 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <div className="flex items-center mt-4">
            <input type="checkbox" id="terms" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" required />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
              I agree to the <Link to="/terms" className="text-blue-600 hover:underline">terms and conditions</Link>.
            </label>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-6">
            <button type="submit" className="bg-[#d72300] p-1 w-full md:w-44 rounded-full text-white font-[900] font-[flame]">
              Register Now
            </button>
            <h1 className="font-[900] font-[flame] text-[#502314] mt-4 md:mt-0">
              <Link to='/login'>Login</Link>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;





/* import React, { useState , useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Header2 from '../shared-components/header2';
import PhoneNumberInput from './phoneNumer'; // Assuming this is a component in your project
import State from './state'; // Assuming this is a component in your project

function Order() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    state: '',
    localGovArea: '',
    paymentMethod: '' // Add paymentMethod to formData
});


const [errors, setErrors] = useState({});

useEffect(() => {
    // Function to dynamically load scripts
    const loadScript = (src, id) => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.id = id;
            script.onload = () => {
                console.log(`Script ${id} loaded successfully`);
                resolve(script);
            };
            script.onerror = () => {
                console.error(`Failed to load script ${id}`);
                reject(new Error(`Script load error for ${src}`));
            };
            document.body.appendChild(script);
        });
    };

    // Load Paystack and Flutterwave scripts
    const loadScripts = async () => {
        try {
            await loadScript('https://js.paystack.co/v1/inline.js', 'paystack');
            await loadScript('https://checkout.flutterwave.com/v3/checkout.js', 'flutterwave');
        } catch (error) {
            console.error('Error loading scripts:', error);
        }
    };

    loadScripts();
}, []);

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
};

const handleStateChange = (e) => {
    handleChange(e);
};

const handleLocalGovChange = (e) => {
    handleChange(e);
};

const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.localGovArea) newErrors.localGovArea = 'Local Government Area is required';
    if (!formData.paymentMethod) newErrors.paymentMethod = 'Payment method is required'; // Ensure payment method is selected
    return newErrors;
};

const handlePaystack = () => {
    if (!window.PaystackPop) {
        alert('Paystack script not loaded.');
        return;
    }

    const paymentHandler = window.PaystackPop.setup({
        key: 'pk_test_1f37d6df903af5bc8df57efffca7278c87c1cb11', // Replace with your Paystack public key
        email: formData.email,
        amount: 100000, // Amount in kobo (e.g., 1000 NGN)
        currency: 'NGN',
        callback: function(response) {
            alert('Payment Successful! Ref: ' + response.reference);
        },
        onClose: function() {
            alert('Payment window closed.');
        }
    });

    paymentHandler.openIframe();
};

const handleFlutterwave = () => {
    if (!window.FlutterwaveCheckout) {
        alert('Flutterwave script not loaded.');
        return;
    }

    const paymentData = {
        tx_ref: 'tx12345', // Unique transaction reference
        amount: 1000, // Amount in kobo (e.g., 10 NGN)
        email: formData.email,
        currency: 'NGN',
        callback: function(response) {
            alert('Payment Successful! Ref: ' + response.tx_ref);
        },
        onclose: function() {
            alert('Payment window closed.');
        }
    };

    window.FlutterwaveCheckout(paymentData);
};

const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
    } else {
        // Trigger the appropriate payment method
        if (formData.paymentMethod === 'paystack') {
            handlePaystack();
        } else if (formData.paymentMethod === 'flutterwave') {
            handleFlutterwave();
        }
    }
};
    return (
      <div className="bg-[#f5ebdc]">
      <Header2 />
      <div className="pt-20 w-[90%] m-auto flex gap-3 font-[800] font-[flame]">
          <Link to='/cart'><FaArrowLeft className="text-2xl" /></Link>
          <h1>Back to cart</h1>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <h1 className="text-3xl font-[900] font-[flame] tracking-tight text-[#502314] mb-3">Checkout.</h1>
          <div className="bg-[#f5ebdc] shadow-md p-4">
              <h1 className="text-2xl font-[900] font-[flame] tracking-tight text-[#502314]">Recipient Information</h1>
              <form onSubmit={handleSubmit}>
                  <div className="flex gap-4 mt-4">
                      <div>
                          <input
                              type="text"
                              name="firstName"
                              placeholder="First Name"
                              value={formData.firstName}
                              onChange={handleChange}
                              className={`outline-red-200 h-10 w-[200px] pl-3 rounded ${errors.firstName ? 'border-red-500' : ''}`}
                          />
                          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                      </div>
                      <div>
                          <input
                              type="text"
                              name="lastName"
                              placeholder="Last Name"
                              value={formData.lastName}
                              onChange={handleChange}
                              className={`outline-red-200 h-10 w-[200px] pl-3 rounded ${errors.lastName ? 'border-red-500' : ''}`}
                          />
                          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                      </div>
                  </div>
                  <div>
                      <input
                          type="email"
                          name="email"
                          placeholder="Enter your Email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`outline-red-200 h-10 w-[400px] pl-3 mt-4 rounded ${errors.email ? 'border-red-500' : ''}`}
                      />
                      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </div>
                  <div>
                      <PhoneNumberInput />
                  </div>
              </form>
          </div>

          <div className="bg-[#f5ebdc] shadow-md p-4 mt-4">
              <h1 className="text-2xl font-[900] font-[flame] tracking-tight text-[#502314]">Delivery Address</h1>
              <State
                  stateValue={formData.state}
                  localGovValue={formData.localGovArea}
                  handleStateChange={handleStateChange}
                  handleLocalGovChange={handleLocalGovChange}
              />
              {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
              {errors.localGovArea && <p className="text-red-500 text-sm">{errors.localGovArea}</p>}
              <form onSubmit={handleSubmit}>
                  <div className="">
                      <label className="block text-[#502314]">
                          Address<span className="text-red-500">*</span>
                      </label>
                      <input
                          type="text"
                          name="address"
                          placeholder="Enter your Address"
                          value={formData.address}
                          onChange={handleChange}
                          className={`outline-red-200 h-10 w-[420px] pl-3 rounded ${errors.address ? 'border-red-500' : ''}`}
                      />
                      {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                  </div>
              </form>

              <div className="mt-4">
                  <h2 className="text-lg font-semibold text-[#502314]">Select Payment Method:</h2>
                  <div className="flex gap-4">
                      <label className="flex items-center">
                          <input
                              type="radio"
                              name="paymentMethod"
                              value="paystack"
                              checked={formData.paymentMethod === 'paystack'}
                              onChange={handleChange}
                              className="mr-2"
                          />
                          Paystack
                      </label>
                      <label className="flex items-center">
                          <input
                              type="radio"
                              name="paymentMethod"
                              value="flutterwave"
                              checked={formData.paymentMethod === 'flutterwave'}
                              onChange={handleChange}
                              className="mr-2"
                          />
                          Flutterwave
                      </label>
                  </div>
                  {errors.paymentMethod && <p className="text-red-500 text-sm">{errors.paymentMethod}</p>}
              </div>

              <div>
                  <button
                      onClick={handleSubmit}
                      className="text-white font-[900] font-[flame] bg-[#d72300] rounded-full mt-6 w-[400px] p-2"
                  >
                      Place your Order
                  </button>
              </div>
          </div>
      </div>
  </div>
);
  }
  
  
  export default Order; */