import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { contactData } from "../../Data/ContactData";

const getColumns = () => {
  return [
    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
      renderCell: (cellValues) => {
        return (
          <Box sx={{ color: "primary.main", fontSize: 18, fontWeight: "bold" }}>
            {cellValues.value}
          </Box>
        );
      },
    },
    {
      field: "role",
      headerName: "Role",
    },
    {
      field: "skills",
      headerName: "Skills",
      renderCell: (cellValues) => {
        return <div>{cellValues.value ? cellValues.value[0] : ""}</div>;
      },
    },
    {
      field: "startDate",
      headerName: "Start Date",
    },
    {
      field: "preference",
      headerName: "Work Preference",
    },
  ];
};

export const ContactDataGrid = () => {
  const rows = [...contactData];
  return (
    <div style={{ height: 500 }}>
      <DataGrid
        rows={rows}
        columns={getColumns()}
        headerHeight={60}
        rowHeight={120}
        pageSize={5}
      ></DataGrid>
      ;
    </div>
  );
};
