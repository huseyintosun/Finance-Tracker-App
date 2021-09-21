import React from 'react'
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import {  Paper } from '@mui/material';
import ExpenseInput from '../inputs/ExpenseInput';
import IncomeInput from '../inputs/IncomeInput';
import SelectExpIn from '../../utils/SelectExpIn';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



function FormComponent(value) {
    console.log(value)
    return (
        <Grid container style={{ width: "300px", margin: "3px", padding: "5px", justifyContent: "center" }}>
            <Grid item>
                <Item><a
                    href="https://github.com/serhatkoyuncu"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>Finance Tracker Github Repo</h2>
                </a></Item>
                <h2>Add Expense/Income</h2>
                <SelectExpIn/>
                <FormControl
                    size="small"
                    style={{
                        width: "300px",
                        marginTop: "8px",
                        padding: "5px",
                        justifyContent: "center"
                    }}
                >
                    {
                        value === "income" ? <ExpenseInput /> : <IncomeInput />
                    }
                    {/* <ExpenseInput/>
                    <IncomeInput/> */}
                </FormControl>
            </Grid>
        </Grid>
    )
}

export default FormComponent
