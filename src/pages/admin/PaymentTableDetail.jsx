import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import PaymentDeatils from "../../services/admin/fetchPaymentDetails";

// const paymentDetails = [
//   {
//     paymentId: "pay_P3pDm3WKsxwTtU",
//     amount: 40,
//     _id: "66fc16f98045f51ab04e92f6",
//     date: "2024-10-01T15:36:25.005+00:00",
//     employerName: "John Doe", // Sample employer name
//   },
// ];

export default function PaymentTableDetails() {
  const [payments, setPayments] = useState([]);
  // console.log("paymnets", payments);

  const fetchPaymentDeatils = async () => {
    const response = await PaymentDeatils();
    // console.log("responseeeee", response);

    if (response) {
      setPayments(response.paymentDetails);
    }
  };

  useEffect(() => {
    fetchPaymentDeatils();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Typography variant="h6" sx={{ padding: 2, textAlign: "center" }}>
        Payment Details
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <strong>Employer Name</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Payment ID</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Amount ($)</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Date</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {payments.map((payment) => (
            <TableRow key={payment._id}>
              <TableCell align="center">{payment.employerName}</TableCell>
              <TableCell align="center">{payment.paymentId}</TableCell>
              <TableCell align="center">{payment.amount}</TableCell>
              <TableCell align="center">
                {new Date(payment.date).toLocaleDateString()}{" "}
                {/* Format date */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
