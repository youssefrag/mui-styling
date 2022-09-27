import { useState } from "react";
import {
  Avatar,
  Button,
  Box,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  List,
  ListSubheader,
  Collapse,
} from "@mui/material";
import { contactData } from "../../Data/ContactData";

const contactListHeight = 23;
let maxSkills = 1;

export const ContactCardGrid = () => {
  const [open, setOpen] = useState(true);

  return (
    <Box m={1}>
      <Button
        variant="contained"
        sx={{ marginBottom: 3 }}
        onClick={() => setOpen(!open)}
      >
        Collapse
      </Button>
      <Grid container spacing={2}>
        {contactData.map((contact) => {
          maxSkills =
            contact.skills.length > maxSkills
              ? contact.skills.length
              : maxSkills;
          return (
            <Grid item key={contact.name}>
              <Card sx={{ width: 300, boxShadow: 6 }}>
                <CardHeader
                  title={contact.name}
                  subheader={contact.role}
                  avatar={
                    <Avatar sx={{ backgroundColor: "primary.main" }}>
                      {contact.name[0].toUpperCase() || "A"}
                    </Avatar>
                  }
                  sx={{
                    borderBottom: "1px solid",
                    borderBottomColor: "primary.main",
                  }}
                />
                <Collapse in={open}>
                  <CardContent
                    sx={{ height: 104 + maxSkills * contactListHeight }}
                  >
                    <Typography>
                      <strong>Start Date:</strong> {contact.startDate}
                    </Typography>
                    <Typography>
                      <strong>Work Preference:</strong> {contact.preference}
                    </Typography>
                    <List
                      sx={{
                        listStyle: "list-item",
                        listStyleType: "circle",
                        paddingLeft: 2,
                      }}
                      subheader={
                        <ListSubheader
                          sx={{
                            right: 16,
                            position: "inherit",
                            fontSize: "1.25rem",
                            color: "black",
                            paddingLeft: 0,
                          }}
                        >
                          Skills:
                        </ListSubheader>
                      }
                    >
                      {contact.skills.map((skill) => {
                        return (
                          <li
                            style={{
                              paddingTop: 0,
                              paddingLeft: 0,
                              paddingBottom: "2px",
                            }}
                            key={skill}
                          >
                            {skill}
                          </li>
                        );
                      })}
                    </List>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
