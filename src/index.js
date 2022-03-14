import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { makeServer } from './server';
import { ProductsProvider } from './context/product-listing/product-context';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
