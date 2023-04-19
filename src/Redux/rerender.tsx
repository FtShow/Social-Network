import React from "react";
import ReactDOM from "react-dom";
import "../index.css";
import App from "../App";
import {stateType} from "./State";

export let rerenderEntreTree = (state: stateType, addPost:(v:string)=>void) =>{
    ReactDOM.render(
        <App state={state} addPost={addPost}/>,
        document.getElementById("root")
    );
}