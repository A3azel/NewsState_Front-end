import React from 'react';
import NewsCard from "./newsCard";
import {Paper, Typography} from "@mui/material";

const selectedElement = '#309CDD';

const labelStyles = {
    color: selectedElement,
    fontFamily: 'Bold',
    /*Еквивалентно marginBottom: 30px*/
    marginBottom: 3,
    marginLeft: 2
}
const Newsfeed = () => {
    return (
        <div>
            <Typography variant="h4"  sx={labelStyles}>
                Newsfeed
            </Typography>
            {/*Сюда прикрутим observer когда будем делать запросы на сервер*/}
            {/*Пока в роли заглушки сгодиться*/}
            <Paper style={{maxHeight: 800, overflow: 'auto'}}>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
            </Paper>

        </div>
    );
};

export default Newsfeed;