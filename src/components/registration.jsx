import React, {useState} from 'react';
import {alpha} from "@mui/material/styles";
import {Button,FormControlLabel,FormLabel,Grid,InputLabel,Paper, Radio, RadioGroup, TextField} from "@mui/material";

import LoginNavigation from "./loginNavigation";
import { Colors } from './../Styles/customColors.js';

const fieldStyles = {
    marginBottom: 2,
    marginLeft: '60px',
    width: '300px',
    '& label.Mui-focused': {
        color: Colors.selectedElement,
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: Colors.selectedElement,
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: Colors.customWhite,
        },
        '&:hover fieldset': {
            borderColor: Colors.selectedElement,
        },
        '&.Mui-focused fieldset': {
            boxShadow: `${alpha(Colors.selectedElement, 0.25)} 0 0 0 0.4rem`,
            borderColor: Colors.selectedElement,
        },
    },
    '& fieldset': {
        borderRadius: '15px',
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: Colors.customWhite
    },
};

const labelStyles = {
    color: Colors.customGray,
    fontsize: 10,
    marginBottom: '1px',
    fontFamily: 'Bold',
    marginLeft: '60px'
}

const buttonStyles = {
    backgroundColor : Colors.bodyColor,
    border: '2px solid #F0F0F0',
    borderRadius: '15px',
    width: '300px',
    "&:hover": {
        backgroundColor: Colors.customGray
    },
    "&& .MuiTouchRipple-child": {
        backgroundColor: Colors.bodyColor
    }
}

const paper = {
    position: "relative",
    margin: '100px 350px 100px 350px',
    paddingTop: '40px',
    paddingBottom: '100px',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: Colors.bodyColor,
    boxShadow: ".2px 12px 18px rgba(131,153,167,0.6)",
    "&:hover": {
        boxShadow: "0px 24px 36px rgba(131,153,167,0.99)"
    }
}

const formControlLabelStyles = {
    color: Colors.customWhite
}
const Registration = () => {
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[nickname, setNickname] = useState('');
    const[gender, setGender] = useState('male');
    const[email, setEmail] = useState('');
    const[phoneNumber, setPhoneNumber] = useState('');
    const[password, setPassword] = useState('');
    const[submittedPassword, setSubmittedPassword] = useState('');

    const[firstNameErrors, setFirstNameErrors] = useState(false);
    const[lastNameErrors, setLastNameErrors] = useState(false);
    const[nicknameErrors, setNicknameErrors] = useState(false);
    const[emailErrors, setEmailErrors] = useState(false);
    const[phoneNumberErrors, setPhoneNumberErrors] = useState(false);
    const[passwordErrors, setPasswordErrors] = useState(false);
    const[submittedPasswordErrors, setSubmittedPasswordErrors] = useState(false);


    const createRegistrationRequest = () => {
        console.log(firstName, lastName, nickname);
        console.log(gender, email, phoneNumber);
        console.log(password, submittedPassword);
    };

    return (
        <div>
            <Paper sx={paper}>
                <LoginNavigation/>
                <form>
                    <Grid container>
                        <Grid item xs={6}>
                            <InputLabel
                                shrink htmlFor="firstName"
                                sx = {labelStyles}
                            >
                                First name
                            </InputLabel>
                            <TextField
                                onChange={(e) => {
                                    setFirstName(e.target.value);
                                }}
                                id={"firstName"}
                                type={"text"}
                                placeholder="First name"
                                sx = {fieldStyles}
                                InputLabelProps={{shrink: false}}
                            />
                            <br/>
                        </Grid>

                        <Grid item xs={6}>
                            <InputLabel
                                shrink htmlFor="secondName"
                                sx = {labelStyles}
                            >
                                Last name
                            </InputLabel>
                            <TextField
                                onChange={(e) => {
                                    setLastName(e.target.value);
                                }}
                                id={"secondName"}
                                type={"text"}
                                placeholder="Last name"
                                sx = {fieldStyles}
                                InputLabelProps={{shrink: false}}
                            />
                            <br/>
                        </Grid>

                        <Grid item xs={6}>

                            <InputLabel
                                shrink htmlFor="nickname"
                                sx = {labelStyles}
                            >
                                Nickname
                            </InputLabel>
                            <TextField
                                onChange={(e) => {
                                    setNickname(e.target.value);
                                }}
                                id={"nickname"}
                                type={"text"}
                                placeholder="Nickname"
                                sx = {fieldStyles}
                                InputLabelProps={{shrink: false}}
                            />
                            <br/>
                        </Grid>

                        <Grid item xs={6}>
                            <InputLabel
                                shrink htmlFor="gender"
                                sx = {labelStyles}
                            >
                                Gender
                            </InputLabel>
                            <RadioGroup
                                value={gender}
                                onChange={e => {
                                    setGender(e.target.value);
                                }}
                                row
                                id={"gender"}
                                sx={{marginLeft:'60px'}}
                            >
                                <FormControlLabel sx={formControlLabelStyles} value="male" control={<Radio />} label="Male" />
                                <FormControlLabel sx={formControlLabelStyles} value="female" control={<Radio />} label="Female" />
                                <FormControlLabel sx={formControlLabelStyles} value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                            <br/>
                        </Grid>

                        <Grid item xs={6}>
                            <InputLabel
                                shrink htmlFor="email"
                                sx = {labelStyles}
                            >
                                Email
                            </InputLabel>
                            <TextField
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                id={"email"}
                                type={"email"}
                                placeholder="Email"
                                sx = {fieldStyles}
                                InputLabelProps={{shrink: false}}
                            />
                            <br/>
                        </Grid>

                        <Grid item xs={6}>
                            <InputLabel
                                shrink htmlFor="phoneNumber"
                                sx = {labelStyles}
                            >
                                Phone number
                            </InputLabel>
                            <TextField
                                onChange={(e) => {
                                    setPhoneNumber(e.target.value);
                                }}
                                id={"phoneNumber"}
                                type={"text"}
                                placeholder="Phone number"
                                sx = {fieldStyles}
                                InputLabelProps={{shrink: false}}
                            />
                            <br/>
                        </Grid>

                        <Grid item xs={6}>
                            <InputLabel
                                shrink htmlFor="password"
                                sx = {labelStyles}
                            >
                                Password
                            </InputLabel>
                            <TextField
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                id={"password"}
                                type={"password"}
                                placeholder="Password"
                                sx = {fieldStyles}
                                InputLabelProps={{shrink: false}}
                            />
                            <br/>
                        </Grid>

                        <Grid item xs={6}>
                            <InputLabel
                                shrink htmlFor="submitPassword"
                                sx = {labelStyles}
                            >
                                Submit password
                            </InputLabel>
                            <TextField
                                onChange={(e) => {
                                    setSubmittedPassword(e.target.value);
                                }}
                                id={"submitPassword"}
                                type={"password"}
                                placeholder="Submit password"
                                sx = {fieldStyles}
                                InputLabelProps={{shrink: false}}
                            />
                            <br/>
                        </Grid>
                    </Grid>
                </form>
                    <Button
                        onClick={createRegistrationRequest}
                        variant="contained"
                        sx={buttonStyles}
                    >
                        Зареєструватися
                    </Button>
            </Paper>
        </div>
    );
};

export default Registration;