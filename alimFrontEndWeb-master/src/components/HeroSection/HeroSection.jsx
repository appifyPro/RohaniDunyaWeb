import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Box, Button, Typography } from "@mui/material";
const HeroSection = () => {
  return (
    <Box>
      <Swiper
        cssMode={true}
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
        <SwiperSlide>
          <img src="imag4.avif" height="600px" width="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="image5.jpg" height="600px" width="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="new2.jpg" height="600px" width="100%" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="image6.jpeg" height="1100px" width="100%" />
        </SwiperSlide> */}
      </Swiper>
      <Box
        pt={{ xs: 10, md: 20 }}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          zIndex: "1000",
          transform: "translate(-50%, -50%)",
          color: "white",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#a5d6a7",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: { xs: "30px", md: "50px" },
          }}
        >
          Welcome to Istikhara center
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "#121212",
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "Rubik",
            fontSize: { xs: "25px", md: "40px" },
          }}
        >
          بِسْمِ اللّٰهِِ الرَّحْمَنِ الرَّحِيْم
        </Typography>
        <Typography
          mt={3}
          variant="h5"
          sx={{
            color: "#121212",
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "Rubik",
            fontSize: { xs: "30px", md: "40px" },
          }}
        >
          عامل قاسم علی شاہ
        </Typography>
        {/* <Typography
          mt={3}
          variant="h5"
          sx={{
            fontWeight: "bold",
            fontFamily: "Rubik",
            textAlign: "right",
            fontSize: { xs: "20px", md: "30px" },
          }}
        >
          اسلام علیکم آپ کا کیا مسلہ ہے ہر قسم کے مسائل کا حل کرواۓاپنی مرضی سے
          مثال کے طور پر
        </Typography> */}
        {/* <Typography
          mt={1}
          variant="h5"
          sx={{
            fontWeight: "bold",
            fontFamily: "Rubik",
            textAlign: "right",
            fontSize: { xs: "20px", md: "26px" },
          }}
        >
          (پسند کی شادی)(طلاق کا مسلہ) (کالے جادو کا توڑ)(محبوب کو تابع کرنا)
        </Typography> */}
        {/* <Typography
          mt={1}
          variant="h5"
          sx={{
            fontWeight: "bold",
            fontFamily: "Rubik",
            textAlign: "right",
            fontSize: { xs: "20px", md: "26px" },
          }}
        >
          (اپنا نام اور اپنی والدہ کانام بتاۓ اوراپنا ہر مسئلہ حل کرواۓ)
        </Typography> */}
        <Typography
          variant="h5"
          mt={3}
          sx={{
            fontWeight: "bold",
            fontFamily: "Rubik",
            textAlign: "center",
            fontSize: { xs: "20px", md: "20px" },
          }}
        >
          03404252585
        </Typography>
        <Typography
          variant="h5"
          mt={1}
          sx={{
            fontWeight: "bold",
            fontFamily: "Rubik",
            textAlign: "center",
            fontSize: { xs: "20px", md: "20px" },
          }}
        >
          03277906144
        </Typography>
        <Box mt={3} sx={{ textAlign: "center" }}>
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
  );
};

export default HeroSection;
