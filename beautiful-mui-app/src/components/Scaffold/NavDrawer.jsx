import { useEffect, useState } from "react";
import {
  AppBar,
  Drawer,
  Toolbar,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import { Theme, useTheme, ThemeProvider } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { ContactForm } from "../Form/ContactForm";
import { ContactCardGrid } from "../Grid/ContactCardGrid";
import { ContactTable } from "../Table/ContactTable";
import { ContactDataGrid } from "../DataGrid/ContactDataGrid";
import { BeautifulTheme } from "../../Theme/BeautifulTheme";

const drawerWidth = 240;

const themedStyles = (theme: Theme, responsiveDrawerWidth) => {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      "& .MuiBackdrop-root": {
        display: "none",
      },
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: "rgba(120,120,120,0.2)",
    },
    content: {
      padding: 4,
      minWidth: drawerWidth,
      marginLeft: 0,
    },
    contentShift: {
      minWidth: drawerWidth,
      marginLeft: drawerWidth,
    },
  };
};

export const NavDrawer = () => {
  const theme = useTheme();
  const greaterThan375 = useMediaQuery("(min-width: 376px)");
  const [open, setOpen] = useState(greaterThan375);
  const responsiveDrawerWidth = greaterThan375 ? drawerWidth : "100%";

  useEffect(() => {
    setOpen(greaterThan375);
  }, [greaterThan375]);

  return (
    <div>
      <BrowserRouter>
        <AppBar
          position="fixed"
          sx={themedStyles(theme, responsiveDrawerWidth).appBar}
        >
          <Toolbar>
            <Typography variant="h6" noWrap>
              Advanced Material-UI Styling
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          disableEnforceFocus
          variant="temporary"
          open={open}
          sx={themedStyles.drawer}
          PaperProps={{ elevation: 9, sx: themedStyles.drawerPaper }}
        >
          <Toolbar />
          <div>
            <List>
              {[
                { text: "Input Form", route: "/form" },
                { text: "Contact Card Grid", route: "/grid" },
                { text: "Table", route: "/table" },
                { text: "Data Grid", route: "/datagrid" },
              ].map((nav, index) => (
                <ListItem key={nav.text}>
                  <Link to={nav.route}>{nav.text}</Link>
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
        <main style={{ ...themedStyles.content, ...themedStyles.contentShift }}>
          <Toolbar />
          <ThemeProvider theme={BeautifulTheme}>
            <Routes>
              <Route path={"/"} element={<ContactForm />} />
              <Route path={"/form"} element={<ContactForm />} />
              <Route path={"/grid"} element={<ContactCardGrid />} />
              <Route path={"/table"} element={<ContactTable />} />
              <Route path={"/datagrid"} element={<ContactDataGrid />} />
            </Routes>
          </ThemeProvider>
        </main>
      </BrowserRouter>
    </div>
  );
};
