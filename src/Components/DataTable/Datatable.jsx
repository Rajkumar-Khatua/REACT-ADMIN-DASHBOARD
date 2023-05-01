import "./dataTable.scss";
import { DataGrid } from "@mui/x-data-grid";

import { userColumns, userRows } from "../../dataTableInformations";
// import { userRows } from "../../dataTableInformations";
import { Link } from "react-router-dom";
import { Add } from "@mui/icons-material";
import { useState } from "react";

const Datatable = () => {
  //NOTE:-  Its Noe Working Now Need to Fixed it !
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className='cellAction'>
            <Link
              to='/users/test'
              style={{ textDecoration: "none", color: "inherit" }}>
              <div className='viewBtn'>View</div>
            </Link>
            {/* Delete Button */}
            <div
              className='deleteBtn'
              onClick={() => handleDelete(params.row.id)}>
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className='DataTable'>
      <div className='dataTableTitle'>
        <span className='title'>Add New User</span>
        <Link
          to='/users/new'
          className='link'>
          Add new{" "}
          <Add
            className='icon'
            fontSize='small'
          />
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={userColumns.concat(actionColumn)}
        paginationModel={{ page: 0, pageSize: 12, rowsPerPage: 1 }}
        checkboxSelection
        className='DataGrid'
      />
    </div>
  );
};
export default Datatable;
