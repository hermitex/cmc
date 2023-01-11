import { Star } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { cars } from "../data/carsData";

function CarGrid() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        },
        gap: 2
      }}
    >
      {cars.map((car, i) => (
        <Box
          key={car.id}
          sx={{
            width: "15rem",
            px: 4,
          }}
        >
          <Box>
            <img
              width="100%"
              src={car.images[i]}
              alt=""
            />
          </Box>
          <Box sx={{ color: "#939393", textAlign: "left",  display: "flex", gap: 3, flexDirection: 'column' }}>
            <Box>
              <Typography>{car.title}</Typography>
              <Box>
                <IconButton sx={{ color: "#ed1f1f", p: 0.5 }}>
                  <Star sx={{ fontSize: "1rem" }} />
                </IconButton>
                <IconButton sx={{ color: "#ed1f1f", p: 0.5 }}>
                  <Star sx={{ fontSize: "1rem" }} />
                </IconButton>
                <IconButton sx={{ color: "#ed1f1f", p: 0.5 }}>
                  <Star sx={{ fontSize: "1rem" }} />
                </IconButton>
                <IconButton sx={{ color: "#ed1f1f", p: 0.5 }}>
                  <Star sx={{ fontSize: "1rem" }} />
                </IconButton>
                <IconButton sx={{ color: "#ed1f1f", p: 0.5 }}>
                  <Star sx={{ fontSize: "1rem" }} />
                </IconButton>
              </Box>
              <Typography variant="subtitle1">
                Starting from{" "}
                <Typography
                  component="span"
                  sx={{ color: "#ed1f1f" }}
                >
                  Ksh {car.price}
                </Typography>
              </Typography>
            </Box>

            <Box>
              <Typography
                sx={{
                  textTransform: "uppercase",
                  color: "#939393",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontSize: "0.7rem",
                }}
              >
                Engine type:{" "}
                <Typography
                  variant="subtitle1"
                  sx={{ textTransform: "capitalize", fontSize: "0.7rem" }}
                >
                  Four Cylinder
                </Typography>
              </Typography>

              <Typography
                sx={{
                  textTransform: "uppercase",
                  color: "#939393",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontSize: "0.7rem",
                }}
              >
                Transmission:{" "}
                <Typography
                  variant="subtitle1"
                  sx={{ textTransform: "capitalize", fontSize: "0.7rem" }}
                >
                  {car.transmission}
                </Typography>
              </Typography>

              <Typography
                sx={{
                  textTransform: "uppercase",
                  color: "#939393",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontSize: "0.7rem",
                }}
              >
                Fuel type:{" "}
                <Typography
                  variant="subtitle1"
                  sx={{ textTransform: "capitalize", fontSize: "0.7rem" }}
                >
                  {car.fuelType}
                </Typography>
              </Typography>

              <Typography
                sx={{
                  textTransform: "uppercase",
                  color: "#939393",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontSize: "0.7rem",
                }}
              >
                vehicle ID:{" "}
                <Typography
                  variant="subtitle1"
                  sx={{ textTransform: "capitalize", fontSize: "0.7rem" }}
                >
                  Qx8qx8imZ
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default CarGrid;
