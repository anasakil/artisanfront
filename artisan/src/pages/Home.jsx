import React from 'react';
import MoroccoMap from '../Map/MoroccoMap';

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl p-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 md:mb-0 w-full md:w-1/3 text-center md:text-left">
          Home
        </h1>
        
        <div className="w-full md:flex-grow bg-white shadow-lg rounded-lg overflow-hidden">
          <MoroccoMap />
        </div>
      </div>
    </div>
  );
}

export default Home;
