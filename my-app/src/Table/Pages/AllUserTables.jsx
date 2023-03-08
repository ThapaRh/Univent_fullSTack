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

    const [userData,setUserData] = useState([{OrderId:"1",OrderDate:"Date", CustomerNote:"In memory of",FirstName:"Name",LastName:"SurName",Address1Billing:"Billing Address",CityBilling:"City",StateBilling:"State",ZipBilling:"76012",Email:"1@gmail",Phone:"817",AddressShipping:"1",CityShipping:"1",StateShipping:"1",StateCodeShipping:"1",ZipShipping:"1",Name:"Arlington, TX: Dedicate a flag & pick up your flag",Quantity:"1",TotalItems:"1",DedicatedFrom:"1",DedicatedTo:" Flag #1 - Dedicated to In Memory of Charles (Chuck) C. ThomasUS Army, Korean Conflict"},{OrderId:2,OrderDate:"Date", CustomerNote:"In memory of",FirstName:"Name",LastName:"SurName",Address1Billing:"Billing Address",CityBilling:"City",StateBilling:"State",ZipBilling:"76012",Email:"1@gmail",Phone:"817",AddressShipping:"1",CityShipping:"1",StateShipping:"1",StateCodeShipping:"1",ZipShipping:"1",Name:"Arlington, TX: Dedicate a flag & pick up your flag",Quantity:"1",TotalItems:"1",DedicatedFrom:"1",DedicatedTo:" Flag #1 - Dedicated to In Memory of Charles (Chuck) C. ThomasUS Army, Korean Conflict"}]);
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
        { field: "OrderDate", headerName: "Date", width: 200, editable: true },
        { field: "CustomerNote", headerName: "In memory of", width: 200, editable: true },
        { field: "FirstName", headerName: "Name", width: 200, editable: true },
        { field: "LastName", headerName: "SurName", width: 200, editable: true },
        { field: "Address1Billing", headerName: "Billing Address", width: 200, editable: true },
        { field: "CityBilling", headerName: "City", width: 200, editable: true },
        { field: "StateBilling", headerName: "State", width: 200, editable: true },
        { field: "ZipBilling", headerName: "Zip", width: 200, editable: true },
        { field: "Email", headerName: "Email", width: 200, editable: true },
        { field: "Phone", headerName: "Phone", width: 200, editable: true },
        { field: "AddressShipping", headerName: "Shipping Address", width: 200, editable: true },
        { field: "CityShipping", headerName: "Shipping City", width: 200, editable: true },
        { field: "StateShipping", headerName: "Shipping State", width: 200, editable: true },
        { field: "StateCodeShipping", headerName: "Shipping State Code", width: 200, editable: true },
        { field: "ZipShipping", headerName: "Shipping Zip", width: 200, editable: true },
        { field: "Name", headerName: "Flag Name", width: 200, editable: true },
        { field: "Quantity", headerName: "Quantity", width: 200, editable: true },
        { field: "TotalItems", headerName: "Total Items", width: 200, editable: true },
        { field: "DedicatedFrom", headerName: "Dedicated From", width: 200, editable: true },
        { field: "DedicatedTo", headerName: "Dedicated To", width: 200, editable: true },      
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