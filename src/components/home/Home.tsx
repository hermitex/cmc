import { Box } from "@mui/material";
import React from "react";
import CarGallery from "../car/CarGallery";
import { cars } from "../data/carsData";

function Home() {
  return (
    <Box sx={{pt: 15}}>
      {cars.slice(0,1).map((car) => (
        <CarGallery key={car.id} car={car} />
      ))}
    </Box>
  );
}

export default Home;
