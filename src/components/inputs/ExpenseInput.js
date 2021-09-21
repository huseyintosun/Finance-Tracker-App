import { Button, Input,Select,MenuItem } from '@mui/material';
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { expenseNumber } from '../../redux/actions/actions'
import SelectCurrency from '../../utils/SelectCurrency';


function ExpenseInput(props) {
    const [number, setNumber] = useState()
    const totalExpense = useSelector((state) => state.expense.totalExpense)
    const dispatch = useDispatch()
    return (
        <>
            <Input
                size="large"
                margin="dense"
                name="expense"
                placeholder="Expense"
                required
                type="number"
                value={number}
                onChange={(e)=> setNumber(e.target.value)}
            />
            <SelectCurrency/>
            <Button
            style={{ width: "300px", marginTop: "8px", padding: "5px", justifyContent: "center" }}
                variant="contained"
                color="success"
                type="submit"
                size="large"
                onClick={()=>dispatch(expenseNumber(number))}
            >{false ? "Update" : "Add"}</Button>
            <h3>Total expense : <span className="number">{totalExpense}</span></h3>
        </>
    )
}

export default ExpenseInput
