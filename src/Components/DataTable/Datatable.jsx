import "./dataTable.scss";
import { DataGrid } from "@mui/x-data-grid";

import { userColumns } from "../../dataTableInformations";
import { userRows } from "../../dataTableInformations";

const Datatable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className='cellAction'>
            <div className='viewBtn'>View</div>
            <div className='deleteBtn'>Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className='DataTable'>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        paginationModel={{ page: 0, pageSize: 12, rowsPerPage: 1, }}
        checkboxSelection
        className='DataGrid'
      />
    </div>
  );
};
export default Datatable;
