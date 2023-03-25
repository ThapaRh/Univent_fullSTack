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
    // const [displayedData,setDisplayedData]=useState();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
      setSearchQuery(event.target.value);
      console.log(event.target.value)
    };


    const DeleteTableData = (id)=>()=>{
      console.log(id);
      setDeleteId(id);//make fetch call to delete from backend
      setUserData((prevUserData)=>
      prevUserData.filter(
        (user)=>user.OrderId!==id))
    }

    //handle the table data update
    const handleCellEdit = (params) => {
        const {field,id,value} = params
        console.log(params);

        setUpdateData([field,id,value]);//make fetch call to do the update
    //   fetch(`api/updateUserData?id=${id}&field=${field}&value=${value}`)
    // .then((response) => response.json())
    // .then((data) => console.log(data))
    // .catch((error) => console.log(error));
        
      setUserData((prevUserData) =>
      prevUserData.map((user) =>
        user.OrderId === id ? { ...user, [field]: value } : user
      )
    );
    console.log(userData);
    }

    //filter functionalities in the table
    const filteredRows = userData.filter(
      (row) =>
      row.Address1Billing.toLowerCase().includes(searchQuery.toLowerCase()) || row.CustomerNote.toLowerCase().includes(searchQuery.toLowerCase()) || row.OrderId.toString().includes(searchQuery.toString())
      || row.OrderDate.toString().includes(searchQuery.toString())
      || row.ZipBilling.toString().includes(searchQuery.toString())
      ||row.StateCodeShipping.toString().includes(searchQuery.toString())
      ||row.ZipShipping.toString().includes(searchQuery.toString())
      ||row.Quantity.toString().includes(searchQuery.toString())
      ||row.TotalItems.toString().includes(searchQuery.toString())
      ||row.Phone.toString().includes(searchQuery.toString())
      || row.FirstName.toLowerCase().includes(searchQuery.toLowerCase())
      ||row.LastName.toLowerCase().includes(searchQuery.toLowerCase())
      ||row.CityBilling.toLowerCase().includes(searchQuery.toLowerCase())
      ||row.StateBilling.toLowerCase().includes(searchQuery.toLowerCase())
      ||row.Email.toLowerCase().includes(searchQuery.toLowerCase())
      ||row.AddressShipping.toLowerCase().includes(searchQuery.toLowerCase())
      ||row.CityShipping.toLowerCase().includes(searchQuery.toLowerCase())
      ||row.StateShipping.toLowerCase().includes(searchQuery.toLowerCase())
      ||row.Name.toLowerCase().includes(searchQuery.toLowerCase())
      ||row.DedicatedFrom.toLowerCase().includes(searchQuery.toLowerCase())
      ||row.DedicatedTo.toLowerCase().includes(searchQuery.toLowerCase())
    );



    const columns = [
        { field: "OrderId", headerName: "OrderId", width: 200, editable: false},
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
    <div style={{ height: "50vh", width: "100%", marginLeft:"10px",marginTop:"-70px"}}>
        <div style={{marginBottom:"10px"}}>
            <h2>Search</h2>
            <input 
              type="text" 
              onChange={handleSearch}
              style={{
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                boxShadow: 'inset 0 1px 3px rgba(0,0,0,.1)',
                fontSize: '16px',
                width: '10'
              }}
            />
          </div>
        {<DataGrid
          rows={filteredRows}
          getRowId={(row) => row.OrderId}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[7]}
          onCellEditCommit={handleCellEdit}
        /> }
      </div>
    )
}

export default AllUserTables;