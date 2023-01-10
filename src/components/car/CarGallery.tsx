import { ChevronLeftOutlined, ChevronRightOutlined } from "@mui/icons-material";
import { Button, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { CSSProperties, ReactChild } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useLocation } from "react-router-dom";

function CarGallery({ car }: { car: any }) {
  const arrowStyles: CSSProperties = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 30,
    height: 30,
    cursor: "pointer",
  };

  const indicatorStyles: CSSProperties = {
    background: "#fff",
    width: 8.5,
    height: 8.5,
    display: "inline-block",
    margin: "0 8px",
    borderRadius: "100%",
  };

  const renderArrowPrev = (
    clickHandler: () => void,
    hasPrev: boolean,
    label: string
  ) =>
    hasPrev && (
      <IconButton
        onClick={clickHandler}
        style={{ ...arrowStyles, left: 15 }}
        sx={{
          color: "#ff4605",
          ":hover": {
            bgcolor: "#fff",
            color: "#ff4605",
          },
          p: 3,
        }}
      >
        <ChevronLeftOutlined />
      </IconButton>
    );
  const renderArrowNext = (
    clickHandler: () => void,
    hasNext: boolean,
    label: string
  ) =>
    hasNext && (
      <IconButton
        onClick={clickHandler}
        style={{ ...arrowStyles, right: 15 }}
        sx={{
          color: "#ff4605",
          ":hover": {
            bgcolor: "#fff",
            color: "#ff4605",
          },
          p: 3,
        }}
      >
        <ChevronRightOutlined />
      </IconButton>
    );

  const renderIndicator = (
    clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void,
    isSelected: boolean,
    index: number,
    label: string
  ) => {
    if (isSelected) {
      return (
        <li
          style={{ ...indicatorStyles, background: "#ff4605" }}
          aria-label={`Selected: ${label} ${index + 1}`}
          title={`Selected: ${label} ${index + 1}`}
        />
      );
    }
    return (
      <li
        style={indicatorStyles}
        onClick={clickHandler}
        onKeyDown={clickHandler}
        value={index}
        key={index}
        role="button"
        tabIndex={0}
        title={`${label} ${index + 1}`}
        aria-label={`${label} ${index + 1}`}
      />
    );
  };

  const location = useLocation();

  return (
    <Box
      sx={{
        borderRadius: 5,
      }}
    >
      <Carousel
        autoFocus
        swipeable
        infiniteLoop
        renderArrowNext={renderArrowNext}
        renderArrowPrev={renderArrowPrev}
        renderIndicator={renderIndicator}
        renderThumbs={(children: ReactChild[]) => []}
        thumbWidth={120}
        useKeyboardArrows={true}
        autoPlay
        // transitionTime={1}

      >
        {car.images.map((image: string) => (
          <Box key={image} sx={{position: 'relative', height: '100vh'}}>
            <img
              src={image}
              style={{ borderRadius: 5 }}
            />
            <Box   sx={{position: 'absolute', display: 'flex', gap: 2, flexDirection:'column', bottom: '15rem', left: '5rem', width: '30vw'}}>
              <Typography>FIND YOUR MATCH</Typography>
              <Box>
              <Button
                variant="contained"
                sx={{
                  width: "20vw",
                  textTransform: "capitalize",
                  color: "#fff",
                  bgcolor: "#ed1f1f",
                  ":hover": {
                    bgcolor: "#ed1f1f",
                  },
                }}
              >
               THE NEW MAZDA CX 30</Button>
              </Box>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                iusto repudiandae assumenda quam, minus nesciunt?
              </Typography>
              <Box>
              <Button
                variant="contained"
                sx={{
                  width: "20vw",
                  textTransform: "capitalize",
                  color: "#fff",
                  bgcolor: "#ed1f1f",
                  ":hover": {
                    bgcolor: "#ed1f1f",
                  },
                }}
              >GET QUOTE</Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}

export default CarGallery;
