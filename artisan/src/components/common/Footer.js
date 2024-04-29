import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#97644e] py-[3.5rem] pb-[2rem] rounded-[2px]">
      <div className="flex flex-col items-center mb-[1rem]">
        <div className="mb-[2rem]">
          <p className="text-[1.5rem] text-center text-white">Subscribe To Our Newsletter</p>
          <form onSubmit={handleSubmit} className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              style={{
                border: '0px solid white',
                borderRadius: '4.8px',
                padding: '4.8px',
              }}
            />
            <button type="submit" className="py-[0.3rem] px-[1rem] rounded-md bg-[#282828] text-white border-none cursor-pointer">Subscribe</button>
          </form>
        </div>
        <div className="flex flex-wrap justify-center">
          <Section links={['About']} />
          <Section links={['Contact']} />
          <Section links={['PrivacyPolicy']} />
          <Section links={['Blogs']} />
          <Section links={['Guarantee']} />
          <Section links={['Checkout']} />
          <Section links={['TermsAndConditions']} />
        </div>
      </div>
      <div className="bg-[#DDDDDD] mb-[1rem] w-full h-[0.08rem]"></div>
      <div className="flex justify-center">
        <span className="text-[1rem] text-white">Copyright © 2024 All Right reserved , Artisan LLC</span>
      </div>
    </footer>
  );
};

const Section = ({ title, links }) => (
  <div className="mr-[2.5rem] mb-[2rem]">
    <h2 className="text-[1rem] text-uppercase text-[#9A9A9A] mb-[1rem]">{title}</h2>
    <ul className="list-none m-0 p-0">
      {links.map((link, index) => (
        <li key={index}><Link to={`/${link.replace(/\s/g, '').toLowerCase()}`}>{link}</Link></li>
      ))}
    </ul>
  </div>
);

export default Footer;
