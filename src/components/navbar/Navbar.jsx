import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/cart/cart-context';

const Navbar = ({ auth = 'login' }) => {
  const { cartTotalItems } = useCart();

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <Link to="/" className="nav-logo">
            CloudStore
          </Link>
          <div className="nav-search">
            <input type="text" name="search" id="search" placeholder="Search" />
          </div>
          <div className="nav-action-container">
            <div className="nav-action">
              <Link to={`${auth === 'login' ? '/login' : '/signup'}`}>
                <button className="nav--action__login">
                  {auth === 'login' ? 'LOGIN' : 'SIGNUP'}
                </button>
              </Link>
              <div className="nav-icon">
                <Link to="/wishlist">
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
                  <span className="icon-number">4</span>
                </Link>
              </div>
              <div className="nav-icon">
                <Link to="/cart">
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
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
