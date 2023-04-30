import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
const MainDash = () => {


  const user = (JSON.parse(localStorage.getItem("user")));


  return (
    <div className="MainDash">
      <h1>Hi {user.firstName}</h1> 
      <span> userType: {user.userType}</span>
      <Cards />
      <Table />
    </div>
  );
};

export default MainDash;
