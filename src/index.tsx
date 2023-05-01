import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";


import {store} from "./Redux/State";


export let rerenderEntreTree = (
) =>{

    ReactDOM.render(
        <App
             store={store}
            />,
        document.getElementById("root")
    );
}

rerenderEntreTree()
store.subscriber(rerenderEntreTree)







// //БЫЛО
// ReactDOM.render(
//     <App state={state} addPost={addPost}/>,
//     document.getElementById("root")
// );