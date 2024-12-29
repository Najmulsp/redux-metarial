import React from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '10px', background: '#f5f5f5' }}>
            <Typography variant="h5" color="textPrimary">
                Redux Meterial
            </Typography>
            <Button component={Link} to="/" variant="contained" color="primary">
                Home
            </Button>
            <Button component={Link} to="/my-books" variant="contained" color="secondary">
                Books
            </Button>
            <Button component={Link} to="/counter-view" variant="contained" color="success">
                Counts
            </Button>
            
        </div>
    );
};

export default Navbar;
