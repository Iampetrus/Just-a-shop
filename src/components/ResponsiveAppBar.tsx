import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const pages = ["Home", "Products", "About"];
const settings = ["Sign in or Register"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#ffffff", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Box sx={{ borderBottom: "1px solid #000000", padding: "0 20px" }}>
          <Toolbar disableGutters sx={{ padding: "30px" }}>
            <Button
              onClick={() => navigate("/empty")}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                textTransform: "none",
                padding: "0",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "#000000",
                  padding: "0 30px 0 0",
                }}
              >
                NAME
              </Typography>
            </Button>

            {/* Menú de navegación para pantallas pequeñas */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{ color: "#000000" }}
              >
                <MenuIcon sx={{ fontSize: "2rem" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => { navigate(`/${page}`); handleCloseNavMenu(); }}>
                    <Typography textAlign="center" sx={{ color: "#000000" }}>
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* LOGO pantallas pequeñas */}
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#000000",
              }}
            >
              LOGO
            </Typography>

            {/* Botones de navegación para pantallas grandes */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => navigate(`/${page}`)}
                  sx={{
                    my: 2,
                    color: "#000000",
                    display: "block",
                    padding: "10px 20px",
                    margin: "0 5px",
                    fontWeight: 500,
                    "&:hover": {
                      fontWeight: 700,
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            {/* Menú de usuario */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar sx={{ width: 45, height: 45 }}>
                    <AccountCircle sx={{ fontSize: 43 }} />
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => { handleCloseUserMenu(); navigate("/Sign-in-or-register"); }}
                    sx={{ padding: "8px 16px", fontSize: "0.75rem", fontWeight: "normal" }}
                  >
                    <Typography textAlign="center" sx={{ color: "#000000" }}>
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Box>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
