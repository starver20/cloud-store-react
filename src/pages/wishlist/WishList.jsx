import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import '../../App.css';
import classes from './WishList.module.css';
import background1 from '../../assets/76ers.jpeg';
import background2 from '../../assets/celtics.jpeg';
import background3 from '../../assets/lakers.jpeg';
import background4 from '../../assets/clippers1.jpeg';

const WishList = () => {
  return (
    <div>
      <Navbar />
      <section className={classes['main-content']}>
        <main>
          <div className={classes['prod-listing']}>
            <div className="prod-card">
              <div
                className="prod-img p2"
                style={{
                  backgroundImage: `url(${background1})`,
                }}
              ></div>
              <div className="prod-details">
                <h4 className="prod-name">Boston Celtics City Edition</h4>
                <p className="prod-info">Nike Dri-FIT City Edition</p>
                <p className="prod-price">₹6,495</p>
              </div>
              <button className="add-cart-btn">MOVE TO CART</button>
              <span className="fav">
                <svg
                  className="w-6 h-6"
                  fill="red"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="prod-card">
              <div
                className="prod-img p4"
                style={{
                  backgroundImage: `url(${background2})`,
                }}
              ></div>
              <div className="prod-details">
                <h4 className="prod-name">Boston Celtics City Edition</h4>
                <p className="prod-info">Nike Dri-FIT City Edition</p>
                <p className="prod-price">₹6,495</p>
              </div>
              <button className="add-cart-btn">MOVE TO CART</button>
              <span className="fav">
                <svg
                  className="w-6 h-6"
                  fill="red"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </span>
            </div>

            <div className="prod-card">
              <div
                className="prod-img p8"
                style={{
                  backgroundImage: `url(${background3})`,
                }}
              ></div>
              <div className="prod-details">
                <h4 className="prod-name">Boston Celtics City Edition</h4>
                <p className="prod-info">Nike Dri-FIT City Edition</p>
                <p className="prod-price">₹6,495</p>
              </div>
              <button className="add-cart-btn">MOVE TO CART</button>
              <span className="fav">
                <svg
                  className="w-6 h-6"
                  fill="red"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </span>
            </div>

            <div className="prod-card">
              <div
                className="prod-img p10"
                style={{
                  backgroundImage: `url(${background4})`,
                }}
              ></div>
              <div className="prod-details">
                <h4 className="prod-name">Boston Celtics City Edition</h4>
                <p className="prod-info">Nike Dri-FIT City Edition</p>
                <p className="prod-price">₹6,495</p>
              </div>
              <button className="add-cart-btn">MOVE TO CART</button>
              <span className="fav">
                <svg
                  class="w-6 h-6"
                  fill="red"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0"
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

export default WishList;
