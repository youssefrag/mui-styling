import { Select } from "@mui/material";
import { minWidth } from "../ContactForm";

export const BeautifulSelect = (props) => {
  return (
    <Select
      {...props}
      id="skill-select"
      labelId="skill-select-label"
      sx={{ minWidth: minWidth, marginRight: 2 }}
      multiple
    />
  );
};
