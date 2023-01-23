import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

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

function MultipleSelect({ input }: { input: any }) {
  const [data, setData] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof data>) => {
    const {
      target: { value },
    } = event;
    setData(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <FormControl sx={{ m: 1, height: "3rem" }}>
      <InputLabel id={input.name} sx={{ textTransform: "capitalize" }}>
        {input.label}
      </InputLabel>
      <Select
        labelId={input.name}
        id={input.name}
        multiple={input.isMultiple}
        value={data}
        onChange={handleChange}
        input={<OutlinedInput label={input.label} />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
        sx={{ height: "3rem" }}
      >
        {input.options.map((option: any) => (
          <MenuItem key={option} value={option}>
            <Checkbox checked={data.indexOf(option) > -1} />
            <ListItemText primary={option} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default MultipleSelect;
