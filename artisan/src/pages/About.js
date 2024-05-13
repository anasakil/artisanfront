import React from 'react';
import { motion } from 'framer-motion';

const data = [
  {
    userimage: "/img_rectangle_19271.png",
    username: "Oliver Bennett",
    date: "18 Jan 2022",
    heading: "Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog",
  },
  {
    userimage: "/img_rectangle_19271_275x396.png",
    username: "Oliver Bennett",
    date: "18 Jan 2022",
    heading: "Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog",
  },
  {
    userimage: "/product.png",
    username: "Oliver Bennett",
    date: "18 Jan 2022",
    heading: "Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog",
  },
];

export default function About() {
  return (
    <div className="mx-auto max-w-5xl flex flex-col">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="md:w-2/3">
          <h1 className="text-center mt-8 font-bold text-xl md:text-2xl">
            Latest Ongoings
          </h1>
          <p className="text-gray-700 mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina.
          </p>
        </div>
        <div className="flex justify-center lg:justify-start">
          <button className="py-3 px-8 bg-black text-white text-lg font-semibold rounded-full hover:bg-orange-900 transition duration-300 ease-in-out">Read All Blogs</button>
        </div>
      </div>

      <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 justify-center">
        {data.map((d, index) => (
          <motion.div 
            key={`listoliver${index}`} 
            className="image-grid-item max-w-xs"
            whileHover={{ scale: 1.05 }} // Zoom de 5% au survol
            transition={{ duration: 0.3 }} // Durée de l'animation
          >
            <div className="rounded-lg overflow-hidden border border-gray-300">
              <img src={d.userimage} alt={`User ${index}`} className="w-full" />
            </div>
            <p className="text-gray-700 mt-2 text-sm">{`${d.username}, ${d.date}`}</p>
            <h2 className="text-lg font-semibold">{d.heading}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
