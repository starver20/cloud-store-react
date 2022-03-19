import axios from 'axios';
import { useEffect, useState } from 'react';

const useHttp = (url, method, headers = {}, body = {}) => {
  const [data, setData] = useState({});

  const networkCall = async () => {
    let { data } = await axios({
      method,
      url,
      headers,
      data: body,
    });

    setData(data);
  };

  useEffect(() => {
    networkCall();
  }, []);

  return data;
};

export default useHttp;
