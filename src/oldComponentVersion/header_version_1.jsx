import React from 'react';
import {AppBar, Button, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import LanguageChoice from "../components/ languageChoice";
import AccountCircle from '@mui/icons-material/AccountCircle';

const bodyColor = '#202124';
const Header_version_1 = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static"
                sx={{backgroundColor : bodyColor}}
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        NewsState
                    </Typography>
                    <LanguageChoice/>
                    <Button color="inherit">Login</Button>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header_version_1;