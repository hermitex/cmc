import {
  AppsOutlined,
  CompareArrows,
  FormatListBulletedOutlined,
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
  Input,
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

const sortOptions = [
  "most relevant",
  "date listed: newest",
  "price: lowest",
  "price: highest",
  "mileage: lowest",
  "mileage: highest",
];

const viewOptions = [
  "all",
  "10 per page",
  "15 per page",
  "20 per page",
  "25 per page",
  "30 per page",
];

function ResultsHeader() {
  const [sortOption, setsortOption] = React.useState<string[]>([]);
  const [viewOption, setViewOption] = React.useState<string[]>([]);
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

  const handleSortChange = (event: SelectChangeEvent<typeof sortOption>) => {
    const {
      target: { value },
    } = event;
    setsortOption(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleViewChange = (event: SelectChangeEvent<typeof sortOption>) => {
    const {
      target: { value },
    } = event;
    setViewOption(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <Box sx={{ bgcolor: "#ffffff", width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          justifyItems: "center",
          alignContent: "center",
          alignItems: "center",
          bgcolor: "#1f2139",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          // width: "100%",
          px: 3,
          my: 3,
          py: 1.5,
          height: "auto",
          color: "#fff",
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
              gap: 3,
              color: "#fff",
            }}
          >
            <FormControl
              sx={{ width: { xs: "90vw", md: "20vw" }, height: "3rem" }}
            >
              <InputLabel
                sx={{ textTransform: "capitalize",  color: '#fff' }}
                htmlFor="sort by"
              >
                sort by
              </InputLabel>
              <Select
                labelId="sort by"
                id="sort by"
                value={sortOption}
                onChange={handleSortChange}
                placeholder="Sort By"
                input={<OutlinedInput  />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
                sx={{
                  height: "3rem",
                  textTransform: "capitalize",
                  boxShadow: 0,
                  bgcolor: "#2b2d42",
                  "::placeholder": {
                    color: "#fff",
                  },
                  color: '#ed1f1f'
                }}
              >
                {sortOptions.map((option: any) => (
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
            <FormControl
              sx={{ width: { xs: "90vw", md: "20vw" }, height: "3rem" }}
            >
              <InputLabel
                sx={{ textTransform: "capitalize", color: '#fff' }}
                htmlFor="view"
              >
                view
              </InputLabel>
              <Select
                labelId="view"
                id="view"
                value={viewOption}
                onChange={handleViewChange}
                placeholder="View"
                input={<OutlinedInput />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
                sx={{
                  height: "3rem",
                  textTransform: "capitalize",
                  boxShadow: 0,
                  bgcolor: '#2b2d42',
                  "::placeholder": {
                    color: "#fff",
                  },
                  color: '#ed1f1f'
                }}
              >
                {viewOptions.map((option: any) => (
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
                    <Checkbox checked={viewOption.indexOf(option) > -1} />
                    <ListItemText primary={option} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Box sx={{ display: { xs: "none", lg: "flex" } }}>
          <Tooltip title="Grid view">
            <Button
              onClick={handleGridView}
              sx={{
                textTransform: "capitalize",
                fontSize: "1.2rem",
                fontWeight: 300,
                px: 3,
                color: isGridView ? "#ED1F1F" : "#FFF",
                ":hover": {
                  color: "#ED1F1F",
                },
              }}
            >
              <AppsOutlined />
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
                color: !isGridView ? "#ED1F1F" : "#FFF",
                ":hover": {
                  color: "#ED1F1F",
                },
              }}
            >
              <FormatListBulletedOutlined />
            </Button>
          </Tooltip>
        </Box>
      </Box>
      <MainSection isGridView={isGridView} />
    </Box>
  );
}

export default ResultsHeader;
