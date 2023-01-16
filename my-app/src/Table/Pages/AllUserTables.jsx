import React from "react";
import TableData from "../Containers/TableData";

import "../TableOverall.css"


function AllUserTables(){

    const userHeading=["Name", "Phone", "OrderId"];
    const userData = [{Name:"name", Phone:"phone",OrderId:"1"},{Name:"name", Phone:"phone",OrderId:"2"},{Name:"name", Phone:"phone",OrderId:"3"}]

    return (
    <div className="app-container">
    <table>
        <thead>
        <tr>
            {userHeading.map((item,index)=>
            <th key={index}>{item}</th>
            )}
        </tr>
        </thead>
        <tbody>
            {userData.map((data)=>{
                return <TableData key={data.OrderId} data={data}/>
            })}
        </tbody>
    </table>
    </div>)
}

export default AllUserTables;