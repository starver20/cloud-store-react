import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { makeServer } from './server';
import { ProductsProvider } from './context/products/products-context';
import { CartProvider } from './context/cart/cart-context';
import { AuthProvider } from './context/auth/auth-context';
import { BrowserRouter } from 'react-router-dom';
import { AddressProvider } from './context/address/address-context';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductsProvider>
          <AddressProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </AddressProvider>
        </ProductsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
