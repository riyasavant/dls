import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectComponent({data, label, onChange}) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data[0].value}
          label="Age"
          onChange={onChange}
        >
            {data.map((item) => {
                return <MenuItem value={item.value}>{item.name}</MenuItem>
            })}
        </Select>
      </FormControl>
    </Box>
  );
}