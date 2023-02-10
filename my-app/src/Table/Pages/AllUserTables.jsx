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

import "../TableOverall.css"


function AllUserTables(){

    const columns = [
        { field: "Name", headerName: "Name", width: 500 },
        { field: "Phone", headerName: "Contact", width: 500 },
        { field: "OrderId", headerName: "OrderId", width: 500 },
      ];
    const userData = [{Name:"name", Phone:"phone",OrderId:"1"},{Name:"name", Phone:"phone",OrderId:"2"},{Name:"name", Phone:"phone",OrderId:"3"}]

    return (
    // 
    <div style={{ height: "50vh", width: "100%", marginTop: "2rem" }}>
        {<DataGrid
          rows={userData}
          getRowId={(row) => row.OrderId}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[7]}
          checkboxSelection
        /> }
      </div>
    )
}

export default AllUserTables;