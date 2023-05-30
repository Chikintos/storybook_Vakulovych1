import React from "react";
import classes from "./styles/time.css"


export default function getTime(props){
    return(
        <div className="time-body" style={{backgroundColor:props.time_color}}>
            <a>current time = {props.current_time}</a>
            <a>current date = {props.current_date}</a>
            <a>time zone = {props.time_zone}</a>
            <a>sunset time = {props.sunset_time}</a>

        </div>
    )
}

