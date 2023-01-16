import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import {Paper, Grid, CssBaseline, Box, Stack} from "@mui/material";

import AppHeader from "./header";
import AppDrawer from "./drawer";
import GoogleMapComponent from './googleMap';
import Newsfeed from "./newsfeed";
import Links from "./links";
import SearchButton from "./searchButton";
import { Colors } from '../Styles/customColors';

const drawerWidth = 360;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const paper = {
    position: "relative",
    paddingTop: '30px',
    paddingBottom: '100px',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: Colors.bodyColor,

}

export default function NewsPage() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        /*<Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppHeader open={open} handleDrawerOpen={handleDrawerOpen}/>
            <AppDrawer theme={theme} open={open} handleDrawerClose={handleDrawerClose}/>
            <Main open={open}>
                <DrawerHeader />
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                    enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                    imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                    Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                    Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                    nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                    leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                    feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                    consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                    sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                    eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                    neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                    tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                    sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                    tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                    gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                    et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                    tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                    eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                    posuere sollicitudin aliquam ultrices sagittis orci a.
                </Typography>
            </Main>
        </Box>*/
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppHeader open={open} handleDrawerOpen={handleDrawerOpen}/>
        <AppDrawer theme={theme} open={open} handleDrawerClose={handleDrawerClose}/>
        <Main open={open}>
        <DrawerHeader />           
        <Paper sx={paper}>
        <Grid container justifyContent="center" alignItems="flex-start" spacing={2}>
        <Grid item xs={6} md={7}>
        <GoogleMapComponent />
        <Grid container justifyContent="space-between" alignItems="baseline" spacing={2}>
        <Grid item xs={9} md={9}>
        <Links />
        </Grid>
        <Grid item xs md>
        <SearchButton />
        </Grid>
        </Grid>
        </Grid>
        <Grid item xs="auto" md={4}>
        <Newsfeed/>
        </Grid>   
        </Grid>
        </Paper>
        </Main>
        </Box>
        );
}




