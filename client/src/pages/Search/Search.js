import React, { useState } from "react";
import useAxios from "../../hooks/useAxios";

import Table from "./Table";


const Search = () => {

  // eslint-disable-next-line
  const [url, setUrl] = useState("/api");

  // eslint-disable-next-line
  const { result } = useAxios(url);

  return (
    <section className="Search">
      <Table result={result} />
    </section>
  );
};

export default Search;
