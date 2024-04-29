import React from 'react';

function About() {
  return (
    <div>
   

    {/* About */}
    <div className="bg-[#FFFFFF] p-8 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-[#97644E] mb-6">About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-[#97644E] mb-4">Our Mission</h3>
          <p className="text-[#666666] leading-relaxed">
            At our core, we're committed to bringing joy and inspiration to your shopping experience. 
            We strive to curate the finest selection of products that excite, innovate, and elevate.
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-[#97644E] mb-4">Our Vision</h3>
          <p className="text-[#666666] leading-relaxed">
            Our vision is to redefine the way you shop online. We envision a seamless and personalized 
            journey where every click sparks delight and every purchase becomes a memorable experience.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-[#97644E] mb-4">Our Values</h3>
        <ul className="list-disc list-inside text-[#666666] leading-relaxed">
          <li className="mb-2">Passion for Excellence: We are driven by a relentless pursuit of quality.</li>
          <li className="mb-2">Customer-Centricity: Your satisfaction is our top priority.</li>
          <li className="mb-2">Innovation: We embrace creativity and innovation in everything we do.</li>
          <li>Community: We believe in building strong and meaningful relationships.</li>
        </ul>
      </div>
   
      </div>
      </div>
      
  );
}

export default About;
