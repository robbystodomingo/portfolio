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
import AddBoxIcon from '@mui/icons-material/AddBox';
import IconButton from '@mui/material/IconButton';


export default function PurchaseOrderPage(){

    const columns = [
        { id: 'itemNumber', label: 'Item number', minWidth: 170 },
        { id: 'description', label: 'Description', minWidth: 170 },
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
      
    
        const [items, setItems] = useState([]);
      
        useEffect(() => {
          loadItems();
        }, []);
      
        const loadItems = async () => {
          const result = await axios.get("/api/v1/item/getAllItems");
          setItems(result.data);
        };
      
        
      
        const [page, setPage] = React.useState(0);
        const [rowsPerPage, setRowsPerPage] = React.useState(10);
      
        const handleChangePage = (event, newPage) => {
          setPage(newPage);
        };
      
        const handleChangeRowsPerPage = (event) => {
          setRowsPerPage(+event.target.value);
          setPage(0);
        };

    return(
        <div className='content_index'>
            <div className='row'>
                <div className='col-md-6'>
                    Left 1
                </div>
                <div className='col-md-6'>
                  <IconButton color="primary" aria-label="add to shopping cart">
                    <AddBoxIcon/>
                  </IconButton>
                </div>
                <Paper sx={{ width: '100%', overflow: 'hidden', justifyContent: 'center' }}>
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
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    Left 2
                </div>
                <div className='col-md-6'>
                    Right 2
                </div>
            </div>
        </div>

    );

}