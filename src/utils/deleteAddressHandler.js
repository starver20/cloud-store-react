import axios from 'axios';
const deleteAddressHandler = async (addressDispatch, navigate, address) => {
  const jwt = localStorage.getItem('jwt');
  if (jwt) {
    console.log(address._id);
    let response = await axios.delete(`/api/user/address/${address._id}`, {
      headers: { authorization: jwt },
    });

    console.log(response);

    if (response.status === 200) {
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

export default deleteAddressHandler;
