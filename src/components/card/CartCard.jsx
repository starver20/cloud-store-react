import React from 'react';
import classes from './CartCard.module.css';

const CartCard = ({
  image,
  name,
  description,
  quantity,
  price,
  wishlisted,
}) => {
  return (
    <>
      <div className={classes['prod-card-hor']}>
        <div className={classes['cart-prod-img']}>
          <img src={`${image}`} alt="" />
        </div>
        <div className={classes['prod-details']}>
          <div>
            <h4 className={classes['prod-name']}>{name}</h4>
            <p className={classes['prod-info']}>{description}</p>
          </div>
          <div className={classes.quantity}>
            <button>-</button>
            <div>{quantity}</div>
            <button>+</button>
          </div>
          <button className={classes['remv-cart-btn']}>REMOVE</button>
        </div>
        <p className={classes['prod-price']}>₹{price}</p>
        <span className={classes.fav}>
          <svg
            className="w-6 h-6"
            fill={wishlisted ? 'red' : 'none'}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width={wishlisted ? 0 : 1}
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
