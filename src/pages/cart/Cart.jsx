import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import classes from './Cart.module.css';
import { netsStatement, celticsCity, philadelphiaCity } from '../../assets';
import CartCard from '../../components/card/CartCard';
import CheckoutCard from '../../components/card/CheckoutCard';
import { useCart } from '../../context/cart/cart-context';
const Cart = () => {
  const { cartProducts, cartTotalItems, cartTotalPrice } = useCart();

  // Add wishlisted attribute to products in the product listing page itself
  return (
    <div>
      <Navbar />
      <section className={classes['main-content']}>
        <main>
          {cartProducts.length > 0 ? (
            <div className={classes['secondary-checkout']}>
              <h1>CART</h1>
              <div>
                <span>
                  {cartTotalItems} ITEMS | ₹{cartTotalPrice}
                </span>
              </div>
            </div>
          ) : null}

          <div className={classes['prod-listing']}>
            {cartProducts.length > 0 ? (
              cartProducts.map((product) => <CartCard {...product} />)
            ) : (
              <h1>Your cart is empty!(sad)</h1>
            )}
          </div>
        </main>

        {cartProducts.length > 0 ? (
          <aside>
            <CheckoutCard
              cartTotalItems={cartTotalItems}
              cartTotalPrice={cartTotalPrice}
            />
          </aside>
        ) : null}
      </section>
    </div>
  );
};

export default Cart;
