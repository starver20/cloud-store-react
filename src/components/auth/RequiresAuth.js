import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const RequiresAuth = ({ children }) => {
  const location = useLocation();
  const jwt = localStorage.getItem('jwt');
  return jwt ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default RequiresAuth;

// replace: Removes the /login from history so after logging in
// if i go back i dont go to login.
