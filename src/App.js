import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { UserContext } from "./utils/UserContext";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about/">About</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={{user, setUser}}>
          <Route path="/" exact component={Home} />
          <Route path="about/" component={About} />
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
