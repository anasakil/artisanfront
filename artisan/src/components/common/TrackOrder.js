import React, { useState } from 'react';

const TrackOrder = () => {
  const [orderId, setOrderId] = useState('');
  const [billingEmail, setBillingEmail] = useState('');
  const [status, setStatus] = useState('');

  const trackOrder = () => {
 
    setStatus('Your order is on the way!');
  };

  return (
    <div className="flex flex-col items-center shadow-2xl mt-28 ml-72 mr-72 pt-11 pb-11 rounded border-x-2 border-y-2 border-[#97644E]">
      <h1 className="text-3xl text-[#97644E] font-bold tracking-widest	mb-4">Track Your Order</h1>
      <p className="text-center mb-4">Your order has been confirmed & it is on the way.To see detailed status, track your order below.</p>
      {status && <p className="text-[#97644E] mb-4">{status}</p>}
      <div className="grid grid-cols-2 gap-4 mb-4">
     <div>
      <label className=" text-sm ">Order ID</label>
        <input
          type="text"
          placeholder="UWE13ESDS"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
        />
        </div>
        <div>
        <label className=" text-sm ">Billing Email</label>
        <input
          type="text"
          placeholder="badr@gmail.com"
          value={billingEmail}
          onChange={(e) => setBillingEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
        />
        </div>
        
      </div>
      <div class="flex items-center justify-center">
        <button
          onClick={trackOrder}
          className="bg-[#97644E] text-white  px-6 py-4 rounded-full hover:bg-[#E4C59E] focus:outline-none focus:bg-[#E4C59E]"
        >
          Track Your Order
        </button>
        </div>
    </div>
  );
};

export default TrackOrder;
