import React from "react";
import {NavBar} from "./NavBar";
import {Profile} from "./Profile";

export const MainSection = () => {
    return (
        <div className="main-section">
            <NavBar/>
            <Profile/>
        </div>
    )
}