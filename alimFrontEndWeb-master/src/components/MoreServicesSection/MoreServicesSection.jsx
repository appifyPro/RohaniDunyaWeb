import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const MoreServicesSection = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container pt={10}>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                fontFamily: "Mooli",
                fontFamily: "bold",
              }}
            >
              More Services
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "center" }}
            mt={10}
          >
            <Box
              sx={{
                maxHeight: 1800,
                maxWidth: 1000,
                borderRadius: "12px",
                backgroundColor: "#fff8e1",
                // border: "2px solid green",
                boxShadow: " 0px -1px 20px 8px rgba(6,145,78,0.75)",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                overflow: "hidden",
              }}
            >
              <Box>
                <Box
                  component="img"
                  src="/services/change.jpg"
                  alt="service"
                  height={{ xs: 250, md: 600 }}
                  width={{ xs: "100%", md: 500 }}
                />
              </Box>
              <Box>
                <Typography
                  ml={10}
                  mt={2}
                  variant="h4"
                  sx={{
                    textAlign: "center",
                    fontFamily: "Mooli",
                    fontFamily: "bold",
                  }}
                >
                  عامل قاسم علی شاہ
                </Typography>
                <Typography
                  mt={{ xs: 1, md: 5 }}
                  variant="h6"
                  sx={{
                    textAlign: "center",
                    fontFamily: "Mooli",
                    fontFamily: "bold",
                  }}
                >
                  ہر قسم کا کام کرنے سے پہلے اپنا استخارہ کروائیں تاکہ اپ کے کام
                  میں بہتری پیدا ہو اپ کا چاہے کوئی بھی مسئلہ ہو ایک مرتبہ ہم سے
                  ضرور رابطہ کریں
                </Typography>
                <Typography
                  variant="h6"
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
                  variant="h6"
                  sx={{
                    textAlign: "center",
                    fontFamily: "Mooli",
                    fontFamily: "bold",
                  }}
                >
                  03116416137
                </Typography>
                <Box mt={3} mb={2} sx={{ textAlign: "center" }}>
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
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MoreServicesSection;
