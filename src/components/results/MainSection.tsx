import { Box } from "@mui/material";
import React from "react";

function MainSection() {
  return (
    <Box sx={{ display: "flex", width: "100%", gap: 3 }}>
      <Box
        className="left"
        sx={{ flexGrow: 1 / 5, bgcolor: "red" }}
      >
        Left
      </Box>
      <Box
        className="right"
        sx={{ flexGrow: 1, bgcolor: "blue" }}
      >
        Right
      </Box>
    </Box>
  );
}

export default MainSection;
