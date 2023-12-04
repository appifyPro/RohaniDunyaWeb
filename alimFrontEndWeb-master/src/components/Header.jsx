import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
const Header = (props) => {
  const { window } = props;
  const drawerWidth = 240;
  const navItems = ["Home", "Services", "Admin"];
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const contactData = (
    <>
      <Button
        variant="text"
        size="small"
        href="https://www.facebook.com/profile.php?id=100093464557279"
      >
        <FacebookIcon />
      </Button>
      <Button
        variant="text"
        size="small"
        href="https://api.whatsapp.com/send?phone=923277906133"
        sx={{ color: "green" }}
      >
        <WhatsAppIcon />
      </Button>
      <Button
        variant="text"
        size="small"
        href="https://www.youtube.com/@RohaniDuniya7861"
        sx={{ color: "red" }}
      >
        <YouTubeIcon />
      </Button>
    </>
  );

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        marginTop: "50px",
        justifyContent: "space-around",
      }}
    >
      {/* <Typography variant="h6" sx={{ my: 2 }}>
        Ruhani Duniya
      </Typography>
      <Divider /> */}
      <List>
        {navItems.map((item, i) => (
          <ListItem key={i}>
            <ListItemButton sx={{ textAlign: "center" }}>
              {i === 0 && (
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                  <ListItemText primary={item} />
                </Link>
              )}
              {i === 1 && (
                <Link
                  to="/services"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ListItemText primary={item} />
                </Link>
              )}
              {i === 2 && (
                <Link
                  to="/adminlogin"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ListItemText primary={item} />
                </Link>
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box mt={10}>{contactData}</Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <AppBar
        component="nav"
        sx={{
          boxShadow: "none",
          position: "static",
          backgroundColor: "#fff8e1",
        }}
      >
        <Toolbar sx={{ color: "black" }}>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "block", md: "none" },
            }}
          >
            <img src="/logo.webp" height={55} width={65} alt="Logo" />
            {/* <Typography variant="h6" component="div">
              Rohani Duniya
            </Typography> */}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              display: { sm: "block", md: "none" },
              color: "black",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <img src="/logo.webp" height={65} width={65} alt="Logo" />
            <Typography mt={2} variant="h6" component="div">
              Rohani Duniya
            </Typography>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "block" },
              flexGrow: 1,
            }}
          >
            {navItems.map((item, i) => (
              <Button key={i} sx={{ marginRight: "25px", color: "black" }}>
                {i === 0 && (
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {item}
                  </Link>
                )}
                {i === 1 && (
                  <Link
                    to="/services"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {item}
                  </Link>
                )}
                {i === 2 && (
                  <Link
                    to="/adminlogin"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {item}
                  </Link>
                )}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>{contactData}</Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#fff8e1",
            },
          }}
        >
          <Box>
            <IconButton
              sx={{
                display: "inline",
                float: "right",
              }}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <CloseIcon sx={{ color: "black" }} />
            </IconButton>
          </Box>
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Header;
