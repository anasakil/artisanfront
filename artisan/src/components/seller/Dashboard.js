import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../features/products/productsSlice';

const CreateProductPage = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState('');
  const [region, setRegion] = useState('');
  const [stock, setStock] = useState('');
  const dispatch = useDispatch();

  const token = localStorage.getItem('token');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
    script.async = true;

    script.onload = () => {
      if (typeof window.cloudinary === 'undefined') {
        console.log('Cloudinary widget failed to load');
      } else {
        console.log('Cloudinary widget loaded successfully');
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const uploadImage = () => {
    if (!window.cloudinary) {
      console.error('Cloudinary widget is not loaded yet!');
      return;
    }

    const myWidget = window.cloudinary.createUploadWidget({
      cloudName: 'dso0onust',
      uploadPreset: 'ml_default'
    }, (error, result) => {
      if (!error && result && result.event === "success") {
        setImageUrl(result.info.secure_url);
      }
    });

    myWidget.open();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = { name, description, price, imageUrl, category, region, stock };
    dispatch(createProduct({ productData, token }));
    setName('');
    setDescription('');
    setPrice('');
    setImageUrl('');
    setCategory('');
    setRegion('');
    setStock('');
  };

  return (
    <div>
      <h2>Create New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="imageUrl">Image:</label>
          <button type="button" onClick={uploadImage}>Upload Image</button>
          {imageUrl && (
            <div>
              <img src={imageUrl} alt="Product" style={{ width: '100px', height: 'auto' }} />
            </div>
          )}
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="region">Region:</label>
          <input type="text" id="region" value={region} onChange={(e) => setRegion(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="stock">Stock:</label>
          <input type="number" id="stock" value={stock} onChange={(e) => setStock(e.target.value)} required />
        </div>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default CreateProductPage;
