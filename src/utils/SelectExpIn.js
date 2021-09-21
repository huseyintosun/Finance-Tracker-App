import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const expin = [
  { key: "expense", value: "Enter Expense"},
  { key: "income", value: "Enter Income"},
]


export default function SelectExpIn() {
  const [options, setOptions] = React.useState('Enter Expense');

  const handleChange = (event) => {
    setOptions(event.target.value);
  };

  return (
    <Box
    >
      <div>
        <TextField
        style={{ width: "300px", marginTop: "8px", padding: "5px", justifyContent: "center" }}
          select
          label="Select"
          value={options}
          onChange={handleChange}
          helperText="Please select your option"
        >
          {expin.map((option) => (
            <MenuItem key={option.key} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}