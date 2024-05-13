import React, { useState } from 'react';
import backgroundVideo from '../assets/styles/background2.mp4'; // Import the background video
import { AiOutlineSearch } from 'react-icons/ai';
import Navbar from './Navbar';

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log("Recherche en cours...", searchTerm);
    // Ajoutez ici la logique de recherche appropriée
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Use video element instead of img for background */}
      <video autoPlay loop muted className="absolute inset-0 object-cover w-full h-full z-0">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10 flex flex-col items-center justify-center">
        <Navbar />
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white z-10 text-center px-4 sm:px-8 lg:px-0">
      Atlas des Artisans 
    </h1>
        <div className="backdrop-blur-[11px] rounded-[32px] border-[0.9px_solid rgba(255,255,255,0.6)] bg-[rgba(0,0,0,0.15)] flex flex-row items-center justify-between p-[10px] lg:w-[400px] w-full box-sizing-border z-20 transition-all duration-300 ease-in-out px-4 sm:px-8 lg:px-0">
          <input 
            className="text-white flex-1 bg-transparent border-none outline-none px-3 py-2 placeholder-white text-sm lg:text-base"
            type="text"
            placeholder="Recherche"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="bg-gray-800 rounded-full p-2 lg:p-3 transition-colors duration-300 ease-in-out hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={handleSearch}
          >
            <AiOutlineSearch className="text-lg text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
