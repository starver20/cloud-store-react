import React from 'react';
import classes from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <>
      <div className={classes['filters']}>
        <div className={classes['filter-header']}>
          <h1 className={classes['filter-title']}>Filters</h1>
          <button className={classes['filter-clear']}>Clear</button>
        </div>
        <div className={classes['filter-type']}>
          <h2 className={classes['filter-type-title']}>Ratings</h2>
          <input
            className="rating-range filter-type-inp"
            type="range"
            step="1"
            min="1"
            max="5"
            name="rating"
            id="rating-range"
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
          <h2 className={classes['filter-type-title']}>Sort by price</h2>
          <div className="inp-container">
            <input type="radio" name="price" id="price" checked />
            <label for="">Price low to high</label>
          </div>
          <div className="inp-container">
            <input type="radio" name="price" id="price" />
            <label for="">Price high to low</label>
          </div>
        </div>
        <div className={classes['filter-type']}>
          <h2 className={classes['filter-type-title']}>Categories</h2>
          <div className="inp-container">
            <input type="checkbox" name="category" id="category" checked />
            <label for="">Men</label>
          </div>
          <div className="inp-container">
            <input type="checkbox" name="category" id="category" />
            <label for="">Women</label>
          </div>
          <div className="inp-container">
            <input type="checkbox" name="category" id="category" />
            <label for="">Sleeveless</label>
          </div>
          <div className="inp-container">
            <input type="checkbox" name="category" id="category" />
            <label for="">Slim</label>
          </div>
          <div className="inp-container">
            <input type="checkbox" name="category" id="category" />
            <label for="">Standard</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
