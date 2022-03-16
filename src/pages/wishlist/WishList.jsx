import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import '../../App.css';
import classes from './WishList.module.css';
import {
  clippersStatement,
  netsStatement,
  celticsCity,
  philadelphiaCity,
} from '../../assets';
import ProductCard from '../../components/card/ProductCard';

const WishList = () => {
  return (
    <div>
      <Navbar />
      <section className={classes['main-content']}>
        <main>
          <div className={classes['prod-listing']}>
            <ProductCard
              image={clippersStatement}
              name="Boston Celtics City Edition"
              description="Nike Driddddd-FIT City Edition"
              price="6,495"
              wishlisted={true}
            />{' '}
            <ProductCard
              image={netsStatement}
              name="Boston Celtics City Edition"
              description="Nike Driddddd-FIT City Edition"
              price="6,495"
              wishlisted={true}
            />{' '}
            <ProductCard
              image={celticsCity}
              name="Boston Celtics City Edition"
              description="Nike Driddddd-FIT City Edition"
              price="6,495"
              wishlisted={true}
            />{' '}
            <ProductCard
              image={philadelphiaCity}
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
