import React, { useState, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import useAxios from "../../hooks/useAxios";

import "./Manufact.scss";

const Manufact = () => {

  // eslint-disable-next-line
  const [input, setInput] = useState("");

  // eslint-disable-next-line
  const [global, setGlobal] = useContext(GlobalContext);

  // eslint-disable-next-line
  const [url, setUrl] = useState("");

  // eslint-disable-next-line
  const { loading, result } = useAxios(url);

  useEffect(() => {
    console.log(global);
  }, [global]);

  return (
    <section className="Manufact">
      <h1>Manufact</h1>
    </section>
  );
};

export default Manufact;
