import React from 'react';
import classes from './CheckoutCard.module.css';

const CheckoutCard = ({ cartTotalItems, cartTotalPrice }) => {
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
      <button className={classes['checkout-btn']}>CHECKOUT</button>
    </>
  );
};

export default CheckoutCard;
