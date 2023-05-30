import React from "react";
import classes from "./styles/news.css"


export default function NewsPost(props){
    return(
        <div className="news-body">
            <div className="news-body_info">
                <a id={props.title} href="#" className="news-body_info-title">{props.title}</a>
                <a id={props.date} href="#" className="news-body_info-date">{props.date}</a>
                <a id={props.author} href="#" className="news-body_info-author">{props.author}</a>
            </div>
            <div className="news-body_content">
                <img id={props.photo_url} className="news-body_content-img" src={props.photo_url} alt="" />
                <a id={props.text} className="news-body_content-text">{props.text}</a>
            </div>
            
        </div>
        
    )
}

