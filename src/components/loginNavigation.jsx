import React from 'react';
import {Button, Typography} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";

const selectedElement = '#309CDD';
const customWhite = '#F0F0F0';

const registrationURL = '/registration';
const loginURL = '/login';
const LoginNavigation = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const active = {
        color: selectedElement,
        fontSize: 28,
        marginBottom: 4,
        fontFamily: 'Bold'
    }

    const buttonStyle = {
        color: customWhite,
        fontSize: 28,
        //fontWeight: '300px',
        marginBottom: 4,
        fontFamily: 'Bold'
    }


    return (
        <div>
            <Button
                variant="text"
                onClick={() => navigate(registrationURL)}
                sx = {location.pathname === registrationURL ? active : buttonStyle}
            >
                Реєстрація
            </Button>
            <Button
                variant="text"
                onClick={() => navigate(loginURL)}
                sx = {location.pathname === loginURL ? active : buttonStyle}
            >
                Авторизація
            </Button>
        </div>
    );
};

export default LoginNavigation;