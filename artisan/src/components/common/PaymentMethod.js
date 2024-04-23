import React, { useState } from 'react';
import { LiaCcMastercard } from "react-icons/lia";

const PaymentMethods = () => {
  const [methods, setMethods] = useState([]);

  const addMethod = () => {
    setMethods([...methods, {}]);
  };

  const removeMethod = (index) => {
    setMethods(methods.filter((_, i) => i !== index));
  };

  return (
    <div className="mt-4">
      <h2 className="text-2xl text-[#97644E] font-bold mb-4">Payment Methods</h2>
      {methods.map((method, index) => (
        <div key={index} className="border p-4 mb-4">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full sm:w-auto mb-2 sm:mr-2"> 
              <label className="block mb-1 text-sm font-bold">Card Number</label>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pt-5 pointer-events-none"> 
                <LiaCcMastercard className="h-5 w-5 text-[#97644E]" />
              </div>
              <input type="text" className="pl-10 w-full sm:w-96 p-2 border rounded-full" placeholder="2736 3286 8332 2138" />
            </div>
            <div className="w-full sm:w-auto mb-2 sm:mr-2">
              <label className="block mb-1 text-sm font-bold">Name on Card</label>
              <input type="text" className="w-full sm:w-48 p-2 border rounded-full mt-2 sm:mt-0" placeholder="John Doe" />
            </div>
            <div className="w-full sm:w-auto mb-2 sm:mr-2">
              <label className="block mb-1 text-sm font-bold">CVC</label>
              <input type="text" className="w-full sm:w-24 p-2 border rounded-full mt-2 sm:mt-0" placeholder="258" />
            </div>
            <div className="w-full sm:w-auto mb-2 sm:mr-2">
              <label className="block mb-1 text-sm font-bold">Expiry Date</label>
              <input type="text" className="w-full sm:w-48 p-2 border rounded-full mt-2 sm:mt-0" placeholder="October 2030" />
              <button onClick={() => removeMethod(index)} className="bg-[#97644E] hover:bg-[#E4C59E] text-white font-bold py-2 px-4 mt-2 sm:mt-0 rounded ml-40">X</button>
            </div>
          </div>
        </div>
      ))}
      <button onClick={addMethod} className="bg-[#97644E] hover:bg-[#E4C59E] text-white font-bold py-2 px-4 rounded">Add New Card</button>
    </div>
  );
};

export default PaymentMethods;
