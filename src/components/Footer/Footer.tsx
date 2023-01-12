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
import footerBg from "./footer-bg.svg";
function Footer() {
  return (
    <Box sx={{ backgroundImage: `url(${footerBg})`, mt: 3, minHeight: "50vh" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
          },
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

          <FormControl
            sx={{ width: "27ch" }}
            variant="outlined"
          >
            {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
            <OutlinedInput
              id="outlined-adornment-email"
              sx={{ height: "2rem", bgcolor: "#fff" }}
              placeholder="Subscribe on Updates"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
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
              href=''
              sx={{
                color: "#ed1f1f",
                ":hover": {
                  color: "#ed1f1f",
                },
                textDecoration: 'none'
              }}
            >
              LINKS
            </Link>{" "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
