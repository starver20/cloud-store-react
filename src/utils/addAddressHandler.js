import axios from 'axios';
const addAddressHandler = async (addressDispatch, navigate, address) => {
  const jwt = localStorage.getItem('jwt');
  if (jwt) {
    let response = await axios.post(
      '/api/user/address',
      { address },
      { headers: { authorization: jwt } }
    );

    console.log(response);

    if (response.status === 201) {
      addressDispatch({
        type: 'UPDATE_ADDRESS',
        payload: { address: response.data.address },
      });
    }
  } else {
    navigate('/login');
    return;
  }
};

export default addAddressHandler;
