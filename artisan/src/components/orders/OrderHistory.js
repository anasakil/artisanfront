import React, { useState } from 'react';
import OrderItem from './OrderItem';

const orders = [
    {
      orderNo: '001',
      items: [
        { name: 'Artisan Soap', imageUrl: 'https://images.squarespace-cdn.com/content/v1/60d91f271a52ec4669d064f5/ae40d039-0e7c-418c-9408-28bc4625ddba/IMG_0037.jpg' },
        { name: 'Artisan 2', imageUrl: 'https://theartisanemporium.co.in/wp-content/uploads/2022/03/Bathroom-Set-3-300x300.jpg' }
      ],
      status: 'Delivered',
      trackingId: '123456789',
      deliveryDate: '2024-04-20',
      price: '$50'
    },
    {
      orderNo: '002',
      items: [
        { name: 'Artisan Mug', imageUrl: 'https://fringestudio.com/cdn/shop/products/mugs_95f8c053-0c2f-4cb8-a39b-9a36ed8045e8_1024x1024.png?v=1583522862' },
      ],
      status: 'Pending',
      trackingId: '987654321',
      deliveryDate: '2024-04-21',
      price: '$70'
    },
    {
      orderNo: '003',
      items: [
        { name: 'Artisan Painting', imageUrl: 'https://images.saatchiart.com/saatchi/1663783/art/8014830/7082060-HSC00002-7.jpg' },
      ],
      status: 'Delivered',
      trackingId: '456789123',
      deliveryDate: '2024-04-22',
      price: '$120'
    },
    {
      orderNo: '004',
      items: [
        { name: 'Artisan Candle', imageUrl: 'https://www.artisanparfumeur.com/images/product/main/Candles_Mure_ET_Musc_-_Candle_600x600.jpg' },
      ],
      status: 'Processing',
      trackingId: '789123456',
      deliveryDate: '2024-04-23',
      price: '$25'
    },
    {
      orderNo: '005',
      items: [
        { name: 'Artisan Necklace', imageUrl: 'data:image/jpeg;base64,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' },
      ],
      status: 'Delivered',
      trackingId: '321654987',
      deliveryDate: '2024-04-24',
      price: '$90'
    },
    {
      orderNo: '006',
      items: [
        { name: 'Artisan Notebook', imageUrl: 'https://studiooh.com/cdn/shop/products/ARN01_Artisan_notebook_lifestyle2.jpg?v=1687879692&width=1200' },
      ],
      status: 'Pending',
      trackingId: '654987321',
      deliveryDate: '2024-04-25',
      price: '$30'
    },
    {
      orderNo: '007',
      items: [
        { name: 'Artisan Earrings', imageUrl: 'data:image/jpeg;base64,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' },
      ],
      status: 'Processing',
      trackingId: '159753468',
      deliveryDate: '2024-04-26',
      price: '$40'
    },
    {
      orderNo: '008',
      items: [
        { name: 'Artisan Scarf', imageUrl: 'https://warchestboutique.com/cdn/shop/products/107619.jpg?v=1585591959' },
      ],
      status: 'Delivered',
      trackingId: '468159753',
      deliveryDate: '2024-04-27',
      price: '$60'
    },
    {
      orderNo: '009',
      items: [
        { name: 'Artisan Keychain', imageUrl: 'https://www.artisanstreams.com/cdn/shop/products/IMG_9200_f97acfba-590f-498e-ba3b-816a70e83bf6_1024x1024.jpg?v=1627108134' },
      ],
      status: 'Pending',
      trackingId: '357951246',
      deliveryDate: '2024-04-28',
      price: '$15'
    },
    {
      orderNo: '010',
      items: [
        { name: 'Artisan Phone Case', imageUrl: 'https://wickedcoolbite.com/wp-content/uploads/2014/11/dock-artisan-sport-wallet-iphone-6.jpg' },
      ],
      status: 'Processing',
      trackingId: '246813579',
      deliveryDate: '2024-04-29',
      price: '$20'
    },
    {
      orderNo: '011',
      items: [
        { name: 'Artisan Wallet', imageUrl: 'https://m.media-amazon.com/images/I/81Vt2gKSK0L._AC_UY1000_.jpg' },
      ],
      status: 'Delivered',
      trackingId: '135792468',
      deliveryDate: '2024-04-30',
      price: '$35'
    },
  ];
  

const ITEMS_PER_PAGE = 5; // Number of items to display per page

const OrderHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination logic
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentOrders = orders.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1 className="text-2xl text-[#97644E] font-bold mb-4">Order History</h1>
      <div className="grid grid-cols-7 gap-2 border-b-2 pb-2">
        <div className=" text-sm font-bold col-span-1 ">Order No</div>
        <div className="text-sm font-bold col-span-1">Items</div>
        <div className="text-sm font-bold col-span-1 ml-5">Status</div>
        <div className="text-sm font-bold col-span-1">Tracking ID</div>
        <div className="text-sm font-bold col-span-1">Delivery Date</div>
        <div className="text-sm font-bold col-span-1">Price</div>
        <div className="text-sm font-bold col-span-1">Re-order</div>
      </div>
      {currentOrders.map((order, index) => (
        <OrderItem key={index} order={order} />
      ))}
      {/* Pagination */}
      <div className="mt-4 flex justify-center">
        {Array.from({ length: Math.ceil(orders.length / ITEMS_PER_PAGE) }).map((_, index) => (
          <button key={index} className={`mx-1 px-3 py-1 bg-[#97644E] rounded${currentPage === index + 1 ? ' bg-white' : ''}`} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
