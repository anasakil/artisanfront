import React from 'react';

function Contact() {
  return (
    <div>
    
      <div className="bg-[#FFFFFF] rounded-[0.6rem] shadow-lg p-[3.8rem] w-[46rem] mx-auto mt-[6.3rem] mb-[6.3rem]">
        <div className="rounded-t-[0.6rem] bg-[#97644E] text-[#FFFFFF] font-semibold text-[1.3rem] py-[1.5rem] px-[3.1rem]" style={{ borderRadius: '5px' }}>
          Get In Touch With Us
        </div>
        <form className="space-y-[2.5rem]">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-[#97644E] text-[1.4rem] font-normal">Your Name</label>
            <input
              type="text"
              id="name"
              className="input-field h-[3rem]"
              placeholder="Name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-[#97644E] text-[1.4rem] font-normal">Your Email</label>
            <input
              type="email"
              id="email"
              className="input-field h-[3rem]"
              placeholder="Artisan@artisan.com"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-[#97644E] text-[1.4rem] font-normal">Phone Number</label>
            <input
              type="tel"
              id="phone"
              className="input-field h-[3rem]"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-[#97644E] text-[1.4rem] font-normal">Message</label>
            <textarea
              id="message"
              className="input-field h-[5rem]"
              placeholder="Write your message here"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#282828] text-[#FFFFFF] py-[1.3rem] px-[3.8rem] rounded-[4rem] hover:bg-opacity-80 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
