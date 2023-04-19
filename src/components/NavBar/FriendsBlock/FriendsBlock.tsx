import s from "../NavBar.module.css";
import React from "react";
import {ItemFriends} from "./friendsIblockItem/ItemFriends";
export const FriendsBlock = () =>{
    return (
        <div className={s.friendsBlock}>
            <ItemFriends/>
            <ItemFriends/>
            <ItemFriends/>
            <ItemFriends/>
            <ItemFriends/>
            <ItemFriends/>
        </div>
    )
}
