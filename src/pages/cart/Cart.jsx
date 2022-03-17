import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import classes from './Cart.module.css';
import { netsStatement, celticsCity, philadelphiaCity } from '../../assets';
import CartCard from '../../components/card/CartCard';
import CheckoutCard from '../../components/card/CheckoutCard';
import { useCart } from '../../context/cart/cart-context';
const Cart = () => {
  const { cartProducts } = useCart();

  // Add wishlisted attribute to products in the product listing page itself

  return (
    <div>
      <Navbar />
      <section className={classes['main-content']}>
        <main>
          <div className={classes['secondary-checkout']}>
            <h1>CART</h1>
            <div>
              <span>4 ITEMS | ₹6,495</span>
            </div>
          </div>

          <div className={classes['prod-listing']}>
            {cartProducts.length > 0 ? (
              cartProducts.map((product) => <CartCard {...product} />)
            ) : (
              <h1>Add some products to cart first</h1>
            )}
            <CartCard
              image={netsStatement}
              name="Boston Celtics City Edition"
              description="Nike Dri-FIT City Edition"
              quantity="2"
              price="6,495"
              wishlisted={true}
            />
            <CartCard
              image={netsStatement}
              name="Boston Celtics City Edition"
              description="Nike Dri-FIT City Edition"
              quantity="2"
              price="6,495"
              wishlisted={true}
            />
            <CartCard
              image={celticsCity}
              name="Boston Celtics City Edition"
              description="Nike Dri-FIT City Edition"
              quantity="2"
              price="6,495"
              wishlisted={true}
            />
            <CartCard
              image={philadelphiaCity}
              name="Boston Celtics City Edition"
              description="Nike Dri-FIT City Edition"
              quantity="2"
              price="6,495"
              wishlisted={true}
            />
            <CartCard
              image={philadelphiaCity}
              name="Boston Celtics City Edition"
              description="Nike Dri-FIT City Edition"
              quantity="2"
              price="6,495"
              wishlisted={true}
            />
            <CartCard
              image={celticsCity}
              name="Boston Celtics City Edition"
              description="Nike Dri-FIT City Edition"
              quantity="2"
              price="6,495"
              wishlisted={true}
            />
            <CartCard
              image={netsStatement}
              name="Boston Celtics City Edition"
              description="Nike Dri-FIT City Edition"
              quantity="2"
              price="6,495"
              wishlisted={true}
            />
          </div>
        </main>

        <aside>
          <CheckoutCard />
        </aside>
      </section>
    </div>
  );
};

export default Cart;
