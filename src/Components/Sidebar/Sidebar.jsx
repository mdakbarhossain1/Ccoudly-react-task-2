// src/components/Sidebar.js
import  { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Sidebar = ( ) => {
  const [categories, setCategories] = useState([]);
  const navigation = useNavigate()

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
    <div className="p-4 w-64 bg-gray-100 h-screen">
      <h2 className="font-bold text-xl mb-4">Categories</h2>
      <ul>
        {categories.map(category => (
          <li
            key={category.name}
            className="cursor-pointer py-2 hover:bg-gray-200"
            // onClick={() => setSelectedCategory(category.name)}
            onClick={() => navigation(`/categories/${category.slug}`)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
