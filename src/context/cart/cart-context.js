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

      const index = state.cartProducts.findIndex(
        (product) => product.id === productToAdd.id
      );

      if (index !== -1) {
        // Product already exists in cart
        let newProduct = { ...state.cartProducts[index] };
        newProduct.quantity += 1;

        let newTotalPrice =
          Number(state.cartTotalPrice) + Number(newProduct.price);

        let newCartProducts = [...state.cartProducts];
        newCartProducts[index] = newProduct;

        return {
          ...state,
          cartProducts: newCartProducts,
          cartTotalPrice: newTotalPrice,
        };
      }

      // Product does not exist in cart
      let newCartProducts = [...state.cartProducts];
      // productToAdd.quantity = 1;
      newCartProducts.push({ ...productToAdd, quantity: 1 });

      const newTotalPrice =
        Number(state.cartTotalPrice) + Number(productToAdd.price);
      const newTotalItems = state.cartTotalItems + 1;

      console.log(newCartProducts, newTotalItems, newTotalPrice);

      return {
        ...state,
        cartProducts: newCartProducts,
        cartTotalItems: newTotalItems,
        cartTotalPrice: newTotalPrice,
      };
    }

    default:
      break;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

  const value = { ...cartState, cartDispatch };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
