import { Container } from "@mui/material";
import React from "react";
import MainSection from "./MainSection";
import Models from "./Models";
import ResultsHeader from "./ResultsHeader";

function Results() {
  return (
    <Container
      sx={{
        bgcolor: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Models />
      <ResultsHeader />
      {/* <MainSection isGridView={true} /> */}
    </Container>
  );
}

export default Results;
