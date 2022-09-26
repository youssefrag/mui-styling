import {
  Autocomplete,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  ListItemText,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { contactData } from "../../Data/ContactData";

const roles = ["Software Dev", "Architect", "Designer", "Business Analyst"];
const skills = ["React", "Angular", "Python", "NodeJS", "Machine Learning"];
const defaultRadioValue = "Work From Home";
const minWidth = 300;

export const ContactForm = () => {
  return (
    <Paper>
      <form>
        <FormControl>
          <FormGroup row sx={{ padding: 2, justifyContent: "space-between" }}>
            <TextField
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              sx={{ minWidth: minWidth, marginRight: 2 }}
            />
            <Autocomplete
              sx={{ minWidth: minWidth }}
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
          <FormGroup row sx={{ padding: 2, justifyContent: "space-between" }}>
            <Select
              id="skill-select"
              labelId="skill-select-label"
              sx={{ minWidth: minWidth, marginRight: 2 }}
            >
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
                  return <TextField {...params} sx={{ minWidth: minWidth }} />;
                }}
                onChange={() => {}}
                value=""
              />
            </LocalizationProvider>
          </FormGroup>
          <FormGroup row sx={{ padding: 2, justifyContent: "space-between" }}>
            <FormGroup sx={{ minWidth: minWidth, marginRight: 2 }}>
              <FormLabel component="legend" htmlFor="preference-type-radio">
                Work Preference
              </FormLabel>
              <RadioGroup
                aria-label="preference"
                id="preference-type-radio"
                name="preference"
                value={defaultRadioValue}
              >
                <FormControlLabel
                  label={defaultRadioValue}
                  value={defaultRadioValue}
                  control={<Radio />}
                />
                <FormControlLabel
                  label="Hybrid"
                  value="Hybrid"
                  control={<Radio />}
                />
                <FormControlLabel
                  label="In Office"
                  value="In Office"
                  control={<Radio />}
                />
              </RadioGroup>
            </FormGroup>
            <Stack>
              <Button>Save</Button>
              <Button>Clear</Button>
            </Stack>
          </FormGroup>
        </FormControl>
      </form>
    </Paper>
  );
};
