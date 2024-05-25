import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../RelatedProducts/ProductCard";

const CatProducts = ({ category }) => {

    const [catProducts, setCatProducts] = useState([]);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${category}`)
            .then(response => {
                setCatProducts(response.data);
            })
            .catch(error => {
                console.error("Error fetching categories:", error);
            });
    }, [category]);
    const allProducts = catProducts.products;

    return (
        <div className="mt-14">
            <h1 className="text-2xl font-bold mb-2">{category} Products</h1>
            <div className="p-4 flex flex-col">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {allProducts?.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CatProducts