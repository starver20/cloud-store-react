import React from 'react';
import classes from './FilterSidebar.module.css';
import { useProducts } from '../../context/product-listing/products-context';

const FilterSidebar = () => {
  const {
    priceSort,
    ratingRange,
    productsDispatch,
    categoryName,
    includeOutOfStock,
    priceRange,
    fastDeliveryOnly,
  } = useProducts();

  const priceSortChangeHandler = (e) => {
    productsDispatch({
      type: 'PRICE_SORT',
      payload: { priceSort: e.target.value },
    });
  };

  const ratingChangeHandler = (e) => {
    productsDispatch({
      type: 'RATING_RANGE',
      payload: { ratingRange: e.target.value },
    });
  };

  const categoryChangeHandler = (e) => {
    productsDispatch({
      type: 'CATEGORY_CHANGE',
      payload: { categoryName: e.target.value },
    });
  };

  const availabilityToggleHandler = (e) => {
    productsDispatch({
      type: 'AVAILABILITY_TOGGLE',
      payload: { inStock: e.target.checked },
    });
  };

  const deliveryTypeToggleHandler = (e) => {
    console.log(e.target.checked);
    productsDispatch({
      type: 'DELIVERY_TYPE',
      payload: { fastDelivery: e.target.checked },
    });
  };

  const priceChangeHandler = (e) => {
    productsDispatch({
      type: 'PRICE_RANGE',
      payload: { priceRange: e.target.value },
    });
  };

  const onClearClicked = () => {
    productsDispatch({ type: 'CLEAR' });
  };

  return (
    <>
      <div className={classes['filters']}>
        <div className={classes['filter-header']}>
          <h1 className={classes['filter-title']}>Filters</h1>
          <button onClick={onClearClicked} className={classes['filter-clear']}>
            Clear
          </button>
        </div>
        <div className={classes['filter-type']}>
          <h2 className={classes['filter-type-title']}>Ratings</h2>
          <input
            onChange={ratingChangeHandler}
            className="rating-range filter-type-inp"
            type="range"
            step="1"
            min="1"
            max="5"
            name="rating"
            id="rating-range"
            value={ratingRange}
          />
          <div className="ratings">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
        </div>
        <div className={classes['filter-type']}>
          <h2 className={classes['filter-type-title']}>Price range</h2>
          <input
            onChange={priceChangeHandler}
            className="rating-range filter-type-inp"
            type="range"
            min="100"
            max="5000"
            name="priceRange"
            id="priceRange"
            value={priceRange}
          />
          <div className="ratings">
            <span>{priceRange}</span>
          </div>
        </div>
        <div className={classes['filter-type']}>
          <h2 className={classes['filter-type-title']}>Sort by price</h2>
          <div className="inp-container">
            <input
              onChange={priceSortChangeHandler}
              type="radio"
              name="price"
              id="LOW_TO_HIGH"
              value="LOW_TO_HIGH"
              checked={priceSort === 'LOW_TO_HIGH'}
            />
            <label htmlFor="LOW_TO_HIGH">Price low to high</label>
          </div>
          <div className="inp-container">
            <input
              onChange={priceSortChangeHandler}
              type="radio"
              name="price"
              id="HIGH_TO_LOW"
              value="HIGH_TO_LOW"
              checked={priceSort === 'HIGH_TO_LOW'}
            />
            <label htmlFor="HIGH_TO_LOW">Price high to low</label>
          </div>
        </div>
        <div className={classes['filter-type']}>
          <h2 className={classes['filter-type-title']}>Categories</h2>
          <div className="inp-container">
            <input
              onChange={categoryChangeHandler}
              type="checkbox"
              name="category"
              id="statement-edition"
              value="Statement Edition"
              checked={categoryName.includes('Statement Edition')}
            />
            <label htmlFor="statement-edition">Statement Edition</label>
          </div>
          <div className="inp-container">
            <input
              onChange={categoryChangeHandler}
              type="checkbox"
              name="category"
              id="city-edition"
              value="City Edition"
              checked={categoryName.includes('City Edition')}
            />
            <label htmlFor="city-edition">City Edition</label>
          </div>
          <div className="inp-container">
            <input
              onChange={categoryChangeHandler}
              type="checkbox"
              name="category"
              id="icon-edition"
              value="Icon Edition"
              checked={categoryName.includes('Icon Edition')}
            />
            <label htmlFor="icon-edition">Icon Edition</label>
          </div>
        </div>
        <div className={classes['filter-type']}>
          <h2 className={classes['filter-type-title']}>Availability</h2>
          <div className="inp-container">
            <input
              onChange={availabilityToggleHandler}
              type="checkbox"
              name="inStock"
              id="inStock"
              checked={includeOutOfStock}
            />
            <label htmlFor="inStock">Include out of stock</label>
          </div>
        </div>
        <div className={classes['filter-type']}>
          <h2 className={classes['filter-type-title']}>Delivery type</h2>
          <div className="inp-container">
            <input
              onChange={deliveryTypeToggleHandler}
              type="checkbox"
              name="delivery"
              id="delivery"
              checked={fastDeliveryOnly}
            />
            <label htmlFor="delivery">Fast delivery only</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
