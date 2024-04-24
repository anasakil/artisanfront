import React, { useState } from 'react';

const Settings = () => {
  const [profileInfo, setProfileInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    currentPassword: '',
    newPassword: '',
    address: '',
    state: '',
    zipCode: ''
  });

  const [isSaved, setIsSaved] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaved(true); 
    setTimeout(() => {
      setIsSaved(false);
    }, 3000);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl text-[#97644E] font-bold mb-16">Account Settings</h1>
      <form onSubmit={handleSubmit}>
      <h2 className="text-base text-[#97644E] font-bold mb-7">Profile Information</h2>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
          <label className="block mb-1 text-sm ">First Name</label>
            <input 
              type="text" 
              name="firstName" 
              value={profileInfo.firstName} 
              onChange={handleChange} 
              placeholder="Badr" 
              className="w-full px-3 py-2 border rounded-lg" 
            />
          </div>
          <div>
          <label className="block mb-1 text-sm ">Last Name</label>

            <input 
              type="text" 
              name="lastName" 
              value={profileInfo.lastName} 
              onChange={handleChange} 
              placeholder="DRIDAKH" 
              className="w-full px-3 py-2 border rounded-lg" 
            />
          </div>
          <div>
          <label className="block mb-1 text-sm ">Email Adress</label>

            <input 
              type="email" 
              name="email" 
              value={profileInfo.email} 
              onChange={handleChange} 
              placeholder="badr@gmail.com" 
              className="w-full px-3 py-2 border rounded-lg" 
            />
          </div>
          <div>
          <label className="block mb-1 text-sm">Phone Number</label>
            <div className="flex">
              <select
                name="countryCode"
                value={profileInfo.countryCode}
                onChange={handleChange}
                className="px-3 py-2 border rounded-l-lg appearance-none"
              >
                <option value="+212">MAR +212</option>
                <option value="+1">US +1</option>
                <option value="+44">GB +44</option>
              </select>
              <input 
                type="tel" 
                name="phoneNumber" 
                value={profileInfo.phoneNumber} 
                onChange={handleChange} 
                placeholder="6 15 17 84 93" 
                className="w-full px-3 py-2 border rounded-r-lg" 
              />
            </div>
            
          </div>
          
        </div>
        <h2 className="text-base text-[#97644E] font-bold mb-7">Change Password</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
          <label className="block mb-1 text-sm ">New Password</label>

            <input 
              type="password" 
              name="currentPassword" 
              value={profileInfo.currentPassword} 
              onChange={handleChange} 
              placeholder="**************" 
              className="w-full px-3 py-2 border rounded-lg" 
            />
          </div>
          <div>
          <label className="block mb-1 text-sm ">Confirm New Password</label>

            <input 
              type="password" 
              name="newPassword" 
              value={profileInfo.newPassword} 
              onChange={handleChange} 
              placeholder="**************" 
              className="w-full px-3 py-2 border rounded-lg" 
            />
          </div>
        </div>
        <h2 className="text-base text-[#97644E] font-bold mb-7">Address</h2>
        <label className="block mb-1 text-sm ">Shipping adress</label>
        <input 
          type="text" 
          name="address" 
          value={profileInfo.address} 
          onChange={handleChange} 
          placeholder="Your Address" 
          className="w-full px-3 py-7 border rounded-lg mb-4" 
        />
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
          <label className="block mb-1 text-sm ">State</label>

            <input 
              type="text" 
              name="state" 
              value={profileInfo.state} 
              onChange={handleChange} 
              placeholder="State" 
              className="w-full px-3 py-2 border rounded-lg" 
            />
          </div>
          <div>
          <label className="block mb-1 text-sm ">Zip Code</label>
            <input 
              type="text" 
              name="zipCode" 
              value={profileInfo.zipCode} 
              onChange={handleChange} 
              placeholder="Zip Code" 
              className="w-full px-3 py-2 border rounded-lg" 
            />
          </div>
        </div>
        {isSaved && (
        <div className="bg-[#E4C59E] text-white px-4 py-2 mb-4 rounded-md">
          Changes saved successfully!
        </div>
      )}
        <button type="submit" className="bg-[#97644E] text-white px-4 py-2 rounded-lg">Save Changes</button>
       
      </form>
    </div>
  );
};

export default Settings;
