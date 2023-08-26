import React from 'react';
import { Paper, FormGroup, FormControlLabel, Checkbox, Typography } from '@mui/material';
const FilterSection = ({ showFilters }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: '16px',
        marginTop: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white background
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Slight box shadow
        display: showFilters ? 'block' : 'none', // Toggle display based on showFilters
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom>
        Filters
      </Typography>
      <FormGroup sx={{ mt: 2 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
          Colour
        </Typography>
        <FormControlLabel control={<Checkbox />} label="Red" />
        <FormControlLabel control={<Checkbox />} label="Blue" />
        <FormControlLabel control={<Checkbox />} label="Green" />
      </FormGroup>
      <FormGroup sx={{ mt: 2 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
          Gender
        </Typography>
        <FormControlLabel control={<Checkbox />} label="Men" />
        <FormControlLabel control={<Checkbox />} label="Women" />
      </FormGroup>
      <FormGroup sx={{ mt: 2 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
          Price
        </Typography>
        <FormControlLabel control={<Checkbox />} label="0 - Rs 250" />
        <FormControlLabel control={<Checkbox />} label="Rs 251 - 450" />
        <FormControlLabel control={<Checkbox />} label="Rs 450" />
      </FormGroup>
      <FormGroup sx={{ mt: 2 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
          Type
        </Typography>
        <FormControlLabel control={<Checkbox />} label="Polo" />
        <FormControlLabel control={<Checkbox />} label="Hoodie" />
        <FormControlLabel control={<Checkbox />} label="Basic" />
      </FormGroup>
    </Paper>
  );
};

export default FilterSection;
