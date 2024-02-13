import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("fetching is not successful!");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        // console.log(todo);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [url]);

  return { data, Loading, error };
}
