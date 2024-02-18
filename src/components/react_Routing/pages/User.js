import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function User() {
  const [searchParam, setSearchParam] = useSearchParams();
  const [name, setName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParam({ name: name });
  };
  //   const { userid } = useParams();
  return (
    <div>
      <h1>User</h1>
      {/* <p>{userid}</p> */}
      {/* <h3>{searchParam.get("id")}</h3> */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">findUser</button>
      </form>
    </div>
  );
}

export default User;
