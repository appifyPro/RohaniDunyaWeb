import { Box, Container, Typography } from "@mui/material";
import React from "react";

const WazifaCard = (props) => {
  return (
    <Box
      sx={{
        width: "300px",
        height: "130px",
        borderRadius: "12px",
        backgroundColor: "#a5d6a7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          fontFamily: "Roboto Condensed",
        }}
      >
        {props.data}
      </Typography>
    </Box>
  );
};

export default WazifaCard;
