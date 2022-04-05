import React from 'react';
import { Link } from 'react-router-dom';
import classes from './CheckoutCard.module.css';

const CheckoutCard = ({ cartTotalItems, cartTotalPrice, type }) => {
  const buttonName = type === 'cart' ? 'PLACE ORDER' : 'PAY SECURELY';

  return (
    <>
      <div className={classes['checkout-card']}>
        <h1>ORDER SUMMARY</h1>
        <div className={`${classes['checkout-item']} ${classes['org-price']}`}>
          <span>ORIGINAL PRICE</span>
          <span>₹{cartTotalPrice}.00</span>
        </div>
        <div className={`${classes['checkout-item']} ${classes['sale-price']}`}>
          <span>ON SALE</span>
          <span>-₹0</span>
        </div>
        <div
          className={`${classes['checkout-item']} ${classes['total-items']}`}
        >
          <span>{cartTotalItems} ITEMS</span>
          <span>₹{cartTotalPrice}.00</span>
        </div>
        <div className={`${classes['checkout-item']} ${classes.delivery}`}>
          <span>DELIVERY</span>
          <span>FREE</span>
        </div>
        <div
          className={`${classes['checkout-item']} ${classes['total-price']}`}
        >
          <span>TOTAL PRICE</span>
          <span>₹{cartTotalPrice}.00</span>
        </div>
      </div>
      <Link to={type === 'cart' && '/checkout'}>
        <button className={classes['checkout-btn']}>{buttonName}</button>
      </Link>
    </>
  );
};

export default CheckoutCard;
