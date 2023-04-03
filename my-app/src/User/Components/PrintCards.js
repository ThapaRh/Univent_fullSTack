import React, { useState, useEffect, useContext } from "react";
import Button from "@mui/material/Button";
import ActionAreaCard from "../Card/Card_Layout"
import { useLocation } from 'react-router-dom';

export default function PrintCards(){
  const { state } = useLocation();

    // function printData(){
    //     for (let item of props.tabledata){
    //         console.log(item)
    //         return <ActionAreaCard data={item}/>
    //     }
    // }
    // const dataArray = location.state.data;

    useEffect(() =>{
      console.log(state.dataArray)
      
    },[])

    return (
      <div>
      {state.dataArray.map((item) => (
        <ActionAreaCard data={item} key={item._id} />
      ))}
    </div>
      );

}