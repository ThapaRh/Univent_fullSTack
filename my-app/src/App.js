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
import Login from "./User/Login/Login";
import Signup from "./User/Login/Signup";
function App() {
  return (
    // <Router>
    // <MainNavigation/>
    // <main>
    //   <Switch>
    //     <Route path="/" exact>
    //       <Users />
    //     </Route>
    //     <Route path="/orders">
    //       <Orders />
    //     </Route>
    //     <Redirect to="/" />
    //   </Switch>
    //   </main>
    // </Router>

    <Router>
      {/* <Switch> */}
      <Routes>
        <Route path="/">
          {/* <CFFForm /> */}
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
      {/* </Switch> */}
    </Router>
  );
}

export default App;
