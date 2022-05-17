import axios from 'axios';
import { toast } from 'react-toastify';
const addToCartHandler = async (cartDispatch, navigate, product, isIncart) => {
  const jwt = localStorage.getItem('jwt');
  try {
    if (jwt) {
      let response;
      if (isIncart) {
        navigate('/cart');
        return;
      } else {
        response = await axios.post(
          '/api/user/cart',
          { product },
          { headers: { authorization: jwt } }
        );
      }

      if (response.status === 201) {
        toast.success('Added to cart');
        cartDispatch({
          type: 'UPDATE_CART',
          payload: { cart: response.data.cart },
        });
      }
    } else {
      navigate('/login');
      return;
    }
  } catch (err) {
    toast.error('Failed to add to cart');
  }
};

export default addToCartHandler;
