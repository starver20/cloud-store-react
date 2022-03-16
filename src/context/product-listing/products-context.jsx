import { createContext, useContext, useReducer } from 'react';
import productsReducer from '../reducer/products-reducer';

const initialState = {
  priceSort: null,
  includeOutOfStock: false,
  fastDeliveryOnly: false,
  priceRange: 5000,
  ratingRange: 5,
  categoryName: [],
  productsDispatch: () => {},
};

const ProductsContext = createContext(initialState);

const ProductsProvider = ({ children }) => {
  const [productsState, productsDispatch] = useReducer(
    productsReducer,
    initialState
  );

  const value = {
    ...productsState,
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
