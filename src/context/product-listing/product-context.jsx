import { createContext, useContext, useReducer } from 'react';

const initialState = {
  priceSort: null,
  inStock: false,
  fastDelivery: null,
  priceRange: 5000,
  productsDispatch: () => {},
};

const ProductsContext = createContext(initialState);
const reducer = (state, action) => {
  switch (action.type) {
    case 'PRICE_SORT': {
      return {
        ...state,
        priceSort: action.payload.priceSort,
      };
    }

    case 'AVAILABILITY_TOGGLE': {
      return {
        ...state,
        inStock: action.payload.inStock,
      };
    }

    case 'DELIVERY_TYPE': {
      return {
        ...state,
        fastDelivery: action.payload.fastDelivery,
      };
    }

    case 'PRICE_RANGE': {
      console.log(action.payload.priceRange);
      return {
        ...state,
        priceRange: action.payload.priceRange,
      };
    }

    case 'CLEAR': {
      return {
        ...state,
        priceSort: null,
        inStock: null,
        fastDelivery: null,
        priceRange: 5000,
      };
    }

    default:
      return state;
  }
};
const ProductsProvider = ({ children }) => {
  const [state, productsDispatch] = useReducer(reducer, initialState);

  const value = {
    priceSort: state.priceSort,
    priceRange: state.priceRange,
    inStock: state.inStock,
    fastDelivery: state.fastDelivery,
    productsDispatch,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => useContext(ProductsContext);

export { ProductsProvider, useProducts };
