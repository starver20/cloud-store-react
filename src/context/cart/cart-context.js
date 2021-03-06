import { createContext, useContext, useReducer } from 'react';
import cartReducer from '../reducer/cart-reducer';

const initialCartState = {
  cartProducts: [],
  orderAddress: {},
  previousOrders: [],
  cartDispatch: () => {},
};

const CartContext = createContext(initialCartState);

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

  const value = { ...cartState, cartDispatch };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
