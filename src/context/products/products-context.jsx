import { createContext, useContext, useEffect, useReducer } from 'react';
import productsReducer from '../reducer/products-reducer';
import useHttp from '../../hooks/useHttp';

const initialState = {
  products: null,
  wishlist: [],
  priceSort: null,
  includeOutOfStock: false,
  fastDeliveryOnly: false,
  priceRange: 5000,
  ratingRange: 1,
  categoryName: [],
  searchTerm: '',
  productsDispatch: () => {},
};

const ProductsContext = createContext(initialState);

const ProductsProvider = ({ children }) => {
  const { products } = useHttp('/api/products', 'get');

  const [productsState, productsDispatch] = useReducer(
    productsReducer,
    initialState
  );

  useEffect(() => {
    products !== undefined &&
      productsDispatch({
        type: 'SET_INITIAL_DATA',
        payload: { products },
      });
  }, [products]);

  const value = {
    ...productsState,
    productsDispatch,
  };

  // Imp console.log, please ignore.
  // console.log('This runs everytime, so can put all filter functions here');

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => useContext(ProductsContext);

export { ProductsProvider, useProducts };
