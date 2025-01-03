// import React from 'react';
// import { Button, Typography } from '@mui/material';
// import { Link } from 'react-router-dom';
// import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
// import CalculateIcon from '@mui/icons-material/Calculate';

// const Navbar = () => {
//     return (
//         <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '10px', background: '#f5f5f5' }}>
//             <Typography variant="h5" color="textPrimary">
//                 Redux Meterial
//             </Typography>
//             <Button component={Link} to="/" variant="contained" color="primary">
//             <AccountBalanceIcon />  Home
//             </Button>
//             <Button component={Link} to="/my-books" variant="contained" color="secondary">
//             <LibraryBooksIcon />   Books
//             </Button>
//             <Button component={Link} to="/counter-view" variant="contained" color="success">
//             <CalculateIcon />   Counts
//             </Button>
            
//         </div>
//     );
// };

// export default Navbar;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import DeblurIcon from '@mui/icons-material/Deblur';
import { Link, NavLink } from 'react-router-dom';
import { Tab, Tabs } from '@mui/material';
import { Margin } from '@mui/icons-material';

const pages = [
    {
        name: "Home",
        to: "/"
    },
    {
        name: "Books",
        to: "/my-books"
    },
    {
        name: "Count",
        to: "/counter-view"
    },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <DeblurIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Redux Material
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <Box key={page.name} onClick={handleCloseNavMenu}>
                  <NavLink component={Link} to={page.to}  sx={{ textAlign: 'center', marginLeft: "20px" }}>{page.name}</NavLink>
                  
                </Box>
              ))}
              {/* <Tabs>

              
              {pages.map((page) => (
              <Tab
                key={page.name}
                to={page.to}
                onClick={handleCloseNavMenu}
                // style={{color: 'white', display: 'block', marginLeft: "20px" }}
                sx={{ my: 2, color: 'white', display: 'block', marginLeft: "20px" }}
              >
                {page.name}
              </Tab>
            ))}
              </Tabs> */}
            </Menu>
          </Box>
          <DeblurIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <NavLink
                key={page.name}
                to={page.to}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', marginLeft: "20px" }}
              >
                {page.name}
              </NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
