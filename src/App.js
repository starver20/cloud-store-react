import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import ProductListing from './pages/product-listing/ProductListing';
import WishList from './pages/wishlist/WishList';
import Cart from './pages/cart/Cart';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Mockman from 'mockman-js';

function App() {
  return (
    <div className="MockAPI">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-listing" element={<ProductListing />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/m" element={<Mockman />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
