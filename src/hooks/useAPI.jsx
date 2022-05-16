import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const useAPI = (asyncFunction, dispatch, payload, check) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const callAsyncFunction = async () => {
    try {
      setLoading(true);
      await asyncFunction(dispatch, navigate, payload, check);
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error(err.msg);
      alert(err);
    }
  };

  return { callAsyncFunction, loading };
};

export default useAPI;
