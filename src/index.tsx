import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";


import {store} from "./Redux/Redux-Store";


export let rerenderEntreTree = (state: any) =>{

    ReactDOM.render(
        <App
            state={state} dispatch={store.dispatch.bind(state)}
            />,
        document.getElementById("root")
    );
}

rerenderEntreTree(store.getState())

store.subscribe(()=>{
    rerenderEntreTree(store.getState())
})







// //БЫЛО
// ReactDOM.render(
//     <App state={state} addPost={addPost}/>,
//     document.getElementById("root")
// );