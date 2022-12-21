import React from "react";
import UsersItem from "./UsersItem";

function UsersList(props){
        if (props.items.length === 0) {
            return (
            <div className="center"><h1>No Users Available</h1></div>);
        }
        return (<ul className="users-list">
            {props.items.map(user=>
                { return <UsersItem key={user.id} id={user.id} image={user.image} name={user.name} orders={user.orders}/>} //this is same as a=> <UserItem  bla bla bla/> you have to have return with brackets and nothing with no brackets
            )}
        </ul>);

}

export default UsersList;