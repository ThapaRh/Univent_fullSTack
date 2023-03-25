import React, { useState } from "react";
import {Link} from 'react-router-dom';
import Button from "@mui/material/Button";
import CarouselExample from "../Components/CarouselExample";
import NavBar from "../Components/NavBar";
import Card from "../Components/Card";
import "./HomePage.css";

const HomePage = () => {
  const [data, setData] = useState("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <NavBar />
      {/* <div style={{ margin: "0 auto" }}>
        <CarouselExample />
      </div> */}
      <img
        src="https://media.socastsrm.com/wordpress/wp-content/blogs.dir/2798/files/2021/11/georgetown-field-of-honor-georgetown-texas.png"
        className="imageContainer"
      />

      <div className="eventWrapper">
        <p>Event Information : September 3, 2022 - Septemeber 12, 2022</p>
        <p className="eventItem">3600 WEST ARKANSAS LANE ARLINGTON, TX</p>
      </div>

      <p className="centerText">
        Thanks for your interest in volunteering with <br /> <br />
        The Arlington Field of Honor. <br /> <br />
        There are many ways you can help during flag assembly, Field of Honor
        Setup, serving as a docent, Field of Honor take-down.
      </p>

      <div className="cardContainer">
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <p className="instHeader"> Instruction on orders </p>
        <p className="instContent">
          In order to gain access to all the Orders <br />
          Please click the order button <br />
        </p>
      </div>
      <p style={{ textAlign: "center" }}>
      <Link to = "/usersTable">
        <Button className="orderButton" variant="contained">
          Orders
        </Button>
        </Link>
      </p>
    </div>
  );
};

export default HomePage;
