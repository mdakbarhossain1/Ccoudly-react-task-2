import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import ProductCard from "../RelatedProducts/ProductCard";

const ProductList = () => {

    const [products, setProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get(
                `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${(currentPage - 1) * itemsPerPage}`
            );
            setProducts(response.data.products);
            setTotalProducts(response.data.total);
        };

        fetchProducts();
    }, [currentPage]);

    return (
        <div>
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.map((product) => (<ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
            <Pagination
                totalItems={totalProducts}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    )
}

export default ProductList