import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import WazifaCard from "../WazifaCard/WazifaCard";

const MarriageWazifa = () => {
  const wazifaData = [
    "پسند کی جگہ شادی کا وظیفہ",
    "ہر مشکل کے لئے وظیفہ",
    "شادی کے لئے کسی کو راضی کرنے کا وظیفہ",
    "شادی میں مسائل کا حل کرنے کا وظیفہ",
    " نیک رشتے کے لئے وظیفہ",
    "دینی اصولوں کے مطابق دولت حاصل کرنے کا اسلامی وظیفہ",
    // "pasand shadi ka wazifa",
    // "Wazifa for every problem",
    // "Wazifa for good rishta in this case Islamic marriage dua in English",
    // "Wealth wazifa",
    // "Wazifa For Marriage again dua for solving problems in marriage like dua wazaif",
    // "kisi ko shadi k liye razi karne ka wazifa",
    // "Wazifa for bandish",
    // "Wazifa for people living out of country.",
    // "And Many More",
  ];
  return (
    <Box>
      <Container maxWidth="xl">
        <Grid
          container
          mt={10}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                fontFamily: "Mooli",
                fontFamily: "bold",
              }}
              pb={5}
            >
              Wazifa
            </Typography>
          </Grid>
          {wazifaData.map((item, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box mt={5}>
                <WazifaCard data={item} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MarriageWazifa;
