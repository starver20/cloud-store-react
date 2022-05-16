import axios from 'axios';
import { toast } from 'react-toastify';
const addAddressHandler = async (addressDispatch, navigate, address) => {
  const jwt = localStorage.getItem('jwt');
  try {
    if (jwt) {
      let response = await axios.post(
        '/api/user/address',
        { address },
        { headers: { authorization: jwt } }
      );

      console.log(response);

      if (response.status === 201) {
        toast.success('Address Added successfully');
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
    toast.error('Failed to add address');
  }
};

export default addAddressHandler;
