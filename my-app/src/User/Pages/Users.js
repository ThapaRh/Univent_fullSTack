import React from "react";
import UsersList from "../Components/UsersList";

function Users(){

    const users=[{id:"u1", name:"Rhu", orders:3, image:"https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"}]

    return <h1><UsersList items={users}></UsersList></h1>
}

export default Users;