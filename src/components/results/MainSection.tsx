import { Box, Pagination } from "@mui/material";
import React from "react";
import CarGrid from "./CarGrid";
import FilterForm from "./FilterForm";


function MainSection() {

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: "100%",
        gap: 3,
      }}
    >
      <Box
        className="left"
        sx={{ flexGrow: 1 / 2, bgcolor: "red", height: "100%" }}
      >
        <FilterForm />
      </Box>
      <Box
        className="right"
        sx={{ flexGrow: 1 }}
      >
        <CarGrid />
        <Box sx={{ my: 2 }}>
          <Pagination
            count={5}
            variant="outlined"
            shape="rounded"
            color="secondary"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default MainSection;
