import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../../Shared/Components/UIComponents/Avatar";
import Card from "../../Shared/Components/UIComponents/Card";
import "./UsersItem.css";

function UsersItem(props) {
  return (
    <li className="user-item">
      <Card className="user-item__content" >
        <Link to={`/${props.id}/orders`}>
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.orders}
              {props.orders === 1 ? " order" : "orders"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UsersItem;
