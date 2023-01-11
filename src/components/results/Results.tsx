import { Container } from "@mui/material";
import React from "react";
import MainSection from "./MainSection";
import Models from "./Models";

function Results() {
  return (
    <Container
      sx={{
        bgcolor: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        gap: 3
      }}
    >
      <Models />
      <MainSection />
    </Container>
  );
}

export default Results;
