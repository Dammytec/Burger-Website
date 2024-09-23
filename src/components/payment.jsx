import React, { useEffect } from 'react';

const PaymentOptions = () => {
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

    const handlePaystack = () => {
        if (!window.PaystackPop) {
            alert('Paystack script not loaded.');
            return;
        }

        const paymentHandler = window.PaystackPop.setup({
            key: 'pk_2222222222222222222222', // Replace with your Paystack public key
            email: 'customer@example.com',
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
            email: 'customer@example.com',
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

    return (
        <div className="p-4 max-w-md mx-auto h-screen">
            <h2 className="text-2xl font-semibold mb-4 text-center">Choose Your Payment Method</h2>
            <button
                onClick={handlePaystack}
                className="w-full py-2 px-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 mb-4"
            >
                Pay with Paystack
            </button>
            <button
                onClick={handleFlutterwave}
                className="w-full py-2 px-4 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
                Pay with Flutterwave
            </button>
        </div>
    );
};

export default PaymentOptions;





