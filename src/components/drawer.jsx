import * as React from 'react';
import {useState} from 'react';
import {alpha, styled} from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {Button, Container, FormControlLabel, Grid, InputAdornment, TextField, Typography} from "@mui/material";
import CustomCheckbox from "./customCheckbox";
import DrawerLoginNavigation from "./drawerLoginNavigation";

import {Colors} from './../Styles/customColors.js';

/* Все константы в отдельные js файлы под каждый компонент*/
/* Общие константы по  типу размера и цветов также в отдельный js файл*/
const drawerWidth = 360;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const fieldStyles = {
    margin:'20px',
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

const buttonStyles = {
    backgroundColor : Colors.bodyColor,
    margin: '20px',
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

const typographyStyles = {
    color: Colors.customWhite,
    fontsize: 10,
    margin: '10px',
    fontFamily: 'Bold',
}



export default function AppDrawer({theme, open, handleDrawerClose}) {
    const[query, setQuery] = useState('');

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}

            PaperProps={{
                sx: {
                    backgroundColor: Colors.customBackgroundColor
                }
            }}
            variant="persistent"
            anchor="left"
            open={open}

        >
            <DrawerHeader sx={{backgroundColor: Colors.bodyColor}}>
                <Typography
                    variant="h6"
                    component="div"
                    sx={
                    {
                        flexGrow: 1 ,
                        color: Colors.customWhite
                    }
                }>
                    NewsState
                </Typography>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <DrawerHeader sx={{backgroundColor: Colors.bodyColor}}>
                <Container>
                    <DrawerLoginNavigation/>
                </Container>

            </DrawerHeader>
            <Divider />
            <TextField
                onChange={(e) => {
                    setQuery(e.target.value);
                }}
                type={"text"}
                placeholder="Search..."
                /*InputProps={{
                    startAdornment: (
                        <InputAdornment sx={{backgroundColor: Colors.customWhite}} position="start">
                            <TravelExploreIcon />
                        </InputAdornment>
                    ),
                }}*/
                sx = {fieldStyles}
                InputLabelProps={{shrink: false}}
            />

           {/*<Grid container spacing={0}>
                <Grid item xs={12}>
                    <FormControlLabel
                        label="Country, City"
                        labelPlacement="start"
                        sx={{color: Colors.customWhite}}
                        control={
                            <TextField variant="standard"
                                       sx={{
                                           '& .MuiInput-underline:before': { borderBottomColor: Colors.customGray },
                                           '& .MuiInput-underline:after': { borderBottomColor: Colors.customGray },
                                           input: { color: Colors.customWhite },
                                           paddingLeft: '20px'
                                       }}
                            />
                        }
                    />
                </Grid>
            </Grid>

            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <FormControlLabel
                        label="Key words "
                        labelPlacement="start"
                        sx={{color: Colors.customWhite}}
                        control={
                            <TextField variant="standard"
                                       multiline
                                       sx={{
                                           '& .MuiInput-underline:before': { borderBottomColor: Colors.customGray },
                                           '& .MuiInput-underline:after': { borderBottomColor: Colors.customGray },
                                           textarea: { color: Colors.customWhite },
                                           paddingLeft: '20px'
                                       }}
                            />
                        }
                    />
                </Grid>
            </Grid>
            <hr/>

            
            Использовать либо этот, либо верхний вариант
            Если выбрал этото но необходимо прменять цвет InputAdornment на белый
            как это сделать я не нашёл но предполагаю что это возможно
            
            <TextField variant="standard"
                       fullWidth
                       InputProps={{
                           startAdornment: (<InputAdornment
                               position="start"
                               sx = {{
                                   color: Colors.customWhite
                               }}
                           >Country, City</InputAdornment>)
                       }}
                       sx={{
                           '& .MuiInput-underline:before': { borderBottomColor: Colors.customGray },
                           '& .MuiInput-underline:after': { borderBottomColor: Colors.customGray },
                           input: { color: Colors.customWhite }
                       }}
            />
            <TextField variant="standard"
                       fullWidth
                       multiline
                       InputProps={{
                           startAdornment: (<InputAdornment position="start">Key words</InputAdornment>)
                       }}
                       sx={{
                           '& .MuiInput-underline:before': { borderBottomColor: Colors.customGray },
                           '& .MuiInput-underline:after': { borderBottomColor: Colors.customGray },
                           input: { color: Colors.customWhite }
                       }}
            />
            <hr/>*/}


           {/*<Typography sx={ typographyStyles } >
               News:
           </Typography>*/}
            <CustomCheckbox/>
            <CustomCheckbox/>
            <CustomCheckbox/>

            <Button
                variant="contained"
                sx={buttonStyles}
            >
                Search
            </Button>

            {/*Примеры кнопок, в дизайне их нет но пока пусть полежат закоментироваными*/}

            {/*<List >
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding >
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List >
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>*/}
        </Drawer>
    );
}