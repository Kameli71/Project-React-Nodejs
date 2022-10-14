import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>  
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product" element={<Product />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
      </Routes>
      {/* <Home /> */}
      {/* <ProductList /> */}
      {/* <Product /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Cart /> */}
    </div>
  );
}

export default App;
