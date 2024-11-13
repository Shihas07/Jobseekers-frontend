import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import FetchApplied from "../../services/user/FetchAppliedDetails";
import { useSelector } from "react-redux";

export default function AppliedDetails() {
  const userDetails = useSelector((state) => state.user.userDetails);

  // console.log("userDetailsFromresume", userDetails);

  const [Applications, setApplications] = useState([]);
 console.log("Applications", Applications);
  const FindApplications = async () => {
    const response = await FetchApplied(userDetails.id);
    console.log("resy",response)
    if (response) {
      setApplications(response.Data);
    }
  };

  useEffect(() => {
    FindApplications();
  }, [userDetails]);

  return (
    <div>
  <TableContainer sx={{ width: "100%" }}>
  <Paper elevation={5}>
    <Typography variant="h4" sx={{ padding: 2 }}>Application Details</Typography>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Application</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Applications.map((data, ind) => (
          <TableRow key={ind}>
            <TableCell>{data.jobTitle}</TableCell>
            <TableCell>{data.status}</TableCell>
            <TableCell>{data.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
</TableContainer>

    </div>
  );
}
