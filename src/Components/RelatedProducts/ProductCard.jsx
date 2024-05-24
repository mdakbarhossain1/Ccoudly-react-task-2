
import { useNavigate } from 'react-router-dom';
const ProductCard = ({ product }) => {


    const navigation = useNavigate()
    return (
        <div className="border rounded-lg overflow-hidden shadow-md flex items-center " onClick={() => navigation(`/products/${product.id}`)}>
            <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="font-bold text-lg">{product.title}</h3>
                <p className="text-gray-700">${product.price}</p>
            </div>
        </div>
    )
}

export default ProductCard