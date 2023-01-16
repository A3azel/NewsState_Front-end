import React, {useState} from 'react';
import {Paper, Typography} from "@mui/material";
import {Colors} from "../Styles/customColors";
import NewsCard from "../components/newsCard";
import axios from "axios";
import {useObserver} from "../services/useObserver";

const labelStyles = {
    color: Colors.selectedElement,
    fontFamily: 'Bold',
    marginBottom: 3,
    marginLeft: 2
}
const Newsfeed = () => {
    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);


    const downloadNewNews = (page) => {
        page -=1;
        const response = axios.get("http://localhost:8080/api/v1/default-news/get?page="+page)
        setNews([...news, ...response.data])
        setTotalPages(response.totalPages)
    }

    /*useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1);
    })*/

handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {downloadNewNews()}
  }

    return (
        <div>
            <Typography variant="h4"  sx={labelStyles}>
                Newsfeed
            </Typography>
            <Paper onScroll={this.handleScroll} style={{maxHeight: 800, overflow: 'auto', backgroundColor:Colors.bodyColor}}>
                {
                    this.state.news.map(
                        oneNews =>
                            <NewsCard news={oneNews}/>
                    )
                }
            </Paper>
        </div>
    );
};

export default Newsfeed;