import axios from 'axios';
const addToCartHandler = async (cartDispatch, navigate, product, isIncart) => {
  const jwt = localStorage.getItem('jwt');
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

export default addToCartHandler;
