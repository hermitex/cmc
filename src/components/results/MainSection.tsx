import { Box, Pagination } from "@mui/material";
import React from "react";
import CarGrid from "./CarGrid";
import CarsListView from "./CarsListView";
import FilterForm from "./FilterForm";

function MainSection({ isGridView }: { isGridView: Boolean }) {
  const [carPrice, setCarPrice] = React.useState<[0, 0]|null>(null)
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: "100%",
        gap: isGridView ? 3 : 0,
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
        <FilterForm getPrice={setCarPrice}/>
      </Box>
      <Box className="right" sx={{ flexGrow: 1 }}>
        <Box>
          {isGridView ? (
            <CarGrid isGridView={isGridView} carPrice={carPrice}/>
          ) : (
            <CarsListView isGridView={isGridView} carPrice={carPrice}/>
          )}
        </Box>
        <Box sx={{ display: { lg: isGridView ? "none" : "flex"  } }}>
          <CarGrid isGridView={isGridView}  carPrice={carPrice}/>
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
