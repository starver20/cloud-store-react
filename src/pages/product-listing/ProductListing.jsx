import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import classes from './ProductListing.module.css';
import img1 from '../../assets/celtics.jpeg';
import img2 from '../../assets/lakers.jpeg';
import img3 from '../../assets/76ers.jpeg';
import img4 from '../../assets/clippers1.jpeg';
import img5 from '../../assets/grizzlies.jpeg';
import ProductCard from '../../components/card/ProductCard';

const ProductListing = () => {
  return (
    <div>
      <Navbar />
      <section className={classes['main-content']}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <div className={classes['filter-toggle']}>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div className={classes['prod-listing']}>
            <ProductCard
              image={img1}
              name="Boston Celtics City Edition"
              description="Nike Driddddd-FIT City Edition"
              price="6,495"
              wishlisted={false}
            />
            <ProductCard
              image={img2}
              name="Boston Celtics City Edition"
              description="Nike Driddddd-FIT City Edition"
              price="6,495"
              wishlisted={false}
            />
            <ProductCard
              image={img3}
              name="Boston Celtics City Edition"
              description="Nike Driddddd-FIT City Edition"
              price="6,495"
              wishlisted={false}
            />
            <ProductCard
              image={img4}
              name="Boston Celtics City Edition"
              description="Nike Driddddd-FIT City Edition"
              price="6,495"
              wishlisted={false}
            />
            <ProductCard
              image={img5}
              name="Boston Celtics City Edition"
              description="Nike Driddddd-FIT City Edition"
              price="6,495"
              wishlisted={false}
            />
            <ProductCard
              image={img1}
              name="Boston Celtics City Edition"
              description="Nike Driddddd-FIT City Edition"
              price="6,495"
              wishlisted={false}
            />
          </div>
        </main>
      </section>
    </div>
  );
};

export default ProductListing;
