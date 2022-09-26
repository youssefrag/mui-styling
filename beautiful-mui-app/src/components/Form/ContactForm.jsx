import {
  Autocomplete,
  FormControl,
  FormGroup,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { contactData } from "../../Data/ContactData";

const roles = ["Software Dev", "Architect", "Designer", "Business Analyst"];
const skills = ["React", "Angular", "Python", "NodeJS", "Machine Learning"];

export const ContactForm = () => {
  return (
    <Paper>
      <form>
        <FormControl>
          <FormGroup row>
            <TextField id="name" name="name" label="Name" variant="outlined" />
            <Autocomplete
              options={roles}
              getOptionLabel={(roleOption) => `${roleOption}`}
              renderInput={(params) => {
                return <TextField name="role" {...params} />;
              }}
              renderOption={(props, option) => {
                return <li {...props}>{`${option}`}</li>;
              }}
            />
          </FormGroup>
          <FormGroup row>
            <Select id="skill-select" labelId="skill-select-label">
              {skills.map((skillName) => {
                return (
                  <MenuItem value={skillName} key={skillName}>
                    <ListItemText primary={skillName} />
                  </MenuItem>
                );
              })}
            </Select>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                inputFormat="MM/DD/YYYY"
                renderInput={(params) => {
                  return <TextField {...params} />;
                }}
                onChange={() => {}}
                value=""
              />
            </LocalizationProvider>
          </FormGroup>
        </FormControl>
      </form>
    </Paper>
  );
};
