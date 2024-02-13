import React, { useEffect, useState } from "react";
const loadingMessage = <p>data is loading...</p>;

export default function DataFetch() {
  const [todo, setTodo] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        if (!res.ok) {
          throw Error("fetching is not successful!");
        }
        return res.json();
      })
      .then((data) => {
        setTodo(data);
        // console.log(todo);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const element =
    todo &&
    todo.map((tod) => {
      return <p key={tod.id}>{tod.title}</p>;
    });

  return (
    <div>
      <h1>DataFetch</h1>
      {error && <p>{error}</p>}
      {Loading && loadingMessage}
      {element}
    </div>
  );
}
