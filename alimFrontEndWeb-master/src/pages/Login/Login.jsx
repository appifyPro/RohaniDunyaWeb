import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import "./logregest.css";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { BURL } from "../../components/Utils";
import axios from "axios";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ErrorDialog from "../../components/smallComponents/ErrorDialog";
import SuccessDialog from "../../components/smallComponents/SucessDialog";
export default function Login() {
  const Navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("admin");
    // console.log(auth);
    if (auth) {
      Navigate("/admindashboard");
    }
  }, []);
  const [loginData, SetLoginData] = useState({
    email: "",
    password: "",
  });
  const [successopen, setSuccessOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);

  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return regex.test(email);
  }
  const handleSubmit = async () => {
    if (!loginData.email || !validateEmail(loginData.email)) {
      setErrorMsg("Enter a Valid Gmail !");
      setOpen(true);
    } else if (!loginData.password) {
      setErrorMsg("Enter password!");
      setOpen(true);
    } else {
      try {
        const response = await axios.post(`${BURL}/adminLogin`, loginData);
        // console.log(response);
        // console.log(response?.data?.data?.token);
        // console.log(response?.data.message);
        // Store the token in local storage or other state management mechanism
        localStorage.setItem("admin", `${response?.data?.data?.token}`);
        // Redirect or navigate to the desired page
        setSuccessMsg("Login Successfuly");
        setSuccessOpen(true);

        SetLoginData({
          email: "",
          password: "",
        });
        setTimeout(() => {
          Navigate("/admindashboard");
        }, 3000);
      } catch (err) {
        console.log(err);
        console.log("error", err.response?.data?.message);
        setErrorMsg(err.response?.data?.message);
        setOpen(true);
      }

      // console.log(loginData);
    }
  };
  const handleClose = () => {
    setOpen(false);
    setSuccessOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Box height="100vh" sx={{ backgroundColor: "white" }}>
      <Grid container sx={{ backgroundColor: "white" }}>
        <Grid
          item
          mt={10}
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box sx={{ width: { xs: "100%", md: "70%" } }}>
            <Box
              pb={2}
              height={100}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <img src="/logo.webp" alt="logo" height="auto" width="100" />
            </Box>
            <Typography
              mb={4}
              variant="h5"
              sx={{ textAlign: "center", fontFamily: "Roboto Slab" }}
            >
              Login Form
            </Typography>
            <Box ml={4} component="form">
              <Typography
                variant="body1"
                sx={{ marginTop: "20px", fontFamily: "Roboto Slab" }}
              >
                Enter your Email Address:
              </Typography>
              <TextField
                InputProps={{
                  sx: {
                    borderRadius: "12px",
                  },
                }}
                label="Email"
                sx={{ marginTop: "10px", width: "90%" }}
                value={loginData.email}
                onChange={(e) =>
                  SetLoginData({ ...loginData, email: e.target.value })
                }
              />
              <Typography
                variant="body1"
                sx={{ marginTop: "20px", fontFamily: "Roboto Slab" }}
              >
                Enter your Password:
              </Typography>
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  sx: {
                    borderRadius: "12px",
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ marginTop: "10px", width: "90%" }}
                value={loginData.password}
                onChange={(e) =>
                  SetLoginData({ ...loginData, password: e.target.value })
                }
              />

              <Button
                sx={{ marginTop: "40px", borderRadius: "8px", width: "90%" }}
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          mt={7}
          xs={12}
          md={6}
          sx={{
            display: { xs: "none", md: "block" },
            backgroundColor: "#f3e5f5",
          }}
        >
          {/* <Box
            p={6}
            sx={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",

              alignItems: "center",
              //   background: `#f3e5f5 url(/bg1.jpg) no-repeat top / 800px`,
            }}
          > */}
          <Box
            component="img"
            alt="background image"
            src="/bg1.jpg"
            height="100vh"
            width={800}
          />
          {/* </Box> */}
        </Grid>
      </Grid>
      <ErrorDialog open={open} onClose={handleClose} errorMsg={errorMsg} />
      <SuccessDialog
        open={successopen}
        onClose={handleClose}
        successMsg={successMsg}
      />
    </Box>
  );
}
