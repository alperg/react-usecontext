import React, { useContext } from "react";
import { UserContext } from "../utils/UserContext";
import { ChildComp } from "../components/ChildComp";

export function Home() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>Home</h2>
      <p>Logged in user: {user} from Home</p>
      <ChildComp />

      {user ? (
        <button onClick={async () => {setUser(null)}}>logout</button>
      ) : (
        <button onClick={async () => {setUser('Alper')}}>login</button>
      )}
    </div>
  );
}
