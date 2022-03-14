import axios from 'axios';
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import useHttp from '../../hooks/useHttp';

const initialState = {
  products: [{}],
  priceSort: false,
  inStock: false,
  fastDelivery: false,
  priceRange: 2000,
  productsDispatch: () => {},
};

const ProductsContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE':
      {
        return {
          ...state,
          products: action.payload.products,
        };
      }
      break;

    default:
      break;
  }
};

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products').then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  const [productsState, productsDispatch] = useReducer(reducer, {
    products: products,
  });

  console.log(products);

  // useEffect(() => {
  //   productsDispatch({ type: 'UPDATE', payload: { products } });
  // }, [products]);

  // const value = {
  //   products: productsState.products,
  //   priceSort: productsState.priceSort,
  //   priceRange: productsState.priceRange,
  //   inStock: productsState.inStock,
  //   fastDelivery: productsState.fastDelivery,
  //   productsDispatch,
  // };

  return (
    <ProductsContext.Provider value={{ productsState }}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => useContext(ProductsContext);

export { ProductsProvider, useProducts };
