import {
  CompareArrows,
  KeyboardDoubleArrowDownOutlined,
  KeyboardDoubleArrowUpOutlined,
} from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  Checkbox,
  Divider,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import { searchInputData } from "./inpuData";
import MultipleSelect from "./MultiSelect";
import SearchIcon from "@mui/icons-material/Search";

import "./search.css";
import useMediaQuery from "../hooks/useMediaQuery";

import Slider from "@mui/material/Slider";
import { cars } from "../data/carsData";

const categories = [
  { category: "all", count: 20 },
  { category: "new", count: 17 },
  { category: "used", count: 27 },
];
const isActiveLink = {
  color: "#ff5d46",
  borderTop: "0.5rem solid #ff5d46",
};

export interface IsearchData {
  make: "";
  model: "";
  color: "";
  year: "";
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function valuetext(value: number) {
  return `${value}Kesh`;
}

function FilterForm({ getPrice }: { getPrice: any }) {
  const [expanded, setExpanded] = React.useState<boolean | false>(false);
  const [showFilters, setShowFilters] = React.useState<boolean | false>(false);
  const [isHovered, setIsHovered] = React.useState<boolean | false>(false);
  const [filterData, setFilterData] = React.useState<IsearchData>({
    make: "",
    model: "",
    color: "",
    year: "",
  });
  const [yearErrors, setYearErrors] = React.useState<string>("");
  const [priceErrors, setPriceErrors] = React.useState<string>("");

  const [data, setData] = React.useState<string[]>([]);

  const isMedium = useMediaQuery("(min-width: 900px)");

  const toggleFilters = () => {
    setShowFilters((showFilters) => !showFilters);
  };

  const toggleHover = () => {
    setIsHovered((isHovered) => !isHovered);
  };

  const [value, setValue] = React.useState<number[]>([100000, 10000000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    getPrice(value);
  };

  const updateSearchData = (event: {
    target: { name: string; value: string };
  }) => {
    setFilterData({ ...filterData, [event.target.name]: event.target.value });
  };

  const validate = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    const currentYear = new Date().getFullYear();
    if (name === "year" && value.trim()) {
      if(+value > currentYear){
        setYearErrors(`Year must not exceed ${currentYear}`);
        return;
      }
      if (!(+value >= 1997 && +value <= currentYear)) {
        setYearErrors("Year must be greater than 1997");
      } else {
        setYearErrors("");
      }
    }
    if (name === "price" && value.trim()) {
      if (+value < 100000) {
        setPriceErrors("The price must be at least 100k");
      } else {
        setPriceErrors("");
      }
    }
  };

  console.log(filterData);
  return (
    <Box sx={{ bgcolor: "#f2f5fb", width: { md: "12rem" }, maxWidth: "100vw" }}>
      <Box sx={{ display: { xs: "block", bgcolor: "#2b2d42" } }}>
        <Button
          onClick={toggleFilters}
          onMouseEnter={toggleHover}
          sx={{
            width: "100%",

            bgcolor: "#2b2d42",
            color: "#fff",
            ":hover": { bgcolor: "#ed1f1f" },
            py: 1,
            display: "flex",
            textTransform: "uppercase",
            alignItems: "center",
            gap: 1,
            justifyContent: "center",
            borderRadius: 0,
          }}
        >
          Filters
          <Typography
            component="span"
            sx={{ color: isHovered ? "#ed1f1f" : "#fff" }}
          >
            car
          </Typography>
        </Button>
      </Box>
      {isMedium || showFilters ? (
        <>
          <Box
            component="form"
            sx={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                // md: 'repeat(4, 1fr)',
                // lg: 'repeat(5, 1fr)',
              },
              gridTemplateAreas: "auto",
              gap: 0.2,
              // px: 3,
              py: 3,
              pb: 5,
              mb: 2,
            }}
          >
            {searchInputData
              .filter((input) => input.type.toLocaleLowerCase() === "select")
              .map((input) => (
                <FormControl sx={{ m: 1, height: "3rem" }}>
                  <InputLabel
                    id={input.name}
                    sx={{ textTransform: "capitalize" }}
                  >
                    {input.label}
                  </InputLabel>
                  <Select
                    labelId={input.name}
                    id={input.name}
                    multiple={input.isMultiple}
                    // value={data[input.name]}
                    onChange={updateSearchData}
                    name={input.name}
                    input={<OutlinedInput label={input.label} />}
                    renderValue={(selected) => selected}
                    sx={{ height: "3rem", textAlign: "left" }}
                  >
                    {input.options?.map((option: any) => (
                      <MenuItem
                        key={option}
                        value={option}
                      >
                        <Checkbox checked={data.indexOf(option) > -1} />
                        <ListItemText primary={option} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              ))}
            {searchInputData
              .filter((input) => input.type.toLowerCase() !== "select")
              .map((input) => (
                <FormControl
                  sx={{ m: 1, height: "3rem" }}
                  key={input.name}
                >
                  <InputLabel
                    sx={{ textTransform: "capitalize" }}
                    htmlFor={input.name}
                  >
                    {input.label}
                  </InputLabel>
                  <OutlinedInput
                    sx={{ height: "3rem" }}
                    label={input.label}
                    onChange={updateSearchData}
                    onBlur={validate}
                    name={input.name}
                    type={input.type}
                  />
                  {input.name === "year" && yearErrors ? (
                    <FormHelperText sx={{ color: "red", fontSize: "0.5rem" }}>
                      {yearErrors}
                    </FormHelperText>
                  ) : null}
                  {input.name === "price" && priceErrors ? (
                    <FormHelperText sx={{ color: "red", fontSize: "0.5rem" }}>
                      {priceErrors}
                    </FormHelperText>
                  ) : null}
                </FormControl>
              ))}
          </Box>
        </>
      ) : null}

      <Box sx={{ width: "100%", mx: "auto", bgcolor: "#2b2d42" }}>
        <Typography sx={{ color: "#fff", fontSize: "0.8rem" }}>
          PRICE RANGE
        </Typography>
        <Slider
          min={100000}
          max={10000000}
          step={50000}
          getAriaLabel={() => "Price range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          sx={{
            color: "#ed1f1f",
            width: "90%",
          }}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between", px: 0.5 }}>
          <Typography
            id="non-linear-slider"
            gutterBottom
            sx={{ fontSize: "0.7rem", color: "#ed1f1f" }}
          >
            Min: {value[0]}
          </Typography>
          <Typography
            id="non-linear-slider"
            gutterBottom
            sx={{ fontSize: "0.7rem", color: "#ed1f1f" }}
          >
            Max: {value[1]}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <NavLink to="/description">
          <Box sx={{ bgcolor: "#2a2c42", width: "100%", mt: 2 }}>
            <Typography sx={{ textTransform: "uppercase", color: "#fff" }}>
              {months[new Date().getMonth()]} sale
            </Typography>
            <Box sx={{ width: "100%" }}>
              <img
                width="100%"
                src={cars[3].images[7]}
                alt=""
              />
            </Box>
            <Box sx={{ mt: -3, mb: 1 }}>
              <Button
                variant="contained"
                disableElevation
                sx={{
                  bgcolor: "#ed1f1f",
                  ":hover": {
                    bgcolor: "#ed1f1f",
                  },
                  borderRadius: 0,
                  width: "90%",
                }}
              >
                Ksh {cars[3].price}
              </Button>
            </Box>
            <Box sx={{ px: 2 }}>
              <Typography
                sx={{
                  textTransform: "uppercase",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontSize: "0.6rem",
                  fontWeight: 600,
                }}
              >
                Engine type:{" "}
                <Typography
                  variant="subtitle1"
                  sx={{
                    textTransform: "capitalize",
                    fontSize: "0.6rem",
                    color: "#c1c1c1",
                  }}
                >
                  Four Cylinder
                </Typography>
              </Typography>

              <Typography
                sx={{
                  textTransform: "uppercase",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontSize: "0.6rem",
                  fontWeight: 600,
                }}
              >
                Transmission:{" "}
                <Typography
                  variant="subtitle1"
                  sx={{
                    textTransform: "capitalize",
                    fontSize: "0.6rem",
                    color: "#c1c1c1",
                  }}
                >
                  {cars[3].transmission}
                </Typography>
              </Typography>

              <Typography
                sx={{
                  textTransform: "uppercase",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontSize: "0.6rem",
                  fontWeight: 600,
                }}
              >
                Fuel type:{" "}
                <Typography
                  variant="subtitle1"
                  sx={{
                    textTransform: "capitalize",
                    fontSize: "0.6rem",
                    color: "#c1c1c1",
                  }}
                >
                  {cars[3].fuelType}
                </Typography>
              </Typography>

              <Typography
                sx={{
                  textTransform: "uppercase",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontSize: "0.6rem",
                  fontWeight: 600,
                }}
              >
                vehicle ID:{" "}
                <Typography
                  variant="subtitle1"
                  sx={{
                    textTransform: "capitalize",
                    fontSize: "0.6rem",
                    color: "#c1c1c1",
                  }}
                >
                  Qx8qx8imZ
                </Typography>
              </Typography>
            </Box>
            <NavLink to="/quote">
              <Button
                variant="contained"
                disableElevation
                sx={{
                  my: 2,
                  bgcolor: "#ed1f1f",
                  ":hover": {
                    bgcolor: "#ed1f1f",
                  },
                  borderRadius: 0,
                  width: "90%",
                }}
              >
                GET QUOTE
              </Button>
            </NavLink>
          </Box>
        </NavLink>
      </Box>
    </Box>
  );
}

function MoreFilters({ children }: { children: React.ReactNode }) {
  return <> {children}</>;
}

export default FilterForm;
