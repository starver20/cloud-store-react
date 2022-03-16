import axios from 'axios';
import { useEffect, useState } from 'react';

const useHttp = (url, method, headers = {}) => {
  const [data, setData] = useState({});

  const networkCall = async () => {
    let { data } = await axios({
      method,
      url,
      headers,
    });

    setData(data);
  };

  useEffect(() => {
    networkCall();
  }, []);

  return data;
};

export default useHttp;
