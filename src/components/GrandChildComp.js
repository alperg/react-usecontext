import React, { useContext } from "react";
import { UserContext } from "../utils/UserContext";

export function GrandChildComp(props) {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>----->  Grand Child Component</h2>
      <p>----->  Logged in user: {user} from the second level!</p>
    </div>
  );
}
