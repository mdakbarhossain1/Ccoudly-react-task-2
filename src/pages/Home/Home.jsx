
import Sidebar from '../../Components/Sidebar/Sidebar';
import Products from '../../Components/Products/Products';

const Home = () => {
//   const [selectedCategory, setSelectedCategory] = useState('smartphones');

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        {/* <h1 className="text-2xl font-bold mb-4">Products</h1> */}
        <Products  />
      </div>
    </div>
  );
};

export default Home;