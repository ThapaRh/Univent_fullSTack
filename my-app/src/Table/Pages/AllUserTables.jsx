// import React from "react";
// import TableData from "../Containers/TableData";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DataGrid } from "@mui/x-data-grid";
import CircularProgress from "@mui/material/CircularProgress";
import { autocompleteClasses } from "@mui/material";
import Button from "@mui/material/Button";

import "../TableOverall.css"


function AllUserTables(){

    const [userData,setUserData] = useState([{Name:"name", Phone:"phone",OrderId:"1"},{Name:"name", Phone:"phone",OrderId:"2"},{Name:"name", Phone:"phone",OrderId:"3"}]);
    const [deleteId,setDeleteId]=useState();
    const [updateData,setUpdateData]=useState();
    const DeleteTableData = (id)=>()=>{
      console.log(id)
      setDeleteId(id);//make fetch call to delete from backend
      setUserData((prevUserData)=>
      prevUserData.filter(
        (user)=>user.OrderId!==id))
    }



    const columns = [
        { field: "Name", headerName: "Name", width: 200, editable:true },
        { field: "Phone", headerName: "Contact", width: 200,editable:true },
        { field: "OrderId", headerName: "OrderId", width: 200,editable:true },
        {field:"Delete",headerName:"Delete",width:200,editable:true,renderCell:(params)=>
      <Button variant="outlined" color="error" size="small" onClick={DeleteTableData(params.row.OrderId)}>
      Delete
      </Button>}
      ];
   

    return (
    // 
    <div style={{ height: "50vh", width: "100%", marginTop: "2rem" }}>
        {<DataGrid
          rows={userData}
          getRowId={(row) => row.OrderId}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[7]}
        /> }
      </div>
    )
}

export default AllUserTables;