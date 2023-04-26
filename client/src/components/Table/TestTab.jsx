import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function makeStyle(status, userType) {
  if (status === "Approved") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Pending") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    if (userType === 'enterprise') {
      return {
        background: "#59bfff",
        color: "white",
      };
    } else if (userType === 'entrepreneur') {
      return {
        background: "yellow",
        color: "black",
      };
    } else {
      return {
        background: "lightgreen",
        color: "black",
      };
    }
  }
}


export default function BasicTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/users/all") // Replace with the actual endpoint for your route
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDeletePdf = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/users/del/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        // remove the deleted user from the state
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Table">
      <h3>Recent Orders</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="left">Tracking ID</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {users.map((user) => (
              <TableRow
                key={user._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.firstName + " " + user.lastName}
                </TableCell>
                <TableCell align="left">{user.email}</TableCell>
                <TableCell align="left">{user.userType}</TableCell>
                <TableCell align="left">
                <span className="status" style={makeStyle(user.status, user.userType)}>
  {user.userType}
</span>
                </TableCell>
                <TableCell align="left" className="Details">
                  <button onClick={() => handleDeletePdf(user._id)}>
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
      </div>
  );
}
