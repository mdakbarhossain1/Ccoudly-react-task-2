
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import CategoriesProducts from './pages/CategoriesProducts/CategoriesProducts'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/categories/:category" element={<CategoriesProducts />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
