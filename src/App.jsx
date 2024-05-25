
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import CategoriesProducts from './pages/CategoriesProducts/CategoriesProducts'
import Navbar from './Components/Navbar/Navbar'
import AllProducts from './pages/AllProducts/AllProducts'
import Categories from './pages/Categories/Categories'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:category" element={<CategoriesProducts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
