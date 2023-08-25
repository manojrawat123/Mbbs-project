import { useEffect, useState } from "react";
import { GETAPI, POSTAPI } from './api';

function useApi(url, requestType, requestData) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    
    const fetchData = async () => {
      setLoading(true);
      try {
        let response;
        switch (requestType) {
          case 'get':
            response = await GETAPI(url);
            break;
          case 'post':
            response = await POSTAPI(url, requestData);
            break;
          default:
            throw new Error(`Invalid request type: ${requestType}`);
        }
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, requestType, requestData]);

  return { loading, error, data };
}

export default useApi;
