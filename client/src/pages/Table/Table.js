import React, { useMemo, useState, useEffect } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useExpanded,
  useAsyncDebounce,
} from "react-table";

import { GlobalFilter } from "../../util/GlobalFilter";
import StarRating from "../../util/Relevance";
import useAxios from "../../hooks/useAxios";
import useAxiosDetail from "../../hooks/useAxiosDetail";
import useAxiosFilter from "../../hooks/useAxiosFilter";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import SortIcon from "@material-ui/icons/Sort";

import "./Table.scss";

const Table = () => {

  const [url, setUrl] = useState("");
  const { result } = useAxios(url);
  const [dataTable, setDataTable] = useState([]);
  const [dataTable2, setDataTable2] = useState([]);
  const [cellValue, setCellValue] = useState("");
  const tableURL = (apiUrl) => setUrl(apiUrl);

  useEffect(() => {
    tableURL("/api");
  }, []);

  useEffect(() => {
    if (result) {
      setDataTable(result);
    }
  }, [result]);

  const getCellValue = (cell) => {
    setCellValue(cell.value);
  };

  const [url2, setUrl2] = useState("");
  const { resultDetail } = useAxiosDetail(url2);

  useEffect(() => {
    if (cellValue) {
      let filteredCif = result.filter((e) => e.name === cellValue);
      setUrl2(`/api/detail/${filteredCif[0].cif}`);
    }
    // eslint-disable-next-line
  }, [cellValue]);

  const printDetail = () =>
    resultDetail ? (
      <p>
        Manufacturer: {resultDetail.name} <br />
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
  const data = useMemo(() => dataTable2 || dataTable, [dataTable, dataTable2]);

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

  const [filter, setFilter] = useState();
  const [value, setValue] = useState(filter);

  const onChange = useAsyncDebounce((value) => {
    if (value) {
      setFilter(value);
    } else {
      setDataTable2(undefined);
    }
  }, 1000);

  const [url3, setUrl3] = useState("");
  const { resultFilter } = useAxiosFilter(url3);

  useEffect(() => {
    setDataTable2(resultFilter);
  }, [resultFilter]);

  useEffect(() => {
    if (filter) {
      setUrl3(`/api/filter/${filter}`);
    }
    // eslint-disable-next-line
  }, [filter]);

  return (
    <div className="div-table">
      <>
        <div className="inputSearch">
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
          <div>
            <input
              type="text"
              value={value || ""}
              placeholder="Filter by manufacterer"
              onChange={(e) => {
                setValue(e.target.value);
                onChange(e.target.value);
              }}
            />
          </div>
        </div>
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
