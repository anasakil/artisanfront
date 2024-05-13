import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSellerProducts, deleteProduct } from '../../features/products/productsSlice';
import UpdateProductForm from './EditProduct';

const ProductsTable = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.products);
    const [currentProduct, setCurrentProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const token = localStorage.getItem('token');

    useEffect(() => {
        dispatch(fetchSellerProducts());
    }, [dispatch]);

    const handleDelete = (productId) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            dispatch(deleteProduct({ productId, token }));
            fetchSellerProducts();
        }
    };

    const openUpdateModal = (product) => {
        setCurrentProduct(product);
        setShowModal(true);
    };

    const closeUpdateModal = () => {
        setCurrentProduct(null);
        setShowModal(false);
    };

    return (
        <div>
            <h1>My Products</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product._id}>
                            <td>{product._id}</td>
                            <td>{product.name}</td>
                            <td>${product.price}</td>
                            <td>
                                <button onClick={() => openUpdateModal(product)}>Update</button>
                                <button onClick={() => handleDelete(product._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showModal && <UpdateProductForm product={currentProduct} closeForm={closeUpdateModal} />}
        </div>
    );
};

export default ProductsTable;
