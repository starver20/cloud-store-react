import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import ProductListing from './pages/product-listing/ProductListing';
import WishList from './pages/wishlist/WishList';
import Cart from './pages/cart/Cart';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Profile from './pages/profile/Profile';
import Checkout from './pages/checkout/Checkout';
import SingleProduct from './pages/single-product/SingleProduct';
import { ToastContainer, toast } from 'react-toastify';
import RequiresAuth from './components/auth/RequiresAuth';
import ScrollToTop from './utils/ScrollToTop';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  let jwt = localStorage.getItem('jwt');
  return (
    <div className="MockAPI">
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-listing" element={<ProductListing />} />
          <Route path="/product/:productId" element={<SingleProduct />} />

          <Route
            path="/wishlist"
            element={
              <RequiresAuth>
                <WishList />
              </RequiresAuth>
            }
          />
          <Route
            path="/cart"
            element={
              <RequiresAuth>
                <Cart />
              </RequiresAuth>
            }
          />
          <Route
            path="/checkout"
            element={
              <RequiresAuth>
                <Checkout />
              </RequiresAuth>
            }
          />
          <Route
            path="/profile"
            element={
              <RequiresAuth>
                <Profile />
              </RequiresAuth>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </ScrollToTop>
      <ToastContainer
        autoClose={3000}
        draggablePercent={50}
        style={{ fontSize: '1.5rem' }}
        position={toast.POSITION.BOTTOM_RIGHT}
      />
    </div>
  );
}

export default App;
