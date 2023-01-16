import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {Button, Container} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

import { Colors } from './../Styles/customColors.js';

const registrationURL = '/registration';
const loginURL = '/login';
const DrawerLoginNavigation = () => {
    const navigate = useNavigate();

    const buttonStyle = {
        color: Colors.customWhite,
        fontSize: 14,
        marginBottom: 2,
        fontFamily: 'Bold',
        "&:hover": {
            color: Colors.selectedElement
        }
    }


    return (
        <Container>
            <Button
                variant="text"
                onClick={() => navigate(loginURL)}
                startIcon={<AccountCircle/>}
                sx = {buttonStyle}
            >
                Вхід
            </Button>
            <Button
                variant="text"
                onClick={() => navigate(registrationURL)}
                sx = {buttonStyle}
            >
                Реєстрація
            </Button>
        </Container>
    );
};


export default DrawerLoginNavigation;