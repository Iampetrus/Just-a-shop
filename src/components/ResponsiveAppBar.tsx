// src/components/ResponsiveAppBar.tsx

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
import { ListItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

const pages = ["Home", "Products", "About"];
const settings = ["Sign in or Register"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        padding: "",
        backgroundColor: "#ffffff",
        boxShadow: "none",
      }}
    >
      {" "}
      {/* Aplicando padding al AppBar */}
      <Container maxWidth="xl">
        <Box
          sx={{
            borderBottom: "1px solid #000000", // Línea fina negra
            padding: "0 20px", // padding para la línea no llegue hasta los bordes
          }}
        >
          <Toolbar disableGutters sx={{ padding: "30px" }}>
            {" "}
            {/* Padding en el Toolbar */}
            <Button
              onClick={() => navigate("/empty")}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                textTransform: "none", // Para que el texto no se muestre en mayúsculas
                padding: "0", // Para eliminar el padding adicional del Button
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
                  color: "#000000", //  logo color
                  textDecoration: "none",
                  padding: "0 30px 0 0", // Padding en el logo
                  marginRight: "", // Margin a la derecha del logo
                }}
              >
                NAME
              </Typography>
            </Button>
            {/* menu navegacion pantalla peque */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{ padding: "", color: "#000000" }} // Padding en el IconButton
              >
                <MenuIcon sx={{ fontSize: "2rem" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" }, padding: "10px" }} // Padding en el menú
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ margin: "5px 0" }}
                  >
                    {" "}
                    {/* Margin en cada MenuItem */}
                    <Typography textAlign="center" sx={{ color: "#000000" }}>
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* Título para pantallas pequeñas */}
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
                color: "#000000", // Color del texto a negro
                textDecoration: "none",
                padding: "", // Padding en el logo
                marginRight: "", // Margin a la derecha del logo
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
                    color: "#000000", // Color del texto del botón a negro
                    display: "block",
                    padding: "10px 20px", // Padding en el botón
                    margin: "0 5px", // Margin en el botón
                    fontWeight: 500,
                    "&:hover": {
                      fontWeight: 700, // Cambia el fontWeight a 700 cuando se hace hover
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            {/* menu de usuario */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{
                    p: 0,
                    marginLeft: "",
                    "&:hover": {
                      backgroundColor: "#000000", // Color de fondo antes de hover
                    },
                  }}
                >
                  {" "}
                  {/* Margin a la izquierda */}
                  <Avatar
                    sx={{
                      width: 45,
                      height: 45,
                      "&:hover": {
                        backgroundColor: "#333333", // Color de fondo del avatar en hover
                      },
                    }}
                  >
                    {" "}
                    {/* Tamaño del Avatar */}
                    <AccountCircle sx={{ fontSize: 43 }} />{" "}
                    {/* Tamaño del ícono */}
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => {
                      handleCloseUserMenu();
                      navigate("/Sign-in-or-register"); // Navega a la ruta correspondiente
                    }}
                    sx={{
                      padding: "8px 16px",
                      fontSize: "0.75rem", // Ajustar el tamaño de la fuente
                      fontWeight: "normal",
                      minHeight: "auto",
                      lineHeight: "1.2",
                    }}
                  >
                    {" "}
                    {/* Margin en cada MenuItem */}
                    <Typography textAlign="center" sx={{ color: "#000000" }}>
                      {setting}
                    </Typography>{" "}
                    {/* Color del texto a negro  */}
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
