import React from "react";
import Button from "@mui/material/Button";

export default function PrintCards(props){

    function printData(){
        // for (let item of props){
        //     console.log(item.CustomerNote)
        // }
        console.log(props)
    }

    return (
    <div><Button onClick={printData} variant="contained" style={{ height:"3.2rem" }}>
    Print All
  </Button>
  </div>);

}