import { Box } from "@mui/material";
import React from "react";
import CarGrid from "./CarGrid";
import FilterForm from "./FilterForm";

function MainSection() {
  return (
    <Box sx={{ display: "flex", width: "100%", gap: 3 }}>
      <Box
        className="left"
        sx={{ flexGrow: 1 / 2 }}
      >
        <FilterForm />
      </Box>
      <Box
        className="right"
        sx={{ flexGrow: 1 }}
      >
        <CarGrid />
      </Box>
    </Box>
  );
}

export default MainSection;
