import axios from 'axios';
import { toast } from 'react-toastify';

const removeFromCartHandler = async (cartDispatch, navigate, product) => {
  const jwt = localStorage.getItem('jwt');
  // console.log(jwt);
  // console.log(product);
  try {
    if (jwt) {
      let response = await axios.delete(
        `/api/user/cart/${product._id}`,

        { headers: { authorization: jwt } }
      );

      // console.log(response);
      if (response.status === 200) {
        toast.success('Product removed from cart.');
        cartDispatch({
          type: 'UPDATE_CART',
          payload: { cart: response.data.cart },
        });
      }
    } else {
      navigate('/login');
    }
  } catch (err) {
    toast.error('Failed to remove item');
  }
};

export default removeFromCartHandler;
