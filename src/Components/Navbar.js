import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import { MenuBook } from '@mui/icons-material';
import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
export default function Navbar() {
    const navItems = ['Home', 'About', 'Contact'];
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuBook />
                    </IconButton>
                    <Typography
                        variant="h2"
                        align="left"
                        color="grey.700"
                        sx={{
                            backgroundcolor: "primary",
                            backgroundImage: `linear-gradient(45deg, rgb(131, 209, 252), rgb(244, 89, 6))`,
                            backgroundSize: "100%",
                            backgroundRepeat: "repeat",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            fontWeight: 'bold'
                        }}>
                        TeeRex Store
                    </Typography>
                </Toolbar>
                <Box sx={{ display: { xs: 'none', sm: 'block' }, mt: '20px', mr: '20px' }}>
                    <Box sx={{ display: { xs: 'none', sm: 'block' }, alignSelf: 'flex-end' }}>
                        <Button varient="outlined" sx={{ color: 'black', ml: 2 }} size='large'>Products</Button>
                        <Button sx={{ backgroundColor: '#83d1fc', color: 'black', ml: 2 }} endIcon={<ShoppingCartIcon />}>About Us</Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
