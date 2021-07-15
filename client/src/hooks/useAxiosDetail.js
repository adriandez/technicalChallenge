import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosDetail = (url) => {
  const [resultDetail, setResultDetail] = useState();

  useEffect(() => {
    const getResponse = async (url) => {
        const response = await axios.get(url);
        setResultDetail(response.data);
    };
    if (url !== "") getResponse(url);
  }, [url]);
  return {resultDetail}
};

export default useAxiosDetail;
