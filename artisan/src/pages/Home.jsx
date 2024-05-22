// src/pages/Home.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectAllProducts } from '../features/products/productsSlice';
import ProductCard from './ProductCard';
import Navbar from './Navbar';
import Hero from './hero';
import Category from './Category';
import Cards from './cards';

const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectAllProducts);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <>
        <Nabvar/>
        <Hero/>
        <Category/>
        <Cards/>
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold my-6">Home</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
        </>
    );
};

export default Home;
