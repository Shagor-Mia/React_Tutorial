import React from "react";
import useFetch from "./useFetch";

export default function DataFetchCustom() {
  const { data, Loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const loadingMessage = <p>data is loading...</p>;

  const element =
    data &&
    data.map((tod) => {
      return <p key={tod.id}>{tod.title}</p>;
    });

  return (
    <div>
      <h1>DataFetchCustom</h1>
      {error && <p>{error}</p>}
      {Loading && loadingMessage}
      {element}
    </div>
  );
}
