import { Button, Input, Select, MenuItem } from '@mui/material';
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incomeNumber } from '../../redux/actions/actions'
import SelectCurrency from '../../utils/SelectCurrency';

function IncomeInput(props) {
    const [number, setNumber] = useState()
    const totalIncome = useSelector((state) => state.income.totalIncome)
    const dispatch = useDispatch()
    return (
        <>
            <Input
                size="large"
                margin="dense"
                name="income"
                placeholder="Income"
                required
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <SelectCurrency/>
            <Button
                variant="contained"
                color="success"
                type="submit"
                size="large"
                onClick={() => dispatch(incomeNumber(number))}
            >{false ? "Update" : "Add"}</Button>
            <h3>Total income : <span className="number">{totalIncome}</span></h3>
        </>
    )
}

export default IncomeInput
