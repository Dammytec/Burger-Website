import React, { useState } from 'react';
import Headers from '../shared-components/headers';
const Order = () => {
    return (

        <div className="bg-[#f5ebdc] min-h-screen">
  <Headers />
  <div className='sm:pt-24'></div>
  <div className="p-4 sm:p-6 max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto bg-white shadow-lg rounded-lg pt-16 sm:pt-10">
    <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">Order Details</h1>

    <section className="mb-4 sm:mb-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Order Information</h2>
      <p className="text-gray-600"><strong>Order ID:</strong> 12345</p>
      <p className="text-gray-600"><strong>Date:</strong> 2024-08-24</p>
      <p className="text-gray-600"><strong>Status:</strong> Shipped</p>
    </section>

    <section className="mb-4 sm:mb-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Customer Information</h2>
      <p className="text-gray-600"><strong>Name:</strong> John Doe</p>
      <p className="text-gray-600"><strong>Email:</strong> john.doe@example.com</p>
      <p className="text-gray-600"><strong>Phone Number:</strong> 123-456-7890</p>
      <p className="text-gray-600"><strong>Address:</strong> 123 Main St, Apt 4B</p>
      <p className="text-gray-600"><strong>State:</strong> California</p>
      <p className="text-gray-600"><strong>Local Government Area:</strong> Los Angeles</p>
    </section>

    <section className="mb-4 sm:mb-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Order Items</h2>
      <ul className="divide-y divide-gray-200">
        <li className="flex justify-between py-2">
          <span className="font-medium">Product 1</span>
          <span>2 x $25.00</span>
        </li>
        <li className="flex justify-between py-2">
          <span className="font-medium">Product 2</span>
          <span>1 x $40.00</span>
        </li>
      </ul>
    </section>

    <section>
      <h2 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Total Amount</h2>
      <p className="text-xl sm:text-2xl font-bold">$90.00</p>
    </section>
  </div>
</div>

      );
};

export default Order;

