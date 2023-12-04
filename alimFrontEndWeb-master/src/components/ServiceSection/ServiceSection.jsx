import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
const ServiceSection = () => {
  return (
    <Box mt={10}>
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          sx={{ textAlign: "center", fontFamily: "Mooli", fontFamily: "bold" }}
          pb={5}
        >
          Services
        </Typography>
        <Grid container>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Box width={{ xs: 360, sm: 600, md: 1000 }}>
              <Swiper
                cssMode={true}
                navigation={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  type: "bullets",
                }}
                modules={[Autoplay, Navigation, Pagination]}
                className="mySwiper"
              >
                {[
                  "/services/n1.jpg",
                  "/services/n2.jpg",
                  "/services/n3.jpg",
                  // "/services/s4.jpg",
                  // "/services/s5.jpg",
                  // "/services/s6.jpg",
                  // "/services/s7.jpg",
                  // "/services/s8.jpg",
                  // "/services/s9.jpg",
                  // "/services/s10.jpg",
                ].map((item, index) => (
                  <SwiperSlide key={index}>
                    <img src={item} height="auto" width="100%" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ServiceSection;
