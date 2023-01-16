import React, {useState} from 'react';
import {Button} from "@mui/material";

import { Colors } from './../Styles/customColors.js';

const LanguageChoice = () => {

    const [ua, setUA] = useState(true);
    const [eng, setENG] = useState(false);


    const active = {
        color: Colors.selectedElement,
        fontSize: 16,
        //marginBottom: 4,
        fontFamily: 'Regular'
    }

    const buttonStyle = {
        color: Colors.customWhite,
        fontSize: 16,
        //marginBottom: 4,
        fontFamily: 'Regular'
    }

    return (
        <div>
            <Button
                variant="text"
                onClick={() =>{
                    setENG(false)
                    setUA(true)
                } }
                sx = {ua ? active : buttonStyle}
            >
                UA
            </Button>
            <Button
                variant="text"
                onClick={() =>{
                    setENG(true)
                    setUA(false)
                } }
                sx = {eng ? active : buttonStyle}
            >
                ENG
            </Button>
        </div>
    );
};

export default LanguageChoice;