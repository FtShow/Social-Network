import React, {Component} from "react";
import sLogin from "./LoginBlock.module.css"
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

export const LoginBlock = () => {

    return (
        <div className={sLogin.loginBlock}>
            <NavLink to={"/login"}>Login</NavLink>
        </div>
    )
}


