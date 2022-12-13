import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

import './header.css';

export function Header(props) {
    const [theme, setTheme] = useState('dark-mode');

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const toggle = () => {
        if (theme === "dark-mode") {
            setTheme('light-mode');
        } else {
            setTheme('dark-mode');
        }
    }
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav">
                <Toolbar className='icon-bar'>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', fontWeight: 'bolder', color: 'lightgreen' } }}
                    >
                        Cricbuzz
                    </Typography>
                    <Box className='nav-links' sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button sx={{ color: '#fff' }}><ul><li><NavLink to="/" end id="Link" style={{ textDecoration: "none" }}>Dashboard</NavLink></li></ul></Button>
                        <Button sx={{ color: '#fff' }}><ul><li><NavLink to="charts" id="Link" >Charts</NavLink></li></ul></Button>
                        <Button sx={{ color: '#fff' }}><ul><li><NavLink to="table" id="Link">Table</NavLink></li></ul></Button>
                        <Button sx={{ color: '#fff' }}><ul><li><NavLink to="news" id="Link">News</NavLink></li></ul></Button>
                        <Button sx={{ color: '#fff' }}><ul><li><NavLink to="login" id="Link">Login</NavLink></li></ul></Button>
                        <Button sx={{ color: '#fff' }}><ul><li><NavLink to="contactUs" id="Link">Contact Us</NavLink></li></ul></Button>
                        <Button sx={{ color: '#fff' }} className="btn" onClick={() => toggle()}><i class="fa-solid fa-moon"></i></Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}