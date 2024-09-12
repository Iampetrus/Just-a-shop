// src/pages/Home.tsx
import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import { useParams } from "react-router-dom"; // Importar useParams

function Home() {
  // Obtener el parámetro de la URL
  const { submenu } = useParams<{ submenu?: string }>();

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h2" gutterBottom>
        {submenu ? `Submenu: ${submenu}` : "This is meant to be a Home Page, welcome"}
      </Typography>
      <Typography variant="body1">
        {submenu
          ? `You selected the submenu: ${submenu}.`
          : "A demo of a fully functional home page created with Material UI, WTF"}
      </Typography>
      {/* Aquí podrías agregar más contenido específico para cada submenu */}
    </Container>
  );
}

export default Home;
