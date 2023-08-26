import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';
const ProductSection = ({ columns }) => {
    const PRODUCT_API = 'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json';
    const [products, setProducts] = useState([]);
    async function fetchProductData() {
        const response = await fetch(PRODUCT_API);
        const data = await response.json();
        setProducts(data);
    }
    useEffect(() => {
        fetchProductData();
    }, []);
    return (
        <Grid container spacing={2}>
            {products.map((product, index) => (
                <Grid key={index} item xs={12} sm={6} md={columns === 3 ? 4 : 3}>
                    <Paper
                        elevation={3}
                        sx={{
                            padding: '16px',
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            minHeight: '320px', // Increased height to accommodate additional elements
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div>
                            <img src={product.imageURL} alt={product.name} style={{ maxWidth: '100%', maxHeight: '180px', alignSelf: 'center' }} />
                            <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>
                                {product.name}
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'rgba(0, 0, 0, 0.8)' }}>
                                {product.description}
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1 }}>
                                Type: {product.type}
                            </Typography>
                            <Typography variant="h6" sx={{ mt: 2 }}>
                                Price: ${product.price.toFixed(2)}
                            </Typography>
                        </div>
                        <Button variant="contained" sx={{ mt: 2, background: '#83d1fc' }}>
                            Add to Cart
                        </Button>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
};
export default ProductSection;
