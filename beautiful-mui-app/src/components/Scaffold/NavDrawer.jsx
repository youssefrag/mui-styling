import {
  AppBar,
  Drawer,
  Toolbar,
  Typography,
  List,
  ListItem,
} from "@mui/material";

import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { ContactForm } from "../Form/ContactForm";

export const NavDrawer = () => {
  return (
    <div>
      <BrowserRouter>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" noWrap>
              Advanced Material-UI Styling
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="temporary" open={true}>
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
        <main>
          <Routes>
            <Route path={"/"} element={<ContactForm />} />
            <Route path={"/form"} element={<ContactForm />} />
            <Route path={"/grid"} element={<div>Grid</div>} />
            <Route path={"/table"} element={<div>Table</div>} />
            <Route path={"/datagrid"} element={<div>DataGrid</div>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};
