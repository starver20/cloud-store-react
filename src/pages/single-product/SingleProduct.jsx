import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import classes from './SingleProduct.module.css';
import { useCart } from '../../context/cart/cart-context';
import { useProducts } from '../../context/products/products-context';
import useAPI from '../../hooks/useAPI';
import addToCartHandler from '../../utils/addToCartHandler';
import wishlistClickHandler from '../../utils/wishlistClickHandler';
import { Link } from 'react-router-dom';

const SingleProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(async () => {
    const response = await axios.get(`/api/products/${productId}`);
    setProduct(response.data.product);
  }, [productId]);

  const { cartDispatch, cartProducts } = useCart();
  const { productsDispatch, wishlist } = useProducts();

  const isWishlisted = wishlist.includes(parseInt(productId));

  const index = cartProducts.findIndex((item) => item._id === productId);

  const isAddedToCart = index === -1 ? false : true;

  const { loading: addToCartLoading, callAsyncFunction: addToCart } = useAPI(
    addToCartHandler,
    cartDispatch,
    product,
    isAddedToCart
  );

  const { loading: wishlistLoading, callAsyncFunction: toggleWishlist } =
    useAPI(wishlistClickHandler, productsDispatch, product, isWishlisted);

  return (
    <div>
      <Navbar />

      <section className={classes['main-content']}>
        <Link to={'/product-listing'}>
          <svg
            className={classes.back}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        {product ? (
          <article className={classes.product}>
            <div className={classes['image-container']}>
              <img src={product.image} alt="" />
              <button
                onClick={toggleWishlist}
                disabled={wishlistLoading}
                className={classes.fav}
              >
                <svg
                  class="w-6 h-6"
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
              </button>
            </div>
            <div className={classes['product-info']}>
              <div className={classes['title-rating']}>
                <h2 className={classes.title}>{product.title}</h2>
                <span className={classes['prod-ratings']}>
                  <svg
                    class="w-6 h-6"
                    fill="#F1C400"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span>{product.rating}/5</span>
                </span>
              </div>
              <p className={classes.description}>{product.itemDescription}</p>

              <p className={classes.price}>₹{product.price}/-</p>
              <div className={classes.actions}>
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
              </div>
            </div>
          </article>
        ) : (
          <p>LOADING...</p>
        )}
      </section>
    </div>
  );
};

export default SingleProduct;

// title: 'Nets Statement Edition 2020',
// image: netsStatement,
// price: '1500',
// itemDescription: 'Jordan NBA Swingman Jersey',
