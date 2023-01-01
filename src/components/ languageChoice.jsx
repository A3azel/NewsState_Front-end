import React, {useState} from 'react';
import {Button} from "@mui/material";

const selectedElement = '#309CDD';
const customWhite = '#F0F0F0';



const LanguageChoice = () => {

    const [ua, setUA] = useState(true);
    const [eng, setENG] = useState(false);


    const active = {
        color: selectedElement,
        fontSize: 16,
        //marginBottom: 4,
        fontFamily: 'Regular'
    }

    const buttonStyle = {
        color: customWhite,
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