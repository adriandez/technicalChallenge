import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url) => {
  const [result, setResult] = useState();

  useEffect(() => {
    const getResponse = async (url) => {
        const response = await axios.get(url);
        setResult(response.data);
    };
    if (url !== "") getResponse(url);
  }, [url]);
  return {result}
};

export default useAxios;
