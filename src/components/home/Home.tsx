import { Box } from "@mui/material";
import React from "react";
import CarGallery from "../car/CarGallery";
import { cars } from "../data/carsData";

function Home() {
  return (
    <Box sx={{ height: "calc(100vh-80px)", maxWidth:'100vw' }}>
      {cars.slice(0, 1).map((car) => (
        <CarGallery key={car.id} car={car} />
      ))}
    </Box>
  );
}

export default Home;
