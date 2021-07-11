import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();

  useEffect(() => {
    const getResponse = async (url) => {
      setLoading(true);
      setTimeout(async () => {
        const response = await axios.get(url);
        setResult(response.data);
        setLoading(false);
      }, 1000);
    };
    if (url !== "") getResponse(url);
  }, [url]);
  return { loading, result };
};

export default useAxios;
