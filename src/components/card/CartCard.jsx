import React, { useState } from 'react';
import { lakersCity } from '../../assets';
import classes from './CartCard.module.css';
import { useCart } from '../../context/cart/cart-context';
import { useProducts } from '../../context/products/products-context';
import axios from 'axios';

const CartCard = (product) => {
  const {
    id,
    image = lakersCity,
    title = 'Lakers City Edition',
    itemDescription = 'Nike Dri-FIT NBA Swingman Jersey',
    qty: quantity,
    price = 1000,
  } = product;

  const { cartDispatch } = useCart();
  const { productsDispatch, wishlist } = useProducts();

  const isWishlisted = wishlist.includes(product._id.toString());

  const itemQuantityChangeHandler = async (e) => {
    console.log(quantity);
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      let response = await axios.post(
        `/api/user/cart/${product._id}`,

        { action: { type: e.target.name } },

        { headers: { authorization: jwt } }
      );

      console.log(response);

      response.status === 200 &&
        cartDispatch({
          type: 'UPDATE_CART',
          payload: { cart: response.data.cart },
        });
    } else {
      navigate('/login');
    }
    // cartDispatch({ type: e.target.name, payload: { id } });
  };

  const removeFromCartHandler = async (e) => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      let response = await axios.delete(
        `/api/user/cart/${product._id}`,

        { headers: { authorization: jwt } }
      );

      if (response.status === 200) {
        cartDispatch({
          type: 'UPDATE_CART',
          payload: { cart: response.data.cart },
        });
      }
    } else {
      navigate('/login');
    }
  };

  const wishlistClickHandler = async () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      let response;
      if (isWishlisted) {
        response = await axios.delete(
          `/api/user/wishlist/${product._id}`,

          { headers: { authorization: jwt } }
        );
      } else {
        response = await axios.post(
          '/api/user/wishlist',
          { product },
          { headers: { authorization: jwt } }
        );
      }

      if (response.status === 201 || response.status === 200) {
        productsDispatch({
          type: 'TOGGLE_WISHLIST',
          payload: { _id: product._id },
        });
      }
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <div className={classes['prod-card-hor']}>
        <div className={classes['cart-prod-img']}>
          <img src={`${image}`} alt="" />
        </div>
        <div className={classes['prod-details']}>
          <div>
            <h4 className={classes['prod-name']}>{title}</h4>
            <p className={classes['prod-info']}>{itemDescription}</p>
          </div>
          <div className={classes.quantity}>
            <button
              onClick={itemQuantityChangeHandler}
              name="decrement"
              disabled={quantity === 1}
            >
              -
            </button>
            <div>{quantity}</div>
            <button onClick={itemQuantityChangeHandler} name="increment">
              +
            </button>
          </div>
          <button
            onClick={removeFromCartHandler}
            className={classes['remv-cart-btn']}
          >
            REMOVE
          </button>
        </div>
        <p className={classes['prod-price']}>₹{price}</p>
        <span onClick={wishlistClickHandler} className={classes.fav}>
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
              strokeWidth={isWishlisted ? 0 : 1}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </span>
      </div>

      <hr className={classes.divider} />
    </>
  );
};

export default CartCard;
