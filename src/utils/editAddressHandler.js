import axios from 'axios';
import { toast } from 'react-toastify';
const editAddressHandler = async (addressDispatch, navigate, address) => {
  const jwt = localStorage.getItem('jwt');
  try {
    if (jwt) {
      let response = await axios.post(
        `/api/user/address/${address._id}`,
        { address },
        { headers: { authorization: jwt } }
      );

      if (response.status === 200) {
        toast.success('Address updated.');
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
    toast.error('Failed to edit address');
  }
};

export default editAddressHandler;
