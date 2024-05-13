import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductsPage = () => {
  const { region } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/products/${region}`)
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
      document.title = `Products ${region}`;
  }, [region]);
  

  return (
    <div>
      <h1>Products in {region}</h1>
      <ul>
        {products.map(product => (
          <li key={product._id}>{product.name}  - ${product.price}  - ${product.region}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
