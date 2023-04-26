import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

function Info() {
  const [user, setUser] = useState({});
  
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>User Type</TableCell>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Email</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>{user.userType}</TableCell>
          <TableCell>{user.firstName}</TableCell>
          <TableCell>{user.lastName}</TableCell>
          <TableCell>{user.email}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default Info;
