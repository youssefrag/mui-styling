import { useState } from "react";
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
  const today = new Date();
  const getDefaultFormValues = () => {
    return {
      id: contactData.length + 1,
      name: "",
      skills: [],
      startDate: `${
        today.getMonth() + 1
      }/${today.getDate()}/${today.getFullYear()}`,
      preference: defaultRadioValue,
    };
  };

  const [formValues, setFormValues] = useState(getDefaultFormValues());

  const handleTextFieldChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleAutoCompleteChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
    setFormValues({
      ...formValues,
      role: value || "",
    });
  };

  const handleSelectChange = (event) => {
    const {
      target: { value },
    } = event;
    setFormValues({
      ...formValues,
      skills: typeof value === "string" ? value.split(", ") : value,
    });
  };

  const handleDatePickerChange = (value) => {
    setFormValues({
      ...formValues,
      startDate: `${value.month() + 1}/${value.date()}/${value.year()}`,
    });
  };

  const handleRadioChange = (event, value) => {
    const { name } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

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
              onChange={handleTextFieldChange}
              value={formValues.name}
            />
            <Autocomplete
              sx={{ minWidth: minWidth }}
              onInputChange={handleAutoCompleteChange}
              value={formValues.role || ""}
              options={roles}
              isOptionEqualToValue={(option, value) =>
                option === value || value === ""
              }
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
              onChange={handleSelectChange}
              value={formValues.skills || ""}
              multiple
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
                onChange={handleDatePickerChange}
                value={formValues.startDate}
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
                onChange={handleRadioChange}
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
