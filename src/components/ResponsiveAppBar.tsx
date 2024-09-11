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

// Este es el nuevo array que contiene las opciones del submenú de Products
const commonSubmenu = ["A", "B", "C", "D", "E"];
const pages = ["Home", "Products", "About"];
const settings = ["Sign in or Register"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  // Nuevo estado para manejar el submenú de Products, Home, About
  const [anchorElProduct, setAnchorElProduct] =
    React.useState<null | HTMLElement>(null);
  const [anchorElHome, setAnchorElHome] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElAbout, setAnchorElAbout] = React.useState<null | HTMLElement>(
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

  // Funciones para abrir/cerrar submenús
  const handleOpenProductMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElProduct(event.currentTarget);
  };
  const handleCloseProductMenu = () => {
    setAnchorElProduct(null);
  };
  const handleOpenHomeMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElHome(event.currentTarget);
  };
  const handleCloseHomeMenu = () => {
    setAnchorElHome(null);
  };

  const handleOpenAboutMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElAbout(event.currentTarget);
  };
  const handleCloseAboutMenu = () => {
    setAnchorElAbout(null);
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
              {/* ---------------------------------------------- LOGO pantallas grandes */}
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

            {/* ---------------------------------------------- Menú de navegación para pantallas pequeñas */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{ color: "#000000" }}
              >
                {/* ---------------------------------------------- Hamburguesa */}
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
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) =>
                  page === "Products" ? (
                    <Box key={page}>
                      <MenuItem
                        onClick={handleOpenProductMenu}
                        sx={{ color: "#000000" }}
                      >
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                      {/* Submenú de Products */}
                      <Menu
                        id="product-submenu-mobile"
                        anchorEl={anchorElProduct}
                        open={Boolean(anchorElProduct)}
                        onClose={handleCloseProductMenu}
                      >
                        {commonSubmenu.map((submenuItem) => (
                          <MenuItem
                            key={submenuItem}
                            onClick={() => {
                              handleCloseProductMenu();
                              navigate(`/Products/${submenuItem}`);
                            }}
                          >
                            <Typography sx={{ color: "#000000" }}>
                              {submenuItem}
                            </Typography>
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  ) : (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center" sx={{ color: "#000000" }}>
                        {page}
                      </Typography>
                    </MenuItem>
                  )
                )}
              </Menu>
            </Box>

            {/* ---------------------------------------------- LOGO pantallas pequeñas */}
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

            {/* ---------------------------------------------- Botones de navegación para pantallas grandes */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => {
                if (
                  page === "Products" ||
                  page === "Home" ||
                  page === "About"
                ) {
                  const openMenuHandler =
                    page === "Products"
                      ? handleOpenProductMenu
                      : page === "Home"
                      ? handleOpenHomeMenu
                      : handleOpenAboutMenu;

                  const anchorEl =
                    page === "Products"
                      ? anchorElProduct
                      : page === "Home"
                      ? anchorElHome
                      : anchorElAbout;

                  const handleCloseMenu =
                    page === "Products"
                      ? handleCloseProductMenu
                      : page === "Home"
                      ? handleCloseHomeMenu
                      : handleCloseAboutMenu;

                  const submenuId =
                    page === "Products"
                      ? "product-submenu"
                      : page === "Home"
                      ? "home-submenu"
                      : "about-submenu";

                  return (
                    <Box key={page}>
                      <Button
                        onClick={openMenuHandler}
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
                      <Menu
                        id={submenuId}
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleCloseMenu}
                      >
                        {commonSubmenu.map((submenuItem) => (
                          <MenuItem
                            key={submenuItem}
                            onClick={() => {
                              handleCloseMenu();
                              navigate(`/${page}/${submenuItem}`);
                            }}
                          >
                            <Typography sx={{ color: "#000000" }}>
                              {submenuItem}
                            </Typography>
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  );
                } else {
                  return (
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
                  );
                }
              })}
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
              {/* desplegable usuario login*/}
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
                      navigate("/Sign-in-or-register");
                    }}
                    sx={{
                      padding: "8px 16px",
                      fontSize: "0.75rem",
                      fontWeight: "normal",
                    }}
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
