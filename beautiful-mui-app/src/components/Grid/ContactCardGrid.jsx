import {
  Avatar,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  List,
  ListSubheader,
} from "@mui/material";
import { contactData } from "../../Data/ContactData";

export const ContactCardGrid = () => {
  return (
    <Grid container spacing={2}>
      {contactData.map((contact) => {
        return (
          <Grid item key={contact.name}>
            <Card sx={{ width: 300 }}>
              <CardHeader
                title={contact.name}
                subheader={contact.role}
                avatar={<Avatar>{contact.name[0].toUpperCase() || "A"}</Avatar>}
              />
              <CardContent>
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
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
