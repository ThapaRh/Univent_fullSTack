import React from "react";

import Card from "../../Shared/Components/UIComponents/Card";
import OrderItem from "./OrderItem";
import "./OrderList.css"

function OrderList(props){
    if (props.items.length===0){
        return (
            <div className="center">
            <Card>
            <h2>No Orders here.</h2>
            </Card>
            </div>
        );
    };

    return (
        <ul className="place-list">
            {props.items.map(orders=>{
                return <OrderItem key ={orders.id} id={orders.id} contact={orders.contact} orderNotes={orders.orderNotes} userName={orders.userName}/>
            })}
        </ul>
    );
};

export default OrderList;