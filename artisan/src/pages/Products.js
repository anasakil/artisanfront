import React from "react";
import { motion } from "framer-motion";

const Products = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-screen-md mx-auto px-2">
        <h1 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          View Our Range Of Categories
        </h1>
        <p className=" text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
          <div className="h-64 md:h-96 flex justify-center items-center"> {/* Modifier la hauteur ici */}
            <motion.img
              whileHover={{ scale: 1.1 }} // Zoom de 10% au survol
              transition={{ duration: 0.3 }} // Durée de l'animation
              className="max-w-full max-h-full rounded-lg"
              src="/img.png"
              alt=""
            />
          </div>
          <div className="md:col-span-1 flex flex-col gap-2">
            <div className="h-64 md:h-48 flex justify-center items-center"> {/* Modifier la hauteur ici */}
              <motion.img
                whileHover={{ scale: 1.1 }} // Zoom de 10% au survol
                transition={{ duration: 0.3 }} // Durée de l'animation
                className="max-w-full max-h-full rounded-lg"
                src="/img2.png"
                alt=""
              />
            </div>
            <div className="md:col-span-1 flex flex-col gap-2">
              <motion.img
                whileHover={{ scale: 1.1 }} // Zoom de 10% au survol
                transition={{ duration: 0.3 }} // Durée de l'animation
                className="max-w-full max-h-full rounded-lg"
                src="/img3.png"
                alt=""
              />
            </div>
          </div>
          <div className="h-64 md:h-96 flex justify-center items-center"> {/* Modifier la hauteur ici */}
            <motion.img
              whileHover={{ scale: 1.1 }} // Zoom de 10% au survol
              transition={{ duration: 0.3 }} // Durée de l'animation
              className="max-w-full max-h-full rounded-lg"
              src="/img4.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
