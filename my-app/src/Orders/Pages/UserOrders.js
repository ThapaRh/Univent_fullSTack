import React from "react";

import OrderList from "../Components/OrderList";
import "./UserOrders.css";

const Dummy_places=[
    {id:"o1",
    contact:"000-000-0000",
    orderNotes:"These are the orders placed by the users and it is supposed to have a note.",
    userName:"Utsav"
    },
    {id:"o2",
    contact:"000-000-0000",
    orderNotes:"These are the orders placed by the users and it is supposed to have a note.",
    userName:"Utsav"
    }
]
function UserOrders(){
    return <OrderList items={Dummy_places}/>
}

export default UserOrders;