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

  const handleClear = () => {};
  return (
    <Box sx={{ bgcolor: "#f2f5fb", pb: 4 }}>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Button
          onClick={toggleFilters}
          sx={{ width: "85vw", px: 3, py: 2, my: 2 }}
        >
          Filters(0)
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
            {searchInputData.slice(0, 10).map((input) => {
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
    </Box>
  );
}

function MoreFilters({ children }: { children: React.ReactNode }) {
  return <> {children}</>;
}

export default FilterForm;
