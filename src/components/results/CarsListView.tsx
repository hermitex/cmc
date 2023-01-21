import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

import { List, ListItem } from "@mui/material";
import {
  FiberManualRecord,
  PinDropOutlined,
  StarBorderRounded,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { CarInterface, cars } from "../data/carsData";

function CarsListView({
  isGridView,
  carPrice,
}: {
  isGridView: Boolean;
  carPrice: [0, 0] | null;
}) {
  const theme = useTheme();
  const [isLiked, setIsLiked] = React.useState(false);
  const [carsToShow, setCarsToShow] = React.useState<CarInterface[]>([]);

  const handleLike = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setIsLiked((isLiked) => !isLiked);
  };

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
        display: { xs: "none", lg: !isGridView ? "flex" : "none" },
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      {allCars.map((car, i) => (
        <Link
          key={car.id}
          to="/details"
          state={car}
          style={{ width: "100%" }}
        >
          <Card
            sx={{
              display: "flex",
              height: "11rem",
              mb: 1,
              p: 2,
              gap: 2,
              borderRadius: 1.5,
              border: "1px solid #eef0f1",
              ":hover": {
                border: "1px solid #ff4605",
              },
              transition: "0.5s ease-in-out",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                display: "flex",
                borderRadius: 3,
                flexDirection: "row",
                width: 250,
              }}
              image={car.images[i]}
              alt={car.title}
            />
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <CardContent sx={{ flex: "1 0 auto", textAlign: "left" }}>
                <Typography
                  component="div"
                  variant="h5"
                >
                  {car.title}
                </Typography>
                <Typography
                  fontSize="1rem"
                  color="text.secondary"
                  component="div"
                >
                  {car.features.slice(0, 4).join(", ")}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  flexDirection: "row",

                  pl: 1,
                  pb: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 3,
                    width: "100%",
                    textOverflow: "ellipsis",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      bgcolor: "#ff4605",
                      color: "#fff",
                      py: 0.3,
                      px: 1.5,
                      borderRadius: 1,
                    }}
                  >
                    {car.year}
                  </Typography>
                  <Typography
                    sx={{
                      color: "text.secondary",
                    }}
                  >
                    344,567 miles
                  </Typography>
                  <Typography
                    sx={{
                      color: "text.secondary",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <FiberManualRecord
                      sx={{ color: "#ff4605", fontSize: "0.5rem" }}
                    />{" "}
                    Automatic
                  </Typography>
                  <Typography
                    sx={{
                      color: "text.secondary",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <FiberManualRecord
                      sx={{ color: "#ff4605", fontSize: "0.5rem" }}
                    />
                    Diesel
                  </Typography>
                  <Typography
                    sx={{
                      color: "text.secondary",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <FiberManualRecord
                      sx={{ color: "#ff4605", fontSize: "0.5rem" }}
                    />
                    AWD
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <IconButton title="Location">
                    <PinDropOutlined sx={{ color: "#ff4605" }} />{" "}
                  </IconButton>
                  Nairobi, Kenya
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                textAlign: "right",
                alignItems: "right",
              }}
            >
              <Box>
                <IconButton onClick={handleLike}>
                  <StarBorderRounded
                    onClick={(event: any) => event.target.stopPropagation()}
                    sx={{
                      color: isLiked ? "#ff4605" : undefined,
                      ":hover": { color: "#ff4605" },
                    }}
                  />
                </IconButton>
              </Box>

              <Box>
                <Typography
                  fontWeight="600"
                  fontSize="1.5rem"
                  textOverflow="ellipsis"
                  sx={{ color: "#ff4605", width: "fit-content" }}
                >
                  Ksh.{car.price}
                </Typography>
                <Box
                  sx={{
                    color: "#a8aaaf",
                    ":hover": {
                      color: "#ff4605",
                    },
                  }}
                >
                  <Link
                    to="/financing"
                    style={{
                      color: "inherit",
                      textDecoration: "underline",
                      fontSize: "0.8rem",
                    }}
                  >
                    Financing
                  </Link>
                  <Box />
                </Box>
              </Box>
            </Box>
          </Card>
        </Link>
      ))}
      {/* <Paginator /> */}
    </Box>
  );
}

export default CarsListView;
