import React from "react";
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import {FriendsBlock} from "./FriendsBlock/FriendsBlock";
export const NavBar = () => {
    return(
        <div className={s.navBar}>
            <ul>
                <li><NavLink to="/Profile" activeClassName={s.active}>Profile</NavLink></li>
                <li><NavLink to="/Dialogs" activeClassName={s.active}>Messages</NavLink></li>
                <li><NavLink to="/News" activeClassName={s.active}>News</NavLink></li>
                <li><NavLink to="/Music" activeClassName={s.active}>Music</NavLink></li>
                <li><NavLink to="/Users" activeClassName={s.active}>UsersFn</NavLink></li>
                <li><NavLink to="/Settings" activeClassName={s.active}>Settings</NavLink></li>
            </ul>
            <FriendsBlock/>
        </div>
    )
}