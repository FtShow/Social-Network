import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import {addPost, state} from "./Redux/State";
import {rerenderEntreTree} from "./Redux/rerender";

debugger
rerenderEntreTree(state, addPost)




// //БЫЛО
// ReactDOM.render(
//     <App state={state} addPost={addPost}/>,
//     document.getElementById("root")
// );