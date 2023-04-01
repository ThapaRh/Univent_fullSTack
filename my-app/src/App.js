import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
  Switch,
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Users from "./User/Pages/Users";
import Orders from "./Orders/Pages/Orders";
import MainNavigation from "./Shared/Components/Navigation/MainNavigation";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import CFFForm from "./User/Components/CFFForm";
import Login from "./User/Login/Login";
import Signup from "./User/Login/Signup";
import Card_Layout from "./User/Card/Card_Layout";
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
        <Route path="/" element={<Card_Layout/>}/>
          {/* <CFFForm /> */}
          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />  */}
          
        
      </Routes>
      {/* </Switch> */}
    </Router>
    
  );
}

export default App;
