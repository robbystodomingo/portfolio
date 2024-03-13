import React, { useEffect, useState } from "react";
import axios from "axios";

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


const columns = [
  { id: 'itemNumber', label: 'Item number', minWidth: 170 },
  { id: 'description', label: 'Description', minWidth: 100 },
  {
    id: 'locationCode',
    label: 'Location Code',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'quantity',
    label: 'Quantity',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'unitAmount',
    label: 'Unit Amount',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'amount',
    label: 'Amount',
    minWidth: 170,
    align: 'right'
  },
];

export default function ItemPage() {
  const [items, setItems] = useState([]);

  // const { id } = useParams();

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    const result = await axios.get("/api/v1/item/getAllItems");
    setItems(result.data);
  };

  // const deleteUser = async (id) => {
  //   await axios.delete(`http://localhost:8080/user/${id}`);
  //   loadUsers();
  // };


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    // <div className="container">
    //   <div className="py-4">
    //     <table className="table border shadow">
    //       <thead>
    //         <tr>
    //           <th scope="col">Item number</th>
    //           <th scope="col">Description</th>
    //           <th scope="col">Location Code</th>
    //           <th scope="col">Quantity</th>
    //           <th scope="col">Unit Amount</th>
    //           <th scope="col">Amount</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {items.map((item, index) => (
    //           <tr>
    //             {/* <th scope="row" key={index}>
    //               {index + 1}
    //             </th> */}
    //             <td>{item.itemNumber}</td>
    //             <td>{item.description}</td>
    //             <td>{item.locationCode}</td>
    //             <td>{item.quantity}</td>
    //             <td>{item.unitAmount}</td>
    //             <td>{item.amount}</td>
               
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
<Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {items
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={item.code}>
                    {columns.map((column) => {
                      const value = item[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={items.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>

  );
}