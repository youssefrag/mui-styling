import { DataGrid } from "@mui/x-data-grid";
import { contactData } from "../../Data/ContactData";

const getColumns = () => {
  return [
    {
      field: "name",
      headerName: "Name",
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
  return (
    <div style={{ height: 500 }}>
      <DataGrid
        rows={contactData}
        columns={getColumns()}
        headerHeight={60}
        rowHeight={120}
        pageSize={5}
      ></DataGrid>
      ;
    </div>
  );
};
