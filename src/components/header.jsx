import React from 'react';
import {Button,Typography,Toolbar,IconButton} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import {AccountCircle } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {styled} from "@mui/material/styles";

import LanguageChoice from "./ languageChoice";
import { Colors } from './../Styles/customColors.js';

const drawerWidth = 360;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
const AppHeader = ({open, handleDrawerOpen}) => {
    return (
        <AppBar position="fixed" open={open}
                sx={{backgroundColor : Colors.bodyColor}}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{ mr: 2, ...(open && { display: 'none' }) }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    NewsState
                </Typography>
                <LanguageChoice/>
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
    );
};

export default AppHeader;