import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Quites = () => {
  return (
    <Box mt={10}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontFamily: "Mooli", fontFamily: "bold" }}
        pb={5}
      >
        Quites
      </Typography>
      <Container sx={{ backgroundColor: "#a5d6a7", borderRadius: "8px" }}>
        <Grid container pt={5} pb={4}>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              sx={{ textAlign: "center", fontSize: "70px", color: "white" }}
            >
              “
            </Typography>
            <Typography
              variant="h6"
              sx={{ textAlign: "center", fontFamily: "Rubik" }}
            >
              وہ عامل ہی کیا جو کسی کا کام نہ کر سکے ہم وہ عامل ہیں جو ہر کسی کا
              کام فری میں کرتے ہیں اگر اپ بھی اپنا کام کروانا چاہتے ہیں تو ایک
            </Typography>
            <Typography
              variant="h6"
              sx={{ textAlign: "center", fontFamily: "Rubik" }}
            >
              مرتبہ ہم سے رابطہ ضرور کریں ہم اپ کے مقدر بدل سکتے ہیں اور اپ کی
              زندگی میں خوشحالی لا سکتے ہیں سوچ یہ مت ابھی ہم سے رابطہ کریں اور
              اپنا کام 72 گھنٹوں کے اندر اندر کروائیں
            </Typography>
            <Typography
              mt={4}
              variant="h6"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                fontFamily: "Rubik",
              }}
            >
              عامل قاسم علی شاہ
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Quites;
