import { Star } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { CarInterface, cars } from "../data/carsData";
import { motion } from "framer-motion";

function CarGrid({ isGridView, carPrice }: { isGridView: Boolean, carPrice: [0, 0] | null }) {

  const [carsToShow, setCarsToShow] = React.useState<CarInterface[]>([]);

  React.useEffect(() => {
    let filteredCars: CarInterface[] = [];
    if (carPrice) {
      filteredCars = cars.filter(
        (car) => car.price > carPrice[0] && car.price < carPrice[1]
      );
      setCarsToShow(filteredCars);
    }
  }, [carPrice]);

  let allCars = cars;

  if(carsToShow.length){
    allCars = carsToShow;
  }
  return (
    <Box
      sx={{
        display: { xs: "grid", lg: isGridView ? "grid" : "none" },
        gridTemplateColumns: {
          xs: "repeat(1, 1fr)",
          // sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        },
        gap: 2,
      }}
    >
      {allCars.map((car, i) => (
        <Box
        key={car.id}
          sx={{
            width: "100%",
            bgcolor: '#fbfbfb',
            ":nth-child(3n+2)": {
              bgcolor: "#ffffff",
            },
          }}
        >
          <NavLink

            to="description"
            state={car}
            style={{ width: "100%" }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                default: {
                  duration: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                },
                scale: {
                  // type: "spring",
                  damping: 10,
                  stiffness: 90,
                  restDelta: 0.001,
                },
              }}
            >
              <Box
                key={car.id}
                sx={{
                  width: { md: "95%" },
                  maxWidth: "100vw",
                  mx: "auto",
                  p: 0.5,
                  // py: 1,
                  ":hover": {
                    boxShadow: 2,
                    border: "1px solid #ff4605",
                  },
                  border: "1px solid #eef0f1",
                  transition: "0.7s ease-in-out",
                }}
              >
                <Box>
                  <img
                    width="100%"
                    src={car.images[i]}
                    alt=""
                  />
                </Box>
                <Box
                  sx={{
                    color: "#585a6a",
                    textAlign: "left",
                    display: "flex",
                    gap: 3,
                    flexDirection: "column",
                  }}
                >
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
                        color: "#585a6a",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        fontSize: "0.7rem",
                      }}
                    >
                      Engine type:{" "}
                      <Typography
                        variant="subtitle1"
                        sx={{
                          textTransform: "capitalize",
                          fontSize: "0.7rem",
                          color: "#c1c1c1",
                        }}
                      >
                        Four Cylinder
                      </Typography>
                    </Typography>

                    <Typography
                      sx={{
                        textTransform: "uppercase",
                        color: "#585a6a",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        fontSize: "0.7rem",
                      }}
                    >
                      Transmission:{" "}
                      <Typography
                        variant="subtitle1"
                        sx={{
                          textTransform: "capitalize",
                          fontSize: "0.7rem",
                          color: "#c1c1c1",
                        }}
                      >
                        {car.transmission}
                      </Typography>
                    </Typography>

                    <Typography
                      sx={{
                        textTransform: "uppercase",
                        color: "#585a6a",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        fontSize: "0.7rem",
                      }}
                    >
                      Fuel type:{" "}
                      <Typography
                        variant="subtitle1"
                        sx={{
                          textTransform: "capitalize",
                          fontSize: "0.7rem",
                          color: "#c1c1c1",
                        }}
                      >
                        {car.fuelType}
                      </Typography>
                    </Typography>

                    <Typography
                      sx={{
                        textTransform: "uppercase",
                        color: "#585a6a",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        fontSize: "0.7rem",
                      }}
                    >
                      vehicle ID:{" "}
                      <Typography
                        variant="subtitle1"
                        sx={{
                          textTransform: "capitalize",
                          fontSize: "0.7rem",
                          color: "#c1c1c1",
                        }}
                      >
                        Qx8qx8imZ
                      </Typography>
                    </Typography>
                  </Box>
                  <Box>
                    <NavLink
                      to="/description"
                      state={car}
                    >
                      <Button
                        disableElevation={true}
                        sx={{
                          py: 0.5,
                          px: 0.7,
                          borderRadius: 0,
                          bgcolor: "#585a6a",
                          color: "#fff",
                          ":hover": { bgcolor: "#585a6a" },
                        }}
                      >
                        Description
                      </Button>
                    </NavLink>
                    <NavLink to="/quote">
                      <Button
                        disableElevation={true}
                        sx={{
                          py: 0.5,
                          px: 0.7,
                          borderRadius: 0,
                          bgcolor: "#ed1f1f",
                          color: "#fff",
                          ":hover": { bgcolor: "#ed1f1f" },
                        }}
                      >
                        get quote
                      </Button>
                    </NavLink>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </NavLink>
        </Box>
      ))}
    </Box>
  );
}

export default CarGrid;
