import { TextField } from "@mui/material";
import { CalendarToday } from "@mui/icons-material";
import { minWidth } from "../ContactForm";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";

const popperSx = {
  "& .MuiPaper-root": {
    color: "yellow",
  },
  "& [role=grid]": {
    backgroundColor: "rgba(0,0,0,0.1)",
    "& button": {
      backgroundColor: "rgba(0,0,0,0.2)",
    },
  },
};

export const BeautifulDatePicker = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        {...props}
        label="Date"
        views={["day"]}
        inputFormat="MM/DD/YYYY"
        renderInput={(params) => {
          return <TextField {...params} sx={{ minWidth: minWidth }} />;
        }}
        InputProps={{
          sx: {
            "& .MuiSvgIcon-root": {
              color: "primary.main",
            },
          },
        }}
        components={{
          OpenPickerIcon: CalendarToday,
        }}
        PopperProps={{ sx: popperSx }}
      />
    </LocalizationProvider>
  );
};
