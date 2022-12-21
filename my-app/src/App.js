import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Users from "./User/Pages/Users";
import Orders from "./Orders/Pages/Orders";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
