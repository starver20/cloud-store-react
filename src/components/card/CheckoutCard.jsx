import React from 'react';
import classes from './CheckoutCard.module.css';

const CheckoutCard = () => {
  return (
    <>
      <div className={classes['checkout-card']}>
        <h1>ORDER SUMMARY</h1>
        <div className={`${classes['checkout-item']} ${classes['org-price']}`}>
          <span>ORIGINAL PRICE</span>
          <span>₹77 591.00</span>
        </div>
        <div className={`${classes['checkout-item']} ${classes['sale-price']}`}>
          <span>ON SALE</span>
          <span>-₹34 591.00</span>
        </div>
        <div
          className={`${classes['checkout-item']} ${classes['total-items']}`}
        >
          <span>5 ITEMS</span>
          <span>₹43 591.00</span>
        </div>
        <div className={`${classes['checkout-item']} ${classes.delivery}`}>
          <span>DELIVERY</span>
          <span>FREE</span>
        </div>
        <div
          className={`${classes['checkout-item']} ${classes['total-price']}`}
        >
          <span>TOTAL PRICE</span>
          <span>₹43 591.00</span>
        </div>
      </div>
      <button className={classes['checkout-btn']}>CHECKOUT</button>
    </>
  );
};

export default CheckoutCard;
