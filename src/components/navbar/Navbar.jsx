import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/cart/cart-context';
import { useProducts } from '../../context/products/products-context';
import { useAuth } from '../../context/auth/auth-context';
import { useNavigate } from 'react-router-dom';
import classes from './Navbar.module.css';
import filterSearchProducts from '../../utils/filterSearchProducts';

const Navbar = ({ page = 'home' }) => {
  const [searchProducts, setSearchProducts] = useState([]);

  const { cartDispatch, cartProducts } = useCart();
  const { wishlist, productsDispatch, searchTerm, products } = useProducts();
  const { logout } = useAuth();

  const navigate = useNavigate();
  let jwt = localStorage.getItem('jwt');

  let wishlistTotalItems = wishlist.length;
  const cartTotalItems = cartProducts.length;

  const authClickHandler = (e) => {
    // If user is logged in, then log him out and clear the wishlist and cart
    if (jwt) {
      productsDispatch({
        type: 'INITIALIZE_WISHLIST',
        payload: { wishlist: [] },
      });
      cartDispatch({
        type: 'UPDATE_CART',
        payload: { cart: [] },
      });
      logout();
    }
    navigate('/login');
  };

  const productClickHandler = (id) => {
    setSearchProducts([]);
    productsDispatch({
      type: 'UPDATE_SEARCH_TERM',
      payload: { searchTerm: '' },
    });

    navigate(`/product/${id}`);
  };

  const searchTermChangeHandler = (e) => {
    productsDispatch({
      type: 'UPDATE_SEARCH_TERM',
      payload: { searchTerm: e.target.value },
    });
  };

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      // call the function to filter products
      let searchResult = filterSearchProducts(products, searchTerm);
      if (searchResult === null) {
        setSearchProducts([]);
      } else {
        setSearchProducts(searchResult);
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm]);

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <Link to={'/'} className="nav-logo">
            CloudStore
          </Link>
          <div className="nav-search">
            <div className={classes.search}>
              <input
                onChange={searchTermChangeHandler}
                type="text"
                name="search"
                id="search"
                placeholder="Search"
              />
            </div>
            {searchProducts.length > 0 ? (
              <div className={classes['search-list']}>
                <ul>
                  {searchProducts.map((product) => {
                    return (
                      <li
                        onClick={() => {
                          productClickHandler(product._id);
                        }}
                        className={classes.product}
                      >
                        {product.title}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}
          </div>
          <div className="nav-action-container">
            <div className="nav-action">
              {jwt ? (
                <>
                  <div className="nav-icon">
                    <Link to={jwt ? '/wishlist' : '/login'}>
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        ></path>
                      </svg>
                      {wishlistTotalItems > 0 && (
                        <span className="icon-number">
                          {wishlistTotalItems}
                        </span>
                      )}
                    </Link>
                  </div>
                  <div className="nav-icon">
                    <Link to={jwt ? '/cart' : '/login'}>
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        ></path>
                      </svg>
                      {cartTotalItems > 0 && (
                        <span className="icon-number">{cartTotalItems}</span>
                      )}
                    </Link>
                  </div>
                  <div className={`nav-icon ${classes['options-container']}`}>
                    <Link to="/">
                      <svg
                        class="w-6 h-6"
                        fill="black"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                    <div className={classes['profile-options']}>
                      <Link to="/profile">
                        <button className="nav--action__login">Profile</button>
                      </Link>
                      <button
                        onClick={authClickHandler}
                        className="nav--action__login"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {page !== 'auth' && (
                    <button
                      onClick={authClickHandler}
                      className="nav--action__login"
                    >
                      LOGIN
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
