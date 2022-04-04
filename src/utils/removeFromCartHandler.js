import axios from 'axios';

const removeFromCartHandler = async (cartDispatch, navigate, product) => {
  const jwt = localStorage.getItem('jwt');
  console.log(jwt);
  if (jwt) {
    let response = await axios.delete(
      `/api/user/cart/${product._id}`,

      { headers: { authorization: jwt } }
    );

    console.log(response);
    if (response.status === 200) {
      cartDispatch({
        type: 'UPDATE_CART',
        payload: { cart: response.data.cart },
      });
    }
  } else {
    navigate('/login');
  }
};

export default removeFromCartHandler;
