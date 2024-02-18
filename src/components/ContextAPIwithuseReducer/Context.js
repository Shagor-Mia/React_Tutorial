import React, { useReducer } from "react";
import Users from "./Users";
import NewUser from "./NewUser";
import { UsersContext } from "./context/UsersContext";
import { InitialState, reducer } from "./reducer/UserReducer";

export default function Context2() {
  const [state, dispatch] = useReducer(reducer, InitialState);

  const value = {
    users: state.users,
    addUser: (newUser) => {
      dispatch({ type: "ADD_USER", payload: newUser });
    },
    deleteUser: (id) => {
      dispatch({ type: "DELETE_USER", payload: id });
    },
  };
  return (
    <UsersContext.Provider value={value}>
      <div>
        <h1>Context</h1>
        <NewUser />
        <Users />
      </div>
    </UsersContext.Provider>
  );
}
