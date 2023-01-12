import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, useDragControls } from "framer-motion";
import convertible from "../../assets/models/Convertible.png";
import coupe from "../../assets/models/Coupe_Hatchback.png";
import pickup from "../../assets/models/pickup_truck.png";
import sedan from "../../assets/models/sedan.png";
import van from "../../assets/models/van.png";
import wagon from "../../assets/models/wagon.png";

const activeStyles = {
  backgroundColor: "#fff",
  color: "#000",
};

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
  const [width, setWidth] = useState(0);
  const scrollContainer: any = useRef();

  useEffect(() => {
    let scrollableWidth =
      scrollContainer.current.scrollWidth - scrollContainer.current.offsetWidth;
    setWidth(scrollableWidth);
  }, [width]);

  const dragControls = useDragControls();

  function startDrag(event: PointerEvent | React.PointerEvent<Element>) {
    dragControls.start(event, { snapToCursor: true });
  }
  return (
    // <Box sx={{ display: "flex", height: 'fit-content', width: '100%'}}>
    <motion.div
      ref={scrollContainer}
      whileTap={{ cursor: "grabbing" }}
      className="scroll-container"
      style={{
        overflowX: "hidden",
        whiteSpace: "nowrap",
        cursor: "grab",
        width: "100%",
      }}
      transition={{ duration: 1 }}
    >
      <div onPointerDown={startDrag} />
      <motion.div
        drag="x"
        dragControls={dragControls}
        dragConstraints={{ right: 0, left: -width }}
        className="scroll-inner"
        style={{ display: "flex", width: "100%" }}
      >
        {cars.map((car: Car) => (
          <NavLink key={car.name} to="/" style={{ width: "100%" }}>
            <motion.div>
              <Box
                component="image"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  py: 1,
                  px: 3,
                  ":nth-of-type(odd)": {
                    bgcolor: "#1f2139",
                  },
                  ":nth-of-type(even)": {
                    bgcolor: "#2b2d42",
                  },
                  color: "#fff",
                  ":hover": {
                    color: "#ed1f1f",
                  },
                  transition: "0.25s ease-in-out",
                }}
              >
                <img src={car.image} height={20} width={60} alt={car.name} />
                <Typography
                  variant="subtitle1"
                  sx={{ textTransform: "capitalize" }}
                >
                  {car.name}
                </Typography>
              </Box>
            </motion.div>
          </NavLink>
        ))}
      </motion.div>
    </motion.div>
    // </Box>
  );
}

export default Models;
