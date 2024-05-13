import React, { useState } from 'react';
import card from "../../assets/images/img3.png";
import Frame8 from "../../assets/images/Frame8.png";
import Frame3 from "../../assets/images/Frame2.png";
import Frame5 from "../../assets/images/Frame5.png";
import Frame4 from "../../assets/images/Frame 4.png";
import Frame6 from "../../assets/images/Frame6.png";
import Frame9 from "../../assets/images/Frame9.png";
import Frame7 from "../../assets/images/Frame7.png";
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import ProductDetail from './productdetail';

const Product1 = () => {
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [visibleCards, setVisibleCards] = useState(9); // Nombre de cartes à afficher initialement

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handlePriceRangeChange = (e) => {
    setPriceRange(e.target.value);
  };

  const handleLoadMore = () => {
    setVisibleCards((prev) => prev + 9); // Ajoute 9 cartes supplémentaires
  };

  return (
    <div className='flex flex-col'>
      <h1 className="text-4xl font-bold text-center p-4 py-8">Our Collection Of Products</h1>
      <div className='flex justify-center'>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter something..."
            className="border border-gray-300 w-[680px] px-3 py-4 rounded-full pl-12"
          />
          <FaSearch className="absolute left-5 text-lg top-1/2 transform -translate-y-1/2" />
        </div>
      </div>
      <div className=" flex flex-col w-[fit-content] box-sizing-border justify-center items-center mx-auto">
        <span className="self-start break-words  font-bold text-[16px] leading-[3] text-[#414141]">
          Showing 1–12 of 24 item(s)
        </span>
        <button className="break-words font-['Oxygen'] font-normal text-[16px] leading-[1.705] text-[#949494]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </button>
      </div>
      <div className="flex justify-center p-7">
        <div className='absolute flex flex-col left-0 ml-10 gap-6'>
          {/* Categories */}
          <h2 className='text-black text-2xl font-bold pb-2'>Categories</h2>
          {[...Array(6)].map((_, index) => (
            <select key={index} className='text-lg' onChange={handleCategoryChange} value={category}>
              <option value="">Select a category</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
            </select>
          ))}
          {/* Price Range */}
          <h2 className='text-black text-2xl font-bold pb-2'>Price Range</h2>
          {[...Array(3)].map((_, index) => (
            <label key={index} className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-700">20$ - 100$</span>
            </label>
          ))}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {/* Cartes */}
          {[card, Frame8, Frame3, Frame5, Frame4, Frame6, Frame3, Frame9, Frame7,Frame7,Frame7,Frame7,Frame7,Frame7,Frame7].slice(0, visibleCards).map((image, index) => (
            <Link key={index} to="/productDetail" className='h-[fit-content] w-52 rounded-xl shadow-xl product-card transform transition cursor-pointer duration-300 hover:scale-105'>
              <img className="rounded-lg" src={image} alt=""/>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center mx-auto mt-8">
        <div className="m-[0_0.9px_26px_0] inline-block break-words font-['Oxygen'] font-normal text-[16px] leading-[1.705] text-[#414141]">
          Showing 1–12 of 24 item(s)
        </div>
        <div className="m-[0_0_23px_0] flex flex-col w-[498px] box-sizing-border">
          <div className="bg-[#282828] m-[0_0px_0_0px] self-start w-[286px] h-[1px]"></div>
          <div className="bg-[#DFDFDF] w-[498px] h-[3px]"></div>
        </div>
        <button onClick={handleLoadMore} className="rounded-[64px] bg-black flex items-center justify-center p-[16px_0_16px_0] w-[180px] box-sizing-border">
          <span className="text-[20px] text-[#FFFFFF]">Load More</span>
          <div className="ml-2">
            <SlArrowRight className="text-white w-[18px] h-[32px]" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Product1;
