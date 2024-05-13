import React, { useState } from "react";
import image3 from "../assets/images/img3.png";
import image4 from "../assets/images/img4.png";
import image5 from "../assets/images/img5.png";
import image12 from "../assets/images/img12.png";
import image14 from "../assets/images/img14.png";
import image13 from "../assets/images/img13.png";
import image15 from "../assets/images/img15.png";
import img from "../assets/images/img.png";
import Frame6 from "../assets/images/Frame6.png";










const Collection = () => {
  const [showAll, setShowAll] = useState(false);

  const products = [
    {
      name: "Stylish Sunglasses",
      description: "UV protection",
      image: image3,
      price: "$29.99",
     
    },
    {
      name: "Stylish Sunglasses",
      description: "UV protection",
      image: image4,
      price: "$29.99",
      
    },
    {
      name: "Stylish Sunglasses",
      description: "UV protection",
      image: image5,
      price: "$29.99",
    },
    {
      name: "Stylish Sunglasses",
      description: "UV protection",
      image: image12,
      price: "$29.99",
    },
    {
      name: "Stylish Sunglasses",
      description: "UV protection",
      image: image14,
      price: "$29.99",
    },
    {
      name: "Stylish Sunglasses",
      description: "UV protection",
      image: image13,
      price: "$29.99",
    },
    {
      name: "Stylish Sunglasses",
      description: "UV protection",
      image: image15,
      price: "$29.99",
    },
    {
      name: "Stylish Sunglasses",
      description: "UV protection",
      image: img,
      price: "$29.99",
    },
    {
      name: "Stylish Sunglasses",
      description: "UV protection",
      image: Frame6,
      price: "$29.99",
    },
    {
      name: "Stylish Sunglasses",
      description: "UV protection",
      image: image15,
      price: "$29.99",
    },
    {
      name: "Stylish Sunglasses",
      description: "UV protection",
      image: image3,
      price: "$29.99",
    },
    {
      name: "Stylish Sunglasses",
      description: "UV protection",
      image: image12,
      price: "$29.99",
    },
  ];

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section className="container mx-auto px-4 py-5 md:py-3 lg:py-3">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Most Popular Products
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Check out our top-selling items and find your perfect match.
          </p>
        </div>
        <button
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          onClick={toggleShowAll}
        >
          {showAll ? "View Less" : "View All"}
        </button>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
        {products.slice(0, showAll ? products.length : 4).map((product, index) => (
          <div
            key={index}
            className="flex flex-col rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
            style={{ maxWidth: "250px" }} 
          >
           <img
         src={product.image}
         alt={`Product ${index}`}
         className="w-full h-50 object-cover max-image-size"
            />

             
            <div className="bg-white p-4 dark:bg-gray-950 flex flex-col flex-grow">
              <h3 className="font-semibold text-base md:text-lg">{product.name}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">{product.description}</p>
              <h4 className="font-semibold text-sm md:text-base mt-2">{product.price}</h4>
              <button className="mt-4 bg-black hover:bg-orange-900 text-white font-bold py-2 px-4 rounded">
                    Add to Cart
                  </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collection;
