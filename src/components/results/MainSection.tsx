import { Box, Pagination } from "@mui/material";
import React from "react";
import CarGrid from "./CarGrid";
import CarsListView from "./CarsListView";
import FilterForm from "./FilterForm";

function MainSection({ isGridView }: { isGridView: Boolean }) {
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
        sx={{
          flexGrow: 1 / 2,
          height: "100%",
          position: {
            md: "sticky",
          },
          top: "-17rem",
        }}
      >
        <FilterForm />
      </Box>
      <Box className="right" sx={{ flexGrow: 1 }}>
        <Box>
          {isGridView ? (
            <CarGrid isGridView={isGridView} />
          ) : (
            <CarsListView isGridView={isGridView} />
          )}
        </Box>
        <Box sx={{ display: { lg: !isGridView ? "flex" : "none" } }}>
          <CarGrid isGridView={isGridView} />
        </Box>

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
