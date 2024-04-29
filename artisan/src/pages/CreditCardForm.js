import React, { useState } from 'react';

const CreditCardForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleCardHolderNameChange = (e) => {
    setCardHolderName(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Credit Card Details:', {
      cardNumber,
      cardHolderName,
      expiryDate,
      cvv,
    });
  };

  const styles = `
    .credit-card-form {
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #FFFFFF;
    }

    .form-group {
      margin-bottom: 15px;
    }

    label {
      display: block;
      font-weight: bold;
      color: #97644E;
    }

    input[type="text"] {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
    }

    .submit-button {
      width: 100%;
      padding: 10px;
      background-color: #97644e;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .submit-button:hover {
      background-color: #0056b3;
    }
  `;

  return (
    <form onSubmit={handleSubmit} className="credit-card-form" style={{ fontFamily: 'Arial, sans-serif' }}>
      <style>{styles}</style> {/* Inject CSS styles */}
      <div className="form-group">
        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={handleCardNumberChange}
          maxLength="16"
          minLength="16"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="cardHolderName">Card Holder Name</label>
        <input
          type="text"
          id="cardHolderName"
          value={cardHolderName}
          onChange={handleCardHolderNameChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="expiryDate">Expiry Date</label>
        <input
          type="text"
          id="expiryDate"
          value={expiryDate}
          onChange={handleExpiryDateChange}
          placeholder="MM/YYYY"
          pattern="(0[1-9]|1[0-2])\/[0-9]{4}"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="cvv">CVV</label>
        <input
          type="text"
          id="cvv"
          value={cvv}
          onChange={handleCvvChange}
          maxLength="3"
          minLength="3"
          required
        />
      </div>
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default CreditCardForm;
