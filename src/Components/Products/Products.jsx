// src/components/Products.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import HomeProduct from '../HomeProduct/HomeProduct';

const Products = () => {
    const [smartphones, setSmartphones] = useState([]);
    const [laptops, setLaptops] = useState([]);
    const [groceries, setGroceries] = useState([]);
    const navigation = useNavigate()

    useEffect(() => {
        // Smart Phones 
        axios.get('https://dummyjson.com/products/category/Smartphones')
            .then(response => {
                setSmartphones(response.data.products);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
            });
        // Laptops  
        axios.get('https://dummyjson.com/products/category/laptops')
            .then(response => {
                setLaptops(response.data.products);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
            });
        // Groceries  
        axios.get('https://dummyjson.com/products/category/motorcycle')
            .then(response => {
                setGroceries(response.data.products);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
            });
    }, []);

    console.log(smartphones.slice(0, 4));
    return (
        <div className="p-4 flex flex-wrap gap-4 mt-14">
            <h1 className="text-2xl font-bold mb-4">Smart Phones</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {smartphones.slice(0, 4).map(product => (<HomeProduct key={product.id} product={product} />))}
            </div>
            <h1 className="text-2xl font-bold mb-4">Laptops</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {laptops.slice(0, 4).map(product => (<HomeProduct key={product.id} product={product} />))}
            </div>
            <h1 className="text-2xl font-bold mb-4">Motorcycle</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {groceries.slice(0, 4).map(product => (<HomeProduct key={product.id} product={product} />))}
            </div>
        </div>
    );
};

export default Products;
