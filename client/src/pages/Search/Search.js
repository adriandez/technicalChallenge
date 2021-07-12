import React, { useState, useEffect, useContext } from "react";
//import { GlobalContext } from "../../context/GlobalContext";
import useAxios from "../../hooks/useAxios";
import useDebounce, { debounce } from "../../hooks/debaunce";

import Table from "./Table";

import "./Search.scss";

const Search = () => {
  const [input, setInput] = useState("/api");
  // eslint-disable-next-line
  //const [global, setGlobal] = useContext(GlobalContext);
  const [url, setUrl] = useState("");
  const { loading, result } = useAxios(url);

  

  const debouncedSave = useDebounce(
    debounce((nextValue) => setInput(nextValue), 1000)
  );

  const handleChange = (event) => {
    const nextValue = event.target.value;
    debouncedSave(nextValue);
  };

//   const paintCards = () =>
//     global.map((global, index) => <Table global={global} key={index} />);

  useEffect(() => {
     
    if (input) setUrl(`${input}`);
  }, [input]);

  useEffect(() => {
       console.log(result);
       console.log(loading);
//     if (result) {
//       setGlobal([...global, result]);
//     }
//     // eslint-disable-next-line
  }, [result]);

  return (
    <section className="PokemonList">
      <input
        type="text"
        name="input"
        placeholder="Item"
        onChange={handleChange}
      />
      {/* {loading ? <p>Loading...</p> : paintCards()} */}
      <Table />
    </section>
  );
};

export default Search;
