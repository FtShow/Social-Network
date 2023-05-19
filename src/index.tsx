import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";


import {store} from "./Redux/Redux-Store";
import {Provider} from "react-redux";


export let rerenderEntreTree = (state: any) => {

    ReactDOM.render(
        <Provider store={store} >
            <App/>
        </Provider>,
    document.getElementById('root')
    );
}

rerenderEntreTree(store.getState())



// //БЫЛО
// ReactDOM.render(
//     <App state={state} addPost={addPost}/>,
//     document.getElementById("root")
// );