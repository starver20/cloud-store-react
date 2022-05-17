import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import FilterSidebar from '../../components/sidebar/FilterSidebar';
import classes from './ProductListing.module.css';
import ProductCard from '../../components/card/ProductCard';
import { useProducts } from '../../context/products/products-context';
import useHttp from '../../hooks/useHttp';

const ProductListing = () => {
  const {
    products: data,
    includeOutOfStock,
    fastDeliveryOnly,
    priceRange,
    priceSort,
    ratingRange,
    categoryName,
  } = useProducts();
  // rename products to data, and assign undefined so that loading state can be shown
  // const { products: data = undefined } = useHttp('/api/products', 'get');

  // Various filter functions for productListing
  const inStockFilter = (data) => {
    if (!includeOutOfStock) {
      return data.filter((prod) => prod.inStock);
    }
    return data;
  };

  const fastDeliveryFilter = (data) => {
    if (fastDeliveryOnly) {
      return data.filter((prod) => prod.fastDelivery);
    }
    return data;
  };

  const priceRangeFilter = (data) =>
    data.filter((prod) => Number(prod.price) <= Number(priceRange));

  const ratingRangeFilter = (data) =>
    data.filter((prod) => Number(prod.rating) >= Number(ratingRange));

  const categoryFilter = (data) =>
    data.filter((prod) =>
      categoryName.length === 0
        ? true
        : categoryName.includes(prod.categoryName)
    );

  // Sort function
  const sortProds = (products) => {
    if (priceSort) {
      if (priceSort === 'LOW_TO_HIGH') {
        return [...products].sort((a, b) => a.price - b.price);
      } else if (priceSort === 'HIGH_TO_LOW') {
        return [...products].sort((a, b) => b.price - a.price);
      }
    }
    return products;
  };

  // used currying and reduce to apply the filters and sort
  const filters =
    (...filters) =>
    (products) => {
      const productsToDisplay = filters.reduce(
        (acc, cur) => cur(acc),
        products
      );
      return productsToDisplay;
    };

  const applyFilters = filters(
    inStockFilter,
    fastDeliveryFilter,
    priceRangeFilter,
    ratingRangeFilter,
    categoryFilter,
    sortProds
  );

  let products = [];
  if (data !== null) {
    products = applyFilters(data);
  }

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar((prevState) => !prevState);
  };

  return (
    <div>
      <Navbar isListing={true} toggleSidebar={toggleSidebar} />
      <section className={classes['main-content']}>
        <aside
          className={`${classes.sidebar} ${showSidebar ? classes.active : ''}`}
        >
          <FilterSidebar />
        </aside>
        <main>
          <p className={classes.count}>
            {products?.length} of {data?.length} products
          </p>
          <div className={classes['prod-listing']}>
            {data === null ? (
              <h1>Loading...</h1>
            ) : products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))
            ) : (
              <h1>
                No products match the filters, try changing the filters to see
                products.
              </h1>
            )}
          </div>
        </main>
      </section>
    </div>
  );
};

export default ProductListing;
