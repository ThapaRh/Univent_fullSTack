import React from "react";

function UsersItem(props){
    return (
        <li className="users-items">
            <div className="user-item__content">
            <div className="user-item__image">
                <img src={props.image} alt={props.name}/>
            </div>
            <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>{props.orders}{props.orders===1?"place":"places"}</h3>
            </div>
            </div>
        </li>
    )
}

export default UsersItem;