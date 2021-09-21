import { Icon, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React from 'react'
import { Delete,Edit } from '@mui/icons-material';

function TotalAmount() {


    return (
        <div>
            <h2>Total Amount</h2>
            <Table size="large">
                <TableHead>
                    <TableRow>
                        <TableCell textAlign="center">Expense/Income</TableCell>
                        <TableCell textAlign="center">Amount</TableCell>
                        <TableCell textAlign="center">Delete</TableCell>
                        <TableCell textAlign="center">Edit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                    
                        </TableCell>
                        <TableCell>
                            
                        </TableCell>
                        <TableCell>
                            <Delete/>
                        </TableCell>
                        <TableCell>
                            <Edit/>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default TotalAmount
