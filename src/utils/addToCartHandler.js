import axios from 'axios';
const addToCartHandler = async (
  product,
  check,
  cartDispatch,
  navigate,
  setLoading,
  navigateTo
) => {
  const jwt = localStorage.getItem('jwt');
  if (jwt) {
    let response;
    if (check) {
      navigate(navigateTo);
      return;
    } else {
      setLoading(true);
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
    setLoading(false);
  } else {
    navigate('/login');
    return;
  }
};

export default addToCartHandler;
