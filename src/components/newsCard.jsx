import React from 'react';
import {Button, Card, CardActionArea, CardMedia, Link, Typography} from "@mui/material";
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
    maxWidth: 400,
    margin: '20px'
}

const NewsCard = ({news}) => {
    console.log(news.imageLink);
    return (
        <Card sx={cardStyles}>
            <Box sx={{ position: 'relative' }}>
                <CardMedia
                    component="img"
                    height="200px"
                    width="100%"
                    image={news.imageLink}
                />
                <Box sx={textBoxStyles} >
                    <CardActionArea href={news.link}>
                        <Typography variant="body1">{news.title}</Typography>
                        <Typography variant="body2">{news.newsInfo}</Typography>
                    </CardActionArea>
                </Box>
            </Box>
        </Card>
    );
};

export default NewsCard;