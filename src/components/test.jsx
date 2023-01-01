import * as React from 'react';
import {alpha, styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import LoginNavigation from "./loginNavigation";

const selectedElement = '#309CDD';
const customWhite = '#F0F0F0';
const customGray = '#979797';

/*const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'green',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'red',
        },
        '&:hover fieldset': {
            borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
    },
});*/

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
        border: '1px solid #ced4da',
        fontSize: 16,
        width: 'auto',
        padding: '10px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}));

const BootstrapInputNew = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: '15px',
        //position: 'relative',
        backgroundColor: customWhite,
        borderColor: customGray,
        border: '1px solid #F0F0F0',
        fontSize: 16,
        width: '300px',
        padding: '10px 12px',
        marginBottom: 2,
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        fontFamily: 'Bold',
        '&:focus': {
            boxShadow: `${alpha(selectedElement, 0.25)} 0 0 0 0.4rem`,
            borderColor: selectedElement,
        },

    },
}));

const BootstrapInput2 = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: 25,
    },
    '& .MuiInputBase-input': {
        borderRadius: '15px',
        width: '300px',
        height: '30px',
        position: 'relative',
        backgroundColor: customWhite,
        borderColor: customGray,
        border: '1px solid #F0F0F0',
        fontSize: 16,
        /*transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),*/
        fontFamily: 'Bold',
        '&:focus': {
            boxShadow: `${alpha(selectedElement, 0.25)} 0 0 0 0.4rem`,
            borderColor: selectedElement,
        },

    },
}));

/*const RedditTextField = styled((props) => (
    <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
    '& .MuiFilledInput-root': {
        border: '1px solid #e2e2e1',
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        '&:hover': {
            backgroundColor: 'transparent',
        },
        '&.Mui-focused': {
            backgroundColor: 'transparent',
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: theme.palette.primary.main,
        },
    },
}));*/

/*
const ValidationTextField = styled(TextField)({
    '& input:valid + fieldset': {
        borderColor: 'green',
        borderWidth: 2,
    },
    '& input:invalid + fieldset': {
        borderColor: 'red',
        borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
        borderLeftWidth: 6,
        padding: '4px !important', // override inline-style
    },
});
*/

export default function CustomizedInputs() {
    return (
        <div>
            <LoginNavigation/>
            <Box

                component="form"
                noValidate
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { sm: '1fr 1fr' },
                    gap: 2,
                }}
            >
                <FormControl variant="standard">
                    <InputLabel shrink htmlFor="bootstrap-input">
                        Bootstrap
                    </InputLabel>
                    <BootstrapInput defaultValue="react-bootstrap" id="bootstrap-input" />
                </FormControl>

                <FormControl variant="standard">
                    <InputLabel shrink htmlFor="bootstrap-input2">
                        Bootstrap
                    </InputLabel>
                    <BootstrapInput2 defaultValue="react-bootstrap2" id="bootstrap-input2" />
                </FormControl>
                {/*<RedditTextField
                label="Reddit"
                defaultValue="react-reddit"
                id="reddit-input"
                variant="filled"
                style={{ marginTop: 11 }}
            />
            <CssTextField label="Custom CSS" id="custom-css-outlined-input" />
            <ValidationTextField
                label="CSS validation style"
                required
                variant="outlined"
                defaultValue="Success"
                id="validation-outlined-input"
            />*/}
            </Box>
        </div>

    );
}
