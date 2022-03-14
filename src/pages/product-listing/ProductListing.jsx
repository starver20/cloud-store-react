import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import classes from './ProductListing.module.css';
import img1 from '../../assets/celtics.jpeg';
import img2 from '../../assets/lakers.jpeg';
import img3 from '../../assets/76ers.jpeg';
import img4 from '../../assets/clippers1.jpeg';
import img5 from '../../assets/grizzlies.jpeg';

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
            <div className="prod-card">
              <div
                className="prod-img"
                style={{
                  backgroundImage: `url(${img1})`,
                }}
              ></div>
              <div className="prod-details">
                <h4 className="prod-name">Boston Celtics City Edition</h4>
                <p className="prod-info">Nike Dri-FIT City Edition</p>
                <p className="prod-price">₹6,495</p>
              </div>
              <button className="add-cart-btn">ADD TO CART</button>
              <span className="fav">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="prod-card">
              <div
                className="prod-img"
                style={{
                  backgroundImage: `url(${img2})`,
                }}
              ></div>
              <div className="prod-details">
                <h4 className="prod-name">Boston Celtics City Edition</h4>
                <p className="prod-info">Nike Dri-FIT City Edition</p>
                <p className="prod-price">₹6,495</p>
              </div>
              <button className="add-cart-btn">ADD TO CART</button>
              <span className="fav">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="prod-card">
              <div
                className="prod-img"
                style={{
                  backgroundImage: `url(${img3})`,
                }}
              ></div>
              <div className="prod-details">
                <h4 className="prod-name">Boston Celtics City Edition</h4>
                <p className="prod-info">Nike Dri-FIT City Edition</p>
                <p className="prod-price">₹6,495</p>
              </div>
              <button className="add-cart-btn">ADD TO CART</button>
              <span className="fav">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="prod-card">
              <div
                className="prod-img"
                style={{
                  backgroundImage: `url(${img4})`,
                }}
              ></div>
              <div className="prod-details">
                <h4 className="prod-name">Boston Celtics City Edition</h4>
                <p className="prod-info">Nike Dri-FIT City Edition</p>
                <p className="prod-price">₹6,495</p>
              </div>
              <button className="add-cart-btn">ADD TO CART</button>
              <span className="fav">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="prod-card">
              <div
                className="prod-img"
                style={{
                  backgroundImage: `url(${img5})`,
                }}
              ></div>
              <div className="prod-details">
                <h4 className="prod-name">Boston Celtics City Edition</h4>
                <p className="prod-info">Nike Dri-FIT City Edition</p>
                <p className="prod-price">₹6,495</p>
              </div>
              <button className="add-cart-btn">ADD TO CART</button>
              <span className="fav">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default ProductListing;
