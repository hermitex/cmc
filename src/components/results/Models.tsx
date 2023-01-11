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
    <Box sx={{ display: "flex", pt: 3 , height: 'fit-content' }}>
      {cars.map((car: Car) => (
        <NavLink  key={car.name} to="/"
        style={({ isActive }) => ({
          color: isActive ? '#000' : '#545e6f',
          background: isActive ? '#fff' : '#f0f0f0',

        })}
        >
          <Box
            component="image"
            sx={{
              display: 'flex',
              flexDirection: 'column',

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
