import { Box, Button } from "@mui/material";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const WattsappIcon = () => {
  return (
    <Box
      mb={5}
      sx={{ position: "fixed", bottom: "0%", right: "0%", zIndex: "10000" }}
    >
      <Button
        href="https://api.whatsapp.com/send?phone=923277906133"
        size="large"
        sx={{ color: "green" }}
      >
        <img src="/wattsapplogo.png" height="80px" width="80px" />
        {/* <WhatsAppIcon fontSize="150px" /> */}
      </Button>
    </Box>
  );
};

export default WattsappIcon;
