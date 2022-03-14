import React from 'react';

const ProductCard = ({
  title,
  image,
  itemDescription,
  price,
  wishlisted = false,
}) => {
  console.log(title, image);
  return (
    <>
      <div className="prod-card">
        <div
          className="prod-img"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
        <div className="prod-details">
          <h4 className="prod-name">{title}</h4>
          <p className="prod-info">{itemDescription}</p>
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
