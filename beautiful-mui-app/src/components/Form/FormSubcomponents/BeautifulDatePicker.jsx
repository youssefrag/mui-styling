import { TextField } from "@mui/material";
import { minWidth } from "../ContactForm";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";

export const BeautifulDatePicker = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        {...props}
        inputFormat="MM/DD/YYYY"
        renderInput={(params) => {
          return <TextField {...params} sx={{ minWidth: minWidth }} />;
        }}
      />
    </LocalizationProvider>
  );
};
