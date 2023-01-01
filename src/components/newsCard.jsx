import React from 'react';
import {Card, CardActionArea, CardMedia, Typography} from "@mui/material";
import Box from "@mui/material/Box";

const textBoxStyles = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.54)',
    color: 'white',
    padding: '10px'
}

const cardStyles = {
    maxWidth: 345,
    margin: '20px'
}
const NewsCard = () => {
    return (

        <Card sx={cardStyles}>
            <Box sx={{ position: 'relative' }}>
                <CardMedia
                    component="img"
                    height="150"
                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                />
                <Box sx={textBoxStyles} >
                    <CardActionArea>
                        <Typography variant="body1">Lizard</Typography>
                        <Typography variant="body2">Subtitle</Typography>
                    </CardActionArea>
                </Box>
            </Box>
        </Card>
    );
};

export default NewsCard;