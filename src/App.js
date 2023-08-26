import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import { styled } from '@mui/system';
import Navbar from './Components/Navbar';
import FilterSection from './Components/FilterSection';
import SearchBar from './Components/SearchBar';
import ProductSection from './Components/ProductSection';
const StyledApp = styled('div')(({ theme }) => ({
  background: 'linear-gradient(135deg, rgb(245, 255, 253), rgb(131, 209, 252), rgb(244, 89, 6))',
  backgroundSize: '200% 200%',
  animation: 'gradientAnimation 10s ease infinite',
}));
function App() {
  const [showFilters, setShowFilters] = useState(false);
  return (
    <StyledApp>
      <Navbar />
      <Container sx={{ paddingTop: '20px' }}>
        <Grid container spacing={2}>
          <Grid item md={3} xs={showFilters ? 12 : false}>
            <FilterSection showFilters={showFilters} />
          </Grid>
          <Grid item xs={showFilters ? 12 : 9} md={showFilters ? 9 : 12}>
            <Grid item xs={12} md={12}>
              <SearchBar onFilterClick={() => setShowFilters(!showFilters)} />
            </Grid>
            <Grid item xs={12} md={12} sx={{ mt: '50px' }}>
              <ProductSection columns={showFilters ? 3 : 4} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledApp>
  );
}
export default App;
