import { useParams } from "react-router-dom"
import Sidebar from "../../Components/Sidebar/Sidebar"
import CatProducts from "../../Components/CatProducts/CatProducts"

const CategoriesProducts = () => {
    const { category } = useParams()
    return (
        <div>
<div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        {/* <h1 className="text-2xl font-bold mb-4">Products</h1> */}
        <CatProducts  category={category}/>
      </div>
    </div>
        </div>
    )
}

export default CategoriesProducts