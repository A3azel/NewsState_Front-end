import React, {useState} from 'react';
import {Button, InputLabel, Paper, TextField} from "@mui/material";
import LoginNavigation from "./loginNavigation";
import {alpha} from "@mui/material/styles";
import {authenticateUser} from "../services/user/auth/authActions";
import {useDispatch} from "react-redux";

const bodyColor = '#202124';
const selectedElement = '#309CDD';
const customWhite = '#F0F0F0';
const customGray = '#979797';

const Login = (props) => {
   /* const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const[emailErrors, setEmailErrors] = useState(false);
    const[passwordErrors, setPasswordErrors] = useState(false);*/

    const [error, setError] = useState();
    const [show, setShow] = useState(true);

    const initialState = {
        email: "",
        password: "",
    };

    const [user, setUser] = useState(initialState);

    const credentialChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const dispatch = useDispatch();

    const validateUser = () => {
        dispatch(authenticateUser(user.email, user.password))
            .then((response) => {
                console.log(response.data);
                return props.history.push("/home");
            })
            .catch((error) => {
                console.log(error.message);
                setShow(true);
                resetLoginForm();
                setError("Invalid email and password");
            });
    };

    const resetLoginForm = () => {
        setUser(initialState);
    };





    const fieldStyles = {
        marginBottom: 2,
        width: '300px',
        '& label.Mui-focused': {
            color: selectedElement,
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: selectedElement,
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: customWhite,
            },
            '&:hover fieldset': {
                borderColor: selectedElement,
            },
            '&.Mui-focused fieldset': {
                boxShadow: `${alpha(selectedElement, 0.25)} 0 0 0 0.4rem`,
                borderColor: selectedElement,
            },
        },
        '& fieldset': {
            borderRadius: '15px',
        },
        '& .MuiInputBase-input': {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: customWhite
        }
    };

    const labelStyles = {
        color: customGray,
        fontsize: 10,
        marginBottom: '1px',
        fontFamily: 'Bold',
    }

    const buttonStyles = {
        backgroundColor : bodyColor,
        border: '2px solid #F0F0F0',
        borderRadius: '15px',
        width: '300px',
        "&:hover": {
            backgroundColor: customGray
        },
        "&& .MuiTouchRipple-child": {
            backgroundColor: bodyColor
        }
    }

    const paper = {
        position: "relative",
        margin: '100px 350px 100px 350px',
        paddingTop: '100px',
        paddingBottom: '100px',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: bodyColor,
        boxShadow: ".2px 12px 18px rgba(131,153,167,0.6)",
        "&:hover": {
            boxShadow: "0px 24px 36px rgba(131,153,167,0.99)"
        }
    }

    /*const createLoginRequest = (e) =>{
        e.preventDefault();
        console.log(email, password);
    }*/

    return (
        <div>
            <Paper sx={paper}>
                <LoginNavigation/>
                <form>
                    <InputLabel
                        shrink htmlFor="email"
                        sx = {labelStyles}
                    >
                        Email
                    </InputLabel>
                    <TextField
                        value={user.email}
                        onChange={credentialChange}
                        id={"email"}
                        type={"email"}
                        placeholder="Email"
                        sx = {fieldStyles}
                        InputLabelProps={{shrink: false}}
                    />
                    <br/>

                    <InputLabel
                        shrink htmlFor="password"
                        sx = {labelStyles}
                    >
                        Password
                    </InputLabel>
                    <TextField
                        value={user.password}
                        onChange={credentialChange}
                        id={"password"}
                        type={"password"}
                        placeholder="Password"
                        sx = {fieldStyles}
                        InputLabelProps={{shrink: false}}
                        /*InputProps={{
                            endAdornment: (
                                <InputAdornment
                                    position="end">
                                    <RemoveRedEyeIcon
                                        fontSize="default"
                                        /!*className={classes.passwordEye}
                                        onClick={this.showPassword}*!/
                                    />
                                </InputAdornment>
                            ),
                        }}*/
                    />
                    <br/>
                    <Button
                        onClick={resetLoginForm}
                        disabled={user.email.length === 0 && user.password.length === 0}
                        variant="contained"
                        sx={buttonStyles}
                    >
                        Login
                    </Button>
                </form>
            </Paper>
        </div>
    );
};

export default Login;