import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { FaStar } from 'react-icons/fa';
import { GoPlus } from 'react-icons/go';
import { FiMinus } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";

// import similarCards from './similarCards';

const ProductDetail = () => {
  return (
    <div className='container self-stretch flex flex-col items-start justify-start pt-8 px-[100px] pb-20 box-border gap-[20px] max-w-full text-left text-base text-gray-100 font-oxygen mq750:pl-[50px] mq750:pr-[50px] mq750:box-border mq450:pt-5 mq450:px-5 mq450:pb-[34px] mq450:box-border mq1050:pt-[21px] mq1050:pb-[52px] mq1050:box-border'>
      {/* Breadcrumbs */}
      <div className="flex flex-row items-center justify-start gap-[4px]">
        <div className="text-black relative leading-[170.52%] inline-block min-w-[107px]">
          <a href="chemin_vers_product_listing_page">Product Listing</a>
        </div>
        <IoIosArrowForward className="h-5 w-5 relative overflow-hidden shrink-0 text-black" />
        <div className="text-black relative leading-[170.52%] text-darkslategray-200">
          <a href="chemin_vers_dummy_product_page">Dummy Product Page</a>
        </div>
      </div>

      {/* Product Images */}
      <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-0 box-border max-w-full text-7xl text-darkslategray-500">
        <div className="self-stretch flex flex-row items-center justify-start gap-[71px] max-w-full shrink-0 lg:flex-wrap mq750:gap-[35px] mq450:gap-[18px]">
          <div className="flex-1 flex flex-row items-start justify-start gap-[32px] min-w-[436px] max-w-full mq750:gap-[16px] mq750:min-w-full">
            {/* Left side images */}
            <div className="h-[626px] w-[141px] flex flex-col items-start justify-between mq750:hidden">
              <img
                className="self-stretch h-[194px] relative rounded-[1.97px] max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/card1.png"
              />
              <img
                className="self-stretch h-[194px] relative rounded-[1.97px] max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/card2.png"
              />
              <img
                className="self-stretch h-[194px] relative rounded-[1.97px] max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/card3.png"
              />
            </div>
            {/* Main product image */}
            <img
              className="self-stretch flex-1 relative rounded-[6.97px] max-w-[calc(100%_-_173px)] overflow-hidden max-h-full object-cover min-h-[627px] mq750:max-w-full"
              loading="lazy"
              alt=""
              src="/card4.png"
            />
          </div>

          {/* Product Details */}
          <div className="w-[498px] flex flex-col max-w-full lg:flex-1 mq750:gap-[16px] mq750:min-w-full">
            {/* Product Title */}
            <div className="self-stretch flex flex-col items-start justify-start gap-[42px] max-w-full mq750:gap-[21px]">
              {/* Title and Favorite icon */}
              <div className="self-stretch flex flex-col items-start justify-start gap-[30px]">
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
                  <span className="m-[0_16.5px_0_0] w-[449.9px] break-words font-['Oxygen'] font-bold text-[26px] text-[#2D2D2D]">
                    Double Bed &amp; Side Tables
                  </span> 
                  <CiHeart className="text-black h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]" />
                </div>

                {/* Price and Ratings */}
                <div className="flex flex-row items-center justify-start gap-[10px] text-9xl text-darkslategray-200">
                  <span className="m-[0_10.5px_0_0] break-words font-['Oxygen'] font-normal text-[28px] leading-[1.705] text-[#414141]">
                    $54.98
                  </span>
                  <FaStar className="h-[25.5px] w-auto relative text-gray-500" />
                  {/* Ratings */}
                  <div className="flex flex-row items-center justify-start gap-[10px] text-sm">
                    {/* Individual Stars and Reviews */}
                    <div className="flex flex-row items-center justify-start gap-[2px]">
                      <FaStar className="h-[25.5px] w-auto relative text-black" />
                      <FaStar className="h-[25.5px] w-auto relative text-black" />
                      <FaStar className="h-[25.5px] w-auto relative text-black" />
                      <FaStar className="h-[25.5px] w-auto relative text-black" />
                      <FaStar className="h-[25.5px] w-auto relative text-black" />
                    </div>
                    <div className="text-black relative leading-[24px] inline-block min-w-[76px]">
                      ( 32 review )
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full"
                alt=""
                src="/line-1.svg"
              />
              <div className="self-stretch h-52 relative text-mini leading-[170.52%] text-darkslategray-200 inline-block">
                <p className="text-black text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.</p>
                <ul className="text-black text-sm list-disc pt-8">
                  <li>Lorem ipsum dolor sit amet, adipi scing elit</li>
                  <li>Lorem ipsum dolor sit amet, adipi scing elit</li>
                  <li>Lorem ipsum dolor sit amet, adipi scing elit</li>
                </ul>
              </div>

              {/* Add to Cart and Buy Now Buttons */}
              <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full text-center text-lg text-darkslategray-200">
                <div className="self-stretch flex flex-row items-start justify-start gap-[15px] max-w-full mq750:flex-wrap">
                  {/* Quantity buttons */}
                  <div className="rounded-85xl bg-white overflow-hidden flex flex-row items-center justify-center py-[11px] px-[15px] gap-[20px] border-[1px] border-solid border-lightgray">
                    <GoPlus className="text-black h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]" />
                    <b className="text-black relative inline-block min-w-[7px]">1</b>
                    <FiMinus className="text-black h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]" />
                  </div>
                  {/* Add to Cart button */}
                  <button className="bg-black cursor-pointer border-none py-[13px] px-5 flex-1 rounded-85xl overflow-hidden flex flex-row items-center justify-center box-border gap-[10px] min-w-[97px] whitespace-nowrap max-w-full hover:bg-dimgray-300">
                    <b className=" relative text-lg inline-block font-oxygen text-white text-center min-w-[97px]">
                      Add to Cart
                    </b>
                  </button>
                </div>
                {/* Buy Now button */}
                <button className="bg-black cursor-pointer border-none py-[13px] px-5 flex-1 rounded-85xl overflow-hidden flex flex-row items-center justify-center box-border gap-[10px] min-w-[97px] whitespace-nowrap max-w-full hover:bg-dimgray-300">
                  <b className="relative text-lg inline-block font-oxygen text-gray-200 text-center min-w-[76px]">
                    Buy Now
                  </b>
                </button>
              </div>
            </div>
            
            {/* Shipping Info */}
            <div className="w-[350px] flex flex-col items-start justify-start gap-[16px] max-w-full text-center text-sm text-darkslategray-100">
              <div className="self-stretch flex flex-row items-center justify-start gap-[20px]">
                <TbTruckDelivery className="text-black h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]" />
                <div className="text-black flex-1 relative">
                  Free worldwide shipping on all orders over $100
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[20px]">
                <TbTruckDelivery className="text-black h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]" />
                <div className="text-black flex-1 relative">
                  {`Delivers in: 3-7 Working Days `}
                  <span className="[text-decoration:underline]">{`Shipping & Return`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description and Reviews */}
         <div className=" flex flex-col p-[80px_118.2px_80px_100px] w-[fit-content] box-sizing-border">
          <div className="m-[0_0_40px_0] flex flex-row self-start w-[fit-content] box-sizing-border">
            <span className="m-[0_20.3px_0_0] break-words font-['Oxygen'] font-bold text-[26px] text-[#696969]">
              Description
            </span>
            <div className="bg-[#000000] m-[0_19px_0_0] w-[1px] h-[33px]">
            </div>
            <span className="break-words font-['Oxygen'] font-normal text-[26px] text-[#696969]">
              Reviews
            </span>
          </div>
           <span className="break-words font-['Oxygen'] font-normal text-[16px] leading-[1.705] text-[#575757]"> 
            {/* Product Description */}
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </div> 
      </div>


<div>

  <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 px-4 md:px-6">
        <div className="text-blackrounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800">
          <Link href="#">
            <img
              alt="Product Image"
              className="w-full h-48 object-cover"
              height="200"
              src="/card2.png"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="p-4 md:p-6">
              <h3 className="text-black text-lg md:text-xl font-semibold mb-2">Cozy Blanket</h3>
              <p className="text-black dark:text-gray-400 text-sm md:text-base">Warm and Soft for Chilly Nights</p>
              <div className="flex items-center justify-between mt-4">
                <div className="text-black font-semibold text-lg">$29.99</div>
                <button className="mt-4 bg-black hover:bg-orange-900 text-white font-bold py-2 px-4 rounded">
                    Add to Cart
                  </button>
              </div>
            </div>
          </Link>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800">
          <Link href="#">
            <img
              alt="Product Image"
              className="w-full h-48 object-cover"
              height="200"
              src="/card3.png"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="p-4 md:p-6">
              <h3 className="text-black text-lg md:text-xl font-semibold mb-2">Autumn Mug</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">Enjoy Your Hot Beverages in Style</p>
              <div className="text-black flex items-center justify-between mt-4">
                <div className="text-black font-semibold text-lg">$12.99</div>
                <button className="mt-4 bg-black hover:bg-orange-900 text-white font-bold py-2 px-4 rounded">
                    Add to Cart
                  </button>
              </div>
            </div>
          </Link>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800">
          <Link href="#">
            <img
              alt="Product Image"
              className="w-full h-48 object-cover"
              height="200"
              src="/card4.png"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-2">Fall Fragrance Candle</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">Fill Your Space with a Cozy Scent</p>
              <div className="flex items-center justify-between mt-4">
                <div className="font-semibold text-lg">$16.99</div>
                <button className="mt-4 bg-black hover:bg-orange-900 text-white font-bold py-2 px-4 rounded">
                    Add to Cart
                  </button>
              </div>
            </div>
          </Link>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800">
          <Link href="#">
            <img
              alt="Product Image"
              className="w-full h-48 object-cover"
              height="200"
              src="/card1.png"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-2">Autumn Leaves Wall Art</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                Decorate Your Space with Nature's Beauty
              </p>
              <div className="flex items-center justify-between mt-4">
                <div className="font-semibold text-lg">$39.99</div>
                <button className="mt-4 bg-black hover:bg-orange-900 text-white font-bold py-2 px-4 rounded">
                    Add to Cart
                  </button>
              </div>
            </div>
          </Link>
        </div>

        
      </div>
    </section>
</div>




    </div>
  );
};

export default ProductDetail;
