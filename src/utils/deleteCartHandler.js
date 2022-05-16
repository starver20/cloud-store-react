import axios from 'axios';
import { toast } from 'react-toastify';
const deleteCartHandler = async (cartDispatch, navigate) => {
  const jwt = localStorage.getItem('jwt');
  try {
    if (jwt) {
      let response = await axios.delete(`/api/user/cart`, {
        headers: { authorization: jwt },
      });

      if (response.status === 200) {
        toast.success('Cart emptied.');
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
    toast.error('Failed to clear cart');
  }
};

export default deleteCartHandler;
