import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import '../../App.css';
import classes from './WishList.module.css';
import ProductCard from '../../components/card/ProductCard';
import { useProducts } from '../../context/products/products-context';

const WishList = () => {
  // const { wishlistProducts } = useWishlist();

  const { products, wishlist } = useProducts();

  let wishlistProducts;

  if (products !== null) {
    wishlistProducts = products.filter((product) =>
      wishlist.includes(product.id)
    );
  }

  return (
    <div>
      <Navbar />
      <section className={classes['main-content']}>
        <main>
          <div className={classes['prod-listing']}>
            {products === null ? (
              <h1>Loading...</h1>
            ) : wishlistProducts.length > 0 ? (
              wishlistProducts.map((product) => <ProductCard {...product} />)
            ) : (
              <h1>Your wishlist is empty!(sadder)</h1>
            )}
          </div>
        </main>
      </section>
    </div>
  );
};

export default WishList;
