import axios from 'axios';
const itemQuantityChangeHandler = async (cartDispatch, navigate, product) => {
  const jwt = localStorage.getItem('jwt');
  try {
    if (jwt) {
      let response = await axios.post(
        `/api/user/cart/${product._id}`,

        { action: { type: e.target.name } },

        { headers: { authorization: jwt } }
      );

      response.status === 200 &&
        cartDispatch({
          type: 'UPDATE_CART',
          payload: { cart: response.data.cart },
        });
    } else {
      navigate('/login');
    }
  } catch (err) {
    toast.error('Failed to add item');
  }
};

export default itemQuantityChangeHandler;
