import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom"
import {useState} from "react";

const drawerWidth = 240;

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
};

function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                <Box component="div" margin={2}>
                    <Link style={linkStyle} to='/'>
                        <Typography
                            variant="box1"
                            component="p"
                            sx={{color : "#000"}}
                        >
                            Users
                        </Typography></Link>
                </Box>

            <Divider />
            <List>
                    <ListItem  disablePadding>
                        <ListItemButton>
                            <Link style={linkStyle} to='/'><Typography
                                variant="box1"
                                component="p"
                                sx={{color : "#000"}}
                            >
                                home
                            </Typography></Link>
                        </ListItemButton>
                    </ListItem>
                <ListItem  disablePadding>
                    <ListItemButton>
                        <Link style={linkStyle} to='/about'>
                            <Typography
                                variant="box1"
                                component="p"
                                sx={{color : "#000"}}
                            >
                                About
                            </Typography></Link>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }} marginBottom={10}>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }} marginLeft={6}>
                        <Link style={linkStyle} to='/'>
                            <Typography
                                variant="h6"
                                component="h6"
                                sx={{color : "#fff"}}
                            >
                                Users
                            </Typography>
                        </Link>
                    </Box>


                    <Box sx={{ display: { xs: 'none', sm: 'block' }, }} marginRight={6}>
                        <Link style={linkStyle} to='/' >
                            <Typography
                                variant="box1"
                                component="span"
                                sx={{color : "#fff"}}
                            >
                                Home
                            </Typography>
                        </Link>
                        <Link style={linkStyle} to='/about'>
                            <Typography
                                variant="box1"
                                component="span"
                                sx={{color : "#fff"}}
                            >
                                About
                            </Typography>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

export default Navbar;
