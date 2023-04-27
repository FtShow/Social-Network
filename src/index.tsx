import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import {store, subscriber} from "./Redux/State";


export let rerenderEntreTree = (
) =>{

    ReactDOM.render(
        <App
             subscriber={store.subscriber}
             _state={store._state}
             addPost={store.addPost}
             changeNewPostText={store.changeNewPostText}
             getState={store.getState}


            />,
        document.getElementById("root")
    );
}

rerenderEntreTree()
subscriber(rerenderEntreTree)







// //БЫЛО
// ReactDOM.render(
//     <App state={state} addPost={addPost}/>,
//     document.getElementById("root")
// );