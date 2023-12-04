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
  const [services, setServices] = useState([]);
  const [open, setOpen] = useState(false);
  const [successopen, setSuccessOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [SuccessMessage, setSuccessMessage] = useState("");
  const [newservice, setNewService] = useState({
    image: "",
    heading1: "",
    heading2: "",
    paragraph: "",
  });
  const adminToken = localStorage.getItem("admin");
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    getServices();
    setRefresh(false);
  }, [refresh]);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const getServices = async () => {
    try {
      const response = await axios.get(`${BURL}/services`, {
        headers: {
          Authorization: `${adminToken}`,
        },
      });
      // console.log(response.data.data);
      setServices(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];

    const allowedImageTypes = ["image/jpeg", "image/png", "image/gif"];

    if (selectedFile && allowedImageTypes.includes(selectedFile.type)) {
      // If it's a valid image file, update the state
      setNewService({
        ...newservice,
        image: selectedFile,
      });
      setErrorMessage("");
      setOpen(false);
    } else {
      setErrorMessage("Upload image file only (JPEG, PNG, GIF)!");
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);

      setServices({
        ...newservice,
        image: null,
      });
    }
  };

  const deleteServiceHandler = async (id) => {
    console.log("delete", id);
    try {
      const response = await axios.delete(`${BURL}/services/${id}`, {
        headers: {
          Authorization: `${adminToken}`,
        },
      });
      setSuccessMessage("Service Deleted Successfully!");
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
  const newServiceHandler = async () => {
    if (!newservice.heading1) {
      setErrorMessage("Please Enter first Heading");
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    } else if (!newservice.heading2) {
      setErrorMessage("Please Enter Second Heading");
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    } else if (!newservice.image) {
      setErrorMessage("Please Enter Image");
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    } else if (!newservice.paragraph) {
      setErrorMessage("Please Enter Paragraph");
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    } else {
      console.log(newservice);
      const formData = new FormData();
      formData.append("image", newservice.image);
      formData.append("heading1", newservice.heading1);
      formData.append("heading2", newservice.heading2);
      formData.append("paragraph", newservice.paragraph);
      try {
        const response = await axios.post(`${BURL}/services`, formData, {
          headers: {
            Authorization: `${adminToken}`,
          },
        });
        console.log(response);
        setSuccessMessage("Service Added Successfully!");
        setSuccessOpen(true);
        setTimeout(() => {
          setSuccessOpen(false);
        }, 3000);
        setNewService({
          image: "",
          heading1: "",
          heading2: "",
          paragraph: "",
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
              Create Services
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box component="form">
              <Typography
                variant="body1"
                sx={{ marginTop: "20px", fontFamily: "Roboto Slab" }}
              >
                Enter Services Heading1:
              </Typography>
              <TextField
                InputProps={{
                  sx: {
                    borderRadius: "12px",
                  },
                }}
                label="Heading1"
                sx={{ marginTop: "10px", width: "90%" }}
                value={newservice.heading1}
                onChange={(e) =>
                  setNewService({
                    ...newservice,
                    heading1: e.target.value,
                  })
                }
              />

              <Typography
                variant="body1"
                sx={{ marginTop: "20px", fontFamily: "Roboto Slab" }}
              >
                Enter a Picture:
              </Typography>
              <TextField
                type="file"
                size="small"
                sx={{ marginTop: "10px" }}
                onChange={handleImageChange}
              />
              {newservice.image && (
                <Typography>Uploaded image: {newservice.image.name}</Typography>
              )}
              <Typography
                variant="body1"
                sx={{ marginTop: "20px", fontFamily: "Roboto Slab" }}
              >
                Enter Services Heading2:
              </Typography>
              <TextField
                label="Heading"
                type="text"
                rows={1}
                InputProps={{
                  sx: {
                    borderRadius: "12px",
                  },
                }}
                sx={{ marginTop: "10px", width: "90%" }}
                value={newservice.heading2}
                onChange={(e) =>
                  setNewService({
                    ...newservice,
                    heading2: e.target.value,
                  })
                }
              />
              <Typography
                variant="body1"
                sx={{ marginTop: "20px", fontFamily: "Roboto Slab" }}
              >
                Enter your Paragraph:
              </Typography>
              <TextField
                label="Paragraph"
                type="text"
                multiline
                maxRows={20}
                InputProps={{
                  sx: {
                    borderRadius: "12px",
                  },
                }}
                sx={{ marginTop: "10px", width: "90%" }}
                value={newservice.paragraph}
                onChange={(e) =>
                  setNewService({
                    ...newservice,
                    paragraph: e.target.value,
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
                onClick={newServiceHandler}
              >
                Add Service
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
              Added Servces
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
                    <TableCell align="center">Heading1</TableCell>
                    <TableCell align="center">Heading2</TableCell>
                    <TableCell align="center">Paragraph</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {services.map(
                    ({ _id, heading1, heading2, paragraph }, item) => (
                      <TableRow
                        key={item}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="center">{heading1}</TableCell>
                        <TableCell align="center">{heading2}</TableCell>
                        <TableCell align="center">{paragraph}</TableCell>
                        <TableCell align="center">
                          {" "}
                          <Box sx={{ display: _id === 1 ? "none" : "block" }}>
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
                              onClick={() => deleteServiceHandler(_id)}
                            >
                              Delete
                            </Button>
                          </Box>
                        </TableCell>
                      </TableRow>
                    )
                  )}
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
