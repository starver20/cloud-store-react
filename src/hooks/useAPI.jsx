import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAPI = (asyncFunction, check, dispatch, payload, navigateTo = '') => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const callAsyncFunction = async () => {
    await asyncFunction(
      payload,
      check,
      dispatch,
      navigate,
      setLoading,
      navigateTo
    );
  };

  return { callAsyncFunction, loading };
};

export default useAPI;
