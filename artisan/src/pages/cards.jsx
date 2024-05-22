import React from 'react';

const Cards = () => {
  return (
    <div className="bg-[#97644E] flex flex-col sm:flex-row p-4 sm:p-[60px_32px_100px_32px]">
      <div className="flex flex-col">
        <div className="m-[0_0_20px_0] font-bold text-xl sm:text-3xl leading-1.333 text-white">
          Have a Look at Our Unique Selling Proportions
        </div>
        <div className="flex justify-center lg:justify-start">
          <button className="bg-black py-3 px-8 text-white text-lg font-semibold rounded-full hover:bg-orange-900 transition duration-300 ease-in-out">Read More</button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="m-[0_15.3px_20px_0] font-normal text-sm sm:text-base leading-[1.6] text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </div>
        <div className="flex flex-row">
          <div className="m-[0_10px_0_0] flex flex-col">
            <div className="m-[0_0_8px_0] font-bold text-xl sm:text-3xl leading-1.2 text-white">
              99%
            </div>
            <span className="font-normal text-sm sm:text-base leading-[1.6] text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </span>
          </div>
          <div className="flex flex-col">
            <div className="m-[0_0_8px_0] font-bold text-xl sm:text-3xl leading-1.2 text-white">
              100%
            </div>
            <span className="font-normal text-sm sm:text-base leading-[1.6] text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;