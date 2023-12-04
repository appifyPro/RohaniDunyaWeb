import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Link } from "react-router-dom";
const Footer = () => {
  const contact = [
    {
      // icon: LocalPhoneIcon,
      title: "Phone",
      content: "03277906144",
    },
    {
      // icon: LocalPhoneIcon,
      title: "Phone",
      content: "03116416137",
    },
    {
      // icon: LocalPhoneIcon,
      title: "Wattsapp Number",
      content: "03277906133",
    },
  ];
  const siteData = [
    {
      name: "home",
    },
    {
      name: "Services",
    },
    {
      name: "Admin",
    },
  ];
  const contactData = (
    <>
      <Button
        variant="text"
        size="small"
        href="https://www.facebook.com/profile.php?id=100093464557279"
        sx={{ color: "#616161" }}
      >
        <FacebookIcon />
      </Button>
      <Button
        variant="text"
        size="small"
        href="https://api.whatsapp.com/send?phone=923277906133"
        sx={{ color: "#616161" }}
      >
        <WhatsAppIcon />
      </Button>
      <Button
        variant="text"
        size="small"
        href="https://www.youtube.com/@RohaniDuniya7861"
        sx={{ color: "#616161" }}
      >
        <YouTubeIcon />
      </Button>
    </>
  );
  return (
    <Box mt={15} sx={{ backgroundColor: "#121212" }}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Box>
              <img src="/logo.webp" alt="logo" hight={70} width={70} />
            </Box>
            <Box>
              <Typography
                mt={3}
                ml={1}
                variant="h4"
                sx={{
                  color: "#FFFFFF",
                  fontFamily: "Urbanist",
                  fontWeight: 700,
                }}
              >
                Ilmi Duniya
              </Typography>
              <Typography
                mt={3}
                ml={1}
                variant="h6"
                sx={{
                  color: "#FFFFFF",
                  fontFamily: "Urbanist",
                  fontWeight: 700,
                }}
              >
                عامل قاسم علی شاہ
              </Typography>
              <Typography
                mt={3}
                variant="body1"
                sx={{
                  color: "var(--text-text-light, #8393AF)",
                  fontFamily: "Urbanist",
                  fontWeight: 700,
                }}
              >
                If u have any Question Contact Us .
              </Typography>
              <Box mt={6}>{contactData}</Box>
            </Box>
          </Grid>
          <Grid mt={5} item xs={12} md={4}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="h6"
                sx={{
                  color: "#FFFFFF",
                  fontFamily: "Urbanist",
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                Links
              </Typography>
              {siteData.map(({ name }, i) => (
                <Button
                  key={i}
                  variant="secondary"
                  sx={{
                    color: "#8393AF",
                    fontFamily: "Urbanist",
                    fontWeight: 700,
                    marginTop: "20px",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  {i === 0 && (
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "#8393AF" }}
                    >
                      {name}
                    </Link>
                  )}
                  {i === 1 && (
                    <Link
                      to="/services"
                      style={{ textDecoration: "none", color: "#8393AF" }}
                    >
                      {name}
                    </Link>
                  )}
                  {/* {i === 2 && (
                    <Link
                      to="/admin"
                      style={{ textDecoration: "none", color: "#8393AF" }}
                    >
                      {name}
                    </Link>
                  )} */}
                </Button>
              ))}
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              textAlign: "left",
            }}
          >
            <Box mt={4}>
              <Typography
                mt={3}
                ml={1}
                variant="h6"
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  color: "var(--text-text-light, #8393AF)",
                  fontFamily: "Urbanist",
                  fontWeight: 700,
                }}
              >
                Contact Us At
              </Typography>
              {contact.map(({ icon, title, content }, i) => (
                <Box
                  key={i}
                  mt={3}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "880px",
                      background:
                        "var(--neutral-white-20, rgba(255, 255, 255, 0.20))",
                      padding: "12px",
                    }}
                    component="img"
                    alt="img"
                    src="/phone.svg"
                    height={24}
                    width={24}
                  />
                  <Stack direction="column">
                    <Typography
                      ml={2}
                      mt={1}
                      variant="body2"
                      sx={{
                        color: "var(--text-text-light, #8393AF)",
                        fontFamily: "Urbanist",
                        fontWeight: 700,
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      ml={2}
                      variant="body1"
                      sx={{
                        fontSize: "20px",
                        color: "var(--neutral-white, #FFF)",
                        fontFamily: "Urbanist",
                        fontWeight: 400,
                      }}
                    >
                      {content}
                    </Typography>
                  </Stack>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
