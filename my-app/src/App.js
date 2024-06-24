import React, { useCallback, useEffect, useState } from "react";
import { useAuth } from "./hooks/auth-hook";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import Users from "./User/Pages/Users";
import Orders from "./Orders/Pages/Orders";
import MainNavigation from "./Shared/Components/Navigation/MainNavigation";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import CFFForm from "./User/Components/CFFForm";
import Login from "./User/Login/Login";
import Signup from "./User/Login/Signup";
import Auth from "./User/Pages/Auth";
import AllUserTables from "./Table/Pages/AllUserTables";
import TestTable from "./Table/Pages/TestTable";
import { AuthContext } from "./context/auth-context";
import Home from "./User/Login/Home";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { token, login, logout, userId } = useAuth();

  let routes;
  if (token) {
    routes = (
      <React.Fragment>
        <Route path="/" element={<CFFForm />} />
        <Route path="/orders" element={<AllUserTables />} />
        <Route path="/test" element={<TestTable />} />
        <Route path="/login" element={<Login />} />
      </React.Fragment>
    );
  } else {
    routes = (
      <React.Fragment>
        <Route path="/" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<AllUserTables />} />
        <Route path="/test" element={<TestTable />} />
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
    // =======
    //     <Router>
    //       {/* <Switch> */}
    //       <Routes>
    //         <Route path="/">
    //           {/* <CFFForm /> */}
    //           <Route path="/" element={<Login />} />
    //           <Route path="/signup" element={<Signup />} />
    //         </Route>
    //       </Routes>
    //       {/* </Switch> */}
    //     </Router>
    // >>>>>>> 5aebf5af19735cf5a03c60dcc749f861026feb0b
  );
};

export default App;
