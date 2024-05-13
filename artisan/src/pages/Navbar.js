import React, { useState } from 'react';
import { FaBars, FaTimes, FaUserCheck, FaShoppingBag } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="flex items-center justify-between p-4 absolute top-0 left-0 w-full z-20">
      {/* Logo or Brand */}
      <div className="text-white logo text-2xl font-bold">ARTISAN</div>

      {/* Toggle button for mobile */}
      <div className="text-white md:hidden">
        {isOpen ? (
          <FaTimes onClick={toggleNavbar} className="text-3xl cursor-pointer" />
        ) : (
          <FaBars onClick={toggleNavbar} className="text-3xl cursor-pointer" />
        )}
      </div>

      {/* Menu for mobile */}
      <div className={`md:hidden ${isOpen ? 'flex' : 'hidden'} flex-col absolute top-full left-0 w-full bg-transparent mt-2 p-4 rounded-md shadow-md transition-all duration-300 ease-in-out`}>
        <ul className="flex flex-col items-center">
          <li className="my-2">
            <a href="#home" onClick={closeNavbar} className="text-white hover:text-gray-600">Home</a>
          </li>
          <li className="my-2">
            <a href="#categories" onClick={closeNavbar} className="text-white hover:text-gray-600">Categories</a>
          </li>
          <li className="my-2">
            <a href="#contact" onClick={closeNavbar} className="text-white hover:text-gray-600">Contact Us</a>
          </li>
          <li className="my-2">
            <a href="#blog" onClick={closeNavbar} className="text-white hover:text-gray-600">Blog</a>
          </li>
        </ul>
        <div className="flex justify-center mt-4">
          <FaUserCheck className="text-white text-2xl mx-2 cursor-pointer hover:text-gray-600" />
          <FaShoppingBag className="text-white text-2xl mx-2 cursor-pointer hover:text-gray-600" />
        </div>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex md:items-center">
        <ul className="md:flex">
          <li className="mx-4">
            <a href="/home" className="text-white hover:text-gray-600">Home</a>
          </li>
          <li className="mx-4">
            <a href="#categories" className="text-white hover:text-gray-600">Categories</a>
          </li>
          <li className="mx-4">
            <a href="#contact" className="text-white hover:text-gray-600">Contact Us</a>
          </li>
          <li className="mx-4">
            <a href="#blog" className="text-white hover:text-gray-600">Blog</a>
          </li>
          <li className="mx-4">
            <a href="/product" className="text-white hover:text-gray-600">Product</a>
          </li>
          <li className="mx-4">
            <FaUserCheck className="text-white text-xl cursor-pointer hover:text-gray-600" />
          </li>
          <li className="mx-4">
            <FaShoppingBag className="text-white text-xl cursor-pointer hover:text-gray-600" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
