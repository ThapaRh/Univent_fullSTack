import React from "react";

import Card from "../../Shared/Components/UIComponents/Card";
import "./OrderItem.css";

function OrderItem(props){
    return (
        <li className="place-item">
        <Card className="place-item__content">
        <div className="place-item__info">
        <h2>{props.contact}</h2>
        <h2>{props.userName}</h2>
        <p>{props.orderNotes}</p>
        </div>
        <div>
        <button>
        Go To Order Details
        </button>
        </div>
        </Card>
        </li>
    )
}

export default OrderItem;