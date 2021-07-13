import StarRating from "../../../components/Relevance";

export const COLUMNS = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Relevance",
    accessor: "relevance",
    Cell: ({value}) => {
      return <StarRating totalStars={5} selected={value} />;
    },
  },
  {
    Header: "Price",
    accessor: "price",
  },
];
