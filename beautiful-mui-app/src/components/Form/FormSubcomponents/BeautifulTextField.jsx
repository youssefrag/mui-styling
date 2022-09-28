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
      sx={{
        minWidth: minWidth,
        marginRight: { md: 2 },
        marginBottom: { xs: 2, md: 0 },
        // zIndex: "drawer"
        "& .MuiOutlinedInput-root.Mui-focused": {
          "& fieldset": {
            borderColor: "primary.dark",
          },
        },
        "& .MuiOutlinedInput-root:hover": {
          "& fieldset.MuiOutlinedInput-notchedOutline": {
            borderColor: "orange",
          },
        },
      }}
    />
  );
};
