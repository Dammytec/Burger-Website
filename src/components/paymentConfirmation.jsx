import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const PaymentConfirmation = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Assume payment details are passed through state from the payment process
    const { status, transactionId, amount, orderId } = location.state || {};

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
                {status === 'success' ? (
                    <>
                        <h2 className="text-2xl font-semibold text-green-600 mb-4">Payment Successful!</h2>
                        <p className="text-gray-700 mb-6">Thank you for your purchase. Your payment has been successfully processed.</p>
                        <div className="mb-6">
                            <p className="text-sm text-gray-500">Transaction ID:</p>
                            <p className="text-lg font-medium">{transactionId}</p>
                        </div>
                        <div className="mb-6">
                            <p className="text-sm text-gray-500">Order ID:</p>
                            <p className="text-lg font-medium">{orderId}</p>
                        </div>
                        <div className="mb-6">
                            <p className="text-sm text-gray-500">Amount Paid:</p>
                            <p className="text-lg font-medium">₦{amount}</p>
                        </div>
                    </>
                ) : (
                    <>
                        <h2 className="text-2xl font-semibold text-red-600 mb-4">Payment Failed</h2>
                        <p className="text-gray-700 mb-6">Unfortunately, your payment could not be processed. Please try again or contact support.</p>
                    </>
                )}
                <button
                    onClick={() => navigate('/order')}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
                >
                 <Link to='/order'>View Order History</Link>
                </button>
            </div>
        </div>
    );
};

export default PaymentConfirmation;
