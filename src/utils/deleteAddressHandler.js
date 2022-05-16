import axios from 'axios';
import { toast } from 'react-toastify';
const deleteAddressHandler = async (addressDispatch, navigate, address) => {
  const jwt = localStorage.getItem('jwt');
  try {
    if (jwt) {
      let response = await axios.delete(`/api/user/address/${address._id}`, {
        headers: { authorization: jwt },
      });

      if (response.status === 200) {
        toast.warn('Address deleted successfully');
        addressDispatch({
          type: 'UPDATE_ADDRESS',
          payload: { address: response.data.address },
        });
      }
    } else {
      navigate('/login');
      return;
    }
  } catch (err) {
    toast.error('Failed to delete address');
  }
};

export default deleteAddressHandler;
