import { Grid, Paper, Typography, Button } from '@mui/material';
import React, { useState, useEffect } from 'react';

const ProductSection = () => {
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
                <Grid key={index} item xs={12} sm={6} md={4}>
                    <Paper
                        elevation={0}
                        sx={{
                            background: 'transparent',
                            padding: '16px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            minHeight: '320px', // Increased height to accommodate additional elements
                        }}
                    >
                        <div>
                            <img src={product.imageURL} alt={product.name} style={{ maxWidth: '100%', maxHeight: '180px', alignSelf: 'center' }} />
                            <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>
                                {product.name}
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'rgb(0, 0, 0, 0.8)' }}>
                                {product.description}
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1 }}>
                                Type: {product.type}
                            </Typography>
                            <Typography variant="h6" sx={{ mt: 2 }}>
                                Price: ${product.price.toFixed(2)}
                            </Typography>
                        </div>
                        <Button
                            variant="contained"
                            sx={{
                                mt: 2,
                                background: 'linear-gradient(135deg, #83d1fc, #f25907)',
                                transition: 'background 1s ease',
                                '&:hover': {
                                    background: 'linear-gradient(135deg, #f25907, #83d1fc)',
                                },
                            }}
                        >
                            Add to Cart
                        </Button>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductSection;
