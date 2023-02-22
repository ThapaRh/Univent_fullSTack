import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Users from "./User/Pages/Users";
import Orders from "./Orders/Pages/Orders";
import UserOrders from "./Orders/Pages/UserOrders";
import MainNavigation from "./Shared/Components/Navigation/MainNavigation";
import AllUserTables from "./Table/Pages/AllUserTables";
import HomePage from "./User/Pages/HomePage";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/usersTable" exact>
            <AllUserTables></AllUserTables>
          </Route>
          <Route path="/:userId/orders" exact>
            <UserOrders />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
