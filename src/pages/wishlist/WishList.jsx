import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import '../../App.css';
import classes from './WishList.module.css';
import background1 from '../../assets/bucks-icon.jpeg';
import background2 from '../../assets/bucks-icon.jpeg';
import background3 from '../../assets/bucks-icon.jpeg';
import background4 from '../../assets/bucks-icon.jpeg';
import ProductCard from '../../components/card/ProductCard';

const WishList = () => {
  return (
    <div>
      <Navbar />
      <section className={classes['main-content']}>
        <main>
          <div className={classes['prod-listing']}>
            <ProductCard
              image={background1}
              name="Boston Celtics City Edition"
              description="Nike Driddddd-FIT City Edition"
              price="6,495"
              wishlisted={true}
            />{' '}
            <ProductCard
              image={background2}
              name="Boston Celtics City Edition"
              description="Nike Driddddd-FIT City Edition"
              price="6,495"
              wishlisted={true}
            />{' '}
            <ProductCard
              image={background3}
              name="Boston Celtics City Edition"
              description="Nike Driddddd-FIT City Edition"
              price="6,495"
              wishlisted={true}
            />{' '}
            <ProductCard
              image={background4}
              name="Boston Celtics City Edition"
              description="Nike Driddddd-FIT City Edition"
              price="6,495"
              wishlisted={true}
            />
          </div>
        </main>
      </section>
    </div>
  );
};

export default WishList;
