import { createContext, useContext, useReducer, useRef } from 'react';

const initialCartState = {
  cartProducts: [],
  cartTotalItems: 0,
  cartTotalPrice: 0,
  cartDispatch: () => {},
};

const CartContext = createContext(initialCartState);

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const productToAdd = action.payload.product;

      // Product does not exist in cart
      const newCartProducts = [...state.cartProducts];
      // unShift to add product to start of array
      newCartProducts.unshift({ ...productToAdd, quantity: 1 });

      const newTotalPrice =
        Number(state.cartTotalPrice) + Number(productToAdd.price);
      const newTotalItems = state.cartTotalItems + 1;

      return {
        ...state,
        cartProducts: newCartProducts,
        cartTotalItems: newTotalItems,
        cartTotalPrice: newTotalPrice,
      };
    }

    case 'REMOVE_FROM_CART': {
      const productToRemove = action.payload.product;

      const newCartProducts = state.cartProducts.filter(
        (product) => product.id !== productToRemove.id
      );

      const newTotalPrice =
        Number(state.cartTotalPrice) -
        Number(productToRemove.quantity) * Number(productToRemove.price);

      const newTotalItems = state.cartTotalItems - 1;

      return {
        ...state,
        cartProducts: newCartProducts,
        cartTotalItems: newTotalItems,
        cartTotalPrice: newTotalPrice,
      };
    }

    case 'INC_ITEM_QUANTITY': {
      const productId = action.payload.id;

      const index = state.cartProducts.findIndex(
        (product) => product.id === productId
      );

      const newProduct = { ...state.cartProducts[index] };
      newProduct.quantity += 1;

      const newTotalPrice =
        Number(state.cartTotalPrice) + Number(newProduct.price);

      const newCartProducts = [...state.cartProducts];
      newCartProducts[index] = newProduct;

      return {
        ...state,
        cartProducts: newCartProducts,
        cartTotalPrice: newTotalPrice,
      };
    }
    case 'DEC_ITEM_QUANTITY': {
      const productId = action.payload.id;

      const index = state.cartProducts.findIndex(
        (product) => product.id === productId
      );

      const newProduct = { ...state.cartProducts[index] };
      newProduct.quantity -= 1;

      const newTotalPrice =
        Number(state.cartTotalPrice) - Number(newProduct.price);

      const newCartProducts = [...state.cartProducts];
      newCartProducts[index] = newProduct;

      return {
        ...state,
        cartProducts: newCartProducts,
        cartTotalPrice: newTotalPrice,
      };
    }

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

  const value = { ...cartState, cartDispatch };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
