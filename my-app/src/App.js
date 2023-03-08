import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./User/Pages/Users";
import Orders from "./Orders/Pages/Orders";
import MainNavigation from "./Shared/Components/Navigation/MainNavigation";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import CFFForm from "./User/Components/CFFForm";
import HomePage from "../src/User/Pages/HomePage";
import AllUserTables from "./Table/Pages/AllUserTables";

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
          <Route path="/orders">
            <Orders />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>

    // <Router>
    //   <Switch>
    //     <Route path="/">
    //       <CFFForm />
    //     </Route>
    //   </Switch>
    // </Router>
  );
}

export default App;
