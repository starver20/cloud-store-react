import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import classes from './Cart.module.css';
import img1 from '../../assets/celtics.jpeg';
import img2 from '../../assets/lakers.jpeg';
import img3 from '../../assets/76ers.jpeg';
import img4 from '../../assets/clippers1.jpeg';
import img5 from '../../assets/grizzlies.jpeg';
const Cart = () => {
  return (
    <div>
      <Navbar />
      <section className={classes['main-content']}>
        <main>
          <div className={classes['secondary-checkout']}>
            <h1>CART</h1>
            <div>
              <span>4 ITEMS | ₹6,495</span>
            </div>
          </div>

          <div className={classes['prod-listing']}>
            <div className={classes['prod-card-hor']}>
              <div className={classes['cart-prod-img']}>
                <img src={`${img1}`} alt="" />
              </div>
              <div className={classes['prod-details']}>
                <div>
                  <h4 className={classes['prod-name']}>
                    Boston Celtics City Edition
                  </h4>
                  <p className={classes['prod-info']}>
                    Nike Dri-FIT City Edition
                  </p>
                </div>
                <div className={classes.quantity}>
                  <button>-</button>
                  <div>2</div>
                  <button>+</button>
                </div>
                <button className={classes['remv-cart-btn']}>REMOVE</button>
              </div>
              <p className={classes['prod-price']}>₹6,495</p>
              <span className={classes.fav}>
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

            <hr className={classes.divider} />

            <div className={classes['prod-card-hor']}>
              <div className={classes['cart-prod-img']}>
                <img src={`${img2}`} alt="" />
              </div>
              <div className={classes['prod-details']}>
                <div>
                  <h4 className={classes['prod-name']}>
                    Boston Celtics City Edition
                  </h4>
                  <p className={classes['prod-info']}>
                    Nike Dri-FIT City Edition
                  </p>
                </div>
                <div className={classes.quantity}>
                  <button>-</button>
                  <div>2</div>
                  <button>+</button>
                </div>
                <button className={classes['remv-cart-btn']}>REMOVE</button>
              </div>
              <p className={classes['prod-price']}>₹6,495</p>
              <span className={classes.fav}>
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

            <hr className={classes.divider} />

            <div className={classes['prod-card-hor']}>
              <div className={classes['cart-prod-img']}>
                <img src={`${img3}`} alt="" />
              </div>
              <div className={classes['prod-details']}>
                <div>
                  <h4 className={classes['prod-name']}>
                    Boston Celtics City Edition
                  </h4>
                  <p className={classes['prod-info']}>
                    Nike Dri-FIT City Edition
                  </p>
                </div>
                <div className={classes.quantity}>
                  <button>-</button>
                  <div>2</div>
                  <button>+</button>
                </div>
                <button className={classes['remv-cart-btn']}>REMOVE</button>
              </div>
              <p className={classes['prod-price']}>₹6,495</p>
              <span className={classes.fav}>
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

            <hr className={classes.divider} />

            <div className={classes['prod-card-hor']}>
              <div className={classes['cart-prod-img']}>
                <img src={`${img4}`} alt="" />
              </div>
              <div className={classes['prod-details']}>
                <div>
                  <h4 className={classes['prod-name']}>
                    Boston Celtics City Edition
                  </h4>
                  <p className={classes['prod-info']}>
                    Nike Dri-FIT City Edition
                  </p>
                </div>
                <div className={classes.quantity}>
                  <button>-</button>
                  <div>2</div>
                  <button>+</button>
                </div>
                <button className={classes['remv-cart-btn']}>REMOVE</button>
              </div>
              <p className={classes['prod-price']}>₹6,495</p>
              <span className={classes.fav}>
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

            <hr className={classes.divider} />

            <div className={classes['prod-card-hor']}>
              <div className={classes['cart-prod-img']}>
                <img src={`${img5}`} alt="" />
              </div>
              <div className={classes['prod-details']}>
                <div>
                  <h4 className={classes['prod-name']}>
                    Boston Celtics City Edition
                  </h4>
                  <p className={classes['prod-info']}>
                    Nike Dri-FIT City Edition
                  </p>
                </div>
                <div className={classes.quantity}>
                  <button>-</button>
                  <div>2</div>
                  <button>+</button>
                </div>
                <button className={classes['remv-cart-btn']}>REMOVE</button>
              </div>
              <p className={classes['prod-price']}>₹6,495</p>
              <span className={classes.fav}>
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

            <hr className={classes.divider} />

            <div className={classes['prod-card-hor']}>
              <div className={classes['cart-prod-img']}>
                <img src={`${img1}`} alt="" />
              </div>
              <div className={classes['prod-details']}>
                <div>
                  <h4 className={classes['prod-name']}>
                    Boston Celtics City Edition
                  </h4>
                  <p className={classes['prod-info']}>
                    Nike Dri-FIT City Edition
                  </p>
                </div>
                <div className={classes.quantity}>
                  <button>-</button>
                  <div>2</div>
                  <button>+</button>
                </div>
                <button className={classes['remv-cart-btn']}>REMOVE</button>
              </div>
              <p className={classes['prod-price']}>₹6,495</p>
              <span className={classes.fav}>
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

            <hr className={classes.divider} />

            <div className={classes['prod-card-hor']}>
              <div className={classes['cart-prod-img']}>
                <img src={`${img2}`} alt="" />
              </div>
              <div className={classes['prod-details']}>
                <div>
                  <h4 className={classes['prod-name']}>
                    Boston Celtics City Edition
                  </h4>
                  <p className={classes['prod-info']}>
                    Nike Dri-FIT City Edition
                  </p>
                </div>
                <div className={classes.quantity}>
                  <button>-</button>
                  <div>2</div>
                  <button>+</button>
                </div>
                <button className={classes['remv-cart-btn']}>REMOVE</button>
              </div>
              <p className={classes['prod-price']}>₹6,495</p>
              <span className={classes.fav}>
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

            <hr className={classes.divider} />
          </div>
        </main>

        <aside>
          <div className={classes['checkout-card']}>
            <h1>ORDER SUMMARY</h1>
            <div
              className={`${classes['checkout-item']} ${classes['org-price']}`}
            >
              <span>ORIGINAL PRICE</span>
              <span>₹77 591.00</span>
            </div>
            <div
              className={`${classes['checkout-item']} ${classes['sale-price']}`}
            >
              <span>ON SALE</span>
              <span>-₹34 591.00</span>
            </div>
            <div
              className={`${classes['checkout-item']} ${classes['total-items']}`}
            >
              <span>5 ITEMS</span>
              <span>₹43 591.00</span>
            </div>
            <div className={`${classes['checkout-item']} ${classes.delivery}`}>
              <span>DELIVERY</span>
              <span>FREE</span>
            </div>
            <div
              className={`${classes['checkout-item']} ${classes['total-price']}`}
            >
              <span>TOTAL PRICE</span>
              <span>₹43 591.00</span>
            </div>
          </div>
          <button className={classes['checkout-btn']}>CHECKOUT</button>
        </aside>
      </section>
      {/* <section class="main-content">
        <main>
          <div class="secondary-checkout">
            <h1>CART</h1>
            <div>
              <span>4 ITEMS | ₹6,495</span>
            </div>
          </div>
          <div class="prod-listing">
            <div class="prod-card-hor">
              <div class="cart-prod-img p1">
                <img src="../assets/celtics.jpeg" alt="" />
              </div>
              <div class="prod-details">
                <div>
                  <h4 class="prod-name">Boston Celtics City Edition</h4>
                  <p class="prod-info">Nike Dri-FIT City Edition</p>
                </div>
                <div class="quantity">
                  <button>-</button>
                  <div>2</div>
                  <button>+</button>
                </div>
                <button class="remv-cart-btn">REMOVE</button>
              </div>
              <p class="prod-price">₹6,495</p>
              <span class="fav">
                <svg
                  class="w-6 h-6"
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

            <hr class="divider" />

            <div class="prod-card-hor">
              <div class="cart-prod-img p1">
                <img src="../assets/lakers.jpeg" alt="" />
              </div>
              <div class="prod-details">
                <div>
                  <h4 class="prod-name">Boston Celtics City Edition</h4>
                  <p class="prod-info">Nike Dri-FIT City Edition</p>
                </div>
                <div class="quantity">
                  <button>-</button>
                  <div>2</div>
                  <button>+</button>
                </div>
                <button class="remv-cart-btn">REMOVE</button>
              </div>
              <p class="prod-price">₹6,495</p>
              <span class="fav">
                <svg
                  class="w-6 h-6"
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
            <hr class="divider" />
            <div class="prod-card-hor">
              <div class="cart-prod-img p1">
                <img src="../assets/nets.jpeg" alt="" />
              </div>
              <div class="prod-details">
                <div>
                  <h4 class="prod-name">Boston Celtics City Edition</h4>
                  <p class="prod-info">Nike Dri-FIT City Edition</p>
                </div>
                <div class="quantity">
                  <button>-</button>
                  <div>2</div>
                  <button>+</button>
                </div>
                <button class="remv-cart-btn">REMOVE</button>
              </div>
              <p class="prod-price">₹6,495</p>
              <span class="fav">
                <svg
                  class="w-6 h-6"
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
            <hr class="divider" />
            <div class="prod-card-hor">
              <div class="cart-prod-img p1">
                <img src="../assets/nola.jpeg" alt="" />
              </div>
              <div class="prod-details">
                <div>
                  <h4 class="prod-name">Boston Celtics City Edition</h4>
                  <p class="prod-info">Nike Dri-FIT City Edition</p>
                </div>
                <div class="quantity">
                  <button>-</button>
                  <div>2</div>
                  <button>+</button>
                </div>
                <button class="remv-cart-btn">REMOVE</button>
              </div>
              <p class="prod-price">₹6,495</p>
              <span class="fav">
                <svg
                  class="w-6 h-6"
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
            <hr class="divider" />
            <div class="prod-card-hor">
              <div class="cart-prod-img p1">
                <img src="../assets/portland.jpeg" alt="" />
              </div>
              <div class="prod-details">
                <div>
                  <h4 class="prod-name">Boston Celtics City Edition</h4>
                  <p class="prod-info">Nike Dri-FIT City Edition</p>
                </div>
                <div class="quantity">
                  <button>-</button>
                  <div>2</div>
                  <button>+</button>
                </div>
                <button class="remv-cart-btn">REMOVE</button>
              </div>
              <p class="prod-price">₹6,495</p>
              <span class="fav">
                <svg
                  class="w-6 h-6"
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
            <hr class="divider" />
            <div class="prod-card-hor">
              <div class="cart-prod-img p1">
                <img src="../assets/grizzlies.jpeg" alt="" />
              </div>
              <div class="prod-details">
                <div>
                  <h4 class="prod-name">Boston Celtics City Edition</h4>
                  <p class="prod-info">Nike Dri-FIT City Edition</p>
                </div>
                <div class="quantity">
                  <button>-</button>
                  <div>2</div>
                  <button>+</button>
                </div>
                <button class="remv-cart-btn">REMOVE</button>
              </div>
              <p class="prod-price">₹6,495</p>
              <span class="fav">
                <svg
                  class="w-6 h-6"
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
            <hr class="divider" />
            <div class="prod-card-hor">
              <div class="cart-prod-img p1">
                <img src="../assets/lakers1.jpeg" alt="" />
              </div>
              <div class="prod-details">
                <div>
                  <h4 class="prod-name">Boston Celtics City Edition</h4>
                  <p class="prod-info">Nike Dri-FIT City Edition</p>
                </div>
                <div class="quantity">
                  <button>-</button>
                  <div>2</div>
                  <button>+</button>
                </div>
                <button class="remv-cart-btn">REMOVE</button>
              </div>
              <p class="prod-price">₹6,495</p>
              <span class="fav">
                <svg
                  class="w-6 h-6"
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
            <hr class="divider" />
          </div>
        </main>
        <aside>
          <div class="checkout-card">
            <h1>ORDER SUMMARY</h1>
            <div class="checkout-item org-price">
              <span>ORIGINAL PRICE</span>
              <span>₹77 591.00</span>
            </div>
            <div class="checkout-item sale-price">
              <span>ON SALE</span>
              <span>-₹34 591.00</span>
            </div>
            <div class="checkout-item total-items">
              <span>5 ITEMS</span>
              <span>₹43 591.00</span>
            </div>
            <div class="checkout-item delivery">
              <span>DELIVERY</span>
              <span>FREE</span>
            </div>
            <div class="checkout-item total-price">
              <span>TOTAL PRICE</span>
              <span>₹43 591.00</span>
            </div>
          </div>
          <button class="checkout-btn">CHECKOUT</button>
        </aside>
      </section> */}
    </div>
  );
};

export default Cart;
