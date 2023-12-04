import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BURL } from "../../components/Utils";

const CreateAdmin = () => {
  const [admin, setAdmin] = useState([]);
  const [open, setOpen] = useState(false);
  const [successopen, setSuccessOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [SuccessMessage, setSuccessMessage] = useState("");
  const [newadmin, setNewAdmin] = useState({
    name: "",
    email: "",
    password: "",
  });
  const adminToken = localStorage.getItem("admin");
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    getAdmins();
    setRefresh(false);
  }, [refresh]);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const getAdmins = async () => {
    try {
      const response = await axios.get(`${BURL}/admin`, {
        headers: {
          Authorization: `${adminToken}`,
        },
      });
      // console.log(response.data.data);
      setAdmin(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteAdminHandler = async (id) => {
    console.log("delete", id);
    try {
      const response = await axios.delete(`${BURL}/admin/${id}`, {
        headers: {
          Authorization: `${adminToken}`,
        },
      });
      setSuccessMessage("Admin Deleted Successfully!");
      setSuccessOpen(true);
      setTimeout(() => {
        setSuccessOpen(false);
      }, 3000);

      setRefresh(true);
    } catch (err) {
      console.log(err);
      setErrorMessage("Deletion Failed");
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    }
  };
  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return regex.test(email);
  }
  const newAdminHandler = async () => {
    if (!newadmin.name) {
      setErrorMessage("Please Enter Name");
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    } else if (!newadmin.email || !validateEmail(newadmin.email)) {
      setErrorMessage("Please Enter Valid Email");
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    } else if (!newadmin.password) {
      setErrorMessage("Please Enter Password");
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    } else {
      console.log(newadmin);
      try {
        const response = await axios.post(`${BURL}/admin`, newadmin, {
          headers: {
            Authorization: `${adminToken}`,
          },
        });
        setSuccessMessage("Admin Added Successfully!");
        setSuccessOpen(true);
        setTimeout(() => {
          setSuccessOpen(false);
        }, 3000);
        setNewAdmin({
          name: "",
          email: "",
          password: "",
        });

        setRefresh(true);
      } catch (err) {
        console.log(err);
        setErrorMessage("Adding Failed");
        setOpen(true);
        setTimeout(() => {
          setOpen(false);
        }, 3000);
      }
    }
  };
  return (
    <Box
      width="100%"
      sx={{
        paddingLeft: { xs: "2px", md: "29px" },
        backgroundColor: "#e0f2f1",
        // height: 100000,
        borderRadius: "8px",
        padding: "16px",
      }}
    >
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "roboto",
                marginBottom: "16px",
                fontWeight: "bolder",
              }}
            >
              Create Admin
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box component="form">
              <Typography
                variant="body1"
                sx={{ marginTop: "20px", fontFamily: "Roboto Slab" }}
              >
                Enter admin Name:
              </Typography>
              <TextField
                InputProps={{
                  sx: {
                    borderRadius: "12px",
                  },
                }}
                label="Admin Name"
                sx={{ marginTop: "10px", width: "90%" }}
                value={newadmin.name}
                onChange={(e) =>
                  setNewAdmin({
                    ...newadmin,
                    name: e.target.value,
                  })
                }
              />
              <Typography
                variant="body1"
                sx={{ marginTop: "20px", fontFamily: "Roboto Slab" }}
              >
                Enter your Admin Email:
              </Typography>
              <TextField
                label="Email"
                type="text"
                rows={1}
                InputProps={{
                  sx: {
                    borderRadius: "12px",
                  },
                }}
                sx={{ marginTop: "10px", width: "90%" }}
                value={newadmin.email}
                onChange={(e) =>
                  setNewAdmin({
                    ...newadmin,
                    email: e.target.value,
                  })
                }
              />
              <Typography
                variant="body1"
                sx={{ marginTop: "20px", fontFamily: "Roboto Slab" }}
              >
                Enter your Admin Password:
              </Typography>
              <TextField
                label="Password"
                type="text"
                rows={1}
                InputProps={{
                  sx: {
                    borderRadius: "12px",
                  },
                }}
                sx={{ marginTop: "10px", width: "90%" }}
                value={newadmin.password}
                onChange={(e) =>
                  setNewAdmin({
                    ...newadmin,
                    password: e.target.value,
                  })
                }
              />
              <Button
                size="small"
                variant="contained"
                sx={{
                  // margin: "12px",
                  marginTop: "12px",
                  backgroundColor: "green",
                  width: "90%",
                  "&:hover": {
                    backgroundColor: "green",
                    boxShadow: "none",
                  },
                }}
                onClick={newAdminHandler}
              >
                Add Admin
              </Button>
            </Box>
          </Grid>
          <Grid mt={10} item xs={12} sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "roboto",
                marginBottom: "16px",
                fontWeight: "bolder",
              }}
            >
              Added Admins
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {admin.map(({ _id, name, email }, item) => (
                    <TableRow
                      key={item}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell align="center">{name}</TableCell>
                      <TableCell align="center">{email}</TableCell>
                      <TableCell align="center">
                        {" "}
                        <Box sx={{ display: item === 0 ? "none" : "block" }}>
                          <Button
                            size="small"
                            variant="contained"
                            sx={{
                              margin: "12px",
                              backgroundColor: "red",
                              "&:hover": {
                                backgroundColor: "red",
                                boxShadow: "none",
                              },
                            }}
                            onClick={() => deleteAdminHandler(_id)}
                          >
                            Delete
                          </Button>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
      <Snackbar open={open} autoHideDuration={500} onClose={handleClose}>
        <Alert severity="error">{errorMessage}</Alert>
      </Snackbar>
      <Snackbar open={successopen} autoHideDuration={500}>
        <Alert severity="success">{SuccessMessage}</Alert>
      </Snackbar>
    </Box>
  );
};

export default CreateAdmin;
