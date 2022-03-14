import axios from 'axios';
import { useEffect, useState } from 'react';

const useHttp = (url, method) => {
  const [data, setData] = useState({});

  const networkCall = async () => {
    let { data } = await axios({
      method,
      url,
    });

    setData(data);
  };

  useEffect(() => {
    networkCall();
  }, []);

  console.log(data);
  return data;
};

export default useHttp;
