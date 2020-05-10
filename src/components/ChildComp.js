import React, { useContext } from "react";
import { UserContext } from "../utils/UserContext";
import { GrandChildComp } from "./GrandChildComp";

export function ChildComp(props) {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>->Child Component</h2>
      <p>->Logged in user: {user} from the first level</p>
      <GrandChildComp />
    </div>
  );
}
