import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {Button, Container} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

const customWhite = '#F0F0F0';

const registrationURL = '/registration';
const loginURL = '/login';
const DrawerLoginNavigation = () => {
    const navigate = useNavigate();

    const buttonStyle = {
        color: customWhite,
        fontSize: 14,
        //fontWeight: '300px',
        marginBottom: 2,
        fontFamily: 'Bold'
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