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

function App() {
  return (
    <Router>
    <MainNavigation/>
    <main>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/orders" exact>
        <UserOrders></UserOrders>
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
