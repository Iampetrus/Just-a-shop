import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";

function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h2" gutterBottom>
        And this a Products Page </Typography>
      <Typography variant="body1">
        Another fully functional page created with Material UI, WTF
      </Typography>
    </Container>
  );
}

export default Home;