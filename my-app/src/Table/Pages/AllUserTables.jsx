import React, { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DataGrid } from "@mui/x-data-grid";
import CircularProgress from "@mui/material/CircularProgress";
import { autocompleteClasses } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormDialog from "../../User/Components/FormDialog";
import CFFForm from "../../User/Components/CFFForm";
import NavBar from "../../User/Components/NavBar";
import "../TableOverall.css"
import { AuthContext } from "../../context/auth-context";
import { useAuth } from "../../hooks/auth-hook"
import PrintCards from "../../User/Components/PrintCards"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPenToSquare, faPrint, faTrash } from '@fortawesome/free-solid-svg-icons'


function AllUserTables(){
  const { token, login, logout, userId } = useAuth();
    const [userData,setUserData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [deleteId,setDeleteId]=useState();
    const [updateData,setUpdateData]=useState();
    const [searchQuery, setSearchQuery] = useState('');
    const [order, setOrder] = useState("all");
    const auth = useContext(AuthContext);
    const [selectedRows, setselectedRows] = React.useState([]);

    const handleSearch = (event) => {
      setSearchQuery(event.target.value);
    };

    const handleChange = (event) => {
      setOrder(event.target.value);
    };

    // useEffect(() => {
    //   console.log('Selection model has changed!', selectedRows);
    // }, [selectedRows]);


    const DeleteTableData = (id) => async () => {
      setDeleteId(id);
      try {
        const response = await fetch(`http://localhost:8000/api/cff/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + token
          },
        });
        if (!response.ok) {
          throw new Error("Failed to delete item");
        }
      } catch (error) {
        console.log(error);
        return;
      }
    
      setFilteredData((filteredData) =>
        filteredData.filter((user) => user._id !== id)
      );
    };


    //handle the table data update
    const handleCellEdit = async (params) => {
        const {field,id,value} = params
        setUserData(userData)
        setUpdateData([field,id,value]);
        setUserData((prevUserData) =>
        prevUserData.map((user) =>
          user._id === id ? { ...user, [field]: value } : user
        )
      );

      const updatedData = userData.find(item => item._id == id)
      updatedData[field] = value
      console.log(updatedData)

      try {
        const response = await fetch(`http://localhost:8000/api/cff/${id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
          body: JSON.stringify({
            OrderNumber: updatedData.OrderNumber,
            OrderStatus: updatedData.OrderStatus,
            OrderDate: updatedData.OrderDate,
            CustomerNote: updatedData.CustomerNote,
            OrderNote: updatedData.OrderNote,
            FirstName: updatedData.FirstName,
            LastName: updatedData.LastName,
            AddressBilling: updatedData.AddressBilling,
            City: updatedData.City,
            State: updatedData.State,
            ZipCode: updatedData.ZipCode,
            Email: updatedData.Email,
            Phone: updatedData.Phone,
            ShippingAddress: updatedData.ShippingAddress,
            ShippingState: updatedData.ShippingState,
            ShippingZip: updatedData.ShippingZip,
            Item: updatedData.Item,
            SKU: updatedData.SKU,
            ServiceType: updatedData.ServiceType,
            Quantity: updatedData.Quantity,
            TotalItems: updatedData.TotalItems,
            DedicatedFrom: updatedData.DedicatedFrom,
            DedicatedTo: updatedData.DedicatedTo,
          }),
        });
      
        if (!response.ok) {
          throw new Error('Failed to update item');
        }
      } catch (error) {
        console.log(error);
        return;
      }  
    }

    // Handling data after uploading a csv
    const handleFileUpload = async (data) =>{
      const dataToUpdate = userData
      try {
        const response = await fetch('http://localhost:8000/api/cff/');
        const json = await response.json();
        setUserData(json.allCFF);
        setFilteredData(json.allCFF);
      } catch (error) {
        console.log('Error fetching data', error);
      }
    }

    // Handling adding a CFF
    const handleAdd = async (data) =>{
      try {
        const response = await fetch('http://localhost:8000/api/cff/');
        const json = await response.json();
        setUserData(json.allCFF);
        setFilteredData(json.allCFF);
      } catch (error) {
        console.log('Error fetching data', error);
      }
    }



    //filter functionalities in the table
    const filteredRows = filteredData.filter(
      (row) =>
      row.Address1Billing?.toLowerCase().includes(searchQuery?.toLowerCase()) 
      || row.CustomerNote?.toLowerCase().includes(searchQuery?.toLowerCase()) 
      || row.OrderNumber?.toString().includes(searchQuery?.toString())
      || row.OrderDate?.toString().includes(searchQuery?.toString())
      || row.ZipBilling?.toString().includes(searchQuery?.toString())
      || row.State?.toString().includes(searchQuery?.toString())
      ||row.StateCodeShipping?.toString().includes(searchQuery?.toString())
      ||row.ZipShipping?.toString().includes(searchQuery?.toString())
      ||row.Quantity?.toString().includes(searchQuery?.toString())
      ||row.TotalItems?.toString().includes(searchQuery?.toString())
      ||row.Phone?.toString().includes(searchQuery?.toString())
      || row.FirstName?.toLowerCase().includes(searchQuery?.toLowerCase())
      ||row.LastName?.toLowerCase().includes(searchQuery?.toLowerCase())
      ||row.City?.toLowerCase().includes(searchQuery?.toLowerCase())
      ||row.StateBilling?.toLowerCase().includes(searchQuery?.toLowerCase())
      ||row.AddressBilling?.toLowerCase().includes(searchQuery?.toLowerCase())
      ||row.Email?.toLowerCase().includes(searchQuery?.toLowerCase())
      ||row.AddressShipping?.toLowerCase().includes(searchQuery?.toLowerCase())
      ||row.CityShipping?.toLowerCase().includes(searchQuery?.toLowerCase())
      ||row.StateShipping?.toLowerCase().includes(searchQuery?.toLowerCase())
      ||row.Name?.toLowerCase().includes(searchQuery?.toLowerCase())
      ||row.DedicatedFrom?.toLowerCase().includes(searchQuery?.toLowerCase())
      ||row.DedicatedTo?.toLowerCase().includes(searchQuery?.toLowerCase())
      ||row.SKU?.toLowerCase().includes(searchQuery?.toLowerCase())
      ||row.OrderStatus?.toLowerCase().includes(searchQuery?.toLowerCase())
      ||row.OrderStatus?.toLowerCase().includes(searchQuery?.toLowerCase())
    );


    useEffect(() =>{
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/cff/');
          const json = await response.json();
          setUserData(json.allCFF);
          setFilteredData(json.allCFF);
        } catch (error) {
          console.log('Error fetching data', error);
        }
      };
      fetchData();
    },[])

    // Handling the order status drop down
    useEffect(() =>{
      if (order !== "all") {
        const data = userData.filter(item => item.OrderStatus === order);
        setFilteredData(data)
      } else{
        setFilteredData(userData)
      }
    },[order])



    const columns = [
        { field: "OrderNumber", headerName: "Order Number", width: 120, editable: false},
        { field: "OrderStatus", headerName: "Order Status", width: 120, editable: true },
        { field: "FirstName", headerName: "Name", width: 120, editable: true },
        { field: "LastName", headerName: "SurName", width: 120, editable: true },
        { field: "AddressBilling", headerName: "Billing Address", width: 250, editable: true },
        { field: "City", headerName: "Billing City", width: 120, editable: true },
        { field: "State", headerName: "Billing State", width: 120, editable: true },
        { field: "ZipCode", headerName: "Zip Code", width: 120, editable: true },
        { field: "Email", headerName: "Email", width: 250, editable: true },
        { field: "Phone", headerName: "Phone", width: 120, editable: true },
        { field: "Item", headerName: "Item", width: 100, editable: true },
        { field: "SKU", headerName: "SKU", width: 200, editable: true },
        { field: "ServiceType", headerName: "Service Type", width: 450, editable: true },
        { field: "AddressShipping", headerName: "Shipping Address", width: 250, editable: true },
        { field: "CityShipping", headerName: "Shipping City", width: 120, editable: true },
        { field: "StateShipping", headerName: "Shipping State", width: 120, editable: true },
        { field: "StateCodeShipping", headerName: "Shipping ZipCode", width: 150, editable: true },
        { field: "ZipShipping", headerName: "Shipping Zip", width: 120, editable: true },
        { field: "Name", headerName: "Flag Name", width: 200, editable: true },
        { field: "Quantity", headerName: "Quantity", width: 120, editable: true },
        { field: "TotalItems", headerName: "Total Items", width: 120, editable: true },
        { field: "CustomerNote", headerName: "In memory of", width: 350, editable: true },
        { field: "DedicatedFrom", headerName: "Dedicated From", width: 400, editable: true },
        { field: "DedicatedTo", headerName: "Dedicated To", width: 420, editable: true },      
        {field:"Delete",headerName:"options",width:300,editable:true,renderCell:(params)=>
        <div style={{
          display: "flex",
          flexDirection: "row",
          gap: "0px"
        }}>
          <Button variant="outline" size="medium">
          <FontAwesomeIcon icon={faPrint} />
          </Button>
          <Button variant="outline" color="error" size="medium" onClick={DeleteTableData(params.row._id)}>
          <FontAwesomeIcon icon={faTrash} />
          </Button>
          <Button variant="outline" color="success" size="medium" >
          <FontAwesomeIcon icon={faPenToSquare} />
          </Button>
        </div>
    }
      ];
   

    return (
    // 
    <div>
      <div className="Nav-Bar">
      {/* <NavBar /> */}
      </div>
      <div style={{
        display: "flex",
        flexDirection: "horizontal",
        marginTop: "6rem",
        gap: "93.5rem"
      }}>
        <h2 
          style={{
            marginLeft: "5rem",
          }}
          >Orders</h2>
        <FormDialog onAdd={handleAdd}/>
      </div>

        <div style={{
          display : "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "start",
          marginTop: "2rem",
          gap: "5rem",
          marginLeft: "5rem",
          height: "10vh",
          width: "92%",
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          alignItems: "center",
          borderRadius: "10px",
        }}>
          <div>
            <TextField 
              type="text" 
              onChange={handleSearch}
              label="What are you looking for?"
              style={{
                fontSize: '14px',
                width: '40rem',
                marginLeft: "20px"
              }}
            />
            </div>
            <div>
            <Box sx={{ minWidth: 120}}>
            <FormControl>
            <InputLabel id="demo-simple-select-label">Order Status</InputLabel>
            <Select
            value={order}
            onChange={handleChange}
            style={{width: "10rem"}}
            label="Order"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            >
              <MenuItem value={"all"}>All</MenuItem>
              <MenuItem value={"Processing"}>Processing</MenuItem>
              <MenuItem value={"Returned"}>Returned</MenuItem>
              <MenuItem value={"Shipped"}>Shipped</MenuItem>
            </Select>
            </FormControl>
            </Box>
            </div>

            <div
            style={{
              marginLeft: "26rem"
            }}>
            <CFFForm onUpload={handleFileUpload}/>
            </div>

            <div>
            <PrintCards tabledata= {selectedRows}/>
            </div>

            </div>
            
            {/* <FormDialog onAdd={handleAdd}/> */}
            {/* <CFFForm onUpload={handleFileUpload}/>
            <PrintCards tabledata= {selectedRows}/> */}
            {/* <Button variant="contained" style={{ height:"3.2rem" }}>
              Export CSV
            </Button> */}
         
          <div style={{ marginTop: "0.2rem",  
          display: "flex", 
          justifyContent: "start",
          width: "100%",
          marginLeft: "5rem" 
          }}>
            <div style={{ marginTop: "3rem", 
          height: "65vh", 
          width: '92%', 
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          }}>
        {<DataGrid
          rows={filteredRows}
          density='standard'
          checkboxSelection
          getRowId={(row) => row._id}
          columns={columns}
          rowsPerPageOptions={[7]}
          onCellEditCommit={handleCellEdit}
          onSelectionModelChange={(ids) => {
            const selectedIDs = new Set(ids);
            const selectedRows = filteredRows.filter((row) =>
            selectedIDs.has(row._id),
            );
          setselectedRows(selectedRows);
          }}
        /> }
        </div>
        </div>
      </div>
    )
}

export default AllUserTables;