import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Grid,
  Paper,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { login, sendOtp, submitOtp } from "../../services/user";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'; 
import { setUser } from '../../redux/userSlice';



const LoginPage = () => {
  const dispatch = useDispatch(); 

  const [isOtpLogin, setIsOtpLogin] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      if (isOtpLogin) {
        if (!isOtpSent) {
          const response = await sendOtp(data);
          console.log("OTP Sent response:", response);
          if (response.status === 200) {
            setIsOtpSent(true);
          } else {
            toast.error('Failed to send OTP!');
          }
        } else {
          const response = await submitOtp(data);
          if (response.status === 200) {
            dispatch(setUser(response.data.user));
            console.log("OTP Validation successful:", response);
            navigate("/"); 
          } else {
            toast.error('OTP Validation failed!');
          }
        }
      } else {
        const response = await login(data);
        console.log(response);
        if (response.data.message === "Login successful") {
          dispatch(setUser(response.data.user));
          navigate("/");
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error('Login failed!');
    }
  };

  const signup = () => {
    navigate("/signup");
  };

  return (
    <Container className="mt-10" maxWidth="xs">
      <ToastContainer position="top-right" />

      <Paper elevation={3} sx={{ padding: 3 }}>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            {isOtpLogin ? "OTP Login" : "Login"}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 1 }}
          >
            {isOtpLogin ? (
              <>
                {!isOtpSent && (
                  <TextField
                    margin="normal"
                    fullWidth
                    id="phone"
                    label="Phone Number"
                    name="phone"
                    autoComplete="phone"
                    autoFocus
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Enter a valid 10-digit phone number",
                      },
                    })}
                    error={!!errors.phone}
                    helperText={errors.phone ? errors.phone.message : ""}
                  />
                )}
                {isOtpSent && (
                  <TextField
                    margin="normal"
                    fullWidth
                    id="otp"
                    label="Enter OTP"
                    name="otp"
                    autoComplete="otp"
                    autoFocus
                    {...register("otp", {
                      required: "OTP is required",
                      pattern: {
                        value: /^[0-9]{6}$/,
                        message: "Enter a valid 6-digit OTP",
                      },
                    })}
                    error={!!errors.otp}
                    helperText={errors.otp ? errors.otp.message : ""}
                  />
                )}
              </>
            ) : (
              <>
                <TextField
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : ""}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  })}
                  error={!!errors.password}
                  helperText={errors.password ? errors.password.message : ""}
                />
              </>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {isOtpLogin ? (isOtpSent ? "Submit OTP" : "Send OTP") : "Login"}
            </Button>
            <Grid container>
              <Grid item xs>
                {!isOtpLogin && (
                  <Button variant="text" size="small" onClick={signup}>
                    Sign Up
                  </Button>
                )}
              </Grid>
              <Grid item>
                <Button
                  variant="text"
                  size="small"
                  onClick={() => {
                    setIsOtpLogin(!isOtpLogin);
                    setIsOtpSent(false);
                    reset();
                  }}
                >
                  {isOtpLogin ? "Back to Login" : "Login with OTP"}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginPage;
