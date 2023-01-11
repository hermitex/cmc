import {
  CompareArrows,
  KeyboardDoubleArrowDownOutlined,
  KeyboardDoubleArrowUpOutlined,
} from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  Divider,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const categories = [
  { category: "all", count: 20 },
  { category: "new", count: 17 },
  { category: "used", count: 27 },
];
const isActiveLink = {
  color: "#ff5d46",
  borderTop: "0.5rem solid #ff5d46",
};

function valuetext(value: number) {
  return `${value}Kesh`;
}

function FilterForm() {
  const [expanded, setExpanded] = React.useState<boolean | false>(false);
  const [showFilters, setShowFilters] = React.useState<boolean | false>(false);
  const isMedium = useMediaQuery("(min-width: 900px)");

  const handleMore = () => {
    setExpanded((isExpanded) => !isExpanded);
  };
  const toggleFilters = () => {
    setShowFilters((showFilters) => !showFilters);
  };

  const overRideDisplay = () => {
    alert(1);
    setShowFilters(true);
    return "grid";
  };

  const [value, setValue] = React.useState<number[]>([100000, 10000000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <Box sx={{ bgcolor: "#f2f5fb", }}>
      <Box sx={{ display: { xs: "block", bgcolor: "#2b2d42" } }}>
        <Typography
          onClick={toggleFilters}
          sx={{ width: "100%", bgcolor: "#2b2d42", py: 2, display: 'flex', textTransform: 'uppercase', alignItems: 'center', gap: 1, justifyContent: 'center' }}
        >
          Filters{" "}<Typography component='span'  sx={{color: '#ed1f1f'}}>car</Typography>
        </Typography>
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
              .filter((input) => input.name.toLocaleLowerCase() != "price")
              .map((input) => {
                return input.type.toLocaleLowerCase() === "select" ? (
                  <MultipleSelect
                    key={input.name}
                    input={input}
                  />
                ) : (
                  <FormControl
                    sx={{ m: 1, height: "3rem" }}
                    key={input.name}
                    className="w-full"
                  >
                    <InputLabel
                      sx={{ textTransform: "capitalize" }}
                      htmlFor={input.name}
                    >
                      {input.label}
                    </InputLabel>
                    <OutlinedInput
                      sx={{ height: "3rem" }}
                      id={input.name}
                      name={input.name}
                      //   onChange={handleChange}
                      //   onBlur={handleBlur}
                      //   value={values.name}
                      type={input.type}
                      //   placeholder={input.placeholder}
                      label={input.name}
                    />
                  </FormControl>
                );
              })}
          </Box>
        </>
      ) : null}

      <Box sx={{ width: "100%", mx: 'auto', bgcolor: "#2b2d42",   }}>
        <Typography sx={{ color: "#fff", fontSize: '0.8rem' }}>PRICE RANGE</Typography>
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
            width: '90%'
          }}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between", px: 0.5 }}>
          <Typography
            id="non-linear-slider"
            gutterBottom
            sx={{fontSize: '0.7rem', color:'#ed1f1f'}}
          >
            Min: {value[0]}
          </Typography>
          <Typography
            id="non-linear-slider"
            gutterBottom
            sx={{fontSize: '0.7rem', color:'#ed1f1f'}}
          >
            Max: {value[1]}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

function MoreFilters({ children }: { children: React.ReactNode }) {
  return <> {children}</>;
}

export default FilterForm;
