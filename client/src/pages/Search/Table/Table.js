import React, { useMemo, useState, useEffect } from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import SortIcon from "@material-ui/icons/Sort";

import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useExpanded,
} from "react-table";

import "./Table.scss";
import { GlobalFilter } from "./GlobalFilter";
import StarRating from "../../../components/Relevance";


import useAxios from "../../../hooks/useAxios";
import useAxiosDetail from "../../../hooks/useAxiosDetail";


const Table = () => {
  // eslint-disable-next-line
  const [url, setUrl] = useState("/api");
  
  // eslint-disable-next-line
  const { result } = useAxios(url);
  const [dataTable, setDataTable] = useState([]);
  const [cellValue, setCellValue] = useState("");

  useEffect(() => {
    if (result) {
      console.log(result);
      setDataTable(result);
    }
  }, [result]);

  const getCellValue = (cell) => {
    setCellValue(cell.value);
  };

  const [url2, setUrl2] = useState("");

  console.log(url2);

  const { resultDetail } = useAxiosDetail(url2);

  useEffect(() => {
    console.log(resultDetail);
  }, [resultDetail]);

  useEffect(() => {
    if (cellValue) {
      console.log(cellValue);
      let filteredCif = result.filter(e => e.name === cellValue)
      setUrl2(`/api/detail/${filteredCif[0].cif}`);
    }
  }, [cellValue]);

  const printDetail = () =>
    resultDetail ? (
      <p>
        Manufacterer: {resultDetail.name} <br />
        Cif: {resultDetail.cif} <br />
        Address: {resultDetail.address}
      </p>
    ) : (
      ""
    );

  const COLUMNS = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Relevance",
      accessor: "relevance",
      Cell: ({ value }) => {
        return <StarRating totalStars={5} selected={value} />;
      },
    },
    {
      Header: "Price",
      accessor: "price",
    },
  ];

  // eslint-disable-next-line
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => dataTable, [dataTable]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    pageOptions,
    state,
    prepareRow,
    setGlobalFilter,
  } = useTable(
    {
      columns: columns,
      data: data,
    },
    useGlobalFilter,
    useSortBy,
    useExpanded,
    usePagination
  );

  const { globalFilter, pageIndex } = state;

  return (
    <div className="div-table">
      <>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <div className="detail">{printDetail()}</div>
        <table className="classTable" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <SortIcon className="sort" />
                        ) : (
                          <SortIcon className="sort" />
                        )
                      ) : (
                        ""
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        onClick={() => getCellValue(cell)}
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="pre-page-nxt">
          <NavigateBeforeIcon onClick={() => previousPage()} />
          <span>
            Page <strong> {pageIndex + 1} </strong> of {pageOptions.length}{" "}
          </span>
          <NavigateNextIcon onClick={() => nextPage()} />
        </div>
      </>
    </div>
  );
};

export default Table;
