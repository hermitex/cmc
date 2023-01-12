import {
  CompareArrows,
  GridViewRounded,
  TableRows,
  ViewColumn,
  ViewListRounded,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Tooltip,
  Typography,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import React from "react";
import CarGrid from "./CarGrid";
import CarsListView from "./CarsListView";
import MainSection from "./MainSection";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: "auto",
    },
  },
};

const options = [
  "most relevant",
  "date listed: newest",
  "price: lowest",
  "price: highest",
  "mileage: lowest",
  "mileage: highest",
];

function ResultsHeader() {
  const [sortOption, setsortOption] = React.useState<string[]>([]);
  const [isGridView, setGridView] = React.useState(true);
  const [listView, setListView] = React.useState(false);

  const handleGridView = () => {
    setGridView(true);
    setListView(false);
  };

  const handleListView = () => {
    setGridView(false);
    setListView(true);
  };

  const handleChange = (event: SelectChangeEvent<typeof sortOption>) => {
    const {
      target: { value },
    } = event;
    setsortOption(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <Container sx={{ bgcolor: "#ffffff" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          justifyItems: "center",
          alignContent: "center",
          alignItems: "center",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          width: "100%",
          px: 3,
          mt: 3,
          pb: 3,
          height: { xs: "30vh", md: "auto" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Box
            aria-label="car category button group"
            sx={{
              height: "3rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: { xs: "90vw", md: "100%" },
            }}
          >
            <Typography
              sx={{
                textTransform: "capitalize",
                fontSize: "2rem",
                fontWeight: 900,
                color: "#354049",
              }}
            >
              100 Results
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: {
              xs: "column-reverse",
              md: "row",
            },
            height: "3rem",
          }}
        >
          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            <Tooltip title="Grid view">
              <Button
                onClick={handleGridView}
                sx={{
                  textTransform: "capitalize",
                  fontSize: "1.2rem",
                  fontWeight: 300,
                  px: 3,
                  color: isGridView ? "#ff5d46" : "#354049",
                  ":hover": {
                    color: "#ff5d46",
                  },
                }}
              >
                <GridViewRounded />
              </Button>
            </Tooltip>

            <Tooltip title="List view">
              <Button
                onClick={handleListView}
                sx={{
                  textTransform: "capitalize",
                  fontSize: "1.2rem",
                  fontWeight: 300,
                  px: 3,
                  color: !isGridView ? "#ff5d46" : "#354049",
                  ":hover": {
                    color: "#ff5d46",
                  },
                }}
              >
                <ViewListRounded />
              </Button>
            </Tooltip>
          </Box>

          <FormControl
            sx={{ width: { xs: "90vw", md: "20vw" }, height: "3rem" }}
          >
            <InputLabel id="sort by" sx={{ textTransform: "capitalize" }}>
              sort by
            </InputLabel>
            <Select
              labelId="sort by"
              id="sort by"
              value={sortOption}
              onChange={handleChange}
              input={<OutlinedInput label="sort by" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
              sx={{ height: "3rem", textTransform: "capitalize", boxShadow: 1 }}
            >
              {options.map((option: any) => (
                <MenuItem
                  key={option}
                  value={option}
                  sx={{
                    textTransform: "capitalize",
                    ":hover": {
                      color: "#ff4605",
                      fontWeight: 900,
                    },
                  }}
                >
                  <Checkbox checked={sortOption.indexOf(option) > -1} />
                  <ListItemText primary={option} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <MainSection isGridView={isGridView} />
    </Container>
  );
}

export default ResultsHeader;
