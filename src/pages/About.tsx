// src/pages/Home.tsx
import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";

function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h2" gutterBottom>
        This is about this website
      </Typography>
      <Typography variant="body1">
        Another fully functional About page, created with Material UI.
      </Typography>
    </Container>
  );
}

export default Home;
