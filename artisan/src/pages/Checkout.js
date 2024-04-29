import React, { useState } from 'react';
 
const CheckoutPage = () => {
  const [billingInfo, setBillingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    zipCode: '',
  });

  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    zipCode: '',
  });

  const handleBillingInputChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo({ ...billingInfo, [name]: value });
  };

  const handleShippingInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Billing Info:', billingInfo);
    console.log('Shipping Info:', shippingInfo);
    setBillingInfo({
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      city: '',
      country: '',
      zipCode: '',
    });
    setShippingInfo({
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      country: '',
      zipCode: '',
    });
  };

  // Inline CSS styles
  const styles = `
    .container {
      max-width: 500px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    .title {
      text-align: center;
      margin-bottom: 20px;
      padding: 10px;
      background-color: #97644e;
      color: #fff;
      border-radius: 5px;
    }

    .fieldset {
      border: none;
      margin-bottom: 20px;
    }

    .input-group {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }

    .input {
      width: 48%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    .button {
      width: 100%;
      padding: 10px;
      background-color: #97644e;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .button:hover {
      background-color: #007bff;
    }
  `;

  return (
    <div className="container" style={{ fontFamily: 'Arial, sans-serif' }}>
      <style>{styles}</style> {/* Inject CSS styles */}
      <h1 className="title">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset">
          <legend>Generale Information</legend>
          <div className="input-group">
            <input
              type="text"
              name="firstName"
              value={billingInfo.firstName}
              onChange={handleBillingInputChange}
              placeholder="First Name"
              className="input"
              required
            />
            <input
              type="text"
              name="lastName"
              value={billingInfo.lastName}
              onChange={handleBillingInputChange}
              placeholder="Last Name"
              className="input"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              value={billingInfo.email}
              onChange={handleBillingInputChange}
              placeholder="Email"
              className="input"
              required
            />
            <input
              type="text"
              name="address"
              value={billingInfo.address}
              onChange={handleBillingInputChange}
              placeholder="Address"
              className="input"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="city"
              value={billingInfo.city}
              onChange={handleBillingInputChange}
              placeholder="City"
              className="input"
              required
            />
            <input
              type="text"
              name="country"
              value={billingInfo.country}
              onChange={handleBillingInputChange}
              placeholder="Country"
              className="input"
              required
            />
            <input
              type="text"
              name="zipCode"
              value={billingInfo.zipCode}
              onChange={handleBillingInputChange}
              placeholder="ZIP Code"
              className="input"
              required
            />
          </div>
        </fieldset>
        <fieldset className="fieldset">
          <legend>Shipping Information</legend>
          <div className="input-group">
            <input
              type="text"
              name="firstName"
              value={shippingInfo.firstName}
              onChange={handleShippingInputChange}
              placeholder="First Name"
              className="input"
              required
            />
            <input
              type="text"
              name="lastName"
              value={shippingInfo.lastName}
              onChange={handleShippingInputChange}
              placeholder="Last Name"
              className="input"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="address"
              value={shippingInfo.address}
              onChange={handleShippingInputChange}
              placeholder="Address"
              className="input"
              required
            />
            <input
              type="text"
              name="city"
              value={shippingInfo.city}
              onChange={handleShippingInputChange}
              placeholder="City"
              className="input"
              required
            />
            <input
              type="text"
              name="country"
              value={shippingInfo.country}
              onChange={handleShippingInputChange}
              placeholder="Country"
              className="input"
              required
            />
            <input
              type="text"
              name="zipCode"
              value={shippingInfo.zipCode}
              onChange={handleShippingInputChange}
              placeholder="ZIP Code"
              className="input"
              required
            />
          </div>
        </fieldset>
        <button type="submit" className="button">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
