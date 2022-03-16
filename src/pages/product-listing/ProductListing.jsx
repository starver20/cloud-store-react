import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import FilterSidebar from '../../components/sidebar/FilterSidebar';
import classes from './ProductListing.module.css';
import ProductCard from '../../components/card/ProductCard';
import { useProducts } from '../../context/product-listing/products-context';
import useHttp from '../../hooks/useHttp';

const ProductListing = () => {
  const { inStock, fastDelivery, priceRange, priceSort } = useProducts();

  // rename products to data, and assign empty array incase it is undefined
  const { products: data = [] } = useHttp('/api/products', 'get');

  const inStockFilter = (data) =>
    data.filter((prod) => prod.inStock || inStock);

  const fastDeliveryFilter = (data) =>
    data.filter((prod) => (fastDelivery ? prod.fastDelivery : true));

  const priceRangeFilter = (data) =>
    data.filter((prod) =>
      priceRange ? Number(prod.price) <= Number(priceRange) : true
    );

  const sortProds = (prods) => {
    if (priceSort) {
      if (priceSort === 'LOW_TO_HIGH') {
        return prods.sort((a, b) => a.price - b.price);
      } else if (priceSort === 'HIGH_TO_LOW') {
        return prods.sort((a, b) => b.price - a.price);
      }
    }
    return prods;
  };

  // used currying and reduce to apply the filters and sort

  const filters =
    (...filters) =>
    (products) => {
      const productstodisplay = filters.reduce(
        (acc, cur) => cur(acc),
        products
      );
      return productstodisplay;
    };

  const applyFilters = filters(
    inStockFilter,
    fastDeliveryFilter,
    priceRangeFilter,
    sortProds
  );

  const products = applyFilters(data);

  return (
    <div>
      <Navbar />
      <section className={classes['main-content']}>
        <aside>
          <FilterSidebar />
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
            {products.length > 0 ? (
              products.map((product) => <ProductCard {...product} />)
            ) : (
              <span>Nothing here</span>
            )}
          </div>
        </main>
      </section>
    </div>
  );
};

export default ProductListing;
