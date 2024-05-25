import ProductList from "../../Components/Pagination/ProductList"


const AllProducts = () => {
    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Product Pagination Demo</h1>
            <ProductList />
        </div>
    )
}

export default AllProducts