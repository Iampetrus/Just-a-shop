// src/pages/Home.tsx
import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";

function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h2" gutterBottom>
        This is meant to be a Home Page, welcome </Typography>
      <Typography variant="body1">
        A demo of a fully functional home page created with Material UI, WTF
      </Typography>
    </Container>
  );
}

export default Home;
