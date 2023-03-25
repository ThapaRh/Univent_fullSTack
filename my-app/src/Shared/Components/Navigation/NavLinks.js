import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css"

function NavLinks(props){
    return (
        <ul className="nav-links">
        <li>
            <NavLink to ="/" exact>| All Users |</NavLink>
        </li>
        <li>
            <NavLink to ="/orders">| My Orders |</NavLink>
        </li>
        <li>
            <NavLink to = "/usersTable">|All User Table |</NavLink>
        </li>

        </ul>
    );
};

export default NavLinks;