import React, { useState } from 'react';
import { Drawer, AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Typography, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Logout } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; // Optional, for routing

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate(); // For navigating to different pages

    const toggleDrawer = (state) => {
        setOpen(state);
    };

    const menuItems = [
        { text: 'Home', path: '/admin' },
        { text: 'About', path: '/admin/text' },
        { text: 'Donations', path: '/admin/donations' },
        { text: 'Gallery', path: '/admin/gallery' },
    ];

    // Function to handle menu item click
    const handleMenuItemClick = (path) => {
        console.log(`Navigating to: ${path}`);
        navigate(path); // Navigate to the corresponding path
    };

    return (
        <>
            {/* Top AppBar */}
            <AppBar position="static" sx={{ bgcolor: "#282c34", padding: '0 16px' }}>
                <Toolbar>
                    {/* Menu Icon for Drawer */}
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={() => toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* Title */}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Admin Panel
                    </Typography>

                    {/* Logout Icon */}
                    <IconButton color='inherit' onClick={() => console.log('Logging out')}>
                        <Logout />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Drawer */}
            <Drawer
                anchor="left"
                open={open}
                onClose={() => toggleDrawer(false)}
            >
                <div
                    role="presentation"
                    onClick={() => toggleDrawer(false)}
                    onKeyDown={() => toggleDrawer(false)}
                    style={{ width: 250 }}
                >
                    <Typography variant="h6" sx={{ p: 2, textAlign: 'center', fontWeight: 'bold' }}>
                        Admin Menu
                    </Typography>
                    <Divider />
                    <List>
                        {/* Render menu items dynamically */}
                        {menuItems.map((item, index) => (
                            <ListItem 
                                button 
                                key={index} 
                                onClick={() => handleMenuItemClick(item.path)} 
                                sx={{ "&:hover": { bgcolor: "#f0f0f0" } }}
                            >
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
        </>
    );
}
