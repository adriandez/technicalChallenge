import React, { useState, useEffect } from "react";
//import { GlobalContext } from "../../context/GlobalContext";
//import useAxios from "../../hooks/useAxios";
import useDebounce, { debounce } from "../../hooks/debaunce";
//import { FaStar } from "react-icons/fa";
import Table from "./Table";


import "./Search.scss";

const Search = () => {

  const [input, setInput] = useState("");
  // eslint-disable-next-line
  //const [global, setGlobal] = useContext(GlobalContext);
  // eslint-disable-next-line
  const [url, setUrl] = useState("");
  // eslint-disable-next-line
  //const { loading, result } = useAxios(url);
  // eslint-disable-next-line
  const debouncedSave = useDebounce(
    debounce((nextValue) => setInput(nextValue), 1000)
  );

  // const handleChange = (event) => {
  //   const nextValue = event.target.value;
  //   debouncedSave(nextValue);
  // };

  //   const paintCards = () =>
  //     global.map((global, index) => <Table global={global} key={index} />);

  useEffect(() => {
    if (input) setUrl(`${input}`);
  }, [input]);

  // useEffect(() => {
  //console.log(result);
  //console.log(loading);
  //     if (result) {
  //       setGlobal([...global, result]);
  //     }
  //     // eslint-disable-next-line
  // }, [result]);

  return (
    <section className="Search">
      <Table />
    </section>
  );
};

export default Search;
