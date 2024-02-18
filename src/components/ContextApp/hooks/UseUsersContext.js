import { useContext } from "react";
import { UsersContext } from "../context/UsersContext";

export const UseUsersContext = () => {
  return useContext(UsersContext);
};
