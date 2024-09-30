import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import CommonInput from "../../components/Common/TextField";
import FetchData from "../../services/employer/fetchToken";

export default function PaymentCard() {
  const [count, setCount] = useState("");
  const [price, setPrice] = useState(0); // Add state for price
  const [fetchPrice, setFetchPrice] = useState([]);

  console.log("fetchPrice", fetchPrice);

  const fetch = async () => {
    try {
      const response = await FetchData();
      setFetchPrice(response.data[0].price);
      console.log("Fetched price:", response.data[0].price);
    } catch (error) {
      console.error("Error fetching data:", error);

      setFetchPrice(0);
    }
  };

  useEffect(() => {
    fetch();

    setPrice(count * fetchPrice);
  }, [count, fetchPrice]);

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
          <Typography fontWeight="bold">Select Your Token Count </Typography>

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
              onChange={(e) => setPrice(e.target.value)} // Update price state
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
                marginRight: { xs: "0", sm: "auto",lg:"auto" },
              }}
            >
              Pay Now
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
