import React, { useEffect, useState } from 'react';
import classes from './ProductCard.module.css';
import { useCart } from '../../context/cart/cart-context';
// fallback image
import { useProducts } from '../../context/products/products-context';
import { clippersCity } from '../../assets/index';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAPI from '../../hooks/useAPI';
import addToCartHandler from '../../utils/addToCartHandler';
import wishlistClickHandler from '../../utils/wishlistClickHandler';

const ProductCard = (product) => {
  // Cart related functions
  const {
    title = 'Product Title',
    image = clippersCity,
    itemDescription = 'Product Description',
    price = '1000',
    rating = 1,
  } = product;

  // const [loading, setLoading] = useState(false);

  const { cartDispatch, cartProducts } = useCart();
  const { productsDispatch, wishlist } = useProducts();

  const isWishlisted = wishlist.includes(product._id.toString());

  const index = cartProducts.findIndex((item) => item._id === product._id);

  const isAddedToCart = index === -1 ? false : true;

  const navigate = useNavigate();

  const { loading: addToCartLoading, callAsyncFunction: addToCart } = useAPI(
    addToCartHandler,
    isAddedToCart,
    cartDispatch,
    product,
    '/cart'
  );

  const { loading: wishlistLoading, callAsyncFunction: toggleWishlist } =
    useAPI(wishlistClickHandler, isWishlisted, productsDispatch, product);

  // const wishlistClickHandler = async () => {
  //   const jwt = localStorage.getItem('jwt');
  //   console.log(jwt);

  //   if (jwt) {
  //     let response;
  //     if (isWishlisted) {
  //       response = await axios.delete(
  //         `/api/user/wishlist/${product._id}`,

  //         { headers: { authorization: jwt } }
  //       );
  //     } else {
  //       response = await axios.post(
  //         '/api/user/wishlist',
  //         { product },
  //         { headers: { authorization: jwt } }
  //       );
  //     }

  //     // Add or remove from wishlist, 201 for adding, 200 for removing
  //     if (response.status === 201 || response.status === 200) {
  //       productsDispatch({
  //         type: 'TOGGLE_WISHLIST',
  //         payload: { _id: product._id },
  //       });
  //     }
  //   } else {
  //     navigate('/login');
  //   }
  // };

  return (
    <>
      <div className={`prod-card ${classes.card}`}>
        <div
          className="prod-img"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
        <div className="prod-details">
          <h4 className="prod-name">{title}</h4>
          <p className="prod-info">{itemDescription}</p>
          <div className={classes['prod-ratings']}>
            <svg
              class="w-6 h-6"
              fill="#F1C400"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span>{rating}/5</span>
          </div>
          <p className="prod-price">₹{price}</p>
        </div>
        <button
          disabled={addToCartLoading}
          onClick={addToCart}
          className="add-cart-btn"
        >
          {isAddedToCart
            ? 'GO TO CART'
            : addToCartLoading
            ? 'ADDING...'
            : 'ADD TO CART'}
        </button>
        <span onClick={wishlistLoading ? null : toggleWishlist} className="fav">
          <svg
            className="w-6 h-6"
            fill={isWishlisted ? 'red' : 'none'}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width={isWishlisted ? 0 : 1}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </span>
      </div>
    </>
  );
};

export default ProductCard;
