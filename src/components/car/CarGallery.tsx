import {
  ArrowBackOutlined,
  ArrowRight,
  ArrowRightAltOutlined,
  ArrowRightOutlined,
  ChevronLeftOutlined,
  ChevronRightOutlined,
} from "@mui/icons-material";
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
    cursor: 'pointer'
  };

  const renderArrowPrev = (
    clickHandler: () => void,
    hasPrev: boolean,
    label: string
  ) =>
    hasPrev && (
      <IconButton
        onClick={clickHandler}
        style={{ ...arrowStyles, left: 15, border: "2px solid #fff" }}
        sx={{
          color: "#fff",
          ":hover": {
            bgcolor: "#fff",
            color: "#ff4605",
          },
          p: 1,
        }}
      >
        <ArrowBackOutlined />
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
        style={{ ...arrowStyles, right: 15, border: "2px solid #fff" }}
        sx={{
          color: "#fff",
          ":hover": {
            bgcolor: "#fff",
            color: "#ff4605",
          },
          p: 1,
        }}
      >
        <ArrowBackOutlined sx={{ transform: "rotate(180deg)" }} />
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

  return (
    <Box
      sx={{
        borderRadius: 0,
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
          <Box
            key={image}
            sx={{ position: "relative", height: { md: "100vh" } }}
          >
            <img
              height="100%"
              src={image}
              style={{ borderRadius: 0 }}
            />

            <Box
              sx={{
                position: "absolute",
                display:  "flex" ,
                justifyContent: "center",
                alignContent: "center",

                flexDirection: "column",
                // bottom: "30%",
                top: "calc(10% - 15px)",
                width: "100%",
                height: "100%",
                // p: 2,
                alignItems: "flex-start",
                textAlign: "left",
                background:
                  "radial-gradient(circle, rgba(0,0,0,0.1) 13%, rgba(0,0,0,0.7746498257506127) 78%)",
              }}
            >
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  flexDirection: "column",
                  gap: 2,
                  px: 10,
                  width: "40vw",
                }}
              >
                <Typography sx={{color: "#fff"}}>FIND YOUR MATCH</Typography>
                <Box>
                  <Button
                    variant="contained"
                    disableElevation
                    sx={{
                      borderRadius: 0,
                      width: "20vw",
                      textTransform: "capitalize",
                      color: "#fff",
                      bgcolor: "#ed1f1f",
                      ":hover": {
                        bgcolor: "#ed1f1f",
                      },
                    }}
                  >
                    THE NEW MAZDA CX 30
                  </Button>
                </Box>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  iusto repudiandae assumenda quam, minus nesciunt?
                </Typography>
                <Box>
                  <Button
                    variant="contained"
                    disableElevation
                    sx={{
                      borderRadius: 0,
                      width: "20vw",
                      textTransform: "capitalize",
                      color: "#fff",
                      bgcolor: "#ed1f1f",
                      ":hover": {
                        bgcolor: "#ed1f1f",
                      },
                    }}
                  >
                    GET QUOTE
                  </Button>
                </Box>
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  display: { xs: "flex", md: "none" },
                  gap: 2,
                  flexDirection: "column",
                  bottom: "30%",
                  // top: "calc(10% - 15%)",
                  left: "5rem",
                  alignItems: "flex-start",
                  textAlign: "left",
                  fontSize: '0.8rem'
                }}
              >
                <Typography>THE NEW MAZDA CX 30</Typography>
                <Button
                  variant="contained"
                  disableElevation
                  sx={{
                    textTransform: "capitalize",
                    color: "#fff",
                    bgcolor: "#ed1f1f",
                    ":hover": {
                      bgcolor: "#ed1f1f",
                    },
                  }}
                >
                  GET QUOTE
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}

export default CarGallery;
