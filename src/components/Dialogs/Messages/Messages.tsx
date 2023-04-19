import React from "react";
import {textMessageItemType} from "../../../Redux/State";
import s from '../Dialogs.module.css'


export const MessageText:React.FC<textMessageItemType> = (props) =>{
    console.log(props)
    return(
        <span  className={props.yourMessage? s.youMessage: ''} key={props.id}>{props.text}</span>
    )
}