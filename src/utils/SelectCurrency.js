import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import {currencies} from './currencies'


export default function SelectCurrency() {
  const [currency, setCurrency] = React.useState('TRY');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Box
    >
      <div>
        <TextField
        style={{ width: "300px", marginTop: "8px", padding: "5px", justifyContent: "center" }}
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}