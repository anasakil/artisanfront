import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function FAQSection() {
  return (
    <div className="flex flex-col lg:flex-row justify-center  lg:justify-between max-w-screen-lg mx-auto pt-20 px-6 lg:px-0">
      <div className="lg:w-1/2 lg:mr-8">
        <h1 className="text-3xl lg:text-4xl font-semibold text-center lg:text-left mb-8 lg:mb-12">Frequently Asked Questions</h1>
        <p className="text-lg lg:text-xl text-center lg:text-left mb-8 lg:mb-12">Find answers to commonly asked questions about our services.</p>
        <div className="flex justify-center lg:justify-start">
          <button className="py-3 px-8 bg-black text-white text-lg font-semibold rounded-full hover:bg-orange-900 transition duration-300 ease-in-out">Ask A Question</button>
        </div>
      </div>
      <div className="lg:w-1/2 mt-12 lg:mt-0">
        <div className="flex flex-col space-y-6">
          <FAQItem question="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed?" answer="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea" />
          <FAQItem question="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed?" answer="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea" />
          <FAQItem question="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed?" answer="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea" />
          <FAQItem question="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed?" answer="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea" />
        </div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg flex flex-col">
      <div className="flex items-center justify-between cursor-pointer" onClick={toggleOpen}>
        <p className="text-lg font-semibold">{question}</p>
        {isOpen ? <IoIosArrowUp className="w-6 h-6 text-gray-600" /> : <IoIosArrowDown className="w-6 h-6 text-gray-600" />}
      </div>
      {isOpen && <p className="text-lg mt-4">{answer}</p>}
    </div>
  );
}

