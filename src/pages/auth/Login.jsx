import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import classes from './Auth.module.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth/auth-context';
import { useProducts } from '../../context/products/products-context';
import { useCart } from '../../context/cart/cart-context';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const { productsDispatch } = useProducts();
  const { cartDispatch } = useCart();
  const navigate = useNavigate();

  const loginClickHandler = async (e) => {
    e.preventDefault();
    try {
      let { user, status } = await login({
        email: e.target.email.value,
        password: e.target.password.value,
      });

      console.log(user.wishlist, user.cart);

      if (status === 200) {
        productsDispatch({
          type: 'INITIALIZE_WISHLIST',
          payload: { wishlist: user.wishlist },
        });

        cartDispatch({
          type: 'UPDATE_CART',
          payload: { cart: user.cart },
        });

        navigate('/');
      } else {
        alert('Invalid email or password');
      }
    } catch (err) {
      alert(err);
    }
  };

  const guestLogin = async () => {
    try {
      let { user, status } = await login({
        email: 'adarshbalika@gmail.com',
        password: 'adarshBalika123',
      });

      console.log(user.wishlist, user.cart);
      if (status === 200) {
        productsDispatch({
          type: 'INITIALIZE_WISHLIST',
          payload: { wishlist: user.wishlist },
        });

        cartDispatch({
          type: 'UPDATE_CART',
          payload: { cart: user.cart },
        });

        navigate('/');
      } else {
        alert('Invalid email or password');
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <Navbar page="auth" />
      <section className={classes['main-content']}>
        <form onSubmit={loginClickHandler} className={classes['card']}>
          <h1>CloudStore</h1>
          <h3>Login</h3>
          <input
            className={classes['creds']}
            type="text"
            name="email"
            id="email"
            placeholder="Email address"
          />
          <input
            className={classes['creds']}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />

          <div className={classes['options']}>
            <div className={classes['remember-chk']}>
              <input type="checkbox" />
              <span>Remember me</span>
            </div>
            <Link to="/" className={classes['forgot-pass']}>
              <span className={classes.link}>Forgot your password?</span>
            </Link>
          </div>
          <div
            onClick={guestLogin}
            className={`${classes['forgot-pass']} ${classes.guest}`}
          >
            <span className={classes.link}>Guest login</span>
          </div>
          <button type="submit" className={classes['auth-btn']}>
            LOGIN
          </button>

          <span>Not a member?</span>
          <Link to="/signup">
            <span className={classes.link}>Join us</span>
          </Link>
        </form>
      </section>
    </div>
  );
};

export default Login;
