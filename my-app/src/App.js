import React, { useCallback, useEffect, useState } from "react";
import { useAuth } from "./hooks/auth-hook";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import Users from "./User/Pages/Users";
import MainNavigation from "./Shared/Components/Navigation/MainNavigation";
import CFFForm from "./User/Components/CFFForm";
import Login from "./User/Pages/Login";
import Signup from "./User/Login/Signup";
import Auth from "./User/Pages/Auth";
import AllUserTables from "./User/Pages/AllUserTables";
import { AuthContext } from "./context/auth-context";
import Home from "./User/Login/Home";
import PrintCards from "./User/Components/PrintCards";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { token, login, logout, userId } = useAuth();

  let routes;
  if (token) {
    routes = (
      <React.Fragment>
        {/* <Route path="/" element={<CFFForm />} /> */}
        <Route path="/card" element={<PrintCards />} />
        <Route path="/" element={<AllUserTables />} />
        <Route path="/login" element={<Login />} />
      </React.Fragment>
    );
  } else {
    routes = (
      <React.Fragment>
        <Route path="/" element={<Auth />} />
        <Route path="/card" element={<PrintCards />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/orders" element={<AllUserTables />} /> */}
      </React.Fragment>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <Routes>
          <Route>{routes}</Route>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
