// src/components/Sidebar.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useSidebar from '../../hooks/useSidebar';

const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  const navigation = useNavigate()
  // const [isOpen, setIsOpen] = useState(false);
  const { isOpen, toggleSidebar } = useSidebar();

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories/')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error("Error fetching categories:", error);
      });
  }, []);
  console.log(categories.name)
  return (
    <div className="flex bg-gray-800 mt-[64px]">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 bg-gray-800 text-white w-64 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between p-4">
          <h1 className="text-2xl">Categories</h1>
          <button className="lg:hidden text-xl" onClick={toggleSidebar}>
            &times;
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto p-4">
          <ul>
            <li><button className="lg:hidden" onClick={toggleSidebar}>
              &times;
            </button></li>
            {categories.map(category => (
              <li
                key={category.name}
                className="cursor-pointer py-2 hover:bg-gray-200"
                // onClick={() => setSelectedCategory(category.name)}
                onClick={() => {
                  navigation(`/categories/${category.slug}`);
                  toggleSidebar();
                }}

              >
                {category.name}
              </li>
            ))}
          </ul>

        </nav>
      </div>
      <div className="p-4 bg-white lg:hidden md:hidden">
        <button className="lg:hidden md:hidden text-xl" onClick={toggleSidebar}>
          &#9776;
        </button>
      </div>

      {/* Main content */}
    </div >
  );
};

export default Sidebar;
