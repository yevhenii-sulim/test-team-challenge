import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { styleSelect } from "./StatusSelector.styled";

interface TypePropSelect {
  status: string;
  setStatus: (event: string) => void;
}

export default function StatusSelector({ status, setStatus }: TypePropSelect) {
  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  return (
    <Box sx={{ marginBottom: "16px" }}>
      <label htmlFor='status'>Додати статус</label>
      <FormControl sx={styleSelect}>
        <Select id='status' value={status} onChange={handleChange}>
          <MenuItem value={"До виконання"}>До виконання</MenuItem>
          <MenuItem value={"В роботі"}>В роботі</MenuItem>
          <MenuItem value={"Виконано"}>Виконано</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
