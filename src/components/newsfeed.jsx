import React, {Component} from 'react';
import {Paper, Typography} from "@mui/material";
import {Link} from 'react-router-dom';

import NewsCard from "./newsCard";
import { Colors } from '../Styles/customColors';
import axios from "axios";

const labelStyles = {
    color: Colors.selectedElement,
    fontFamily: 'Bold',
    /*Еквивалентно marginBottom: 30px*/
    marginBottom: 3,
    marginLeft: 2
}
export default class Newsfeed extends Component{

    constructor(props) {
        super(props);

        this.state = {
            news: [], currentNewsPage: 1
        }
    }

    componentDidMount() {
        this.findActualNews(this.state.currentNewsPage);
    }
//this.setState({ myArray: [...this.state.myArray, 'new value'] })
    findActualNews(currentNewsPage){
        currentNewsPage -=1;
        axios.get("http://localhost:8080/api/v1/default-news/actual?page="+currentNewsPage)
            .then((res) => {
                this.setState({news: res.data.content})
            }).catch(function (ex) {
                console.log('Response parsing failed. Error: ', ex);
            });;
    }

handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
        axios.get("http://localhost:8080/api/v1/default-news/actual?page="+10)
            .then((res) => {               
                 this.setState({
                    news: this.state.news.concat(res.data.content)});
            })
    }
  }

    render() {
        return (
             <div>
                 <Typography variant="h4"  sx={labelStyles}>
                     Newsfeed
                 </Typography>
                 <Paper id="newsfeed" onScroll={this.handleScroll} style={{maxHeight: 800, overflow: 'auto', backgroundColor:Colors.bodyColor}}>
                     {
                        this.state.news.map(oneNews =>
                        <NewsCard news={oneNews}/>                             
                        )
                     }
                 </Paper>
             </div>
        );
    }
}
