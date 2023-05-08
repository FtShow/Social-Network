import {NavLink} from "react-router-dom";
import React from "react";
import {dialogsItemType} from "../../../Redux/Store";

export const DialogItem: React.FC<dialogsItemType> = (props) => {
    return (
        <li><NavLink to={`/Dialogs/${props.id}`} ><img src={props.avatar} alt=""/><span>{props.name}</span></NavLink></li>
    )
}