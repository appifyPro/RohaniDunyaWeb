import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import Dashboard from "./Dashboard";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import CreateAdmin from "./CreateAdmin";
import CreateServices from "./CreateServices";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

export default function AdminDashboard() {
  const tokenExpirationTime = 60 * 60 * 1000;
  const Navigate = useNavigate();

  const checkLogin = () => {
    const token = localStorage.getItem("admin");
    if (!token) {
      Navigate("/adminlogin");
    } else {
      setTimeout(() => {
        localStorage.removeItem("admin");
      }, tokenExpirationTime);
    }
  };
  React.useEffect(() => {
    checkLogin();
  }, []);

  const Logout = () => {
    localStorage.removeItem("admin");
    Navigate("/");
  };

  const drawerButton = [
    {
      name: "Dashboard",
      icon: <DashboardIcon />,
    },
    {
      name: "Create Admin",
      icon: <AddCircleOutlineIcon />,
    },
    {
      name: "Create Services",
      icon: <ModeEditOutlineIcon />,
    },
    {
      name: "Logout",
      icon: <LogoutIcon />,
      action: Logout,
    },
  ];

  const [drawerOpen, setDrawerOpen] = React.useState(false); // Initialize as closed
  const [selectedPage, setSelectedPage] = React.useState("Dashboard"); // Initial selected page

  const selectedPageComponent = {
    Dashboard: <Dashboard />,
    "Create Admin": <CreateAdmin />,
    "Create Services": <CreateServices />,
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar sx={{ backgroundColor: "#0091ea" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{ ml: 1, display: { sm: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              // display: "none",
              flex: { xs: 1, md: 2 },
              textAlign: "center",
            }}
          >
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary" // Temporary drawer for mobile view
        open={drawerOpen}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#0091ea",
          },
          display: { xs: "block", md: "none" }, // Show in mobile view, hide in desktop
        }}
      >
        <Toolbar />
        <Box height="100%" sx={{ overflow: "auto", color: "white" }}>
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            {drawerButton.map(({ name, icon, action }, index) => (
              <Box key={index} mb={index === 4 ? 8 : 2}>
                <ListItem>
                  <ListItemButton
                    onClick={action || (() => setSelectedPage(name))}
                    sx={{
                      padding: "12px",
                    }}
                  >
                    <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
                    <ListItemText primary={name} />
                  </ListItemButton>
                </ListItem>
              </Box>
            ))}
          </List>
        </Box>
      </Drawer>
      <Drawer
        variant="permanent" // Permanent drawer for desktop view
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#0091ea",
          },
          display: { xs: "none", md: "block" }, // Show in desktop view, hide in mobile
        }}
      >
        <Toolbar />
        <Box height="100%" sx={{ overflow: "auto", color: "white" }}>
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            {drawerButton.map(({ name, icon, action }, index) => (
              <Box key={index} mb={index === 4 ? 8 : 2}>
                <ListItem>
                  <ListItemButton
                    onClick={action || (() => setSelectedPage(name))}
                  >
                    <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
                    <ListItemText primary={name} />
                  </ListItemButton>
                </ListItem>
              </Box>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          minHeight: "100vh",
          flexGrow: 1,
          overflowX: "auto",
          overflowY: "auto",
          backgroundColor: "white",
        }}
      >
        <Toolbar />
        {selectedPageComponent[selectedPage]}
      </Box>
    </Box>
  );
}
