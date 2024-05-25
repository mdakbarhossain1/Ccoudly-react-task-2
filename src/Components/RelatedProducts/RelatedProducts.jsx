import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const RelatedProducts = ({ categories }) => {
    console.log(categories)

    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${categories}`)
            .then(response => {
                setRelatedProducts(response.data);
            })
            .catch(error => {
                console.error("Error fetching categories:", error);
            });
    }, [categories]);
    const allProducts = relatedProducts.products;


    return (
        <div>

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

export default RelatedProducts