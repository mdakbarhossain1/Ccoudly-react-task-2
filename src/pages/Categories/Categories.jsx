import axios from "axios";
import { useEffect, useState } from "react";
import AllCatProducts from "../../Components/AllCatProducts/AllCatProducts";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories/')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error("Error fetching categories:", error);
            });
    }, []);

    return (
        <>
            <div>All Categories Products</div>
            <div className="mt-4">
                {
                    categories.map((catProduct, index) => <AllCatProducts key={index} catProduct={catProduct} />)
                }
            </div>
        </>
    )
}

export default Categories