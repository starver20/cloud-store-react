import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import classes from './Auth.module.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <Navbar auth="signup" />
      <section className={classes['main-content']}>
        <div className={classes['card']}>
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
          <Link to="/">
            <button className={classes['auth-btn']}>LOGIN</button>
          </Link>
          <span>Not a member?</span>
          <Link to="/signup">
            <span className={classes.link}>Join us</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Login;
