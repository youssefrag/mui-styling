import {
  AppBar,
  Drawer,
  Toolbar,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import { Theme, useTheme } from "@mui/material/styles";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { ContactForm } from "../Form/ContactForm";
import { ContactCardGrid } from "../Grid/ContactCardGrid";
import { ContactTable } from "../Table/ContactTable";
import { ContactDataGrid } from "../DataGrid/ContactDataGrid";

const drawerWidth = 240;

const themedStyles = (theme: Theme) => {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
  };
};

const styles = {
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

export const NavDrawer = () => {
  const theme = useTheme();
  return (
    <div>
      <BrowserRouter>
        <AppBar position="fixed" sx={themedStyles(theme).appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Advanced Material-UI Styling
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          disableEnforceFocus
          variant="temporary"
          open={true}
          sx={styles.drawer}
          PaperProps={{ elevation: 9, sx: styles.drawerPaper }}
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
        <main style={{ ...styles.content, ...styles.contentShift }}>
          <Toolbar />
          <Routes>
            <Route path={"/"} element={<ContactForm />} />
            <Route path={"/form"} element={<ContactForm />} />
            <Route path={"/grid"} element={<ContactCardGrid />} />
            <Route path={"/table"} element={<ContactTable />} />
            <Route path={"/datagrid"} element={<ContactDataGrid />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};
