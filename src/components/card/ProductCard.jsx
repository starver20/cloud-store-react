import React from 'react';
import classes from './ProductCard.module.css';
// fallback image
import { clippersCity } from '../../assets/index';

const ProductCard = ({
  title = 'Product Title',
  image = clippersCity,
  itemDescription = 'Product Description',
  price = '1000',
  rating = 1,
  wishlisted = false,
}) => {
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
        <button className="add-cart-btn">ADD TO CART</button>
        <span className="fav">
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
    </>
  );
};

export default ProductCard;
