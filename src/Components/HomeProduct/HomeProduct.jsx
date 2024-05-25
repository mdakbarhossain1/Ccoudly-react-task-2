import { useNavigate } from "react-router-dom"



const HomeProduct = ({ product }) => {
    const navigation = useNavigate()
    return (
        <div className="border p-4 rounded-lg" onClick={() => navigation(`/products/${product.id}`)}>
            <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover mb-2" />
            <h3 className="text-lg font-bold">{product.title}</h3>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-gray-900 font-bold">${product.price}</p>
        </div>
    )
}

export default HomeProduct