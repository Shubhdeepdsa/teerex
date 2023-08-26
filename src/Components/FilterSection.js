import React from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';

const FilterSection = ({ showFilters }) => {
  return (
    <div>
      {showFilters && (
        <div>
          <h2>Filters</h2>
          <FormControlLabel control={<Checkbox />} label="Filter 1" />
          <FormControlLabel control={<Checkbox />} label="Filter 2" />
          {/* Add more filter checkboxes as needed */}
        </div>
      )}
    </div>
  );
};

export default FilterSection;
