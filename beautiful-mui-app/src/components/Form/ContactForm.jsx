import { useState } from "react";
import {
  Alert,
  AlertTitle,
  Autocomplete,
  Button,
  Checkbox,
  Dialog,
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

import { contactData } from "../../Data/ContactData";
import { BeautifulTextField } from "./FormSubcomponents/BeautifulTextField";
import { BeautifulAutocomplete } from "./FormSubcomponents/BeautifulAutocomplete";
import { BeautifulSelect } from "./FormSubcomponents/BeautifulSelect";
import { BeautifulDatePicker } from "./FormSubcomponents/BeautifulDatePicker";
import { BeautifulRadios } from "./FormSubcomponents/BeautifulRadios";

const roles = ["Software Dev", "Architect", "Designer", "Business Analyst"];
const skills = ["React", "Angular", "Python", "NodeJS", "Machine Learning"];
export const defaultRadioValue = "Work From Home";
export const minWidth = 300;

const paperInputsStyle = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "1px solid",
      borderColor: "primary.main",
    },
  },
  "& .MuiOutlinedInput-root:hover": {
    "& fieldset": {
      borderColor: "primary.light",
    },
  },
  "& .MuiFormLabel-root": {
    color: "primary.dark",
  },
};

export const ContactForm = () => {
  const today = new Date();
  const getDefaultFormValues = () => {
    return {
      id: contactData.length + 1,
      name: "",
      role: "",
      skills: [],
      startDate: `${
        today.getMonth() + 1
      }/${today.getDate()}/${today.getFullYear()}`,
      preference: defaultRadioValue,
    };
  };

  const [formValues, setFormValues] = useState(getDefaultFormValues());

  const [alertOpen, setAlertOpen] = useState(false);

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

  const handleSubmit = () => {
    contactData.push(formValues);
    setAlertOpen(true);
    clearValues();
  };

  const handleClear = () => {
    clearValues();
  };

  const clearValues = () => {
    setFormValues(getDefaultFormValues());
  };

  return (
    <>
      <Paper sx={paperInputsStyle}>
        <form>
          <FormControl>
            <FormGroup row sx={{ padding: 2, justifyContent: "space-between" }}>
              <BeautifulTextField
                onChange={handleTextFieldChange}
                value={formValues.name}
              />
              <BeautifulAutocomplete
                onInputChange={handleAutoCompleteChange}
                value={formValues.role || ""}
                options={roles}
              />
            </FormGroup>
            <FormGroup row sx={{ padding: 2, justifyContent: "space-between" }}>
              <BeautifulSelect
                onChange={handleSelectChange}
                value={formValues.skills || ""}
              >
                {skills.map((skillName) => {
                  return (
                    <MenuItem value={skillName} key={skillName}>
                      <Checkbox
                        checked={formValues.skills.includes(skillName)}
                      />
                      <ListItemText primary={skillName} />
                    </MenuItem>
                  );
                })}
              </BeautifulSelect>
              <BeautifulDatePicker
                onChange={handleDatePickerChange}
                value={formValues.startDate}
              />
            </FormGroup>
            <FormGroup row sx={{ padding: 2, justifyContent: "space-between" }}>
              <BeautifulRadios
                preference={formValues.preference}
                handleRadioChange={handleRadioChange}
              />
              <Stack>
                <Button onClick={handleSubmit}>Save</Button>
                <Button onClick={handleClear}>Clear</Button>
              </Stack>
            </FormGroup>
          </FormControl>
        </form>
      </Paper>
      <Dialog
        open={alertOpen}
        onClose={() => {
          setAlertOpen(false);
        }}
      >
        <Alert
          onClose={() => {
            setAlertOpen(false);
          }}
        >
          <AlertTitle>Success!</AlertTitle>
          Form submitted
        </Alert>
      </Dialog>
    </>
  );
};
