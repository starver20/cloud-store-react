import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import classes from './Cart.module.css';
import img1 from '../../assets/celtics.jpeg';
import img2 from '../../assets/lakers.jpeg';
import img3 from '../../assets/76ers.jpeg';
import img4 from '../../assets/clippers1.jpeg';
import img5 from '../../assets/grizzlies.jpeg';
import CartCard from '../../components/card/CartCard';
import CheckoutCard from '../../components/card/CheckoutCard';
const Cart = () => {
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
            <CartCard
              image={img1}
              name="Boston Celtics City Edition"
              description="Nike Dri-FIT City Edition"
              quantity="2"
              price="6,495"
              wishlisted={true}
            />
            <CartCard
              image={img2}
              name="Boston Celtics City Edition"
              description="Nike Dri-FIT City Edition"
              quantity="2"
              price="6,495"
              wishlisted={true}
            />
            <CartCard
              image={img3}
              name="Boston Celtics City Edition"
              description="Nike Dri-FIT City Edition"
              quantity="2"
              price="6,495"
              wishlisted={true}
            />
            <CartCard
              image={img4}
              name="Boston Celtics City Edition"
              description="Nike Dri-FIT City Edition"
              quantity="2"
              price="6,495"
              wishlisted={true}
            />
            <CartCard
              image={img5}
              name="Boston Celtics City Edition"
              description="Nike Dri-FIT City Edition"
              quantity="2"
              price="6,495"
              wishlisted={true}
            />
            <CartCard
              image={img1}
              name="Boston Celtics City Edition"
              description="Nike Dri-FIT City Edition"
              quantity="2"
              price="6,495"
              wishlisted={true}
            />
            <CartCard
              image={img2}
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
