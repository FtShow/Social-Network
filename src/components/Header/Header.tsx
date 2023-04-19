import React from "react";
import s from './Header.module.css'

export const Header = () => {
    return (<header className={s.header}>
        <div className={s.headerWrap}>
            <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/myspace-512.png" alt="logo"/>
        </div>
    </header>)
}