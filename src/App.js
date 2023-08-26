import { Box, Container, Grid } from '@mui/material';
import { styled } from '@mui/system';
import Navbar from './Components/Navbar';
import FilterSection from './Components/FilterSection';
import SearchBar from './Components/SearchBar';
import ProductSection from './Components/ProductSection';
import { useState } from 'react';

const StyledApp = styled('div')(({ theme }) => ({
  // background: `linear-gradient(135deg, rgb(245, 255, 253), rgb(131, 209, 252), rgb(244, 89, 6))`,
  background: 'white',
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
          <Grid item md={3}>
            <FilterSection showFilters={showFilters} />
          </Grid>
          <Grid item xs={12} md={9}>
            <Grid item xs={12} md={12}>
              <SearchBar onFilterClick={() => setShowFilters(!showFilters)} />
            </Grid>
            <Grid item xs={12} md={12} sx = {{mt : '100px'}}>
              <ProductSection />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledApp>
  );
}

export default App;
