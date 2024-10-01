import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import CommonInput from "../../components/Common/TextField";
import FetchData from "../../services/employer/fetchToken";
import { useRazorpay } from "react-razorpay";
import payment from "./PostRazorpay";

export default function PaymentCard() {
  const { error, isLoading, Razorpay } = useRazorpay();
  const [count, setCount] = useState(""); // Token count state
  const [price, setPrice] = useState(0); // Total price state
  const [fetchPrice, setFetchPrice] = useState(0); // Fetched price from API

  console.log("Fetched Price:", fetchPrice);

  // Fetch price from the API
  const fetch = async () => {
    try {
      const response = await FetchData();
      setFetchPrice(response.data[0].price);
      
      console.log("Fetched price:", response.data[0].price);
    } catch (error) {
      console.error("Error fetching data:", error);
      setFetchPrice(0); // Default to 0 on error
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  // Update total price based on count and fetched price
  useEffect(() => {
    setPrice(count * fetchPrice);
  }, [count, fetchPrice]);

  // Handle Razorpay payment
  const handleRazorpay = async () => {
    try {
      const data = {
        amount: price * 100, // Convert to paise
        currency: "INR",
        receipt: "receipt_order_xyz",
      };

      // Create Razorpay order
      const paymentResponse = await payment(data);
      console.log("Payment Response:", paymentResponse);

      // Open Razorpay payment modal
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Replace with your Razorpay Key
        amount: paymentResponse.amount, // Amount from response
        currency: paymentResponse.currency,
        name: 'Job seekers',
        description: 'Test Transaction',
        order_id: paymentResponse.id, // Order ID from response
        handler: (response) => {
          console.log('Payment successful!', response);
          alert('Payment Successful!');
               
          // Send response to your backend for verification
        },
        prefill: {
          name: 'Your Customer Name',
          email: 'customer@example.com',
          contact: '7994126039',
        },
        theme: {
          color: '#F37254',
        },
      };

      const rzp = new Razorpay(options);
      rzp.open(); // Open Razorpay modal
    } catch (error) {
      console.error("Error during payment:", error);
    }
  };

  return (
    <Box
      sx={{
        width: { xs: "90%", sm: "500px" },
        height: "auto",
        maxWidth: "600px",
        padding: 2,
      }}
    >
      <Card elevation={3}>
        <CardContent>
          <Typography fontWeight="bold">Select Your Token Count</Typography>

          <Box
            display="flex"
            gap={2}
            alignItems="center"
            justifyContent="flex-start"
            mt={2}
          >
            <CommonInput
              type="number"
              label="Count"
              value={count}
              onChange={(e) => setCount(e.target.value)}
              height="20px"
              width="200px"
            />
            <CommonInput
              type="text"
              label="Price"
              value={price} // Use price state
              readOnly // Make the price input read-only
              height="20px"
              width="200px"
            />
          </Box>

          <Box
            display="flex"
            gap={3}
            marginTop={7}
            alignItems="center"
            sx={{ width: { xs: "90%", sm: "500px" } }}
          >
            <Typography fontWeight="bold">SELECT PAYMENT</Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                width: { xs: "90%", sm: "100px" },
                marginRight: { xs: "0", sm: "auto", lg: "auto" },
              }}
              onClick={handleRazorpay}
            >
              Pay Now
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
