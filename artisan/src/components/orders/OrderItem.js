import React from 'react';

const OrderItem = ({ order }) => {
  return (
    <div className="grid grid-cols-7 gap-2 border-b-2 py-2">
      <div className="overflow-hidden whitespace-nowrap">{order.orderNo}</div>
      <div className="overflow-hidden whitespace-nowrap">
        {order.items.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div>{item.name}</div>
            <img src={item.imageUrl} alt={item.name} className="w-20 h-15 mr-2" />
          </div>
        ))}
      </div>
      <div className="overflow-hidden whitespace-nowrap">{order.status}</div>
      <div className="overflow-hidden whitespace-nowrap">{order.trackingId}</div>
      <div className="coverflow-hidden whitespace-nowrap">{order.deliveryDate}</div>
      <div className="overflow-hidden whitespace-nowrap">{order.price}</div>
      <div className="overflow-hidden whitespace-nowrap ">
        <button className="bg-[#97644E] text-white py-1 px-1 rounded">Re-order</button>
      </div>
    </div>
  );
};

export default OrderItem;
