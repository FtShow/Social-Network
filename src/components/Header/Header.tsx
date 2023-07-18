import React from "react";
import s from './Header.module.css'
import {LoginBlock} from "./LoginBlock/LoginBlock";

type HeaderType = {
    login: string,
    isAuth: boolean,
    logout: ()=>void
}

export const Header:React.FC<HeaderType> = ({login, isAuth, logout}) => {
    return (<header className={s.header}>
        <div className={s.headerWrap}>
            <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/myspace-512.png" alt="logo"/>
            {isAuth? <div>{login}<button onClick={logout}>logout</button></div>  : <LoginBlock/>}
        </div>
    </header>)
}