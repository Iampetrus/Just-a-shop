import { createBrowserRouter } from "react-router-dom";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Login from "../components/LoginRegister";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";

const r = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ResponsiveAppBar />
        Hola
      </>
    ),
  },
  {
    path: "/Home",
    element: (
      <>
        <ResponsiveAppBar />
        <Home /> 
      </>
    ),
  },
  {
    path: "/Products",
    element: (
      <>
        <ResponsiveAppBar />
        <Products />
      </>
    ),
  },
  {
    path: "/About",
    element: (
      <>
        <ResponsiveAppBar />
        <About />
      </>
    ),
  },
  {
    path: "/Sign-in-or-register",
    element: (
      <>
        <ResponsiveAppBar />
        <Login />
        
      </>
    ),
  },
  {
    path: "/empty",
    element: (
      <>
        <ResponsiveAppBar />
        {/* Nada en el cuerpo */}
        
      </>
    ),
  },
]);
export default r;




