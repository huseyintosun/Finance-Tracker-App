import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'TRY',
    label: '₺',
  },
];

export default function CurrencyComp() {
  const [currency, setCurrency] = React.useState('TRY');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Box
    >
      <div>
        <TextField
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}