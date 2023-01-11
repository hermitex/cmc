import { Box, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import convertible from "../../assets/models/Convertible.png";
import coupe from "../../assets/models/Coupe_Hatchback.png";
import pickup from "../../assets/models/pickup_truck.png";
import sedan from "../../assets/models/sedan.png";
import van from "../../assets/models/van.png";
import wagon from "../../assets/models/wagon.png";

const activeStyles = {
  backgroundColor: '#fff',
  color: '#000'
}

interface Car {
  image: string;
  name: string;
}

const cars = [
  { image: convertible, name: "convertible" },
  { image: coupe, name: "coupe" },
  { image: pickup, name: "pickup" },
  { image: sedan, name: "sedan" },
  { image: van, name: "van" },
  { image: wagon, name: "wagon" },
];

function Models() {
  return (
    <Box sx={{ display: "flex", height: 'fit-content', width: '100%'}}>
      {cars.map((car: Car) => (
        <NavLink  key={car.name} to="/"
        style={{ width: '100%'}}
        >
          <Box
            component="image"
            sx={{

              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              py:1,
              px: 3,
              ":nth-of-type(odd)": {
                bgcolor: "#1f2139",
              },
              ":nth-of-type(even)": {
                bgcolor: "#2b2d42",
              },
            }}
          >
            <img
              src={car.image}
              height={20}
              width={60}
              alt={car.name}
            />
            <Typography variant='subtitle1' sx={{color: '#fff', textTransform: 'capitalize'}}>{car.name}</Typography>
          </Box>
        </NavLink>
      ))}
    </Box>
  );
}

export default Models;
