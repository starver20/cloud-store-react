import axios from 'axios';
const editAddressHandler = async (addressDispatch, navigate, address) => {
  const jwt = localStorage.getItem('jwt');
  if (jwt) {
    let response = await axios.post(
      `/api/user/address/${address._id}`,
      { address },
      { headers: { authorization: jwt } }
    );

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

export default editAddressHandler;
