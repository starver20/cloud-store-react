import axios from 'axios';
const wishlistClickHandler = async (
  product,
  check,
  productsDispatch,
  navigate,
  setLoading
) => {
  const jwt = localStorage.getItem('jwt');

  if (jwt) {
    setLoading(true);
    let response;
    if (check) {
      response = await axios.delete(
        `/api/user/wishlist/${product._id}`,

        { headers: { authorization: jwt } }
      );
    } else {
      response = await axios.post(
        '/api/user/wishlist',
        { product },
        { headers: { authorization: jwt } }
      );
    }

    // Add or remove from wishlist, 201 for adding, 200 for removing
    if (response.status === 201 || response.status === 200) {
      productsDispatch({
        type: 'TOGGLE_WISHLIST',
        payload: { _id: product._id },
      });
    }
    setLoading(false);
  } else {
    navigate('/login');
  }
};

export default wishlistClickHandler;
