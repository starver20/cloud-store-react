import axios from 'axios';
import { toast } from 'react-toastify';
const deleteCartHandler = async (cartDispatch, navigate) => {
  const jwt = localStorage.getItem('jwt');
  if (jwt) {
    let response = await axios.delete(`/api/user/cart`, {
      headers: { authorization: jwt },
    });

    console.log(response);

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
};

export default deleteCartHandler;
