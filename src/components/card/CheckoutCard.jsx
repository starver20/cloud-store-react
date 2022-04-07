import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from './CheckoutCard.module.css';
import deleteCartHandler from '../../utils/deleteCartHandler';
import { useCart } from '../../context/cart/cart-context';
import useAPI from '../../hooks/useAPI';

const CheckoutCard = ({
  cartProducts,
  cartTotalItems,
  cartTotalPrice,
  type,
  currentAddress,
}) => {
  const buttonName = type === 'cart' ? 'PLACE ORDER' : 'PAY SECURELY';

  const navigate = useNavigate();

  const { cartDispatch } = useCart();

  const { callAsyncFunction: deleteCart, loading: deleteCartLoading } = useAPI(
    deleteCartHandler,
    cartDispatch
  );

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const buttonClickHandler = async () => {
    if (type === 'cart') {
      navigate('/checkout');
      return;
    }

    const response = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );
    if (!response) {
      return;
    }

    const options = {
      key: 'rzp_test_FXFhjZiqILaiKr', // Enter the Key ID generated from the Dashboard
      amount: cartTotalPrice,
      currency: 'INR',
      name: 'CloudStore',
      description: 'Thank you',
      handler: async function () {
        await deleteCart();
        cartDispatch({
          type: 'UPDATE_ORDER',
          payload: {
            order: { products: cartProducts, address: currentAddress },
          },
        });
        navigate('/');
      },
      prefill: {
        name: 'Amar Narute',
        email: 'amar@narute.com',
        contact: '9999999999',
      },
      theme: {
        color: '#262626',
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

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
      <button onClick={buttonClickHandler} className={classes['checkout-btn']}>
        {buttonName}
      </button>
    </>
  );
};

export default CheckoutCard;
