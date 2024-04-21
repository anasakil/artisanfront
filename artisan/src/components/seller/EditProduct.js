import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../../features/products/productsSlice';

const UpdateProductForm = ({ product, closeForm }) => {
    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price);
    const [category, setcategory] = useState(product.category);
    const [description, setDescription] = useState(product.description);
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProduct({
            productId: product._id,
            productData: { name, price, description },
            token
        }));
        closeForm();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Price:
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            </label>
            <label>
            category:
                <input type="number" value={category} onChange={(e) => setcategory(e.target.value)} />
            </label>
            <label>
                Description:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <button type="submit">Update Product</button>
            <button onClick={closeForm}>Cancel</button>
        </form>
    );
};

export default UpdateProductForm;
