import './App.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Footer } from './components/footer'
import { Navbar } from './components/navbar'
import { Home } from './pages/home'
import { Link, Route, Routes } from "react-router-dom";
import { ProductDetails } from './pages/productdetail';
import { Cart } from './pages/cart';
import { Login } from './pages/login';
import { Signup } from './pages/signup';

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/productsdetails" element={<ProductDetails></ProductDetails>} />
        <Route path="/cart" element={<Cart></Cart>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>} />
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
