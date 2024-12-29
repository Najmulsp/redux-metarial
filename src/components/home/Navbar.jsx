import React from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CalculateIcon from '@mui/icons-material/Calculate';

const Navbar = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '10px', background: '#f5f5f5' }}>
            <Typography variant="h5" color="textPrimary">
                Redux Meterial
            </Typography>
            <Button component={Link} to="/" variant="contained" color="primary">
            <AccountBalanceIcon />  Home
            </Button>
            <Button component={Link} to="/my-books" variant="contained" color="secondary">
            <LibraryBooksIcon />   Books
            </Button>
            <Button component={Link} to="/counter-view" variant="contained" color="success">
            <CalculateIcon />   Counts
            </Button>
            
        </div>
    );
};

export default Navbar;
