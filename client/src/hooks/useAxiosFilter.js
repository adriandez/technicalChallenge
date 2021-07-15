import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosFilter = (url) => {
  const [resultFilter, setResultFilter] = useState();

  useEffect(() => {
    const getResponse = async (url) => {
      const response = await axios.get(url);
      setResultFilter(response.data);
    };
    if (url !== "") getResponse(url);
  }, [url]);
  return { resultFilter };
};

export default useAxiosFilter;
