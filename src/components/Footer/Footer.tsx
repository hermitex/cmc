import { Send } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  Link,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { cars } from "../data/carsData";
import footerBg from "./footer-bg.svg";
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
function Footer() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${footerBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        mt: 3,
        px: 4,
        py: 5,
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            alignItems: "flex-start",
            textAlign: "left",
          }}
        >
          <Typography>Lorem ipsum</Typography>

          <Typography>
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud
          </Typography>

          <NavLink to="/about">
            <Button
              disableElevation
              sx={{ color: "#fff" }}
            >
              read more
            </Button>
          </NavLink>
          <Box component="form">
            <FormControl
              sx={{ width: "27ch" }}
              variant="outlined"
            >
              {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
              <OutlinedInput
                id="outlined-adornment-email"
                sx={{ height: "2rem", bgcolor: "#fff" }}
                placeholder="Subscribe on Updates"
                required
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      type="submit"
                      sx={{
                        bgcolor: "#ed1f1f",
                        color: "#fff",
                        borderRadius: 0,
                        height: "2rem",
                        ":hover": {
                          bgcolor: "#ed1f1f",
                        },
                      }}
                      aria-label="toggle email visibility"
                      edge="end"
                    >
                      <Send />
                    </IconButton>
                  </InputAdornment>
                }
              />
              <FormHelperText sx={{ color: "#fff", fontSize: "0.7rem", m: 0 }}>
                We Guarantee that we will not share your email with any other
                party
              </FormHelperText>
            </FormControl>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            alignItems: "flex-start",
            textAlign: "left",
          }}
        >
          <Typography>
            USEFULL{" "}
            <Link
              href=""
              sx={{
                color: "#ed1f1f",
                ":hover": {
                  color: "#ed1f1f",
                },
                textDecoration: "none",
              }}
            >
              LINKS
            </Link>{" "}
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 3,
            }}
          >
            <Typography>
              USEFULL{" "}
              <Link
                href=""
                sx={{
                  color: "#ed1f1f",
                  ":hover": {
                    color: "#ed1f1f",
                  },
                  textDecoration: "none",
                }}
              >
                {" "}
                LISTINGS FAQ{" "}
              </Link>{" "}
            </Typography>
            <Typography>
              USEFULL{" "}
              <Link
                href=""
                sx={{
                  color: "#ed1f1f",
                  ":hover": {
                    color: "#ed1f1f",
                  },
                  textDecoration: "none",
                }}
              >
                LINK
              </Link>{" "}
            </Typography>
            <Typography>
              USEFULL{" "}
              <Link
                href=""
                sx={{
                  color: "#ed1f1f",
                  ":hover": {
                    color: "#ed1f1f",
                  },
                  textDecoration: "none",
                }}
              >
                SHOP
              </Link>{" "}
            </Typography>
            <Typography>
              USEFULL{" "}
              <Link
                href=""
                sx={{
                  color: "#ed1f1f",
                  ":hover": {
                    color: "#ed1f1f",
                  },
                  textDecoration: "none",
                }}
              >
                CONTACTS{" "}
              </Link>{" "}
            </Typography>
          </Box>
          <Box sx={{ border: "1px solid #fff", px: 3, py: 2 }}>
            <address>
              <Link
                sx={{
                  color: "#fff",
                  textDecoration: "none",
                  ":hover": {
                    color: "#ED1F1F",
                  },
                }}
                href="tel:(+254) 123 456 789"
              >
                {" "}
                (+254) 123 456 789
              </Link>
              <br />

              <Link
                sx={{
                  color: "#fff",
                  textDecoration: "none",
                  ":hover": {
                    color: "#ED1F1F",
                  },
                }}
                href="mailto:enquiries@cmcmotors.com"
              >
                enquiries@cmcmotors.com
              </Link>
              <br />
              <Typography>Nairobi Kenya</Typography>
            </address>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            alignItems: "flex-start",
            textAlign: "left",
          }}
        >
          <Typography>
            <Link
              href=""
              sx={{
                color: "#fff",
                ":hover": {
                  color: "#ed1f1f",
                },
                textDecoration: "none",
              }}
            >
              RECENT POSTS
            </Link>
          </Typography>

          <Box sx={{ height: "10vh" }}>
            {cars.slice(0, 3).map((car, i) => (
              <NavLink
                key={car.id}
                to="/posts"
              >
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Box
                    component="image"
                    sx={{ width: 50, mb: 3 }}
                  >
                    <img
                      height="100%"
                      width="100%"
                      src={car.images[i]}
                      alt=""
                    />
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column", mb: 3 }}>
                    <Typography
                      sx={{ textTransform: "uppercase", color: "#fff" }}
                    >
                      {new Date().getDate()} {months[new Date().getMonth()]}{" "}
                      {new Date().getFullYear()}
                    </Typography>
                    <Typography sx={{ color: "#ED1F1F" }}>
                      {car.title}
                    </Typography>
                  </Box>
                </Box>
              </NavLink>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
