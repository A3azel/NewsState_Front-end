import React, {Component} from 'react';
import {Button, InputLabel, Paper, TextField} from "@mui/material";
import LoginNavigation from "./loginNavigation";
import {alpha} from "@mui/material/styles";
import {isEmail} from "validator";
import AuthService from "../services2_0/authService";


const bodyColor = '#202124';
const selectedElement = '#309CDD';
const customWhite = '#F0F0F0';
const customGray = '#979797';

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

const validEmail = value => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

const validPassword = value => {
    if (value.length < 8 || value.length > 64) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};



const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeLogin = this.onChangeLogin.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            login: "",
            password: "",
            loading: false,
            message: ""
        };
    }

    onChangeLogin(e) {
        this.setState({
            login: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({
            message: "",
            loading: true
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            AuthService.login(this.state.login, this.state.password).then(
                () => {
                    this.props.router.navigate("/profile");
                    window.location.reload();
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        loading: false,
                        message: resMessage
                    });
                }
            );
        } else {
            this.setState({
                loading: false
            });
        }
    }

    render() {
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
                            value={this.state.login}
                            onChange={this.onChangeLogin}
                            validations={[required]}
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
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            validations={[required]}
                            id={"password"}
                            type={"password"}
                            placeholder="Password"
                            sx = {fieldStyles}
                            InputLabelProps={{shrink: false}}
                        />
                        <br/>
                        <Button
                            onClick={this.handleLogin}
                            disabled={this.state.login.length === 0 && this.state.password.length === 0}
                            variant="contained"
                            sx={buttonStyles}
                        >
                            Login
                        </Button>
                    </form>
                </Paper>
            </div>
        );
    }
}


