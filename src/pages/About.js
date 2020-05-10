import React, { useContext } from "react";
import { UserContext } from "../utils/UserContext";

export function About() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>About</h2>
      <p>Current user: {user}</p>
    </div>
  );
}
