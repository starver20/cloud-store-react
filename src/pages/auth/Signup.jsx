import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import classes from './Auth.module.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
      <Navbar />
      <section className={classes['main-content']}>
        <div className={classes['card']}>
          <h1>CloudStore</h1>
          <h3>Signup</h3>
          <input
            className={classes['creds']}
            type="text"
            name="first-name"
            id="first-name"
            placeholder="First Name"
          />
          <input
            className={classes['creds']}
            type="text"
            name="last-name"
            id="last-name"
            placeholder="Last Name"
          />
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
              <span>
                Sign up for emails to get updates from CloudStore on products,
                offers and your Member benefits
              </span>
            </div>
            <span>
              By creating an account you agree to our
              <Link to="/">
                <span className={classes.link}>Privacy Policy</span>
              </Link>{' '}
              and{' '}
              <Link to="/">
                <span className={classes.link}>Terms of Use</span>
              </Link>
            </span>
          </div>
          <Link to="/login">
            <button className={classes['auth-btn']}>SIGNUP</button>
          </Link>
          <span>Already a member?</span>
          <Link to="/login">
            <span className={classes.link}>Login</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Signup;
