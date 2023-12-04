import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Snackbar,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BURL } from "../Utils";

const AdminServices = () => {
  const [services, setServices] = useState([]);
  const adminToken = localStorage.getItem("admin");
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    getServices();
    setRefresh(false);
  }, [refresh]);
  const getServices = async () => {
    try {
      const response = await axios.get(`${BURL}/services`, {
        headers: {
          Authorization: `${adminToken}`,
        },
      });
      console.log(response.data.data);
      setServices(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box>
      <Container maxWidth="lg">
        {services.map(({ image, heading1, heading2, paragraph }, i) => (
          <Grid
            container
            mt={10}
            sx={{
              borderRadius: "12px",
              backgroundColor: "#fff8e1",
              boxShadow: " 0px -1px 20px 8px rgba(6,145,78,0.75)",
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: "flex", justifyContent: "center" }}
              // mt={10}
            >
              {/* <Box
                sx={{
                  height: { xs: "auto", md: 600 },
                  width: { xs: "auto", md: 1100 },
                  maxHeight: 1800,
                  maxWidth: 1000,
                  borderRadius: "12px",
                  backgroundColor: "#fff8e1",
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  overflow: "hidden",
                }}
              > */}
              <Box
                width={{ xs: 340, md: 570 }}
                sx={{
                  overflow: "hidden",
                  height: "600",
                }}
              >
                <Box
                  component="img"
                  src={`${image}`}
                  alt="service"
                  height="100%"
                  width="100%"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  textAlign: "center",
                }}
              >
                <Typography
                  ml={{ xs: 1, md: 12 }}
                  mt={1}
                  variant="h4"
                  sx={{
                    fontFamily: "Mooli",
                    fontFamily: "bold",
                  }}
                >
                  {heading1}
                </Typography>
                <Typography
                  ml={{ xs: 1, md: 10 }}
                  mt={{ xs: 1, md: 5 }}
                  variant="h5"
                  sx={{
                    textAlign: "center",
                    fontFamily: "Mooli",
                    fontFamily: "bold",
                  }}
                >
                  {heading2}
                </Typography>
                <Typography
                  mt={{ xs: 2, md: 5 }}
                  variant="h6"
                  sx={{
                    textAlign: "center",
                    fontFamily: "Mooli",
                    fontFamily: "bold",
                  }}
                >
                  {paragraph}
                </Typography>
                <Typography
                  variant="h6"
                  ml={{ xs: 1, md: 10 }}
                  mt={{ xs: 1, md: 5 }}
                  sx={{
                    textAlign: "center",
                    fontFamily: "Mooli",
                    fontFamily: "bold",
                  }}
                >
                  03277906144
                </Typography>
                <Typography
                  ml={{ xs: 1, md: 10 }}
                  variant="h6"
                  sx={{
                    textAlign: "center",
                    fontFamily: "Mooli",
                    fontFamily: "bold",
                  }}
                >
                  03404252585
                </Typography>
                <Typography
                  ml={{ xs: 1, md: 10 }}
                  variant="h6"
                  sx={{
                    textAlign: "center",
                    fontFamily: "Mooli",
                    fontFamily: "bold",
                  }}
                >
                  03116416137
                </Typography>
                <Box
                  ml={{ xs: 1, md: 10 }}
                  mt={3}
                  mb={2}
                  sx={{ textAlign: "center" }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: "8px",
                      backgroundColor: "#1b5e20",
                      padding: "10px",
                      "&:hover": {
                        backgroundColor: "#1b5e20",
                      },
                    }}
                    href="https://api.whatsapp.com/send?phone=923277906133"
                  >
                    Contact Us
                  </Button>
                </Box>
              </Box>
              {/* </Box> */}
            </Grid>
          </Grid>
        ))}
      </Container>
    </Box>
  );
};

export default AdminServices;
