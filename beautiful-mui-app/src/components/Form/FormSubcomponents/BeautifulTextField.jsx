import { TextField } from "@mui/material";
import { minWidth } from "../ContactForm";

export const BeautifulTextField = (props) => {
  return (
    <TextField
      {...props}
      id="name"
      name="name"
      label="Name"
      variant="outlined"
      sx={{ minWidth: minWidth, marginRight: 2 }}
    />
  );
};
