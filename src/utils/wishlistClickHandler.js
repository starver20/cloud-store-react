import axios from 'axios';
import { toast } from 'react-toastify';
const wishlistClickHandler = async (
  productsDispatch,
  navigate,
  product,
  check
) => {
  const jwt = localStorage.getItem('jwt');
  try {
    if (jwt) {
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
        toast.success(
          `${
            response.status === 201
              ? 'Added to wishlist'
              : 'Removed from wishlist'
          }`
        );
        productsDispatch({
          type: 'TOGGLE_WISHLIST',
          payload: { _id: product._id },
        });
      }
    } else {
      navigate('/login');
    }
  } catch (err) {
    toast.error('Wishlist task failed');
  }
};

export default wishlistClickHandler;
