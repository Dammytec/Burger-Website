import React, { useState , useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Header2 from '../shared-components/header2';
import PhoneNumberInput from './phoneNumer'; // Assuming this is a component in your project
import State from './state'; // Assuming this is a component in your project
import '../App.css'
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

function CheckoutPage() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',  // Ensure this is initialized
        address: '',
        state: '',
        localGovArea: '',
        paymentMethod: '',
        cartId: '',       // Ensure this is initialized
        totalAmount: '',  // Ensure this is initialized
        userId: ''  // Add paymentMethod to formData
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
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
        if (!formData.phoneNumber) newErrors.phoneNumber = 'phone is required';
        if (!formData.totalAmount) newErrors.totalAmount = 'amount is required';
        if (!formData.userId) newErrors.userId = 'user is required';
        if (!formData.localGovArea) newErrors.localGovArea = 'Local Government Area is required';
        if (!formData.paymentMethod) newErrors.paymentMethod = 'Payment method is required'; // Ensure payment method is selected
        return newErrors;
    };
    const handlePaymentSuccess = (response, orderId, amount, paymentMethod) => {
        try {
            if (response.status === 'success') {
                navigate('/confirmation', { state: { orderId, amount, paymentMethod } }); // Navigate to confirmation page on success
            } else {
                alert('Payment Failed. Unfortunately, your payment could not be processed. Please try again or contact support.');
            }
        } catch (error) {
            console.error('Payment Error:', error);
            alert('Payment Failed. Unfortunately, your payment could not be processed. Please try again or contact support.');
        }
    };
    

    const handlePaystack = () => {
        setIsLoading(true);
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
                setIsLoading(true);
                alert('Payment Successful! Ref: ' + response.reference);
                handlePaymentSuccess(response.reference, 100000, 'paystack');
            },
            onClose: function() {
                setIsLoading(true);
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
                handlePaymentSuccess(response.tx_ref, 1000, 'flutterwave');
            },
            onclose: function() {
                alert('Payment window closed.');
            }
        };

        window.FlutterwaveCheckout(paymentData);
    };
   
   

    // Log values for debugging
    console.log('Total Amount retrieved on checkout page:', totalAmount);
    console.log('Type of totalAmount:', typeof totalAmount);
    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        const storedTotalAmount = localStorage.getItem('totalAmount');
        if (storedCartItems) {
            setCartItems(storedCartItems);
            setTotalAmount(storedTotalAmount);
        }
    }, []);

    const fetchCartId = async () => {
        try {
            const token = localStorage.getItem('token')?.replace(/^"(.+)"$/, '$1');
    
            if (token) {
                const decodedToken = jwtDecode(token);
                const userId = decodedToken?.userId;
    
                console.log('Decoded userId:', userId);
    
                const response = await axios.get('http://localhost:5000/cart/read', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
    
                console.log('Full Response Data:', response.data);
    
                // Since response.data is not an array, access the cart object directly
                const userCart = response.data;
    
                console.log('Found User Cart:', userCart);
    
                if (userCart && userCart._id) {
                    console.log('Found cartId:', userCart._id);
                    localStorage.setItem('cartId', userCart._id);
                    return userCart._id;
                } else {
                    console.error('No cart found for this user');
                    alert('Your cart is empty or not found. Please add items to your cart.');
                }
            } else {
                console.error('No token found in localStorage');
                alert('Please log in to continue.');
            }
        } catch (error) {
            console.error('Error fetching cartId:', error);
        }
        return null;
    };
    
    
    
    
    // Initialize phoneNumber state
    const [phoneNumber, setPhoneNumber] = useState('');

// Handler for phone number change
const handlePhoneNumberChange = (e) => {
    console.log('Phone number input changed:', e.target.value);
    setFormData((prevFormData) => ({
        ...prevFormData,
        phoneNumber: e.target.value, // Update phoneNumber in formData
    }));
};


const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
    }

    setIsLoading(true);

    let token;
    let decodedToken;
    let userId;
    let updatedTotalAmount;
    let formDataToSubmit;

    try {
        token = localStorage.getItem('token');
        token = token?.replace(/^"(.+)"$/, '$1');

        if (token) {
            decodedToken = jwtDecode(token);
            userId = decodedToken?.userId;

            updatedTotalAmount = parseFloat(localStorage.getItem('totalAmount'));

            const cartId = await fetchCartId();

            formDataToSubmit = {
                ...formData,
                userId: userId,
                totalAmount: updatedTotalAmount,
                cartId: cartId,
            };

            console.log('Form Data to Submit:', formDataToSubmit);

            if (!formDataToSubmit.cartId || !formDataToSubmit.lastName || !formDataToSubmit.phoneNumber) {
                console.error('Required fields are missing');
                alert('Please fill out all required fields.');
                setIsLoading(false);
                return;
            }

            try {
                const response = await axios.post(
                    'http://localhost:5000/checkout/checkout',
                    formDataToSubmit,
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    }
                );

                if (response.status === 201) {
                    console.log('Response Body:', response.data);
                    if (formData.paymentMethod === 'paystack') {
                        handlePaystack();
                    } else if (formData.paymentMethod === 'flutterwave') {
                        handleFlutterwave();
                    } else {
                        console.error('Invalid payment method');
                        alert('Invalid payment method selected.');
                        setIsLoading(false);
                    }
                } else {
                    console.log('Response Status:', response.status);
                    console.log('Response Body:', response.data);
                    alert('Error: ' + response.data);
                    setIsLoading(false);
                }
            } catch (error) {
                console.error('Error during checkout:', error);
                alert('An error occurred during checkout.');
                setIsLoading(false);
            }
        } else {
            console.error('No token found in localStorage');
            alert('No token found. Please log in.');
            setIsLoading(false);
        }
    } catch (error) {
        console.error('Error:', error);
        setIsLoading(false);
    }
};





    
    
    
    
    
    
    
    
    
    
    
    
    
    
    return (
        <div className="bg-[#f5ebdc]">
            <Header2 />
            <div className="pt-20 w-[90%] m-auto flex gap-3 font-[800] font-[flame]">
                <Link to='/cart'><FaArrowLeft className="text-2xl" /></Link>
                <h1>Back to cart</h1>
            </div>
    
            {isLoading && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
                </div>
            )}
    
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
                            <PhoneNumberInput
                                value={formData.phoneNumber}
                                onChange={handlePhoneNumberChange} // Ensure this function updates formData.phoneNumber
                            />
                        </div>
                        <div className="mt-4">
                            <h1 className="text-2xl font-[900] font-[flame] tracking-tight text-[#502314]">Delivery Address</h1>
                            <State
                                stateValue={formData.state}
                                localGovValue={formData.localGovArea}
                                handleStateChange={handleStateChange}
                                handleLocalGovChange={handleLocalGovChange}
                            />
                            {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
                            {errors.localGovArea && <p className="text-red-500 text-sm">{errors.localGovArea}</p>}
                            <div>
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
                        </div>
                        <div className="mt-4">
                            <h2 className="text-lg font-semibold text-[#502314]">Select Payment Method:</h2>
                            <div className="flex gap-4">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="paystack"
                                        checked={formData.paymentMethod === 'paystack'}
                                        onChange={handlePaystack}
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
                        <div className="mt-4">
                            <button
                                type="submit"
                                className={`text-white font-[900] font-[flame] rounded-full mt-6 w-[400px] p-2 ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#d72300]'}`}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Processing...' : 'Place your Order'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
    
  }
  
  
  export default CheckoutPage;


  