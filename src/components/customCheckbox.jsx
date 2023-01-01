import React from 'react';
import {Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Typography} from "@mui/material";

const customWhite = '#F0F0F0';

const checkboxStyles = {
    color: customWhite,
    '&.Mui-checked': {
        color: customWhite,
    }
}

const checkboxLabelStyles = {
    color: customWhite,
    fontsize: 8,
    fontFamily: 'Bold',

}

/*Нужно убрать анимацию FormLabel, при нажатии на Checkbox текст FormLabel становиться синим*/
const CustomCheckbox = () => {
    return (
        <Grid container>
            <FormControl sx={{ m: 3 }}  component="fieldset" variant="standard">
                <FormLabel component="legend"  sx={{color: customWhite,
                    fontsize: 10,
                    margin: '10px',
                    fontFamily: 'Bold',
                }}>News:</FormLabel>
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox sx={checkboxStyles} name="gilad"  />
                        }
                        label={<Typography style={checkboxLabelStyles}>Work</Typography>}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox sx={checkboxStyles} name="jason" />
                        }
                        label={<Typography style={checkboxLabelStyles}>Jason Killian</Typography>}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox sx={checkboxStyles} name="antoine" />
                        }
                        label={<Typography style={checkboxLabelStyles}>Antoine Llorca</Typography>}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox sx={checkboxStyles} name="antoine" />
                        }
                        /*label={<Typography variant="h6" style={checkboxLabelStyles}>Jason Killian</Typography>}*/
                        label={<Typography style={checkboxLabelStyles}>Jason Killian</Typography>}
                    />
                </FormGroup>
                {/*<FormHelperText>Be careful</FormHelperText>*/}
            </FormControl>
        </Grid>

    );
};

export default CustomCheckbox;