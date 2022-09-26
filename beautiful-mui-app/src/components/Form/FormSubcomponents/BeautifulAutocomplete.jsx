import { Autocomplete, TextField } from "@mui/material";
import { minWidth } from "../ContactForm";

export const BeautifulAutocomplete = (props) => {
  return (
    <Autocomplete
      {...props}
      sx={{ minWidth: minWidth }}
      isOptionEqualToValue={(option, value) => option === value || value === ""}
      getOptionLabel={(roleOption) => `${roleOption}`}
      renderInput={(params) => {
        return <TextField name="role" {...params} />;
      }}
      renderOption={(props, option) => {
        return <li {...props}>{`${option}`}</li>;
      }}
    />
  );
};
