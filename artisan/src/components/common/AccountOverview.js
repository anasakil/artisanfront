import React, { useState } from 'react';
import { LiaCcMastercard } from "react-icons/lia";
import { IoIosArrowForward } from "react-icons/io";
import { BsBoxArrowInUpRight } from "react-icons/bs";

const upcomingOrders = [
  {
    orderNo: '001',
    items: [
      { name: 'Artisan Soap', imageUrl: 'https://images.squarespace-cdn.com/content/v1/60d91f271a52ec4669d064f5/ae40d039-0e7c-418c-9408-28bc4625ddba/IMG_0037.jpg' },
      { name: 'Artisan 2', imageUrl: 'https://theartisanemporium.co.in/wp-content/uploads/2022/03/Bathroom-Set-3-300x300.jpg' }
    ],
    trackingId: '123456789',
    deliveryDate: '2024-04-20',
    price: 50
  },{
    orderNo: '002',
    items: [
      { name: 'Artisan Mug', imageUrl: 'https://fringestudio.com/cdn/shop/products/mugs_95f8c053-0c2f-4cb8-a39b-9a36ed8045e8_1024x1024.png?v=1583522862' },
    ],
    trackingId: '987654321',
    deliveryDate: '2024-04-21',
    price: '$70'
  },
  {
    orderNo: '003',
    items: [
      { name: 'Artisan Painting', imageUrl: 'https://images.saatchiart.com/saatchi/1663783/art/8014830/7082060-HSC00002-7.jpg' },
    ],
    trackingId: '456789123',
    deliveryDate: '2024-04-22',
    price: '$120'
  },
  {
    orderNo: '004',
    items: [
      { name: 'Artisan Candle', imageUrl: 'https://www.artisanparfumeur.com/images/product/main/Candles_Mure_ET_Musc_-_Candle_600x600.jpg' },
    ],
    trackingId: '789123456',
    deliveryDate: '2024-04-23',
    price: '$25'
  },
];
const ITEMS_PER_PAGE = 2; 

const AccountOverview = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentUpcomingOrders = upcomingOrders.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto">
      <div className="mt-8 mb-4">
        <h1 className="text-2xl text-[#97644E] font-bold mb-4">Account Overview</h1>
        <div className='mb-8 flex items-center '>
        <h2 className="text-xl text-[#97644E] font-semibold mb-4 mt-7">Upcoming Orders</h2>
        <button className="text-[#E4C59E] hover:underline mb-4  ml-auto">Track an Order </button>
        <IoIosArrowForward className='mb-4 ml-2' />
        </div>
        
      </div>
      <div className="grid grid-cols-5 gap-2 border-b-2 pb-2 bg-[#97644E]  ">
        <div className="text-sm text-white ml-1 font-bold col-span-1 flex justify-center ">Order No</div>
        <div className="text-sm  text-white font-bold col-span-1 flex justify-center">Items</div>
        <div className="text-sm  text-white font-bold col-span-1 flex justify-center">Tracking ID</div>

        <div className="text-sm  text-white font-bold col-span-1 flex justify-center">Delivery Date</div>
        <div className="text-sm  text-white font-bold col-span-1 flex justify-center">Price</div>
      </div>
      {currentUpcomingOrders.map((order, index) => (
    <div key={index} className="grid grid-cols-5 gap-2 border-b-2 pb-2 ">
      <div className="text-sm col-span-1 ml-2 flex justify-center">{order.orderNo}</div>
      <div className="text-sm col-span-1">
        {order.items.map((item, i) => (
          <div key={i}>
            <img src={item.imageUrl} alt={item.name} className="w-16 h-16 mr-2 inline-block" />
            {item.name}
          </div>
        ))}
      </div>
      <div className="text-sm col-span-1 underline underline-offset-2 flex justify-center  ">{order.trackingId }<BsBoxArrowInUpRight className='ml-2' />
</div>
      <div className="text-sm col-span-1 flex justify-center">{order.deliveryDate }</div>
      <div className="text-sm col-span-1 flex justify-center">{order.price} </div>
    </div>
  ))}
      {/* Pagination */}
      <div className="mt-4 flex justify-center">
        {Array.from({ length: Math.ceil(upcomingOrders.length / ITEMS_PER_PAGE) }).map((_, index) => (
          <button key={index} className={`mx-1 px-3 py-1 bg-[#97644E] rounded${currentPage === index + 1 ? ' bg-white' : ''}`} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>

      <div className="mb-8 flex items-center">
    <h2 className="text-xl text-[#97644E] font-semibold mb-4"> Billing Methods </h2>
    <button className="text-[#E4C59E] hover:underline mb-4 ml-auto	"> View All Payment and Billing Methods </button>
    <IoIosArrowForward className='mb-4 ml-2' />
     </div>


      <div>
      <div className="relative w-full sm:w-auto mb-2 sm:mr-2"> 
        <label className="block mb-2 text-sm font-bold mb-"> Mastercard </label>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pt-5 pointer-events-none"> 
            <LiaCcMastercard className="h-5 w-5 text-[#97644E]" />
              </div>
              <input type="text" className="pl-10 w-full sm:w-96 p-2 border-2 border-[#97644E] rounded-full" placeholder="2736 3286 8332 2138" />
            </div>
            <div className="relative w-full sm:w-auto mb-2 sm:mr-2"> 
        <label className="block mb-2 text-sm font-bold">Visa Card</label>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pt-5 pointer-events-none"> 
            <LiaCcMastercard className="h-5 w-5 text-[#97644E]" />
              </div>
              <input type="text" className="pl-10 w-full sm:w-96 p-2 border-2 border-[#97644E] rounded-full" placeholder="2736 3286 8332 2138" />
            </div>
      </div>
      
    </div>
    
  );
};

export default AccountOverview;
