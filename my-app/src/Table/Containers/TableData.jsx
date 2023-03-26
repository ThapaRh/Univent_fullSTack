import React from "react";

function TableData(props){
    return (
            <tr>
                <td>{props.data.Name}</td>
                <td>{props.data.Phone}</td>
                <td>{props.data.OrderId}</td>
            </tr>
    )
}

export default TableData;