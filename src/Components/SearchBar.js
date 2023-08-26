import React from 'react';
import {Box, Button, TextField } from '@mui/material';
import { Filter, FilterAlt } from '@mui/icons-material';
const SearchBar = ({ onFilterClick }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <TextField fullWidth label="Search products..."variant="standard" />
      {/* Show Filter button only on smaller screens */}
      <Button onClick={onFilterClick}sx = {{color:'black'}} className="filter-button">
        <FilterAlt size="large"/>
      </Button>
    </Box>
  );
};

export default SearchBar;
